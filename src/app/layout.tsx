import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/main/components/ui/toaster";
import SWRConfigProvider from "@/main/providers/swr";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "UNG Starter",
    description: "Create skeleton nextjs",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <SWRConfigProvider>
                    <Suspense>
                        {children}
                    </Suspense>
                    <Toaster />
                </SWRConfigProvider>
            </body>
        </html>
    );
}
