import React from 'react'

const Working = () => {
    const data=[
        {
            title:"Upload",
            titleColor:"bg-red-400",
            desc:"Upload your French videos, your URLs, or pull from Youtube, Vimeo, Drive, and more."
        },
        {
            title:"Create & Translate.",
            titleColor:"bg-blue-400",
            desc:"A subtitler will create the original (French) subtitles. A English subtitle translator will translate the subtitles"
        },
        {
            title:"Download.",
            titleColor:"bg-blue-600",
            desc:"Your file will appear on your dashboard with the perfect English subtitles."
        },
    ]
  return (
    <div className='flex flex-col items-center mt-5'>
        <h1 className='text-3xl font-bold'>How does it work ? </h1>
        <div className='max-w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10'>
            {
                data.map((eachData,ind)=>{
                    return (
                        <div 
                        key={ind}
                        className='border-2 border-gray-200 p-6 bg-white rounded-lg'>
                            <h1 className='text-xl font-semibold'>
                                <span className={`${eachData.titleColor} p-2 px-3 rounded-xl text-white`}>{ind+1}</span>
                                <span className='pl-2'>
                                    {eachData.title}
                                </span>
                                </h1>
                            <p className='py-2 mt-6'>{eachData.desc}</p>
                        </div>
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default Working