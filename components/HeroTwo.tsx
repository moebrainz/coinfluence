"use client"

import Image from "next/image"
import { CustomButton } from '.';

const HeroTwo = () => {
    return (
        <div className="grid grid-cols-[35%_77%] z-0 max-w-[1440px] mx-auto xl:h-screen">
            
           {/* create image */}
           <div className="flex justify-center">
                <div className="  xl:h-auto  w-[100%] ">
                    <Image src="/use.png" alt="hero" fill className="object-contain !relative" />
                </div>
           </div>

           <div className="flex justify-center items-start flex-col p-14 w-[80%]">
                <h1 className='hero__title !mb-0'>
                Learn how to breathe with Breathwrk
                </h1>
                <p className='hero__subtitle my-8 '>
                Breathwrk is a simple yet powerful way to alleviate stress and anxiety, fall asleep faster, energize yourself, or improve endurance. Learn and feel the power of breathing with guided exercises that are backed by science and research. We teach the same techniques used by Olympic Athletes, Psychologists, Yoga Experts, Navy SEALs, and Zen Masters.                </p>
               
            </div>
           
        </div>
    )
}

export default HeroTwo