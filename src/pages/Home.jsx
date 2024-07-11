import React from 'react';
import ItemList from '../components/ItemList';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import AddItemForm from '../components/AddItemForm';

const Home = () => {
  return (
    <div>
      <SearchBar />
      <Filter />
      <AddItemForm />
      <ItemList />
    </div>
  );
};

export default Home;
