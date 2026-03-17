'use client';

import Image from "next/image";

type Props = {
    video: string;
}


export default function SnippetVid( {video} : Props) {
    return (
        <Image 
            src = {video}
            alt = {"videos"}
            width = {100}
            height = {100}
            className = "w-40 border border-blue-700 border-6 bg-black"
        />
    )
}