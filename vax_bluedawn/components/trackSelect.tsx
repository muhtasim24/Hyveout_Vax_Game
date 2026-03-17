'use client'
import { Track } from "@/data/trackList";
import TrackCard from "./trackCard";
import { useState } from "react";
import Image from "next/image";


type Props = {
    trackList: Track[];
   
}

export default function TrackSelect( {trackList} : Props) {

    const [selectedTrack, setSelectedTrack] = useState<Track>(trackList[0]); 

    function handleTrackClick(track: Track) {
        setSelectedTrack(track);
    }

    return (
        <div className="flex flex-col justify-center items-center">
            {selectedTrack && (
                <Image 
                    src = {selectedTrack.image}
                    alt= {selectedTrack.name}
                    width = {100}
                    height = {100}
                    className = "w-65"
                />
            )}

            <div className="flex flex-col gap-4">
                {trackList.map(track => (
                    
                    <TrackCard 
                        key = {track.id}
                        track = {track}
                        onClick = { () => handleTrackClick(track)}
                        isSelected = {selectedTrack?.id === track.id}
                    />
                ))}
            </div>

        </div>
    )
}