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
    <div className="flex flex-col justify-between items-center">

      <CodeInput onCorrectCode = {handleCorrectCode}/>

      
      <div className="flex flex-col items-center gap-2 mt-10">
        <Link href="/bluedawn" className="cursor-pointer">
          <BirdBtn/>
        </Link>

        <Link href="/snippets" className="text-3xl cursor-pointer text-white hover:text-red-500 active:text-red-700 font-bold xl:text-5xl w-auto static">DATABASE</Link>
      </div>

      {showAnimation && (
        <video
          className="fixed inset-0 w-full h-full object-cover z-[999]"
          src = "/animation.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onCanPlay={ (e) => e.currentTarget.play()}
          onEnded = { () => router.push("/tracks")}
        />
      )} 
    </div>
  );
}
