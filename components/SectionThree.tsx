"use client"

import Image from "next/image"
import { CustomButton } from "."
const SectionThree = () => {
    return (
        <div className="grid grid-cols-[60%_40%] z-0 max-w-[1440px] mx-auto xl:h-screen">
            
           <div className="flex justify-center items-start flex-col  w-[80%]">
                <h1 className='hero__title !mb-0'>
                Join the 100,000+ Coinfluencers Worldwide
                </h1>
                <p className='hero__subtitle my-8 '>
                   Download now to be part of largest community of coinfluencers in the world!
                </p>
               
            </div>

             {/* create image */}
           <div className="flex flex-col justify-center items-center">
                <div className="  xl:h-auto  w-[100%] ">
                    <Image src="/use2.png" alt="hero" fill className="object-contain !relative" />
                </div>
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
           
        </div>
    )
}

export default SectionThree