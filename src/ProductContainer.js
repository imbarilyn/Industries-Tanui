import React from 'react'
import Products from './Products'
import { Link } from 'react-router-dom'

function ProductContainer({products}) {
    console.log(products)
    const displayProduct=  products.map(prd =>     
        <Products
        key={prd.id}
        
                 id={prd.id}
                 product_name={prd.product_name}
                 description={prd.description}
                 price={prd.price}
             quantity={prd.quantity}
         />
    
    )
  return (
    
    <div>
        <div className='contracts-top'style={{float: "right"}}>
            <div className='search-tab'style={{ marginRight: "10px", marginTop: "4px"}}>
                <label>search  </label><input type='search' style={{border:"1px solid black", height:"30px"}}/>
            </div>
            <br></br>
        <div className='add-contract'>
            <Link to = "/create"><button type="button" className="btn btn-success" style={{float: "right", marginRight: "3px", marginTop: "0px", backgroundImage: "linear-gradient(79deg, #3277a8, #3283a8)" }}>Add+</button></Link>
         </div>
  </div>
        
        {
            displayProduct
        }

    </div>
  )
}

export default ProductContainer


// import React from 'react';
// import Products from './Products';

// function ProductContainer({ products }) {
//   return (
//     <div>
//       {products.map(product => (
//         <Products
//           key={product.id}
//           id={product.id}
//           product_name={product.product_name}
//           description={product.description}
//           price={product.price}
//           quantity={product.quantity}
//         />
//       ))}
//     </div>
//   );
// }

// export default ProductContainer;
