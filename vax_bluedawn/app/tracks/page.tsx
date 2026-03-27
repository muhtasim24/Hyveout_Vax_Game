import Link from "next/link";
import { getTrack } from "@/lib/getTrack";
import TrackCard from "@/components/trackCard";
import TrackSelect from "@/components/trackSelect";
import Image from "next/image";
import BirdBtn from "@/components/birdBtn";



export default async function Tracks() {
    const trackList = await getTrack();
    const leftTrack = trackList.slice(0,5);
    const rightTrack = trackList.slice(5,10);
    console.log(trackList);
    return (
        <div className="flex flex-col justify-center items-center">

            <div className="h-[60vh] flex flex-col items-center -mt-6 lg:flex-row lg:justify-center lg:items-start lg:gap-6">

                {/* LEFT SIDE DESKTOP */}
                <div className="hidden lg:flex flex-col gap-2">
                    <TrackSelect trackList={leftTrack} />
                </div>

                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-purple-400 font-bold text-2xl">4/17/26</h1>
                    <Image 
                        src = {"/assets/lock.png"}
                        alt = "cover art"
                        width = {100}
                        height = {100}
                        className="bg-white w-[clamp(60px,30vw,150px)] h-[clamp(20px, 15vw, 140px)]"
                    />
                </div>

                {/* RIGHT SIDE DESKTOP */}
                <div className="hidden lg:flex flex-col gap-2">
                    <TrackSelect trackList={rightTrack} />
                </div>

                {/* MOBILE ALWAYS */}
                <div className="flex flex-col lg:hidden">
                    <TrackSelect trackList={trackList} />
                </div>
   
            </div>

            <Link href="/" className="mt-2">
                <BirdBtn/>
            </Link>
        </div>
    )
}