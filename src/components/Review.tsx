import React from 'react'
import GetStartBtn from './GetStartBtn'

const Review = () => {
    const reviewData=[
        {
            title:"Really good conversion of English…",
            desc:"Really good conversion of English speech to text and good value for money, especially if you have long speech to write up.",
            author:"Edward Borton - Trustpilot"
        },
        {
            title:"Easy to use service",
            desc:"Easy to use this service and I got exactly what I needed. I would definitely recommend to anyone who is looking for good, professional transcription services.",
            author:"Lynn Hayne - Trustpilot"
        },
        {
            title:"Jingle While Scribbe",
            desc:"Completely No Brainer deal for me. Personally, I 2x stacked for this deal. Fav Features: - Options for regional languages - VIDEO, Audio into Transcription - Easy & Simple interface - My Vocab - Help-Desk",
            author:"ishehraj - AppSumo"
        },
        {
            title:"I really enjoy using Happy Scribe",
            desc:"I really enjoy using Happy Scribe. And I confirm that the French transcription is correct around 95% ! Good job for me so that I can save time now to subtitle my videos",
            author:"Mireille Swiatek - Trustpilot"
        },
    ]

  return (
    <div className='mt-10 max-w-[95%] md:max-w-[80%] mx-auto'>
        <h1 className='text-2xl font-bold text-black text-center'>Customer Reviews</h1>
        <p className='text-center mt-5'>Rated Excellent 4.8/5 based on 850+ reviews</p>

        <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-6'>
            {
                reviewData.map((data,ind)=>{
                    return (
                        <div 
                        key={ind}
                        className='bg-white p-6 rounded-2xl border-2'>
                            <div className='flex justify-between mt-2'>
                                <h1 className='text-xl font-semibold'>{data.title}</h1>
                                <p>⭐⭐⭐⭐⭐</p>
                            </div>
                            <p className='my-4'>{data.desc}</p>
                            <p className='text-gray-700'>{data.author}</p>
                        </div>
                    )
                })
            }
            
        </div>
        <div className='text-center mt-10'>
            <button className='text-center text-gray-500'>See all reviews</button>
            <br />
            <GetStartBtn/>
        </div>
        

    </div>
  )
}

export default Review