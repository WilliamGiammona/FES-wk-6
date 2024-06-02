import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header
          className="relative h-48"
          style={{
            backgroundImage: "url('/images/PopcornBg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-blue-800 opacity-80"></div>
          <div className="relative flex flex-col justify-center items-center h-full">
            <div className="flex justify-between items-center w-full max-w-4xl px-4 mx-auto">
              <div className="logo">
                <Image
                  src="/favicon.ico"
                  alt="Logo"
                  width={48}
                  height={24}
                  className="h-12"
                />
              </div>
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="text-gray-300 text-xl mr-12 hover:text-gray-500"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-300 text-xl mr-12 hover:text-gray-500"
                >
                  About
                </Link>
              </div>
            </div>
            <div className="relative flex flex-col items-center mt-4">
              <label htmlFor="browseMovies" className="text-white text-xl mb-2">
                Browse our movies
              </label>
              <input
                type="text"
                id="browseMovies"
                name="browseMovies"
                placeholder="Search for a movie..."
                className="p-2 rounded-md bg-gray-800 text-white placeholder-gray-500"
              />
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
