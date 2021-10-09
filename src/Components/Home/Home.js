import React from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = (props) => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div className ='border'>
            <h1>this is Home:</h1>
            <Categories count = {category}></Categories>
            <button onClick ={()=>setCategory(category+1)}>increment</button>
        </div>
    );
};

export default Home;