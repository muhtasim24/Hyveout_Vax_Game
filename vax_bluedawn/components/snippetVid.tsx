'use client';

import Image from "next/image";

type Props = {
    video: string;
    locked: boolean
}


export default function SnippetVid( {video, locked} : Props) {
    return (
        <div className="w-full max-w-[300px] border-4 border-blue-700 bg-black flex justify-center items-center h-full max-h-[300px]">
            {locked ? (
                <Image 
                    src = {video}
                    alt = {"videos"}
                    width = {100}
                    height = {100}
                    className = 
                    "w-full h-auto max-w-[100px] p-4 md:max-w-[150px] md:p-6 lg:max-w-[200px] lg:p-8"
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