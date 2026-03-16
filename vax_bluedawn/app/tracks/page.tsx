import Link from "next/link";
import { getTrack } from "@/lib/getTrack";
import TrackCard from "@/components/trackCard";
import TrackSelect from "@/components/trackSelect";



export default async function Tracks() {
    const trackList = await getTrack();

    return (
        <div>
            <TrackSelect trackList = {trackList}/>

            <Link href="/" className="text-white">GO BACK</Link>
        
        </div>
    )
}