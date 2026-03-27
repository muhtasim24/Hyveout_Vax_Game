import BirdBtn from "@/components/birdBtn";
import SnippetVid from "@/components/snippetVid";
import Image from "next/image";
import Link from "next/link";


export default function Snippets() {

    const img: string = "/assets/lock.png";

    return (
        <div className="flex flex-col justify-between items-center py-0">
            <div>
                <Image 
                    src={"/assets/logo.png"} 
                    alt="blue dawn logo"
                    width = {300}
                    height = {300}
                    className="w-[clamp(300px,40vw,450px)] h-auto"
                />
            </div>

            <div className="w-[60%] max-w-[700px] flex flex-col h-auto max-h-[400px] md:max-h-[500px] justify-center items-center overflow-hidden">
                <div className = "flex flex-col gap-8 md:grid md:grid-cols-2 overflow-y-auto md:overflow-hidden">
                    <SnippetVid video = {"/videos/video1.mp4"} locked = {false}/>
                    <SnippetVid video = {img} locked = {true}/>
                    <SnippetVid video = {img} locked = {true}/>
                    <SnippetVid video = {img} locked = {true}/>
                </div>
            </div>

            <Link href="/">
                <BirdBtn/>
            </Link>
        </div>
    )
}