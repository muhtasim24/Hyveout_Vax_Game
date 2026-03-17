import SnippetVid from "@/components/snippetVid";
import Image from "next/image";
import Link from "next/link";


export default function Snippets() {

    const img: string = "/lock1.png";

    return (
        <div className="flex flex-col justify-center items-center gap-8">
            <div className="">
                <Image 
                    src={"/logo1.png"} 
                    alt="blue dawn logo"
                    width = {200}
                    height = {200}
                    className="w-100 h-20 mt-10 float"
                />
            </div>

            <div className = "grid grid-cols-2 gap-8 mt-10">
                <SnippetVid video = {img}/>
                <SnippetVid video = {img}/>
                <SnippetVid video = {img}/>
                <SnippetVid video = {img}/>

            </div>

            <Link href="/" className="text-white text-3xl">GO BACK</Link>
        </div>
    )
}