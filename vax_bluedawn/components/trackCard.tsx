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
      className={`p-4 border rounded-lg cursor-pointer text-center
      ${isSelected ? "bg-blue-500 text-white" : "bg-white"}
      `}
    >
      {track.name}
    </div>
    )
}