import {useState} from 'react'
import Image from 'next/image'
import { useDispatch } from "react-redux"
import { addToBasket } from "../slices/basketSlice"

const Product = ( {title, image, id, price, description}) => {
  const dispatch = useDispatch()
  const [rating] = useState()

  const addItemToBasket = () => {
      const product = {
        title, image, id, price, description
      };
      dispatch(addToBasket(product))
  }

  return (
    <div className="flex relative flex-col m-5 bg-white z-30 p-10 rounded-md shadow-md">
        <Image src={image} width={200} height={200} objectFit="contain"/>
        <h4 className="truncate ">{title}</h4>
        <p className="text-xs">{description}</p> 
        <p className="font-bold">${price}</p>
        <button onClick={addItemToBasket} className="button">Add to Cart</button>
    </div>
  )
}

export default Product