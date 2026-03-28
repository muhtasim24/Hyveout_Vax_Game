'use client';
import { Track } from "@/data/trackList";
import Image from "next/image";


type Props = {
    track: Track;
    onClick: () => void;
    isSelected: boolean;
}

export default function TrackCard( { track, onClick, isSelected } : Props) {
    return (
    <div
      onClick={onClick}
      className={`cursor-pointer text-center
      ${isSelected ? "text-blue-400" : "text-white"}
      `}
    >
      <h1 className="text-xl md:text-2xl lg:text-3xl hover:text-blue-400 whitespace-nowrap [-webkit-text-stroke:1px]">{track.name}</h1>
    </div>
    )
}