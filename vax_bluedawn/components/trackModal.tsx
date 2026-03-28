'use client';
import { Track } from "@/data/trackList";
import Image from "next/image";
import BirdBtn from "./birdBtn";


type Props = {
    track: Track;
    onClose: () => void;
}

export default function TrackModal( {track, onClose} : Props) {
    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50" onClick={onClose}>
            
            <div className=
            "bg-black flex flex-col justify-center items-center border border-blue-800 border-6 gap-8 w-[90vw] max-w-[500px] md:max-w-[700px] md:h-[50vh]" 
            
            onClick={ (e) => e.stopPropagation()}>
                <h1 className="text-white text-3xl font-bold [-webkit-text-stroke:1px_white] md:text-5xl justify-start">PROD</h1>
                <h1 className="text-purple-200 text-3xl [-webkit-text-stroke:1px] md:text-6xl">{track.prod}</h1>
                <button onClick = {onClose} className="cursor-pointer w-[10vw]">
                    <BirdBtn/>
                </button>
            </div>
        </div>
    )
}