import React from 'react';
import Spirtual from '../../Assets/Spirtual.png';
import Garden from '../../Assets/Garden.png';
import './styles.scss'
const ProductCategory = props => {
    return (
        <div className='productscategory'>
            <div className='wrap'>
                <div className="item" style={{
                    backgroundImage: `url(${Spirtual})`
                }}>
                    <a>Shop Spiritual Products</a>
                </div>
                <div className="item" style={{
                    backgroundImage: `url(${Garden})`
                }}>
                    <a>Shop Spiritual Garden </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;