import React from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h1>this is a shipment {category}</h1>
        </div>
    );
};

export default Shipment;