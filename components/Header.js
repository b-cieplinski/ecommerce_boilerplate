import React from 'react'
import Image from 'next/image'
import {MenuIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import { selectItems } from '../slices/basketSlice';
import { useSelector } from 'react-redux';



const Header = () => {

    const { data: session } = useSession()
    const router = useRouter()
    const items = useSelector(selectItems)

  return (

    <div className="bg-amazon_blue flex items-center p-1 flex-grow py-2">
              {/* Logo */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <img className="cursor-pointer" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" width={150} height={40} onClick={() => router.push('/')}/>
        </div>
        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 cursor-pointer ml-5">
            <input className="p-2 h-full w-6 flex flex-grow flex-shrink rounded-l-md focus:outline-none"type="text" ></input>
                <SearchIcon className="h-12 p-4"/>
        </div>
        {/* Menu Buttons */}
        <div className="flex items-center text-sm space-x-6 mx-6 whitespace-nowrap">
            <div onClick={!session ? signIn : signOut} className="text-white link">
            <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
            <p className="font-bold md:text-sm">Account Management</p>
            </div>
            <div className="text-white link">
                <p>Returns</p>
                <p className="font-bold md:text-sm">& Orders</p>
            </div>
            <div className="text-white link flex relative items-center" onClick={() => router.push('/checkout')}>
                <span className="absolute top-0 right-0 md:right-6 h-5 w-5 bg-yellow-400 rounded-full text-center">{items.length}</span>
                <ShoppingCartIcon className="h-10"/>
            <p className=" hidden md:inline font-bold md:text-sm mt-2">Cart</p>
            </div>
        </div>
    </div>
  )
}

export default Header