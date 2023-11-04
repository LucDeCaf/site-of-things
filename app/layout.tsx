import type { Metadata } from "next"
import { Geologica } from "next/font/google"
import "./globals.scss"
import Navbar from "@/app/components/Navbar"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

const mainFont = Geologica({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Site of Things",
  description: "A website dedicated to thingamabobs, doohickeys, and deedads",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
