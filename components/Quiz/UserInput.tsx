import React, { FC, useState } from 'react';
import { PlayerData } from '../../types';

const UserInput: FC<{ data: PlayerData[] }> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  let counter = 0;
  const filteredNames = searchTerm
    ? data.filter((item) => {
        if (counter >= 20) return false;
        const fullName = item.name.toLowerCase();
        const searchQuery = searchTerm.toLowerCase();

        // Check if either the first or last name matches the search term
        const isMatch =
          fullName.includes(searchQuery) ||
          fullName.split(' ')[1].includes(searchQuery);
        if (isMatch) counter++;
        return isMatch;
      })
    : [];

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSearchTerm(event.target.value);
    counter = 0;
  };

  const handlePlayerSelect: React.MouseEventHandler<HTMLUListElement> = (
    event
  ) => {
    const target = event.target as HTMLLIElement;
    const targetId = target.id;
    console.log(targetId);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearchChange} />
      {filteredNames.length > 0 && (
        <ul onClick={handlePlayerSelect}>
          {filteredNames.map((item) => (
            <li key={item.id} role="button" id={item.id.toString()}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserInput;
