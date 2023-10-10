import { MouseEventHandler } from "react";

export interface CustomButtomProps {
    title: string;
    containerStyle?: string;
    handleClick?:  MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    Icon?: string;
    isDisabled?: boolean;
}