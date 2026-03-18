'use client';

import Image from "next/image";

type Props = {
    video: string;
    locked: boolean
}


export default function SnippetVid( {video, locked} : Props) {
    return (
        <div className="border-8 border-blue-700 bg-black flex justify-center items-center">
            {locked ? (
                <Image 
                    src = {video}
                    alt = {"videos"}
                    width = {100}
                    height = {100}
                    className = "w-27 h-auto flex justify-center items-center p-6"
                />
            ) : (
                <video
                    className="w-60 h-auto"
                    controls>
                        <source src={video} type="video/mp4" />
                    </video>
            )}
         </div>
    )
}