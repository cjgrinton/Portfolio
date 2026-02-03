import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const customFont = localFont({
  src: "./fonts/sonicCD.ttf",
  variable: "--font-CD",
});

export const metadata: Metadata = {
  title: "Personal Portfolio Website",
  description: "My First Portfolio ahh site"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${customFont.variable} antialiased`}>
        <div className="
          min-h-screen p-4

          relative overflow-hidden 

          flex items-center justify-center

         text-gray-800 dark:text-gray-100 
         
          bg-base-image
          ">

          {/* Moving Clouds Layer: placed here to sit behind the Children content */}
          {/* this div uses the absolute positioning defined in the CSS to cover the background */}

          <div className="bg-moving-clouds absolute top-0 left-0 w-full h-full z-0" />

          {children}
        </div>
      </body>
    </html>
  );
}