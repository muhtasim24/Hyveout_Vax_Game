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
      className={`cursor-pointer text-center text-2xl
      ${isSelected ? "text-blue-400 scale-140" : "text-white scale-100"}
      `}
    >
      {track.name}
    </div>
    )
}