import type { Metadata } from "next";
import { GFS_Didot, Press_Start_2P } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const player2 = Press_Start_2P( {
  weight: '400',
  subsets: ['latin'],
})

const didot = GFS_Didot( {
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Vax Blue Dawn",
  description: "Hyveout: Blue Dawn Interactive Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${didot.className}`}
      >
        <video 
          className="fixed w-full h-full object-cover z-[-10]"
          autoPlay
          loop
          muted
          playsInline
          >
          <source src="/background.mp4" type="video/mp4"/>
        </video>
        <div className="flex justify-center items-center z-[-9]">
          <Image 
            src={"/assets/logo.png"} 
            alt="blueDawn logo"
            width = {300}
            height = {300}
            className="w-[clamp(300px,50vw,400px)] md:w-[clamp(200px,40vw,350px)] h-auto mt-6 z-[-9] md:mt-2"
            
          />
        </div>
        {children}
      </body>
    </html>
  );
}
