import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Discord Voice Note Taker – AI Meeting Notes from Discord",
  description: "Records Discord voice channels and generates structured meeting notes with action items and decisions. Built for gaming startups and Discord-native communities."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b4614c37-c773-4c18-a767-afcbed56d5ca"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
