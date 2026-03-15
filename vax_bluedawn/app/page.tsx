import CodeInput from "@/components/codeInput";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Image 
          src={"/logo.png"} 
          alt="blue dawn logo"
          width = {300}
          height = {300}
        />
      </div>

      <div>
        <CodeInput />
      </div>
      
      <div className="flex flex-col items-center space-y-2 mb-4 text-white">
        <Link href="/snippets" className="text-2xl">WATCH SNIPPETS</Link>
      </div>
    </div>
  );
}
