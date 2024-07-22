import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import InitialLoading from "@/components/initial-loading";
import { Suspense } from "react";
import InitialLoadingSkeleton from "@/components/initial-loading skeleton";
import StarBackground from "@/components/background";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Tăng Bảo Kiên | Fullstack Developer",
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
            <body className={montserrat.className + " bg-black"}>
                {children}
                <Suspense fallback={<InitialLoadingSkeleton />}>
                    <InitialLoading />
                </Suspense>
                <StarBackground />
            </body>
        </html>
    );
}
