// app/layout.tsx
// This is the root layout for your entire application.
// It sets up the global font (Inter) and basic body styling.
// Modified to work in a generic React environment by using CDN links.

import type { Metadata } from "next";
import React from 'react';
import Script from 'next/script';
import { Inter } from 'next/font/google';

// Configure the Inter font
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

// Metadata is a Next.js concept and might not be used by the renderer,
// but we'll leave it for context and use it to set the title.
export const metadata: Metadata = {
  title: "Wertex | Learn German",
  description: "The best way to learn German through conversation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.description)} />
        
        {/* Add Tailwind CSS via CDN to handle styling */}
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        

      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
