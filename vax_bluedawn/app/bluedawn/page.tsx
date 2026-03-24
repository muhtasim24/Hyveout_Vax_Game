import BirdBtn from "@/components/birdBtn";
import Image from "next/image";
import Link from "next/link";


export default function BlueDawn() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center align-center mt-40 gap-8">
                <h1 className="text-white w-120">A blue dawn arises between the night sky and the sunrise.</h1>
                <h1 className="text-white w-120">Things are uncertain at this moment, but with time everything comes into focus</h1>
            </div>

        <Link href="/" className="text-2xl cursor-pointer text-white hover:text-red-500 active:text-red-700 md:text-4xl">
          <BirdBtn/>
        </Link>
        </div>
    )
}