import BirdBtn from "@/components/birdBtn";
import CodeInput from "@/components/codeInput";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Image 
          src={"/assets/logo.png"} 
          alt="blueDawn logo"
          width = {300}
          height = {300}
          className=""
        />
      </div>

      <div className="flex flex-col items-center mt-10 xl:mt-18">
        <CodeInput />
      </div>
      
      <div className="flex flex-col items-center w-[18vw] gap-2 mt-30 xl:mt-45">
        <Link href="/bluedawn" className="cursor-pointer">
          <BirdBtn/>
        </Link>

        <Link href="/snippets" className="text-3xl cursor-pointer text-white hover:text-red-500 active:text-red-700 font-bold xl:text-5xl">DATABASE</Link>
      </div>
    </div>
  );
}
