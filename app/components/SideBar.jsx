import React from 'react'
import Link from "next/link"
import Image from 'next/image'

const SideBar = () => {
  return (
    <div className='bg-green-950 space-y-7 w-52 h-screen text-green-50 p-3 pt-0 fixed top-0 left-0'>
        <Link className='mb-6' href="/">
          <Image src="/logo2.png" width={200} height={200} />
        </Link>
        <div className="space-y-4 flex flex-col">
            <Link href="/">DashBoard</Link>
            <Link href="/products">Products</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/cart">My Cart</Link>
            <Link href="/blogs">Blog News</Link>
            <Link href="/contacts">Contacts</Link>
            <Link href="/settings">Settings</Link>
        </div>
        <button className="text-green-950 bg-green-50 rounded-sm w-1/2"></button>
    </div>
  )
}

export default SideBar


