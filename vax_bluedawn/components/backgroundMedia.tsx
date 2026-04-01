'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";


export default function BackgroundMedia() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoFailed, setVideoFailed] = useState(false);

    useEffect( () => {
        const video = videoRef.current;
        if (!video) return;

        // Autoplay blocked, low power mode, etc. 
        video.play().catch( () => { // returns a Promise that rejects when autoplay is blocked. Catching the rejection lets us swap to an img
            setVideoFailed(true);
        });
    }, []);

    // if videoFails, we show img
    if (videoFailed) {
        return (
            <Image
                src="/assets/newFallBack.jpg"
                alt="background img static failback"
                className="fixed w-full h-full object-cover z-[-10]"
            />
        )
    }

    return (
        <video
            ref = {videoRef}
            className = "fixed w-full h-full object-cover z-[-10]"
            autoPlay
            loop
            muted
            playsInline
            preload = "auto"
            poster = "/assets/fallBack.jpg"
        >
            <source src = "/background.mp4" type = "video/mp4" />
        </video>
    )
}