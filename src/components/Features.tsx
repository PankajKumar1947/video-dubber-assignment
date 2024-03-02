import React from 'react'
import GetStartBtn from './GetStartBtn'

const Features = () => {
    const featuresData=[
        {
            title:"100% Human Translation Customization",
            img:"./assets/feature1.png",
            desc:"All your translations are done by one of our French to English subtitle translators to ensure the absolute highest quality. No machines are used here, just the talents and abilities of our translators.",
        },
        {
            title:"Format & Hardcode Subtitles",
            img:"./assets/feature2.png",
            desc:"Once your subtitles have been translated, you can format your subtitles to make them match your brand. You can select multiple settings and get your video ready to publish. You can also directly download the video with burned-in subtitles.",
        },
        {
            title:"Subtitle Customization",
            img:"./assets/feature3.png",
            desc:"Our translation experts take care of the translation and making sure that your subtitles look pretty. But even then you can still decide how your subtitles are going to look with our line, CPL, and CPS management.",
        },
    ]
  return (
    <div className='mt-10 flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold py-14'>Features</h1>
        <div className='w-[60vw] overflow-hidden'>
            <img src="./assets/feature.png" alt="image" className='w-[100%] h-[100%]' />
        </div>

        {/* all features */}
        <div className='mt-20 w-full'>
            {
                featuresData.map((data,ind)=>{
                    return (
                        <div 
                        key={ind}
                        className='flex justify-between flex-wrap-reverse w-full overflow-hidden my-4'>
                            <div className={`${ind%2!=0 ? "sm:order-last":""} flex flex-col gap-5 justify-center p-5  md:w-[40%]`}>
                                <h1 className='text-3xl font-bold'>{data.title}</h1>
                                <p className='text-md text-gray-600'>{data.desc}</p>
                            </div>
                            <div className='p-10  md:w-[40%] overflow-hidden'>
                                <img src={`${data.img}`} alt="" className='' />
                            </div>
                        </div>
                    )
                })
            }
                
        </div>

        <GetStartBtn/>
    </div>
  )
}

export default Features