"use client"

import Image from "next/image"
import { CustomButton } from '.';

const Hero = () => {

    const handleSroll = () => {

    }
    return (
        <div className="grid grid-cols-[35%_77%] z-0 max-w-[1440px] mx-auto xl:h-screen ">
            <div className="flex justify-center items-start flex-col">
                <h1 className='hero__title !mb-0'>
                    Get Enough Engagements!
                </h1>
                <p className='hero__subtitle my-8'>
                    Get much engagements on the x app with the platform that gives you an edge to do so
                </p>
                <div className="flex flex-row gap-2"> 

                <CustomButton
                        title="Download on the"
                        Icon="/apple.svg"
                        btnType="button"
                        containerStyle="bg-primary-blue text-white rounded-full mt-10 text-[15px]"
                        // handleClick={handleSroll}
                    />

                <CustomButton
                        title="Download on the"
                        Icon="/android.svg"
                        btnType="button"
                        containerStyle="bg-primary-blue text-white rounded-full mt-10 text-[15px]"
                        // handleClick={handleSroll}
                    />
                </div>
            </div>
           {/* create image */}
           <div className="flex items-end mt-20">
                <div className="  xl:h-auto  w-[80%] ">
                    <Image src="/mockPhone.png" alt="hero" fill className="object-contain !relative" />
                </div>
           </div>
           
        </div>
    )
}

export default Hero