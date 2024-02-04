import React from 'react'
import  './Styling/Create.css'
import { useState } from'react';


function Create() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        quantity: '',
    })
    const submitHandler =(e) =>{
        e.preventDefault();
        fetch("/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp =>resp.json())
        .then(data => {
            console.log(data);
        })
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
                  onChange={(e) =>setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputCountry">Product Description</label>
            <input 
                  type="text"
                  className="form-control" 
                  id="InputProductDescription" 
                  onChange={(e) =>setFormData({...formData, description: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEpiryDate">Price</label>
            <input
                  type="number"
                  class="form-control" 
                  id="InputPrice" onChange={(e) =>setFormData({...formData, price: e.target.value})}
              />              
          </div>  
          <div className="form-group">
            <label htmlFor="exampleInputEpiryDate">Quantity</label>
            <input
                  type="number"
                  class="form-control" 
                  id="InputQuantity" 
                  onChange={(e) =>setFormData({...formData, quantity: e.target.value})}
              />
              
          </div>      
          <button type="submit" class="btn btn-primary" >Submit</button>
          
      </form>
    </div>
  )
}

export default Create