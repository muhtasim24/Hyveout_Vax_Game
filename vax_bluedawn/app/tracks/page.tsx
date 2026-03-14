import Link from "next/link";
import { getTrack } from "@/lib/getTrack";
import TrackCard from "@/components/trackCard";



export default async function Tracks() {
    const trackList = await getTrack();

    return (
        <div>
            <h1>Tracks</h1>
            {trackList.map(track => (
                <TrackCard 
                    key = {track.id}
                    track = {track}
                />
            ))}

            <Link href="/">GO BACK</Link>
        
        </div>
    )
}