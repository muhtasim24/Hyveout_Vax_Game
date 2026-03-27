'use client';

import Image from "next/image";

type Props = {
    video: string;
    locked: boolean
}


export default function SnippetVid( {video, locked} : Props) {
    return (
        <div className="w-full max-w-[300px] aspect-video border-4 border-blue-700 bg-black flex justify-center items-center">
            {locked ? (
                <Image 
                    src = {video}
                    alt = {"videos"}
                    width = {100}
                    height = {100}
                    className = 
                    "p-4 md:p-2"
                />
            ) : (
                <video
                    className="w-full h-full object-cover"
                    controls>
                        <source src={video} type="video/mp4" />
                    </video>
            )}
         </div>
    )
}