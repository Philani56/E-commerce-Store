import React from 'react';
import './Breadcrums.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrums = (props) => {
    const { product } = props;
    
    return (
        <div className='breadcrumbs'>
            HOME <img src={arrow_icon} alt="Arrow" /> SHOP <img src={arrow_icon} alt="Arrow" /> {product.category} <img src={arrow_icon} alt="Arrow" /> {product.name}
        </div>
    );
}

export default Breadcrums;
