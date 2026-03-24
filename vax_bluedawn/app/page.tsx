import CodeInput from "@/components/codeInput";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">
        <Image 
          src={"/logo.png"} 
          alt="blueDawn logo"
          width = {300}
          height = {300}
          className="w-90 h-60 mt-4 float md:w-100 md:h-70 md:-mt-7"
        />
      </div>

      <div className="flex flex-col items-center space-y-6 mt-30 md:mt-15 lg:mt-30">
        <CodeInput />
      </div>
      
      <div className="flex flex-col items-center space-y-2 mt-30 md:mt-30 lg:mt-60">
        <Link href="/snippets" className="text-2xl cursor-pointer text-white hover:text-red-500 active:text-red-700 md:text-4xl">DATABASE</Link>

        <Link href="/bluedawn" className="text-2xl cursor-pointer text-white hover:text-red-500 active:text-red-700 md:text-4xl">BLUE DAWN</Link>
      </div>
    </div>
  );
}
