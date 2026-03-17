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
          className="w-100 h-20 mt-10 float"
        />
      </div>

      <div className="flex flex-col items-center space-y-6 mt-30">
        <CodeInput />
      </div>
      
      <div className="flex flex-col items-center space-y-2 mt-60">
        <Link href="/snippets" className="text-2xl">WATCH SNIPPETS</Link>
      </div>
    </div>
  );
}
