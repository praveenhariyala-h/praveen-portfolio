import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Praveen Kumar — Senior React Developer",
  description: "Praveen Kumar is a Senior React Developer with over 5 years of experience in building scalable web applications. He specializes in React, TypeScript, and Node.js, and has a strong background in front-end development. Praveen is passionate about creating user-friendly interfaces and optimizing performance. He has worked on various projects, ranging from small startups to large enterprises, and is known for his problem-solving skills and attention to detail." ,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
