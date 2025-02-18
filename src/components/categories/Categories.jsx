import React from 'react'
import './categories.css';
import image1 from '../../img/cat-1.jpg';
import image2 from '../../img/cat-2.jpg';
import image3 from '../../img/cat-3.jpg';
import image4 from '../../img/cat-4.jpg';

const Categories = () => {
  return (
    <div className='categories container'>
        <h2 className='title'>CATEGORIES</h2>
        <div className="categories-content">
        <div className="category">
            <img src={image1} alt="category1" />
            <div>
                <h2>Category Name</h2>
                <p>100 Products</p>
            </div>
         </div>
        <div className="category">
            <img src={image2} alt="category1" />
            <div>
                <h2>Category Name</h2>
                <p>100 Products</p>
            </div>
         </div>
        <div className="category">
            <img src={image3} alt="category1" />
            <div>
                <h2>Category Name</h2>
                <p>100 Products</p>
            </div>
         </div>
        <div className="category">
            <img src={image4} alt="category1" />
            <div>
                <h2>Category Name</h2>
                <p>100 Products</p>
            </div>
         </div>
        <div className="category">
            <img src={image3} alt="category1" />
            <div>
                <h2>Category Name</h2>
                <p>100 Products</p>
            </div>
         </div>
        <div className="category">
            <img src={image4} alt="category1" />
            <div>
                <h2>Category Name</h2>
                <p>100 Products</p>
            </div>
         </div>
        <div className="category">
            <img src={image1} alt="category1" />
            <div>
                <h2>Category Name</h2>
                <p>100 Products</p>
            </div>
         </div>
        <div className="category">
            <img src={image2} alt="category1" />
            <div>
                <h2>Category Name</h2>
                <p>100 Products</p>
            </div>
         </div>
        <div className="category">
            <img src={image2} alt="category1" />
            <div>
                <h2>Category Name</h2>
                <p>100 Products</p>
            </div>
         </div>
        <div className="category">
            <img src={image3} alt="category1" />
            <div>
                <h2>Category Name</h2>
                <p>100 Products</p>
            </div>
         </div>
        <div className="category">
            <img src={image4} alt="category1" />
            <div>
                <h2>Category Name</h2>
                <p>100 Products</p>
            </div>
         </div>
        <div className="category">
            <img src={image1} alt="category1" />
            <div>
                <h2>Category Name</h2>
                <p>100 Products</p>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Categories
