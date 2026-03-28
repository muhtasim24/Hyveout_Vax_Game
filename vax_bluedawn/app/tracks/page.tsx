import Link from "next/link";
import { getTrack } from "@/lib/getTrack";
import TrackSelect from "@/components/trackSelect";
import Image from "next/image";
import BirdBtn from "@/components/birdBtn";
import {Press_Start_2P} from "next/font/google";

const player2 = Press_Start_2P( {
    weight: '400',
    subsets: ['latin'],
  })

export default async function Tracks() {
    const trackList = await getTrack();
    const leftTrack = trackList.slice(0,5);
    const rightTrack = trackList.slice(5,10);
    
    console.log(trackList);
    return (
        <div className="flex flex-col justify-center items-center -mt-8 md:mt-6">

            <div className="w-full max-w-[900px] flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center md:gap-10">

                {/* LEFT SIDE DESKTOP */}
                <div className="hidden md:flex flex-col flex-1">
                    <TrackSelect trackList={leftTrack} />
                </div>

                <div className="flex flex-col items-center flex-1 gap-4">
                    <h1 className={`${player2.className} text-purple-400 font-bold text-2xl md:text-4xl lg:text-4xl md:-mt-2`}>4/17/26</h1>
                    
                    <div className="relative aspect-square w-[clamp(150px,15vw,250px)] md:w-[clamp(180px,20vw,270px)]">
                        <Image 
                            src = {"/assets/lock.png"}
                            alt = "cover art"
                            fill
                            className="bg-white object-contain"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE DESKTOP */}
                <div className="hidden md:flex flex-col flex-1">
                    <TrackSelect trackList={rightTrack} />
                </div>

                {/* MOBILE ALWAYS */}
                <div className="flex flex-col md:hidden overflow-hidden">
                    <TrackSelect trackList={trackList} />
                </div>

            </div>

            <Link href="/" className="pt-10">
                <BirdBtn/>
            </Link>
        </div>
    )
}