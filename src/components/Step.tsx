import React from 'react'

const Step = () => {
    const stepsData=[
        {
            title:"1. Upload your file.",
            desc:"With our uploader, you can import your file from anywhere, whether it's on your laptop, Google Drive, Youtube, or Dropbox."
        },
        {
            title:`2. Select "French"`,
            desc:"Determine the language of the audio of your video."
        },
        {
            title:`3. Select "Human made".`,
            desc:"With our Human-Made service, the original (French) subtitles will be created by a native subtitler and proofread by an experienced reviewer."
        },
        {
            title:`4. Toggle "Translate subtitles to another language".`,
            desc:`Select "English" to determine the target language for the subtitle translation process.`
        },  
        {
            title:`5. Get notified when your French and English subtitles are ready.`,
            desc:`Receive an email when the subtitles have been created within 24 hours for the French subtitles and 3-5 days for English subtitles..`
        },
        {
            title:`6. Receive your subtitles.`,
            desc:`Access your subtitles from the dashboard.`
        },
        {
            title:`7. Click on "Export" and choose your preferred file format.`,
            desc:`You can export to SRT, VTT, and many more. It's that easy to have your video professionally subtitled!`
        }
        
    ]

  return (
    <div>
        <div className='flex justify-around flex-col md:flex-row'>
            <div className='md:w-[50%] p-4'>
                <img src="./assets/feature.png" alt="" />
            </div>
            <div className='border-2 bg-white p-6 md:w-[45%] rounded-xl m-2'>
                <h1 className='text-4xl font-bold'>How to create English subtitles for an French video?</h1>
                {
                    stepsData.map((data,ind)=>{
                        return (
                            <div 
                            key={ind}
                            className='my-7'>
                                <div>
                                    <h1 className='text-2xl font-semibold py-2'>{data.title}</h1>
                                    <p className='text-gray-700'>{data.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    </div>
  )
}

export default Step