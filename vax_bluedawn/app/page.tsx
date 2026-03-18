import CodeInput from "@/components/codeInput";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">
        <Image 
          src={"/logo1.png"} 
          alt="blueDawn logo"
          width = {200}
          height = {200}
          className="w-80 h-15 mt-10 float md:w-160 md:h-30"
        />
      </div>

      <div className="flex flex-col items-center space-y-6 mt-30">
        <CodeInput />
      </div>
      
      <div className="flex flex-col items-center space-y-2 mt-80">
        <Link href="/snippets" className="text-2xl cursor-pointer text-white hover:text-red-500 active:text-red-700 md:text-4xl">DATABASE</Link>
      </div>
    </div>
  );
}
