'use client';
import BirdBtn from "@/components/birdBtn";
import CodeInput from "@/components/codeInput";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(false);
  const router = useRouter();

  function handleCorrectCode() {
    setShowAnimation(true);
  }

  return (
    <div className="h-[80vh] flex flex-col justify-between items-center py-2">
      <div>
        <Image 
          src={"/assets/logo.png"} 
          alt="blueDawn logo"
          width = {300}
          height = {300}
          className="w-[clamp(300px,40vw,400px)] h-auto"
          
        />
      </div>

      <div className="">
        <CodeInput onCorrectCode = {handleCorrectCode}/>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <Link href="/bluedawn" className="cursor-pointer">
          <BirdBtn/>
        </Link>

        <Link href="/snippets" className="text-3xl cursor-pointer text-white hover:text-red-500 active:text-red-700 font-bold xl:text-5xl">DATABASE</Link>
      </div>

      {showAnimation && (
        <video
          className="fixed w-full h-full object-cover z-[999]"
          src = "/animation.mp4"
          autoPlay
          muted
          playsInline
          onEnded = { () => router.push("/tracks")}
        />
      )} 
    </div>
  );
}
