import React from 'react'

function Create() {
  return (
    <div>
           <form >
          <div className="form-group">
            <label htmlFor="exampleInputName">Product Name</label>
            <input 
                  type="text" 
                  className="form-control" 
                  id="InputProductName" 
                  placeholder="Enter product name" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputCountry">Product Description</label>
            <input 
                  type="text"
                  className="form-control" 
                  id="InputProductDescription" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEpiryDate">Price</label>
            <input
                  type="number"
                  class="form-control" 
                  id="InputPrice" 
              />              
          </div>  
          <div className="form-group">
            <label htmlFor="exampleInputEpiryDate">Quantity</label>
            <input
                  type="number"
                  class="form-control" 
                  id="InputQuantity" 
              />
              
          </div>      
          <button type="submit" class="btn btn-primary" >Submit</button>
          
      </form>
    </div>
  )
}

export default Create