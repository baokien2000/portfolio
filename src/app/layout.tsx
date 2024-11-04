import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import StarBackground from "@/components/background";
import InitialLoadingSkeleton from "@/components/loading/initial-loading skeleton";
import InitialLoading from "@/components/loading/initial-loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: "%s | Tăng Bảo Kiên | Fullstack Developer",
        default: "Tăng Bảo Kiên | Fullstack Developer",
    },
    description: `I am excited to apply for a challenging and rewarding position that allows me to apply my skills and knowledge
to become a professional programmer.`,
    icons: {
        icon: "/favicon.ico",
        apple: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className} style={inter.style}>
                {children}
                <Suspense fallback={<InitialLoadingSkeleton />}>
                    <InitialLoading />
                </Suspense>
                <StarBackground />
            </body>
        </html>
    );
}
