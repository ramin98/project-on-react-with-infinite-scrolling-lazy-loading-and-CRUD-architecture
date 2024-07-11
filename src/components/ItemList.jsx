import React, { useEffect, useCallback, useRef, useMemo } from 'react';
import { useItemContext } from '../context/ItemContext';
import axios from 'axios';
import ItemDetail from './ItemDetail';

const ItemList = () => {
  const { state, dispatch } = useItemContext();
  const { displayedItems, loading, error, items } = state;
  const loader = useRef(null);

  const fetchItems = async () => {
    dispatch({ type: 'FETCH_ITEMS_REQUEST' });
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos'); 
      dispatch({ type: 'FETCH_ITEMS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_ITEMS_FAILURE', payload: error.message });
    }
  };

  const fetchMoreItems = useCallback(() => {
    if (loading || items.length === displayedItems.length) return;

    dispatch({ type: 'FETCH_MORE_ITEMS' });
  }, [loading, items.length, displayedItems.length, dispatch]);

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          fetchMoreItems();
        }
      },
      { threshold: 1 }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [fetchMoreItems]);

  const memoizedDisplayedItems = useMemo(() => displayedItems, [displayedItems]);

  if (loading && memoizedDisplayedItems.length === 0) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="item-list">
        {memoizedDisplayedItems.map((item) => (
          <ItemDetail key={item.id} item={item} />
        ))}
      </div>
      {loading && <div>Loading...</div>}
    </>
  );
};

export default ItemList;
