import Link from "next/link";

export default function Home() {
    return (
        <main>
            <div className="w-full py-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="text-white text-sm font-semibold leading-4">Base Project</div>
                        <div className="text-white text-sm font-semibold leading-4">
                            <Link href="/example">Example</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-12">
                <div className="flex flex-col bg-slate-100 overflow-hidden rounded-xl">
                    <div className="w-full py-4 bg-slate-200 rounded-t-xl px-4">
                        <div className="text-sm font-semibold leading-4 text-black">Welcome page</div>
                    </div>
                    <div className="px-4 py-6">
                        <p className="text-sm leading-4 font-normal text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
