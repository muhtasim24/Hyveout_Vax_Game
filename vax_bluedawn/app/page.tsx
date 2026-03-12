import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Hi</h1>
      <Link href="/tracks">ENTER CODE</Link>
      <Link href="/snippets">WATCH SNIPPETS</Link>
    </div>
  );
}
