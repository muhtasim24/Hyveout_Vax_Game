'use client';

import { useState } from "react";
import Image from "next/image";


export default function BirdBtn() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true); // stays red after click
  };

  return (
    <div
      className="relative inline-block cursor-pointer group"
      onClick={handleClick}
    >
      {/* White bird: show if not hovered and not clicked */}
      {!clicked && (
        <Image
            src="/assets/whitebird.png"
            alt="white bird"
            width={100}
            height={100}
            className="block group-hover:hidden w-16 md:w-20 lg:w-24 h-auto"
        />
      )}

      {/* Red bird: show on hover OR clicked */}
      {(clicked) && (
        <Image
            src="/assets/redbird.png"
            alt="red bird"
            width={100}
            height={100}
        />
      )}
      {!clicked && (
        <Image
            src="/assets/redbird.png"
            alt="red bird"
            width={100}
            height={100}
            className="hidden group-hover:block w-16 md:w-20 lg:w-24 h-auto"
        />
      )}
    </div>
  );
}