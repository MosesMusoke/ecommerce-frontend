"use client"

import React, { useState } from 'react'
import Link from 'next/link'

import {BsChevronCompactUp} from 'react-icons/bs'
import {BiMenu, BiSearch} from 'react-icons/bi'
import SearchBar from './SearchBar'
import ShoppingCartIcon from './ShoppingCartIcon'

const NavBar = () => {

    const [showProfile, setShowProfile] = useState(false)
    const [showNav, setShowNav] = useState(false)
    let [activeItem, setActiveItem] = useState(null)

  return (
    <div className=' bg-green-950 px-8 fixed z-50 left-0 right-0 top-0 ml-48'>
        <div className='flex items-center justify-between py-4 relative'>
            {/* left side of the nav bar */}
            <div className='flex items-center md:space-x-10 lg:space-x-20'>
                <div className="font-extrabold text-green-50 text-2xl"><BiMenu /></div>
                {/* max-md means that all the styles applied to this class will be applied when the screen size is at or below the medium breakpoint */}
                <nav className='max-md:hidden'>
                    <ul className='flex text-green-50 items-center lg:space-x-10 space-x-7 opacity-70 text-[15px]'>
                        <li><a href="/" className={`py-3 inline-block font-semibold w-full text-green-50`}>HOME</a></li>
                        <li><a href="/products" className={`py-3 font-semibold text-green-50 inline-block w-full`}>SHOP</a></li>
                        <li><a href="/categories" className={`py-3 font-semibold text-green-50 inline-block w-full`}>CATEGORIES</a></li>
                        {/* my products page is shown when a seller/buyer is logged in to show their products */}
                    </ul>
                </nav>
            </div>
            {/* search bar */}
            <div className="flex items-center space-x-4">
                <SearchBar />
                <div onClick={() => setShowProfile(!showProfile)} className="relative cursor-pointer">
                    <img src="vercel.svg" alt="" className='w-[35px] h-[35px] rounded-full object-cover' />
                    <div className={`absolute bg-green-950 z-2 rounded-lg shadow-lg ${showProfile? "" : 'hidden'}`}>
                        <Link href="/login">LogIn</Link>
                    </div>
                </div>
                <Link href="/cart">
                    <div className="p-2 bg-gray-50 rounded-full"><ShoppingCartIcon /></div>
                </Link>
                <span onClick={() => setShowNav(!showNav)} className='p-[9px] bg-gray-100 rounded-full md:hidden' >
                    <BsChevronCompactUp className={`transition ease-in duration-150 ${showNav ? 'rotate-180': '0'}`} />
                </span>
            </div>
        </div>

        <div className={`md:hidden ${showNav ? "pb-4 px-5" : "h-0 invisible opacity-0"}`}>
            <ul className='flex flex-col text-[15px] opacity-75 px-2'>
                <li><Link href="/" className='py-3 inline-block w-full'>HOME</Link></li>
                <li><Link href="/products" className='py-3 inline-block w-full'>SHOP</Link></li>
                <li><Link href="/blogs" className='py-3 inline-block w-full'>BLOG</Link></li>
                <li><Link href="/contacts" className='py-3 inline-block w-full'>CONTACT</Link></li>
            </ul>
            <div className="flex items-center bg-gray-100 p-2 rounded-lg my-4 py-3">
                <input type="text" className='outline-none w-full bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px]' placeholder='Search' autoComplete='false' />
                <button><BiSearch size={20} /></button>
            </div>
        </div>
    </div>
  )
}

export default NavBar


