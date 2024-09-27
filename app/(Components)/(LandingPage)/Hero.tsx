import React from 'react'
import Image from 'next/image'
const HeroCompoment = () => {
    return (
        <div className='text-white flex flex-col items-center justify-center max-w-5xl'>
            <div className='flex items-center'>
                <div className='relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]'>
                    <Image
                        src="https://media.giphy.com/media/XbJYBCi69nyVOffLIU/giphy.gif"
                        fill
                        className='object-contain'
                        alt="icon"
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroCompoment
