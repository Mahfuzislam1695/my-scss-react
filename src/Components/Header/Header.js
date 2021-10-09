import React from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';
import ('./Header.css');

const Header = () => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div className = 'border'>
            <h1> this is a header : {category}</h1>
            <button onClick ={()=>setCategory('Laptop')}>Laptop</button>
            <button onClick ={()=>setCategory('Mobile')}>Mobile</button>
            <button onClick ={()=>setCategory('Camera')}>Camera</button>
        </div>
    );
};

export default Header;