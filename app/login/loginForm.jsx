"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import axios from 'axios'


const LoginForm = () => {

  const [user, setUser] = useState({
    email:"",
    password:"",
  })
  
  const router = useRouter()
  
  const register = () => {
      const data = {
          email:user.email,
          password:user.password
      }
  
      axios.post('api/users/login', data)
      .then((response) => {
          console.log(response);  
      })
      .catch((error) => {
          console.log(error);            
      })
      .finally(() => {
          router.push('/')
      })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="p-10 rounded-lg shadow-lg flex flex-col">
          <label htmlFor="email" className='mb-2'>Email</label>
          <input 
          type="text"
          id='email'
          placeholder='email'
          value={user.email} 
          onChange={e => setUser({...user, email:e.target.value})} 
          className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
          />

          <label htmlFor="password" className='mb-2'>Password</label>
          <input 
          type='password'
          id='password'
          placeholder='password'
          value={user.password} 
          onChange={e => setUser({...user, password:e.target.value})} 
          className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
          />

          <button onClick={register} className="p-2 border bg-purple-600 text-white border-gray-500 mt-2 mb-4 focus:outline-none focus:border-gray-600">
              Login
          </button>

          <Link href='/signup' className='text-sm text-center mt-5 text-neutral-600'>Don't have an Account<span className='text-blue-800'>Signup</span></Link>
          <Link href='/' className='text-center mt-2'>Home</Link>

      </div>
    </div>
  )
}


export default LoginForm


