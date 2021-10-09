import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';
import { createContext } from 'react';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState('laptop');
  return (
    <CategoryContext.Provider value ={[category, setCategory]}>
      <p>count value: {category}</p>
     <Home></Home>
     <Header></Header>
     <Shipment></Shipment>

     </CategoryContext.Provider>
  );
}

export default App;
