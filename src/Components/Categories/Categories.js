import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';
import CategoriesDetails from '../CategoriesDetails/CategoriesDetails';

const allProducts = [
                    {name: 'Hp', category: 'laptop'},{name: 'Asus', category: 'laptop'},{name: 'Dell', category: 'laptop'},
                    {name: 'Mi', category: 'mobile'},{name: 'Htc', category: 'mobile'},{name: 'Samsung', category: 'mobile'},
                    {name: 'Canon', category: 'camera'},{name: 'Fujifilm', category: 'camera'},{name: 'GoPro p', category: 'camera'}

                ]

const Categories = (props) => {
    const [category, setCategory] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        const matchedProducts = allProducts.filter(pd => pd.category === category.toLowerCase());
        setProducts(matchedProducts);
    },[category])

    return (
        <div>
            <h1>Select your category : {category}</h1>
            {
                products.map(pd => <CategoriesDetails product ={pd}></CategoriesDetails>)
            }
        </div>
    );
};

export default Categories;