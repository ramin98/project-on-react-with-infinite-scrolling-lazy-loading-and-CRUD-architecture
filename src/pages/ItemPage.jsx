import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useItemContext } from '../context/ItemContext';

const ItemPage = () => {
  const { id } = useParams();
  const { state } = useItemContext();
  const item = state.items.find(item => item.id === parseInt(id));

  if (!item) return <div>Element Not Found</div>;

  return (
    <div>
      <Link to="/">GO BACK TO LIST</Link>
      <h2>{item.title}</h2>
      <img src={item.thumbnailUrl} alt={item.title} />
    </div>
  );
};

export default ItemPage;
