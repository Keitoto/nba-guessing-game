import React, { FC, useState } from 'react';
import { PlayerData } from '../../types';

const UserInput: FC<{ data: PlayerData[] }> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredNames = searchTerm
    ? data.filter((item) => {
        const fullName = item.name.toLowerCase();
        const searchQuery = searchTerm.toLowerCase();

        // Check if either the first or last name matches the search term
        const isMatch =
          fullName.includes(searchQuery) ||
          fullName.split(' ')[1].includes(searchQuery);

        return isMatch;
      })
    : [];

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearchChange} />
      {filteredNames.length > 0 && (
        <ul>
          {filteredNames.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserInput;
