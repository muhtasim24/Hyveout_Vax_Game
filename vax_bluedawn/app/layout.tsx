import type { Metadata } from "next";
import { GFS_Didot, Press_Start_2P } from "next/font/google";
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
        {children}
      </body>
    </html>
  );
}
