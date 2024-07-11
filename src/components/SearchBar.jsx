import React, { useState, useMemo } from 'react';
import { useItemContext } from '../context/ItemContext';

const SearchBar = () => {
  const { dispatch } = useItemContext();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    dispatch({ type: 'FILTER_ITEMS', payload: e.target.value });
  };

  const memoizedSearchTerm = useMemo(() => searchTerm, [searchTerm]);

  return (
    <input
      type="text"
      value={memoizedSearchTerm}
      onChange={handleSearch}
      placeholder="Search"
    />
  );
};

export default SearchBar;
