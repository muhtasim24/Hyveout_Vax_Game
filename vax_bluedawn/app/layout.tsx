import type { Metadata } from "next";
import { GFS_Didot, Press_Start_2P } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import localFont from "next/font/local";
import BackgroundMedia from "@/components/backgroundMedia";
import FloatingStars from "@/components/floatingStars";

const player2 = Press_Start_2P( {
  weight: '400',
  subsets: ['latin'],
})

const didot = GFS_Didot( {
  weight: '400',
  subsets: ['latin'],
})

const blueScreen = localFont({
  src: "../public/blueScreen.ttf",
  variable: "--font-blue-screen",
});

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
        className={`${blueScreen.className} flex flex-col overflow-hidden`}
        style={ {height:'100dvh'}}
      >
        <BackgroundMedia/>
        <FloatingStars/>
        <div className="flex-shrink-0 flex justify-center items-center z-[-9] floatLogo">
          <Image 
            src={"/assets/logo.png"} 
            alt="blueDawn logo"
            width = {300}
            height = {300}
            className="w-[clamp(220px,50vw,300px)] md:w-[clamp(200px,40vw,350px)] h-auto mt-6 z-[-9] md:mt-2"
          />
        </div>
        <div className="flex-1 min-h-0 flex flex-col justify-center items-center overflow-hidden pb-2">
          {children}
        </div>
        <footer className = "flex-shrink-0 text-center py-1 mb-2">
          <h1 className = "text-white/60 text-sm md:text-2xl">powered by hyveout</h1>
        </footer>
      </body>
    </html>
  );
}
