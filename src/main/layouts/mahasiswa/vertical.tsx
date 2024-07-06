"use client"

import {
    NAVIGATIONS_BANTUAN_ALUMNI,
    NAVIGATIONS_KEGIATAN_LUAR,
    NAVIGATIONS_MAIN,
} from "./navigation"
import { ScrollArea } from "@/main/components/default/scroll-area"
import { useState } from "react"
import { cn } from "@/main/tw-merge"
import Image from "next/image"
import logogramUNG from "@/main/assets/logo/logogram-siakad-ung01.svg"
import logoSiakadUNG from "@/main/assets/logo/siakad-ung01.svg"
import { ChevronLeft } from "@/main/icons/neosiat"
import Icon from "./icons"

import ProfileDropdownMenuComponent from "./components/profile-dropdown-menu"
import { NavigationScrollDropdown } from "./components/navigation-scroll-and-dropdown"

const Bars3Icon = ({ className }: { className: string }) => {
    return (
        <svg className={cn(className)} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_9_2864)">
                <path d="M14.5042 8C14.5042 8.13261 14.4516 8.25979 14.3578 8.35355C14.264 8.44732 14.1368 8.5 14.0042 8.5C13.8716 8.5 13.7444 8.44732 13.6507 8.35355C13.5569 8.25979 13.5042 8.13261 13.5042 8C13.5042 7.93434 13.5171 7.86932 13.5423 7.80866C13.5674 7.748 13.6042 7.69288 13.6507 7.64645C13.6971 7.60002 13.7522 7.56319 13.8129 7.53806C13.8735 7.51293 13.9386 7.5 14.0042 7.5C14.0699 7.5 14.1349 7.51293 14.1956 7.53806C14.2562 7.56319 14.3114 7.60002 14.3578 7.64645C14.4042 7.69288 14.441 7.748 14.4662 7.80866C14.4913 7.86932 14.5042 7.93434 14.5042 8Z" stroke="#0F172A" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.49611 8.00001C2.4961 8.13262 2.44343 8.2598 2.34967 8.35356C2.2559 8.44733 2.12872 8.50001 1.99611 8.50001C1.8635 8.50001 1.73632 8.44733 1.64255 8.35356C1.54878 8.2598 1.49611 8.13262 1.49611 8.00001C1.49611 7.93435 1.50903 7.86933 1.53416 7.80867C1.55928 7.74801 1.59612 7.69289 1.64255 7.64646C1.68898 7.60003 1.74411 7.5632 1.80477 7.53807C1.86543 7.51294 1.93045 7.50001 1.99611 7.50001C2.06177 7.50001 2.12678 7.51294 2.18744 7.53807C2.24811 7.5632 2.30324 7.60003 2.34967 7.64646C2.3961 7.69289 2.43291 7.74801 2.45804 7.80867C2.48316 7.86933 2.49611 7.93435 2.49611 8.00001Z" stroke="#0F172A" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.49881 8C8.4988 8.13261 8.44613 8.25978 8.35237 8.35355C8.2586 8.44732 8.13142 8.5 7.99881 8.5C7.8662 8.5 7.73902 8.44732 7.64525 8.35355C7.55148 8.25978 7.49881 8.13261 7.49881 8C7.49881 7.93434 7.51173 7.86932 7.53686 7.80866C7.56198 7.74799 7.59882 7.69288 7.64525 7.64645C7.69168 7.60002 7.74681 7.56319 7.80747 7.53806C7.86813 7.51293 7.93315 7.5 7.99881 7.5C8.06447 7.5 8.12948 7.51293 8.19015 7.53806C8.25081 7.56319 8.30594 7.60001 8.35237 7.64644C8.3988 7.69287 8.43563 7.74799 8.46076 7.80866C8.48589 7.86932 8.49881 7.93434 8.49881 8Z" stroke="#0F172A" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.5042 2C14.5042 2.13261 14.4515 2.25979 14.3578 2.35355C14.264 2.44732 14.1368 2.5 14.0042 2.5C13.8716 2.5 13.7444 2.44732 13.6507 2.35355C13.5569 2.25979 13.5042 2.13261 13.5042 2C13.5042 1.93434 13.5171 1.86932 13.5423 1.80866C13.5674 1.748 13.6042 1.69288 13.6507 1.64645C13.6971 1.60002 13.7522 1.56319 13.8129 1.53806C13.8735 1.51293 13.9385 1.5 14.0042 1.5C14.0699 1.5 14.1349 1.51293 14.1955 1.53806C14.2562 1.56319 14.3113 1.60002 14.3578 1.64645C14.4042 1.69288 14.441 1.748 14.4662 1.80866C14.4913 1.86932 14.5042 1.93434 14.5042 2Z" stroke="#0F172A" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.49609 2.00001C2.49609 2.13262 2.44342 2.2598 2.34965 2.35357C2.25588 2.44733 2.1287 2.50001 1.99609 2.50001C1.86348 2.50001 1.7363 2.44733 1.64253 2.35356C1.54876 2.2598 1.49609 2.13262 1.49609 2.00001C1.49609 1.93435 1.50901 1.86933 1.53414 1.80867C1.55927 1.74801 1.5961 1.69289 1.64253 1.64646C1.68896 1.60003 1.74409 1.5632 1.80475 1.53807C1.86542 1.51295 1.93043 1.50001 1.99609 1.50001C2.06175 1.50001 2.12677 1.51295 2.18743 1.53807C2.24809 1.5632 2.30322 1.60003 2.34965 1.64646C2.39608 1.69289 2.43289 1.74801 2.45802 1.80867C2.48315 1.86933 2.49609 1.93435 2.49609 2.00001Z" stroke="#0F172A" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.49878 2C8.49877 2.13261 8.4461 2.25979 8.35234 2.35355C8.25857 2.44732 8.13138 2.5 7.99878 2.5C7.86617 2.5 7.73899 2.44732 7.64522 2.35355C7.55145 2.25979 7.49878 2.13261 7.49878 2C7.49878 1.93434 7.5117 1.86932 7.53683 1.80866C7.56195 1.748 7.59879 1.69288 7.64522 1.64645C7.69165 1.60002 7.74678 1.56319 7.80744 1.53806C7.8681 1.51293 7.93312 1.5 7.99878 1.5C8.06444 1.5 8.12945 1.51293 8.19011 1.53806C8.25078 1.56319 8.30591 1.60002 8.35234 1.64645C8.39877 1.69288 8.4356 1.74799 8.46073 1.80866C8.48586 1.86932 8.49878 1.93434 8.49878 2Z" stroke="#0F172A" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.5042 14C14.5042 14.1326 14.4516 14.2598 14.3578 14.3536C14.264 14.4473 14.1368 14.5 14.0042 14.5C13.8716 14.5 13.7444 14.4473 13.6507 14.3536C13.5569 14.2598 13.5042 14.1326 13.5042 14C13.5042 13.9343 13.5171 13.8693 13.5423 13.8087C13.5674 13.748 13.6042 13.6929 13.6507 13.6464C13.6971 13.6 13.7522 13.5632 13.8129 13.5381C13.8735 13.5129 13.9386 13.5 14.0042 13.5C14.0699 13.5 14.1349 13.5129 14.1956 13.5381C14.2562 13.5632 14.3114 13.6 14.3578 13.6464C14.4042 13.6929 14.441 13.748 14.4662 13.8087C14.4913 13.8693 14.5042 13.9343 14.5042 14Z" stroke="#0F172A" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.49611 14C2.4961 14.1326 2.44343 14.2598 2.34967 14.3536C2.2559 14.4473 2.12872 14.5 1.99611 14.5C1.8635 14.5 1.73632 14.4473 1.64255 14.3536C1.54878 14.2598 1.49611 14.1326 1.49611 14C1.49611 13.9344 1.50903 13.8693 1.53416 13.8087C1.55928 13.748 1.59612 13.6929 1.64255 13.6465C1.68898 13.6 1.74411 13.5632 1.80477 13.5381C1.86543 13.5129 1.93045 13.5 1.99611 13.5C2.06177 13.5 2.12678 13.5129 2.18744 13.5381C2.24811 13.5632 2.30324 13.6 2.34967 13.6465C2.3961 13.6929 2.43291 13.748 2.45804 13.8087C2.48316 13.8693 2.49611 13.9344 2.49611 14Z" stroke="#0F172A" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.49881 14C8.4988 14.1326 8.44613 14.2598 8.35237 14.3536C8.2586 14.4473 8.13142 14.5 7.99881 14.5C7.8662 14.5 7.73902 14.4473 7.64525 14.3536C7.55148 14.2598 7.49881 14.1326 7.49881 14C7.49881 13.9343 7.51173 13.8693 7.53686 13.8087C7.56198 13.748 7.59882 13.6929 7.64525 13.6464C7.69168 13.6 7.74681 13.5632 7.80747 13.5381C7.86813 13.5129 7.93315 13.5 7.99881 13.5C8.06447 13.5 8.12948 13.5129 8.19015 13.5381C8.25081 13.5632 8.30594 13.6 8.35237 13.6464C8.3988 13.6929 8.43563 13.748 8.46076 13.8087C8.48589 13.8693 8.49881 13.9343 8.49881 14Z" stroke="#0F172A" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_9_2864">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default function VerticalDashboardLayoutComponent({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)

    return (
        <div>
            {/* Sidebar menu */}

            {/* Static sidebar for desktop */}
            {/* "hidden 2xl:hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto lg:bg-white lg:pb-4 lg:flex lg:flex-col transition-all duration-150", */}
            <div
                className={cn(
                    "hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto lg:bg-white lg:pb-4 lg:flex lg:flex-col transition-all duration-150",
                    sidebarOpen
                        ? "2xl:hidden"
                        : "hidden"
                )}
            >
                <ScrollArea>
                    <div className="flex grow flex-col gap-y-[36px] overflow-y-auto border-r border-gray-200 bg-white py-[24px]">
                        <div className="flex h-16 shrink-0 items-center justify-center">
                            <div className="flex flex-col h-16 shrink-0 items-center gap-[32px]">
                                <Image
                                    src={logogramUNG}
                                    alt="Logogram SIAKAD UNG"
                                    width={50}
                                    height={48}
                                    className="h-[48px] w-auto"
                                />
                                <div>
                                    <button
                                        type="button"
                                        className="p-[4px] rounded-lg border border-[#E2E8F0]"
                                        onClick={() => {
                                            setSidebarOpen(() => !0)
                                        }}
                                    >
                                        <ChevronLeft className="stroke-[#0F172A]" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <nav className="mt-8">
                            <ul role="list" className="flex flex-col items-center space-y-1">
                                {NAVIGATIONS_MAIN.map((item) => {
                                    const linkMenu = item.link
                                    return (
                                        <li key={item.id}>
                                            {linkMenu ? (
                                                <a
                                                    href={linkMenu.href?.toString()}
                                                    className={cn(
                                                        item.current ? 'bg-[#FFF1F2] text-white' : 'text-gray-400 hover:text-white hover:bg-[#FFF1F2]',
                                                        'group flex gap-x-3 rounded-lg p-3 text-sm leading-6 font-semibold'
                                                    )}
                                                >
                                                    <Icon
                                                        icon={item.id}
                                                        className={cn(
                                                            "h-[20px] w-[20px] shrink-0"
                                                        )}
                                                    />
                                                    <span className="sr-only">{item.name}</span>
                                                </a>
                                            ) : (
                                                <a
                                                    href="#"
                                                    className={cn(
                                                        item.current ? 'bg-[#FFF1F2] text-white' : 'text-gray-400 hover:text-white hover:bg-[#FFF1F2]',
                                                        'group flex gap-x-3 rounded-lg p-3 text-sm leading-6 font-semibold'
                                                    )}
                                                >
                                                    <Icon
                                                        icon={item.id}
                                                        className={cn(
                                                            "h-[20px] w-[20px] shrink-0"
                                                        )}
                                                    />
                                                    <span className="sr-only">{item.name}</span>
                                                </a>
                                            )}
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                </ScrollArea>
            </div>

            <div
                className={cn(
                    "transition-all duration-150",
                    sidebarOpen
                        ? "hidden 2xl:fixed 2xl:inset-y-0 2xl:z-50 2xl:flex 2xl:w-72 2xl:flex-col"
                        : "hidden"
                )}
            >
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <ScrollArea>
                    <div className="flex grow flex-col gap-y-[36px] overflow-y-auto border-r border-gray-200 bg-white px-[20px] pt-[24px] pb-4">
                        <div className="flex gap-[32px] items-center">
                            <div className="flex h-16 shrink-0 items-center gap-[8px]">
                                <Image
                                    src={logogramUNG}
                                    alt="Logogram SIAKAD UNG"
                                    width={50}
                                    height={48}
                                    className="h-[48px] w-auto"
                                />
                                <Image
                                    src={logoSiakadUNG}
                                    alt="Logo SIAKAD UNG"
                                    width={124}
                                    height={34}
                                    className="h-[32px] w-auto"
                                />
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="p-[4px] rounded-lg border border-[#E2E8F0]"
                                    onClick={() => {
                                        setSidebarOpen(() => !1)
                                    }}
                                >
                                    <ChevronLeft className="stroke-[#0F172A]" />
                                </button>
                            </div>
                        </div>
                        <nav className="flex flex-1 flex-col gap-y-[8px]">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <div className="pl-[12px]">
                                        <div className="text-[14px] leading-[24px] text-[#94A3B8] font-semibold">Menu Utama</div>
                                    </div>
                                    <NavigationScrollDropdown navs={NAVIGATIONS_MAIN} />
                                </li>
                                <li>
                                    <div className="pl-[12px]">
                                        <div className="text-[14px] leading-[24px] text-[#94A3B8] font-semibold">Kegiatan Luar</div>
                                    </div>
                                    <NavigationScrollDropdown navs={NAVIGATIONS_KEGIATAN_LUAR} />
                                </li>
                                <li>
                                    <div className="pl-[12px]">
                                        <div className="text-[14px] leading-[24px] text-[#94A3B8] font-semibold">Bantuan & Alumni</div>
                                    </div>
                                    <NavigationScrollDropdown navs={NAVIGATIONS_BANTUAN_ALUMNI} />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </ScrollArea>
            </div>

            <div
                className={cn(
                    // "lg:pl-20 2xl:pl-72",
                    sidebarOpen
                        ? "lg:pl-20 2xl:pl-72"
                        : "lg:pl-20"
                )}
            >
                <div className="sticky top-0 z-40 flex h-[72px] shrink-0 items-center gap-x-4 border-b border-[#E2E8F0] bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                    <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Separator */}
                    <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

                    <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                        <div className="relative flex flex-1 items-center">
                            <div className="text-[#0F172A] text-[16px] leading-[24px] font-semibold">Selamat Datang Imam Buke!</div>
                        </div>
                        <div className="flex items-center gap-x-4 lg:gap-x-6">
                            <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                                <span className="sr-only">View notifications</span>
                                {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                                <div className="relative">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.792 2.24985C9.24642 2.29215 6.81944 3.33281 5.03443 5.14742C3.24942 6.96202 2.24942 9.40518 2.25005 11.95C2.25055 14.5221 3.27306 16.9886 5.09269 18.8071C6.91232 20.6256 9.38006 21.6473 11.9532 21.6473C13.57 21.6473 15.1611 21.2435 16.5821 20.4725C18.2068 21.4644 20.3704 21.7528 21.753 21.7528C20.9493 20.5096 20.0528 19.3036 19.5909 17.9325C20.9292 16.2252 21.6564 14.1189 21.6563 11.95C21.6565 10.6763 21.4055 9.41492 20.918 8.23806C20.4304 7.06119 19.7157 5.99185 18.8147 5.09109C17.9137 4.19033 16.844 3.4758 15.6666 2.9883C14.4893 2.50079 13.2275 2.24987 11.9532 2.24985C11.8995 2.2494 11.8457 2.2494 11.792 2.24985Z" stroke="#D31F28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8.81256 11.2498C9.01147 11.2498 9.20224 11.3289 9.34289 11.4695C9.48354 11.6102 9.56257 11.8009 9.56257 11.9999C9.56257 12.1988 9.48354 12.3895 9.34289 12.5302C9.20224 12.6708 9.01147 12.7498 8.81256 12.7499C8.71407 12.7499 8.61652 12.7305 8.52553 12.6928C8.43453 12.6551 8.35187 12.5998 8.28223 12.5302C8.21259 12.4605 8.15733 12.3779 8.11964 12.2869C8.08195 12.1959 8.06255 12.0983 8.06255 11.9999C8.06255 11.9014 8.08195 11.8038 8.11964 11.7128C8.15733 11.6218 8.21259 11.5392 8.28223 11.4695C8.35187 11.3999 8.43453 11.3446 8.52553 11.3069C8.61652 11.2692 8.71407 11.2498 8.81256 11.2498Z" stroke="#D31F28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.1876 11.2498C15.3865 11.2498 15.5772 11.3289 15.7179 11.4695C15.8585 11.6102 15.9375 11.8009 15.9375 11.9999C15.9375 12.1988 15.8585 12.3895 15.7179 12.5302C15.5772 12.6708 15.3865 12.7498 15.1876 12.7499C15.0891 12.7499 14.9915 12.7305 14.9005 12.6928C14.8095 12.6551 14.7269 12.5998 14.6572 12.5302C14.5876 12.4605 14.5323 12.3779 14.4946 12.2869C14.457 12.1959 14.4375 12.0983 14.4375 11.9999C14.4375 11.9014 14.457 11.8038 14.4946 11.7128C14.5323 11.6218 14.5876 11.5392 14.6572 11.4695C14.7269 11.3999 14.8095 11.3446 14.9005 11.3069C14.9915 11.2692 15.0891 11.2498 15.1876 11.2498Z" stroke="#D31F28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="absolute top-0 right-[2px] w-[8px] h-[8px] bg-[#EAB308] rounded-full"></div>
                                </div>
                            </button>

                            <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                                <span className="sr-only">View notifications</span>
                                {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                                <div className="relative">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.74419 17.0635C3.74419 12.1885 5.32717 13.0805 5.32717 8.19043C5.32717 4.49545 8.2989 2.24316 11.9939 2.24316C15.6889 2.24316 18.6771 4.49545 18.6771 8.19043C18.6771 13.0805 20.2559 12.1885 20.2559 17.0635M3.74419 17.0635C3.74419 17.0635 7.2369 18.1941 11.9939 18.1941C16.7509 18.1941 20.2559 17.0635 20.2559 17.0635M3.74419 17.0635L2.25426 16.5414M20.2559 17.0635L21.7458 16.5414M14.7557 21.1829C14.4765 21.3534 14.0747 21.495 13.591 21.5935C13.1073 21.6919 12.5586 21.7438 12 21.7438C11.4415 21.7438 10.8928 21.6919 10.409 21.5935C9.92531 21.495 9.52363 21.3534 9.24435 21.1829" stroke="#D31F28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="absolute top-0 right-[2px] w-[8px] h-[8px] bg-[#EAB308] rounded-full"></div>
                                </div>
                            </button>

                            {/* Separator */}
                            <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />

                            {/* Profile dropdown */}
                            <ProfileDropdownMenuComponent />
                        </div>
                    </div>
                </div>

                <main className="py-10">
                    <div className="px-4 sm:px-6 lg:px-8">
                        {/* Your content */}
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
