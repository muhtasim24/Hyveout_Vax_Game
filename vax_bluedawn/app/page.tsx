import CodeInput from "@/components/codeInput";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">
        <Image 
          src={"/logo.png"} 
          alt="blue dawn logo"
          width = {200}
          height = {200}
          className="w-150 h-55"
        />
      </div>

      <div className="flex flex-col items-center space-y-6 mt-20">
        <CodeInput />
      </div>
      
      <div className="flex flex-col items-center space-y-2 mt-40">
        <Link href="/snippets" className="text-2xl">WATCH SNIPPETS</Link>
      </div>
    </div>
  );
}
