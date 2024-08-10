import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import QueryProvider from "./client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Morayta: Architecture Board Exam Reviewer",
  description: "Online reviewer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={inter.className}> 
        <QueryProvider> 
          { children }
        </QueryProvider>
      </body>
    </html>
  );
}
