import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "microCMS with motion components",
  description: "「Next.js + Tailwind CSS + microCMS」を使ったでもサイトです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
