import BirdBtn from "@/components/birdBtn";
import SnippetVid from "@/components/snippetVid";
import Image from "next/image";
import Link from "next/link";


export default function Snippets() {

    const img: string = "/assets/lock.png";

    return (
        <div className="flex flex-col justify-center items-center pt-4">

            <div className="flex flex-col h-auto justify-center items-center overflow-hidden">
                <div className = "grid grid-cols-1 gap-8 md:grid-cols-2 overflow-y-auto no-scrollbar md:overflow-hidden max-h-[350px] md:max-h-none p-6">
                    <SnippetVid video = {"/videos/video1.mp4"} locked = {false}/>
                    <SnippetVid video = {img} locked = {true}/>
                    <SnippetVid video = {img} locked = {true}/>
                    <SnippetVid video = {img} locked = {true}/>
                </div>
            </div>

            <Link href="/" className="pt-4">
                <BirdBtn/>
            </Link>
        </div>
    )
}