import * as React from "react"

export interface ReactComponentProps {
    children: React.ReactNode
}
export interface GeneratedImageProps{
    imageUrl:string
    prompt:string
    witdth?:string
    height?:string
    action:(imagePath:string)=>void
}

export type ImageProps=Pick<GeneratedImageProps, "imageUrl" |"prompt">