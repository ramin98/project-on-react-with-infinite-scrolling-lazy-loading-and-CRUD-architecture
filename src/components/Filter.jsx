import React, { memo, useCallback } from 'react';
import { useItemContext } from '../context/ItemContext';

const Filter = memo(() => {
  const { dispatch, state } = useItemContext();
  let albums = [...new Set([...state.items.map(item => item.albumId)])]

  const handleFilter = useCallback((ev) => {
    dispatch({ type: 'FILTER_ITEMS', payload: parseInt(ev.target.value) });
  }, [dispatch]);

  return (
    <div>
      <label htmlFor="albumFilter">Filter by album ID</label>
      <select id='albumFilter' onChange={handleFilter}>
        {
          albums.map((item, index) => <option key={index} value={item}>{item}</option>)
        }
      </select>
    </div>
  );
});

export default Filter;


