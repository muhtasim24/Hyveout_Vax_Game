import Link from "next/link";
import { getTrack } from "@/lib/getTrack";
import TrackCard from "@/components/trackCard";
import TrackSelect from "@/components/trackSelect";



export default async function Tracks() {
    const trackList = await getTrack();
    console.log(trackList);
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <TrackSelect trackList = {trackList}/>

            <h1 className="text-white text-4xl mt-2 md:text-5xl">4/17/26</h1>
            <Link href="/" className="text-white text-2xl hover:text-red-500 active:text-red-700 mt-2 md:text-4xl">GO BACK</Link>
        </div>
    )
}