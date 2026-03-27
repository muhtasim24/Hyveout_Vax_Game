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
      ${isSelected ? "text-blue-400 scale-140" : "text-white scale-100"}
      `}
    >
      <h1 className="text-xl lg:text-4xl hover:text-blue-400 hover:scale-120">{track.name}</h1>
    </div>

    // <div
    //   className="text-center text-2xl text-white [text-shadow:_2px_0_0_blue,_-2px_0_0_blue,_0_2px_0_blue,_0_-2px_0_blue] "
    // >
    //   {track.name}
    // </div>
    )
}