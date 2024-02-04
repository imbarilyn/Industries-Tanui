import React from 'react'
import Products from './Products'

function ProductContainer({ passProducts}) {
    const dispalyDispaly =  passProducts.map(product =>(
        <Products
         key={product.id}
         product = {product}
         />
    ))
  return (
    <div>
        {
            dispalyDispaly
        }

    </div>
  )
}

export default ProductContainer