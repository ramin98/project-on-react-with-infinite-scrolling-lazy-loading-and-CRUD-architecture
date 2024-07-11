import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ItemProvider } from './context/ItemContext';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const ItemPage = lazy(() => import('./pages/ItemPage'));

const App = () => {
  return (
    <ItemProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/item/:id" element={<ItemPage/>} />
          </Routes>
        </Suspense>
      </Router>
    </ItemProvider>
  );
};

export default App;
