import type { Metadata } from "next";
import { GFS_Didot, Press_Start_2P } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import localFont from "next/font/local";

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
        className={`${blueScreen.className}`}
      >
        <video 
          className="fixed w-full h-full object-cover z-[-10]"
          controls={false}
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
          poster="/assets/fallBack.jpg"
          >
          <source src="/background.mp4" type="video/mp4"/>
        </video>
        <div className="flex justify-center items-center z-[-9] float">
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
