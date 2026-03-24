'use client';

import Image from "next/image";

export default function BirdBtn() {
    return (
        <div className="group relative inline-block cursor-pointer">
            <Image 
                src="/assets/whitebird.png"
                alt="white bird"
                width={100}
                height={100}
                className="block group-hover:hidden"
            />

            <Image 
                src="/assets/redbird.png"
                alt="red bird"
                width={100}
                height={100}
                className="hidden group-hover:block"
            />
        </div>
    )
}