import React from 'react'
import Products from './Products'

function ProductContainer({products}) {
    console.log(products)
    const displayProduct=  products.map(prd =>     
        <Products
         key={prd.id}
         {...prd}
         />
    
    )
  return (
    <div>
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
