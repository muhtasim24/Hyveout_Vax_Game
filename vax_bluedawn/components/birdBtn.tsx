'use client';

import { useState } from "react";
import Image from "next/image";


export default function BirdBtn() {
  const [clicked, setClicked] = useState(false);
  const [pressed, setPressed] = useState(false);

  return (
    <div
      className="relative inline-block cursor-pointer group bird-float"
      onClick = {() => setClicked(true)}
      onTouchStart = { () => setPressed(true)}
      onTouchEnd = { () => setPressed(false)}
    >
       {/* Red bird: show when clicked, hovered, or touch pressed */}
       {(clicked || pressed) ? (
        <Image
          src="/assets/redbird.png"
          alt="red bird"
          width={100}
          height={100}
          className="w-16 md:w-20 lg:w-24 h-auto"
        />
      ) : (
        <>
          {/* White bird — desktop only, hides on hover */}
          <Image
            src="/assets/whitebird.png"
            alt="white bird"
            width={100}
            height={100}
            className="block group-hover:hidden w-16 md:w-20 lg:w-24 h-auto"
          />
          {/* Red bird — desktop hover only */}
          <Image
            src="/assets/redbird.png"
            alt="red bird"
            width={100}
            height={100}
            className="hidden group-hover:block w-16 md:w-20 lg:w-24 h-auto"
          />
        </>
      )}
    </div>
  );

}