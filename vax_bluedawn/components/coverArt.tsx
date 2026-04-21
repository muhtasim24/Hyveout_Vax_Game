'use client';

import Image from "next/image";
import { useState } from "react";

export default function CoverArt() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* SMALL IMAGE */}
      <div
        className="relative aspect-square w-[15vh] md:w-[clamp(150px,20vw,270px)] cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <Image
          src="/assets/coverArt.jpg"
          alt="cover art"
          fill
          className="object-contain"
        />
      </div>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999]"
          onClick={() => setOpen(false)}
        >
          <div className="relative w-[80vw] max-w-[600px] aspect-square">
            <Image
              src="/assets/coverArt.jpg"
              alt="cover art large"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}