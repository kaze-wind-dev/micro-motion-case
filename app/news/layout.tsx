import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "デモサイトのお知らせ一覧です",
};

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
