import BirdBtn from "@/components/birdBtn";
import SnippetVid from "@/components/snippetVid";
import Image from "next/image";
import Link from "next/link";


export default function Snippets() {

    const img: string = "/assets/lock.png";

    return (
        <div className="flex flex-col justify-center items-center">

            <div className="flex flex-col h-auto max-h-[380px] md:max-h-[480px] justify-center items-center ">
                <div className = "flex flex-col gap-8 md:grid md:grid-cols-2 overflow-y-auto md:overflow-hidden">
                    <SnippetVid video = {"/videos/video1.mp4"} locked = {false}/>
                    <SnippetVid video = {img} locked = {true}/>
                    <SnippetVid video = {img} locked = {true}/>
                    <SnippetVid video = {img} locked = {true}/>
                </div>
            </div>

            <Link href="/" className="pt-8">
                <BirdBtn/>
            </Link>
        </div>
    )
}