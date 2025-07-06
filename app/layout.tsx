import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | microCMS with motion components",
    default: "microCMS with motion components",
  },
  description: "「Next.js + Tailwind CSS + microCMS」を使ったデモサイトです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
