'use client'
import { useRouter } from 'next/navigation'
import React from 'react'


const GetStartBtn = () => {
    const router=useRouter();
  return (
    <button
    onClick={()=>router.push("/signup")}
    className='bg-blue-600 my-8 text-white px-8 py-3 text-lg  rounded-xl font-bold'>Get Started</button>
  )
}

export default GetStartBtn