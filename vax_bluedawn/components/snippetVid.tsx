'use client';

import Image from "next/image";

type Props = {
    video: string;
}


export default function SnippetVid( {video} : Props) {
    return (
        <div className="p-10 border-8 border-blue-700 bg-black inline-block">
            <Image 
                src = {video}
                alt = {"videos"}
                width = {100}
                height = {100}
                className = "w-10 h-auto"
            />
         </div>
    )
}