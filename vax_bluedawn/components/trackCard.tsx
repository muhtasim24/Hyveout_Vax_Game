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
      ${isSelected ? "text-blue-500 [text-shadow:_1px_0_0_white,_-1px_0_0_white,_0_1px_0_white,_0_-1px_0_white] " : "text-white"}
      `}
    >
      <h1 className="text-xl md:text-2xl lg:text-3xl hover:text-blue-500 hover:[text-shadow:_1px_0_0_white,_-1px_0_0_white,_0_1px_0_white,_0_-1px_0_white]  whitespace-nowrap">{track.name}</h1>
    </div>
    )
}