'use client';
import { Track } from "@/data/TrackList";


type Props = {
    track: Track;
   
}

export default function TrackCard( { track } : Props) {
    return (
        <div>
            <h1>{track.name}</h1>
        </div>
    )
}