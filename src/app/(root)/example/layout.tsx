import Link from "next/link";
import { Suspense } from "react";

export default function ExampleLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="pt-16">
            <div className="fixed top-0  inset-x-0 z-50 w-full py-4 bg-gradient-to-r from-pink-500 from-10% via-purple-500 via-30% to-indigo-500 to-90%">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div className="text-white text-sm font-semibold leading-4">
                                <Link href="/dashboard">Dashboard</Link>
                            </div>
                        </div>
                        <div className="text-white text-sm font-semibold leading-4">
                            <Link href="/user" className="py-2 px-2.5 rounded-full bg-slate-200 text-xs font-semibold leading-3 text-black">U</Link>
                        </div>
                    </div>
                </div>
            </div>

            <Suspense>
                {children}
            </Suspense>
        </div>
    )
}