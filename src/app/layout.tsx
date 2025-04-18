import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "서목공영 | 전문 토목기업",
  description: "전문 토목기업 서목공영입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={inter.className}>
        <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <a href="#" className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <Image
                    src="/images/logo.png"
                    alt="서목공영 로고"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span className="text-xl font-bold">서목공영</span>
              </a>
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="hover:text-blue-500 transition-colors">
                  회사소개
                </a>
                <a href="#projects" className="hover:text-blue-500 transition-colors">
                  사업영역
                </a>
                <a href="#skills" className="hover:text-blue-500 transition-colors">
                  기술스택
                </a>
                <a href="#contact" className="hover:text-blue-500 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <Image
                    src="/images/logo.png"
                    alt="서목공영 로고"
                    fill
                    style={{ objectFit: "contain" }}
                    className="brightness-0 invert"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">서목공영</h3>
                  <p className="text-gray-400">전문 토목기업</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <p className="text-gray-400">Tel: [전화번호]</p>
                <p className="text-gray-400">Email: [이메일]</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Address</h3>
                <p className="text-gray-400">[회사 주소]</p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} 서목공영. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
