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
        <div className="h-[80vh] flex flex-col justify-between items-center py-2">

            <div>
                <Image                        
                    src = {"/assets/logo.png"}
                    alt= {"logo"}
                    width = {300}
                    height = {300}
                    className = "w-[clamp(300px,40vw,400px)] h-auto"
                />
            </div>

            <div className="flex flex-col items-center -mt-6 lg:flex-row lg:justify-center lg:items-start lg: gap-6">

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
                        className="bg-white w-[clamp(80px,40vw,180px)] h-[clamp(40px, 20vw, 150px)]"
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