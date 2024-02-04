import React from 'react'
import {Link } from 'react-router-dom'
import { doc, deleteDoc , collection, getDocs} from "firebase/firestore";
import { db } from './fireb-config'

function Products( {products, setProducts} ) {
    const {id, product_name, description, price, quantity} = products

   const handleDelete =(id)=>{
    
    deleteDoc(doc(db, "products", id));
    const remProducts = products.filter(rem =>  products.id =!id);
    setProducts(remProducts);

   }

  
  return (
    <div className='main-content'>
    {/* <div className='contracts-top'style={{float: "right"}}>
      <div className='search-tab'style={{ marginRight: "10px", marginTop: "4px"}}>
        <label>search  </label><input type='search' style={{border:"1px solid black", height:"30px"}}/>
      </div>
      <br></br>
      <div className='add-contract'>
        <Link to = "/create"><button type="button" className="btn btn-success" style={{float: "right", marginRight: "3px", marginTop: "0px", backgroundImage: "linear-gradient(79deg, #3277a8, #3283a8)" }}>Add+</button></Link>
      </div>
  </div> */}
    
  <div className='Contracts-display'>
        <table className="table table-hover">
          <thead>
            <tr>                
              <th>No.</th>
              <th>Product Name</th>   
              <th>Product Description</th>
              <th>Price</th>  
              <th>Quantity</th>                        
            </tr>
          </thead>
          <tbody> 
            {
                <tr>             
                <td>{id}</td>
                <td>{product_name}</td>
                <td>{description}</td>
                <td>{price}</td> 
                <td>{quantity}</td>
                <td>
                  <button  type="button" className="btn btn-outline-primary" style={{margin: "4px"}}>Update</button>
                  <button type="button" className="btn btn-outline-danger" onClick ={()=> handleDelete(products.id)}>Delete</button>
                </td>
              </tr>

              
              
             
            }
         
            
          </tbody>
        </table>
  </div>     
</div>
  )
}

export default Products