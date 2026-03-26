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
                    width = {300}
                    height = {300}
                    className="w-[clamp(300px,50vw,400px)] md:w-[clamp(200px,40vw,350px)] h-auto"
                />
            </div>

            <div className = "flex flex-col gap-8 md:grid grid-cols-2 md:gap-x-70 max-h-[50vh] overflow-y-auto md:max-h-none md:overflow-visible">
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