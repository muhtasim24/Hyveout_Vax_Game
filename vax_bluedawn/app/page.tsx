import CodeInput from "@/components/codeInput";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Hi</h1>
      <CodeInput></CodeInput>
      <Link href="/tracks">ENTER CODE</Link>
      <Link href="/snippets">WATCH SNIPPETS</Link>
    </div>
  );
}
