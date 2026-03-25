import BirdBtn from "@/components/birdBtn";
import CodeInput from "@/components/codeInput";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[80vh] flex flex-col justify-between items-center py-2">
      <div>
        <Image 
          src={"/assets/logo.png"} 
          alt="blueDawn logo"
          width = {300}
          height = {300}
          className="lg:w-[20vw]"
          
        />
      </div>

      <div className="">
        <CodeInput />
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <Link href="/bluedawn" className="cursor-pointer">
          <BirdBtn/>
        </Link>

        <Link href="/snippets" className="text-3xl cursor-pointer text-white hover:text-red-500 active:text-red-700 font-bold xl:text-5xl">DATABASE</Link>
      </div>
    </div>
  );
}
