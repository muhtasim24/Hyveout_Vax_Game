'use client';

import Image from "next/image";

type Props = {
    video: string;
    locked: boolean
}


export default function SnippetVid( {video, locked} : Props) {
    return (
        <div className="w-[50vw] md:w-[19vw] md:min-w-[250px] aspect-video border-6 border-blue-700 bg-white flex flex-shrink-0 justify-center items-center">
            {locked ? (
                <Image 
                    src = {video}
                    alt = {"videos"}
                    width = {100}
                    height = {100}
                    className = 
                    "w-full h-full md:p-4 object-contain"
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