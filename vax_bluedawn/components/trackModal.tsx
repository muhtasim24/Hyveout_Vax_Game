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
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center" onClick={onClose}>
            
            <div className="bg-black flex flex-col justify-center items-center border border-blue-800 border-4 w-100 h-50 gap-6" onClick={ (e) => e.stopPropagation()}>
                <h1 className="text-white">PROD</h1>
                <h1 className="text-purple-200 text-2xl">{track.prod}</h1>
                <button onClick = {onClose} className="cursor-pointer w-5">
                    <BirdBtn/>
                </button>
            </div>
        </div>
    )
}