import React from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoriesDetails = (props) => {

    const {name} = props.product;
    
    const {count} = props;
    return (
        <div>
            <h3>this is a category Details {count}</h3>
            <h3> selected category: {name}</h3>
        </div>
    );
};

export default CategoriesDetails;