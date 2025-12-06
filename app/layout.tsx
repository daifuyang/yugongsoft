import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "愚公软件 | 移山之智，匠心之软",
  description: "结合传统坚韧精神与现代智能科技的企业级软件解决方案。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}