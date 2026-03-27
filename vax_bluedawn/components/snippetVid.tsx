'use client';

import Image from "next/image";

type Props = {
    video: string;
    locked: boolean
}


export default function SnippetVid( {video, locked} : Props) {
    return (
        <div className="w-full max-w-[250px] aspect-video border-4 border-blue-700 bg-white flex justify-center items-center md:max-w-[300px]">
            {locked ? (
                <Image 
                    src = {video}
                    alt = {"videos"}
                    width = {100}
                    height = {100}
                    className = 
                    "p-6 md:p-4"
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