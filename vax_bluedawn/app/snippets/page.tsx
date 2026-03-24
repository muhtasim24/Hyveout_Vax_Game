import BirdBtn from "@/components/birdBtn";
import SnippetVid from "@/components/snippetVid";
import Image from "next/image";
import Link from "next/link";


export default function Snippets() {

    const img: string = "/assets/lock.png";

    return (
        <div className="flex flex-col justify-center items-center gap-8">
            <div className="">
                <Image 
                    src={"/assets/logo.png"} 
                    alt="blue dawn logo"
                    width = {200}
                    height = {200}
                    className="w-80 h-15 mt-10 float md:w-160 md:h-30"
                />
            </div>

            <div className = "flex flex-col gap-8 mt-1 md:grid grid-cols-2">
                <SnippetVid video = {"/videos/video1.mp4"} locked = {false}/>
                <SnippetVid video = {img} locked = {true}/>
                <SnippetVid video = {img} locked = {true}/>
                <SnippetVid video = {img} locked = {true}/>

            </div>

            <Link href="/">
                <BirdBtn/>
            </Link>
        </div>
    )
}