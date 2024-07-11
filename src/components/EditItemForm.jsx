import React, { useState } from 'react';
import { useItemContext } from '../context/ItemContext';

const EditItemForm = ({ item, closeEdit }) => {
  const { dispatch } = useItemContext();
  const [title, setTitle] = useState(item.title);
  const [thumbnailUrl, setThumbnailUrl] = useState(item.thumbnailUrl);
  const [url, setUrl] = useState(item.url);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItem = {
      ...item,
      title,
      thumbnailUrl,
       url
    };
    dispatch({ type: 'UPDATE_ITEM', payload: updatedItem });
    closeEdit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="title" 
        required 
      />
      <input
        value={thumbnailUrl}
        onChange={(e) => setThumbnailUrl(e.target.value)}
        placeholder="photo"
        required
      />
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="second - photo"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditItemForm;
