import React, { useState } from 'react';
import { useItemContext } from '../context/ItemContext';
import EditItemForm from './EditItemForm';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
  const { dispatch } = useItemContext();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    dispatch({ type: 'DELETE_ITEM', payload: item.id });
  };

  const closeEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="item-detail">
      {isEditing ? (
        <EditItemForm item={item} closeEdit={closeEdit} />
      ) : (
        <>
          <h2>{item.title}</h2>
          <p>ALBUM {item.albumId}</p>
          <img src={item.thumbnailUrl} alt={item.title}/>
          <Link to={`/item/${item.id}`}>SHOW DETAILS</Link>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}

    </div>
  );
};

export default ItemDetail;
