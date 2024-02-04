import React from 'react'
import  './Styling/Create.css'
import { useState } from'react';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from './fireb-config'
import { useNavigate } from 'react-router-dom';



function Create({setProducts, products, getProducts}) {
    const [product_name, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const navigate = useNavigate();


 const submitHandler =async(e) =>{
        e.preventDefault();
        const formData = {
            product_name,
            description,
            price,
            quantity
         }
        //  products.push(formData);

        await addDoc(collection(db, "products"), {
            ...formData
          })


setProducts(products)
        
getProducts();
       
        }
     
    
  return (
    <div className='create-product-form'>
           <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="exampleInputName">Product Name</label>
            <input 
                  type="text" 
                  className="form-control" 
                  id="InputProductName" 
                  placeholder="Enter product name" 
                  value = {product_name}
                  onChange={(e) =>setProductName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputCountry">Product Description</label>
            <input 
                  type="text"
                  className="form-control" 
                  id="InputProductDescription" 
                  value ={description}
                  onChange={(e) =>setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEpiryDate">Price</label>
            <input
                  type="number"
                  className="form-control" 
                  id="InputPrice" 
                  value ={price}
                  onChange={(e) =>setPrice(e.target.value)}
              />              
          </div>  
          <div className="form-group">
            <label htmlFor="exampleInputEpiryDate">Quantity</label>
            <input
                  type="number"
                  className="form-control" 
                  id="InputQuantity" 
                  value ={quantity}
                  onChange={(e) =>setQuantity(e.target.value)}
              />
              
          </div>      
          <button  type="submit" className="btn btn-success"  onClick={()=>navigate("/products")}>Submit</button>
          
      </form>
    </div>
  )
}

export default Create