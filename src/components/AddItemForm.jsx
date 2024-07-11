import React, { useState } from "react";
import { useItemContext } from "../context/ItemContext";

const AddItemForm = () => {
  const { dispatch } = useItemContext();
  const [title, setTitle] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [url, setUrl] = useState("");
  const [albumId, setAlbumId] = useState("");

  let { state } = useItemContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      title,
      id: state.items.length + 1,
      url,
      albumId,
      thumbnailUrl,
    };
    dispatch({ type: "ADD_ITEM", payload: newItem });
    setTitle("");
    setAlbumId("");
    setThumbnailUrl("");
    setUrl("");
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
        value={albumId}
        onChange={(e) => setAlbumId(e.target.value)}
        placeholder="album"
        required
      />
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="second - photo"
        required
      />
      <button type="submit">ADD ELEMENT</button>
    </form>
  );
};

export default AddItemForm;
