import React from 'react'
import Product from './Product'

const ProductFeed = ({products}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 bg-gray-100">
        {products.slice(0, 4).map((product) => (
            <Product 
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            description={product.description}
            />
        
        ))}
        <img className="md:col-span-full" src="https://images-eu.ssl-images-amazon.com/images/G/02/SBP/2018/gateway/1110572_smb_gw_desktop_1500x300_lavolio_1x_uk._CB484123630_.jpg"/>
        <div className="md: col-span-2">
    {products.slice(4, 5).map((product) => (
            <Product 
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            />
        
        ))}
    </div>
    {products.slice(5, products.length).map((product) => (
            <Product 
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            />
        
        ))}
    </div>
  )
}

export default ProductFeed