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
        <div className="w-full h-full flex flex-col justify-start items-center pt-1 gap-2 px-4 md:pt-4 md:gap-4">

            <div className="w-full max-w-[900px] flex flex-col items-center md:flex-row md:justify-center md:items-center md:gap-10">

                {/* LEFT SIDE DESKTOP */}
                <div className="hidden md:flex flex-col flex-1">
                    <TrackSelect trackList={leftTrack} />
                </div>

                <div className="flex flex-col items-center flex-1 gap-2">
                    <h1 className={`${player2.className} text-blue-500 font-bold text-xl md:text-2xl lg:text-3xl md:-mt-2 [text-shadow:_1px_0_0_white,_-1px_0_0_white,_0_1px_0_white,_0_-1px_0_white] `}>4/24/26</h1>
                    
                    <div className="relative aspect-square w-[15vh] md:w-[clamp(150px,20vw,270px)]">
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
                <div className="flex flex-col md:hidden w-full max-h-[25vh] overflow-y-auto">
                    <TrackSelect trackList={trackList} />
                </div>

            </div>

            <Link href="/" className="flex-shrink-0 mt-auto">
                <BirdBtn/>
            </Link>
        </div>
    )
}