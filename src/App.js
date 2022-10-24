import React from 'react';
import Navbar from './components/Navbar';
import Pages from './pages/Pages';
import Search from './components/Search';
import Categories from './components/Categories';
import { BrowserRouter } from 'react-router-dom';




const App = () => {
  return (
    <BrowserRouter>
    
      <Navbar />
      <Search />
      <Categories/>
      <Pages />
    
    </BrowserRouter>
  );
}

export default App;
