import Link from "next/link";
import { getTrack } from "@/lib/getTrack";
import TrackCard from "@/components/trackCard";
import TrackSelect from "@/components/trackSelect";



export default async function Tracks() {
    const trackList = await getTrack();
    console.log(trackList);
    return (
        <div className="flex flex-col justify-center items-center gap-10">
            <TrackSelect trackList = {trackList}/>
            <h1 className="text-white text-5xl">4/17/26</h1>
            <Link href="/" className="text-white text-3xl">GO BACK</Link>
        </div>
    )
}