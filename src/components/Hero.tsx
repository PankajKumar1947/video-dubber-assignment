'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import GetStartBtn from './GetStartBtn'

const Hero = () => {
  return (
    <div className='h-[100vh] flex items-center justify-between '>
        <div className='hidden md:block w-[20%] overflow-hidden'>
            <img src="./assets/banner-left.png" alt="" />
        </div>
        <div className='w-[100%] md:w-[50%] text-center'>
            <div className='flex justify-center gap-4'>
                <img src="./assets/franceIcon.png" alt="svg" className='h-[50px] w-[70px] rounded-lg' />
                <img src="./assets/rightarrow.png" alt="svg" className='h-[50px] w-[50px] rounded-lg' />
                <img src="./assets/usIcon.png" alt="svg" className='h-[50px] w-[70px] rounded-lg' />
            </div>
            <h1 className='text-5xl mt-8 font-bold '>French video with English subtitles</h1>
            <p className='px-10 py-5 text-gray-700'>Want your videos to reach a wider audience who speaks English? This service is ideal for your audiovisual content - from online videos, television shows, films, documentaries, marketing content and more!</p>
            <GetStartBtn/>
            <div className='flex justify-center gap-2 mt-6'>
                <img src="./assets/leader.png" alt="" />
                <img src="./assets/momentum.png" alt="" />
            </div>
        </div>
        <div className='w-[20%] hidden md:block overflow-hidden'>
            <img src="./assets/banner-right.png" alt="" />
        </div>
        
    </div>
  )
}

export default Hero