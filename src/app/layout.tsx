import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClueForge",
  description: "Create your own Escape Rooms!",
};

export default function RootLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
){
  return (
    <html lang="en">
      <body
        className={"font-wix antialiased min-h-screen text-text-primary"}>
        {children}
      </body>
    </html>
  );
}
