'use client';
import { Track } from "@/data/trackList";
import Image from "next/image";
import BirdBtn from "./birdBtn";

import {Press_Start_2P} from "next/font/google";

const player2 = Press_Start_2P( {
    weight: '400',
    subsets: ['latin'],
  })

type Props = {
    track: Track;
    onClose: () => void;
}

export default function TrackModal( {track, onClose} : Props) {
    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50" onClick={onClose}>
            
            <div className=
            "bg-black flex flex-col justify-center items-center border border-blue-800 border-6 gap-2 w-[90vw] max-w-[500px] md:max-w-[600px] md:h-[40vh]" 
            
            onClick={ (e) => e.stopPropagation()}>
                <h1 className={`${player2.className} text-blue-500 [text-shadow:_1px_0_0_white,_-1px_0_0_white,_0_1px_0_white,_0_-1px_0_white]  text-1xl md:text-3xl p-4`}>{track.prod}</h1>
                <button onClick = {onClose} className="cursor-pointer w-[10vw]">
                    <BirdBtn/>
                </button>
            </div>
        </div>
    )
}