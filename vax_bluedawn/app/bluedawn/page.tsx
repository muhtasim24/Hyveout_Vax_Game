import BirdBtn from "@/components/birdBtn";
import Image from "next/image";
import Link from "next/link";


export default function BlueDawn() {
    return (
        <div className="h-[80vh] flex flex-col justify-between items-center py-2">
          
                <div className="flex flex-col items-center gap-6">
                    <h1 className="text-white font-bold text-2xl md:text-3xl text-center max-w-[70vw] md:max-w-[500px]">A blue dawn arises between the night sky and the sunrise.</h1>
                    <h1 className="text-white font-bold text-2xl md:text-3xl text-center max-w-[80vw] md:max-w-[680px]">Things are uncertain at this moment, but with time everything comes into focus</h1>
                </div>

                <Link href="/" className="text-2xl cursor-pointer text-white hover:text-red-500 active:text-red-700 md:text-4xl">
                    <BirdBtn/>
                </Link>
            
        </div>
    )
}