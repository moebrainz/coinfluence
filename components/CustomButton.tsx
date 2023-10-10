"use client"

import { CustomButtomProps } from "@/types"
import Image from "next/image"


const CustomButton = ({title, containerStyle, handleClick, btnType, textStyles, Icon, }: CustomButtomProps) => {
  return (
   <button 
   disabled={false}
   type={"button"}
   className={`custom-btn ${containerStyle}`}
   onClick={handleClick}
   >
    <span className={`flex-1 ${textStyles}`}>
        {title}
    </span>
    {Icon && (
      <div className="relative w-6 h-6 ">
        <Image src={Icon} alt="icon" fill className="object-contain"/>
      </div>
    )}
   </button>
  )
}

export default CustomButton