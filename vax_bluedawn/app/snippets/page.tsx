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
                    className="w-80 h-15 mt-10 float"
                />
            </div>

            <div className = "flex flex-col gap-8 mt-10">
                <SnippetVid video = {"/video1.mp4"} locked = {false}/>
                <SnippetVid video = {img} locked = {true}/>
                <SnippetVid video = {img} locked = {true}/>
                <SnippetVid video = {img} locked = {true}/>

            </div>

            <Link href="/" 
                className="text-white text-2xl cursor-pointer 
                hover:text-red-500 
                active:text-red-700"
                
                >GO BACK</Link>
        </div>
    )
}