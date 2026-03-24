'use client'
import { Track } from "@/data/trackList";
import TrackCard from "./trackCard";
import { useState } from "react";
import Image from "next/image";
import TrackModal from "./trackModal";


type Props = {
    trackList: Track[];
   
}

export default function TrackSelect( {trackList} : Props) {

    const [selectedTrack, setSelectedTrack] = useState<Track| null> (null); 

    function handleTrackClick(track: Track) {
        setSelectedTrack(track);
    }

    return (
        <div className="flex flex-col justify-center items-center">
            {/* <div className="mt-10">
                {selectedTrack && (
                    <Image 
                        src = {selectedTrack.image}
                        alt= {selectedTrack.name}
                        width = {100}
                        height = {100}
                        className = "w-60"
                    />
                )}
                </div> */}

            <div className="flex flex-col gap-4 mt-20">
                {trackList.map(track => (
                    
                    <TrackCard 
                        key = {track.id}
                        track = {track}
                        onClick = { () => handleTrackClick(track)}
                        isSelected = {selectedTrack?.id === track.id}
                    />
                ))}

                {selectedTrack && (
                    <TrackModal
                        track = {selectedTrack}
                        onClose = { () => setSelectedTrack(null)}
                    />
                )}
            </div>

        </div>
    )
}