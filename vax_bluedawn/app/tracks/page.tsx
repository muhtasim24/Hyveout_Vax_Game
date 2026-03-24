import Link from "next/link";
import { getTrack } from "@/lib/getTrack";
import TrackCard from "@/components/trackCard";
import TrackSelect from "@/components/trackSelect";
import Image from "next/image";
import BirdBtn from "@/components/birdBtn";



export default async function Tracks() {
    const trackList = await getTrack();
    console.log(trackList);
    return (
        <div className="flex flex-col justify-center items-center gap-4">

            <Image                        
                src = {"/assets/logo.png"}
                alt= {"logo1"}
                width = {100}
                height = {100}
            />

            <TrackSelect trackList = {trackList}/>

            <h1 className="text-white text-4xl mt-2 md:text-5xl">4/17/26</h1>
            <Link href="/" className="">
                <BirdBtn/>
            </Link>
        </div>
    )
}