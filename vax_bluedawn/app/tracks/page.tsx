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

           
            <div className="w-full max-w-[900px] flex flex-col justify-center items-center md:flex-row md:justify-center md:items-start md:gap-6">

                {/* LEFT SIDE DESKTOP */}
                <div className="hidden md:flex flex-col gap-4">
                    <TrackSelect trackList={leftTrack} />
                </div>

                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-purple-400 font-bold text-2xl md:text-4xl lg:text-5xl">4/17/26</h1>
                    <Image 
                        src = {"/assets/lock.png"}
                        alt = "cover art"
                        width = {300}
                        height = {300}
                        className="bg-white aspect-square w-[30vw] md:w-[15vw] min-w-[120px] md:min-w-[180px]"
                    />
                </div>

                {/* RIGHT SIDE DESKTOP */}
                <div className="hidden md:flex flex-col gap-2">
                    <TrackSelect trackList={rightTrack} />
                </div>

                {/* MOBILE ALWAYS */}
                <div className="flex flex-col md:hidden">
                    <TrackSelect trackList={trackList} />
                </div>

            </div>

            <Link href="/" className="mt-2">
                <BirdBtn/>
            </Link>
        </div>
    )
}