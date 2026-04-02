import BirdBtn from "@/components/birdBtn";
import Link from "next/link";


export default function NotFound() {
    return (
         <div className="w-full h-full flex flex-col justify-center items-center gap-4">
            <h1 className="text-white font-bold text-2xl md:text-3xl text-center max-w-[70vw] md:max-w-[500px]">Nice try, page doesn't exist</h1>
            <Link href="/">
                <BirdBtn/>
            </Link>

         </div>
    )
}