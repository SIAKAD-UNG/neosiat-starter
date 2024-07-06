"use client"

import { Fragment } from "react"
import { cn } from "@/main/tw-merge"
import { ChevronLeft } from "@/main/icons/neosiat"
import {
    AccordionMenu,
    AccordionMenuContent,
    AccordionMenuItem,
    AccordionMenuTrigger,
} from "./accordion-menu"
import Icon from "../icons"
import { Submenu } from "../interface"

interface NavigationScrollDropdownProps {
    navs: Submenu[]
}

export const NavigationScrollDropdown = ({ navs }: NavigationScrollDropdownProps) => {
    return (
        <ul role="list" className="space-y-[8px]">
            {navs.map((item) => {
                const submenuList = item.items
                return (
                    <li key={item.id}>
                        {Array.isArray(submenuList) && submenuList.length > 0 ? (
                            <AccordionMenu type="multiple" className="w-full">
                                <AccordionMenuItem value={item.id}>
                                    <AccordionMenuTrigger
                                        className="group rounded-lg hover:bg-[#FFF1F2] hover:text-neosiat-red p-[8px] text-[14px] leading-[24px] font-normal"
                                    >
                                        <div className="flex items-center gap-x-[8px]">
                                            <div className="p-[4px]">
                                                <Icon
                                                    icon={item.id}
                                                    className={cn(
                                                        "h-[20px] w-[20px] shrink-0"
                                                    )}
                                                />
                                            </div>
                                            {item.name}
                                        </div>
                                        <ChevronLeft
                                            className={cn(
                                                "h-4 w-4 shrink-0 transition-transform duration-200 group-hover:stroke-neosiat-red stroke-[#0F172A]",
                                            )}
                                        />
                                    </AccordionMenuTrigger>
                                    <AccordionMenuContent>
                                        {submenuList.map((item) => {
                                            const submenuList = item.items
                                            const linkMenu = item.link
                                            return (
                                                <Fragment key={item.id}>
                                                    {Array.isArray(submenuList) && submenuList.length > 0 ? (
                                                        <AccordionMenu type="multiple" className="w-full">
                                                            <AccordionMenuItem value={item.id}>
                                                                <AccordionMenuTrigger
                                                                    className="group rounded-lg hover:bg-[#FFF1F2] hover:text-neosiat-red p-[8px] text-[14px] leading-[24px] font-normal"
                                                                >
                                                                    <div className="flex items-center gap-x-[8px]">
                                                                        <div className="p-[4px]">
                                                                            <div className="p-[6px]">
                                                                                <div className="w-[8px] h-[8px] bg-neosiat-secondary rounded-full"></div>
                                                                            </div>
                                                                        </div>
                                                                        {item.name}
                                                                    </div>
                                                                    <ChevronLeft
                                                                        className={cn(
                                                                            "h-4 w-4 shrink-0 transition-transform duration-200 group-hover:stroke-neosiat-red stroke-[#0F172A]",
                                                                        )}
                                                                    />
                                                                </AccordionMenuTrigger>
                                                                <AccordionMenuContent className="pl-3">
                                                                    {submenuList.map((item) => {
                                                                        const submenuList = item.items
                                                                        const linkMenu = item.link
                                                                        return (
                                                                            <Fragment key={item.id}>
                                                                                {Array.isArray(submenuList) && submenuList.length > 0 ? (
                                                                                    <AccordionMenu type="multiple" className="w-full">
                                                                                        <AccordionMenuItem value={item.id}>
                                                                                            <AccordionMenuTrigger
                                                                                                className="group rounded-lg hover:bg-[#FFF1F2] hover:text-neosiat-red p-[8px] text-[14px] leading-[24px] font-normal"
                                                                                            >
                                                                                                <div className="flex items-center gap-x-[8px]">
                                                                                                    <div className="p-[4px]">
                                                                                                        <div className="p-[6px]">
                                                                                                            <div className="w-[8px] h-[8px] bg-neosiat-secondary rounded-full"></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    {item.name}
                                                                                                </div>
                                                                                                <ChevronLeft
                                                                                                    className={cn(
                                                                                                        "h-4 w-4 shrink-0 transition-transform duration-200 group-hover:stroke-neosiat-red stroke-[#0F172A]",
                                                                                                    )}
                                                                                                />
                                                                                            </AccordionMenuTrigger>
                                                                                            <AccordionMenuContent className="pl-3">
                                                                                                {submenuList.map((item) => {
                                                                                                    const submenuList = item.items
                                                                                                    const linkMenu = item.link
                                                                                                    return (
                                                                                                        <Fragment key={item.id}>
                                                                                                            {Array.isArray(submenuList) && submenuList.length > 0 ? (
                                                                                                                <AccordionMenu type="multiple" className="w-full">
                                                                                                                    <AccordionMenuItem value={item.id}>
                                                                                                                        <AccordionMenuTrigger
                                                                                                                            className="group rounded-lg hover:bg-[#FFF1F2] hover:text-neosiat-red p-[8px] text-[14px] leading-[24px] font-normal"
                                                                                                                        >
                                                                                                                            <div className="flex items-center gap-x-[8px]">
                                                                                                                                <div className="p-[4px]">
                                                                                                                                    <div className="p-[6px]">
                                                                                                                                        <div className="w-[8px] h-[8px] bg-neosiat-secondary rounded-full"></div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                                {item.name}
                                                                                                                            </div>
                                                                                                                            <ChevronLeft
                                                                                                                                className={cn(
                                                                                                                                    "h-4 w-4 shrink-0 transition-transform duration-200 group-hover:stroke-neosiat-red stroke-[#0F172A]",
                                                                                                                                )}
                                                                                                                            />
                                                                                                                        </AccordionMenuTrigger>
                                                                                                                        <AccordionMenuContent className="pl-3">
                                                                                                                            {submenuList.map((item) => {
                                                                                                                                const submenuList = item.items
                                                                                                                                const linkMenu = item.link
                                                                                                                                return (
                                                                                                                                    <Fragment key={item.id}>
                                                                                                                                        {Array.isArray(submenuList) && submenuList.length > 0 ? (
                                                                                                                                            <AccordionMenu type="multiple" className="w-full">
                                                                                                                                                <AccordionMenuItem value={item.id}>
                                                                                                                                                    <AccordionMenuTrigger
                                                                                                                                                        className="group rounded-lg hover:bg-[#FFF1F2] hover:text-neosiat-red p-[8px] text-[14px] leading-[24px] font-normal"
                                                                                                                                                    >
                                                                                                                                                        <div className="flex items-center gap-x-[8px]">
                                                                                                                                                            <div className="p-[4px]">
                                                                                                                                                                <div className="p-[6px]">
                                                                                                                                                                    <div className="w-[8px] h-[8px] bg-neosiat-secondary rounded-full"></div>
                                                                                                                                                                </div>
                                                                                                                                                            </div>
                                                                                                                                                            {item.name}
                                                                                                                                                        </div>
                                                                                                                                                        <ChevronLeft
                                                                                                                                                            className={cn(
                                                                                                                                                                "h-4 w-4 shrink-0 transition-transform duration-200 group-hover:stroke-neosiat-red stroke-[#0F172A]",
                                                                                                                                                            )}
                                                                                                                                                        />
                                                                                                                                                    </AccordionMenuTrigger>
                                                                                                                                                    <AccordionMenuContent className="pl-3">
                                                                                                                                                        {submenuList.map((item) => {
                                                                                                                                                            const submenuList = item.items
                                                                                                                                                            const linkMenu = item.link
                                                                                                                                                            return (
                                                                                                                                                                <Fragment key={item.id}>
                                                                                                                                                                    {Array.isArray(submenuList) && submenuList.length > 0 ? (
                                                                                                                                                                        <AccordionMenu type="multiple" className="w-full">
                                                                                                                                                                            <AccordionMenuItem value={item.id}>
                                                                                                                                                                                <AccordionMenuTrigger
                                                                                                                                                                                    className="group rounded-lg hover:bg-[#FFF1F2] hover:text-neosiat-red p-[8px] text-[14px] leading-[24px] font-normal"
                                                                                                                                                                                >
                                                                                                                                                                                    <div className="flex items-center gap-x-[8px]">
                                                                                                                                                                                        <div className="p-[4px]">
                                                                                                                                                                                            <div className="p-[6px]">
                                                                                                                                                                                                <div className="w-[8px] h-[8px] bg-neosiat-secondary rounded-full"></div>
                                                                                                                                                                                            </div>
                                                                                                                                                                                        </div>
                                                                                                                                                                                        {item.name}
                                                                                                                                                                                    </div>
                                                                                                                                                                                    <ChevronLeft
                                                                                                                                                                                        className={cn(
                                                                                                                                                                                            "h-4 w-4 shrink-0 transition-transform duration-200 group-hover:stroke-neosiat-red stroke-[#0F172A]",
                                                                                                                                                                                        )}
                                                                                                                                                                                    />
                                                                                                                                                                                </AccordionMenuTrigger>
                                                                                                                                                                                <AccordionMenuContent className="pl-3">
                                                                                                                                                                                    {submenuList.map((item) => {
                                                                                                                                                                                        const submenuList = item.items
                                                                                                                                                                                        const linkMenu = item.link
                                                                                                                                                                                        return (
                                                                                                                                                                                            <Fragment key={item.id}>
                                                                                                                                                                                                {Array.isArray(submenuList) && submenuList.length > 0 ? (
                                                                                                                                                                                                    <AccordionMenu type="multiple" className="w-full">
                                                                                                                                                                                                        <AccordionMenuItem value={item.id}>
                                                                                                                                                                                                            <AccordionMenuTrigger
                                                                                                                                                                                                                className="group rounded-lg hover:bg-[#FFF1F2] hover:text-neosiat-red p-[8px] text-[14px] leading-[24px] font-normal"
                                                                                                                                                                                                            >
                                                                                                                                                                                                                <div className="flex items-center gap-x-[8px]">
                                                                                                                                                                                                                    <div className="p-[4px]">
                                                                                                                                                                                                                        <div className="p-[6px]">
                                                                                                                                                                                                                            <div className="w-[8px] h-[8px] bg-neosiat-secondary rounded-full"></div>
                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                    {item.name}
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                <ChevronLeft
                                                                                                                                                                                                                    className={cn(
                                                                                                                                                                                                                        "h-4 w-4 shrink-0 transition-transform duration-200 group-hover:stroke-neosiat-red stroke-[#0F172A]",
                                                                                                                                                                                                                    )}
                                                                                                                                                                                                                />
                                                                                                                                                                                                            </AccordionMenuTrigger>
                                                                                                                                                                                                            <AccordionMenuContent className="pl-3">
                                                                                                                                                                                                                {submenuList.map((item) => {
                                                                                                                                                                                                                    const submenuList = item.items
                                                                                                                                                                                                                    const linkMenu = item.link
                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                        <Fragment key={item.id}>
                                                                                                                                                                                                                            {Array.isArray(submenuList) && submenuList.length > 0 ? (
                                                                                                                                                                                                                                <>Menu</>
                                                                                                                                                                                                                            ) : (
                                                                                                                                                                                                                                <>
                                                                                                                                                                                                                                    {linkMenu ? (
                                                                                                                                                                                                                                        <a
                                                                                                                                                                                                                                            href={linkMenu.href?.toString()}
                                                                                                                                                                                                                                            className={cn(
                                                                                                                                                                                                                                                linkMenu.current
                                                                                                                                                                                                                                                    ? 'bg-neosiat-red text-white'
                                                                                                                                                                                                                                                    : 'text-neosiat-black hover:text-neosiat-red hover:bg-[#FFF1F2]',
                                                                                                                                                                                                                                                'group flex items-center gap-x-[8px] rounded-[8px] p-[8px] text-[14px] leading-[24px] font-normal'
                                                                                                                                                                                                                                            )}
                                                                                                                                                                                                                                            target={linkMenu.target}
                                                                                                                                                                                                                                            rel="noopener noreferrer"
                                                                                                                                                                                                                                        >
                                                                                                                                                                                                                                            <div className="p-[4px]">
                                                                                                                                                                                                                                                <div className="p-[6px]">
                                                                                                                                                                                                                                                    <div className="w-[8px] h-[8px] bg-neosiat-secondary rounded-full"></div>
                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                            {item.name}
                                                                                                                                                                                                                                        </a>
                                                                                                                                                                                                                                    ) : null}
                                                                                                                                                                                                                                </>
                                                                                                                                                                                                                            )}
                                                                                                                                                                                                                        </Fragment>
                                                                                                                                                                                                                    )
                                                                                                                                                                                                                })}
                                                                                                                                                                                                            </AccordionMenuContent>
                                                                                                                                                                                                        </AccordionMenuItem>
                                                                                                                                                                                                    </AccordionMenu>
                                                                                                                                                                                                ) : (
                                                                                                                                                                                                    <>
                                                                                                                                                                                                        {linkMenu ? (
                                                                                                                                                                                                            <a
                                                                                                                                                                                                                href={linkMenu.href?.toString()}
                                                                                                                                                                                                                className={cn(
                                                                                                                                                                                                                    linkMenu.current
                                                                                                                                                                                                                        ? 'bg-neosiat-red text-white'
                                                                                                                                                                                                                        : 'text-neosiat-black hover:text-neosiat-red hover:bg-[#FFF1F2]',
                                                                                                                                                                                                                    'group flex items-center gap-x-[8px] rounded-[8px] p-[8px] text-[14px] leading-[24px] font-normal'
                                                                                                                                                                                                                )}
                                                                                                                                                                                                                target={linkMenu.target}
                                                                                                                                                                                                                rel="noopener noreferrer"
                                                                                                                                                                                                            >
                                                                                                                                                                                                                <div className="p-[4px]">
                                                                                                                                                                                                                    <div className="p-[6px]">
                                                                                                                                                                                                                        <div className="w-[8px] h-[8px] bg-neosiat-secondary rounded-full"></div>
                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                {item.name}
                                                                                                                                                                                                            </a>
                                                                                                                                                                                                        ) : null}
                                                                                                                                                                                                    </>
                                                                                                                                                                                                )}
                                                                                                                                                                                            </Fragment>
                                                                                                                                                                                        )
                                                                                                                                                                                    })}
                                                                                                                                                                                </AccordionMenuContent>
                                                                                                                                                                            </AccordionMenuItem>
                                                                                                                                                                        </AccordionMenu>
                                                                                                                                                                    ) : (
                                                                                                                                                                        <>
                                                                                                                                                                            {linkMenu ? (
                                                                                                                                                                                <a
                                                                                                                                                                                    href={linkMenu.href?.toString()}
                                                                                                                                                                                    className={cn(
                                                                                                                                                                                        linkMenu.current
                                                                                                                                                                                            ? 'bg-neosiat-red text-white'
                                                                                                                                                                                            : 'text-neosiat-black hover:text-neosiat-red hover:bg-[#FFF1F2]',
                                                                                                                                                                                        'group flex items-center gap-x-[8px] rounded-[8px] p-[8px] text-[14px] leading-[24px] font-normal'
                                                                                                                                                                                    )}
                                                                                                                                                                                    target={linkMenu.target}
                                                                                                                                                                                    rel="noopener noreferrer"
                                                                                                                                                                                >
                                                                                                                                                                                    <div className="p-[4px]">
                                                                                                                                                                                        <div className="p-[6px]">
                                                                                                                                                                                            <div className="w-[8px] h-[8px] bg-neosiat-secondary rounded-full"></div>
                                                                                                                                                                                        </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                    {item.name}
                                                                                                                                                                                </a>
                                                                                                                                                                            ) : null}
                                                                                                                                                                        </>
                                                                                                                                                                    )}
                                                                                                                                                                </Fragment>
                                                                                                                                                            )
                                                                                                                                                        })}
                                                                                                                                                    </AccordionMenuContent>
                                                                                                                                                </AccordionMenuItem>
                                                                                                                                            </AccordionMenu>
                                                                                                                                        ) : (
                                                                                                                                            <>
                                                                                                                                                {linkMenu ? (
                                                                                                                                                    <a
                                                                                                                                                        href={linkMenu.href?.toString()}
                                                                                                                                                        className={cn(
                                                                                                                                                            linkMenu.current
                                                                                                                                                                ? 'bg-neosiat-red text-white'
                                                                                                                                                                : 'text-neosiat-black hover:text-neosiat-red hover:bg-[#FFF1F2]',
                                                                                                                                                            'group flex items-center gap-x-[8px] rounded-[8px] p-[8px] text-[14px] leading-[24px] font-normal'
                                                                                                                                                        )}
                                                                                                                                                        target={linkMenu.target}
                                                                                                                                                        rel="noopener noreferrer"
                                                                                                                                                    >
                                                                                                                                                        <div className="p-[4px]">
                                                                                                                                                            <div className="p-[6px]">
                                                                                                                                                                <div className="w-[8px] h-[8px] bg-neosiat-secondary rounded-full"></div>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                        {item.name}
                                                                                                                                                    </a>
                                                                                                                                                ) : null}
                                                                                                                                            </>
                                                                                                                                        )}
                                                                                                                                    </Fragment>
                                                                                                                                )
                                                                                                                            })}
                                                                                                                        </AccordionMenuContent>
                                                                                                                    </AccordionMenuItem>
                                                                                                                </AccordionMenu>
                                                                                                            ) : (
                                                                                                                <>
                                                                                                                    {linkMenu ? (
                                                                                                                        <a
                                                                                                                            href={linkMenu.href?.toString()}
                                                                                                                            className={cn(
                                                                                                                                linkMenu.current
                                                                                                                                    ? 'bg-neosiat-red text-white'
                                                                                                                                    : 'text-neosiat-black hover:text-neosiat-red hover:bg-[#FFF1F2]',
                                                                                                                                'group flex items-center gap-x-[8px] rounded-[8px] p-[8px] text-[14px] leading-[24px] font-normal'
                                                                                                                            )}
                                                                                                                            target={linkMenu.target}
                                                                                                                            rel="noopener noreferrer"
                                                                                                                        >
                                                                                                                            <div className="p-[4px]">
                                                                                                                                <div className="p-[6px]">
                                                                                                                                    <div className="w-[8px] h-[8px] bg-neosiat-secondary rounded-full"></div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            {item.name}
                                                                                                                        </a>
                                                                                                                    ) : null}
                                                                                                                </>
                                                                                                            )}
                                                                                                        </Fragment>
                                                                                                    )
                                                                                                })}
                                                                                            </AccordionMenuContent>
                                                                                        </AccordionMenuItem>
                                                                                    </AccordionMenu>
                                                                                ) : (
                                                                                    <>
                                                                                        {linkMenu ? (
                                                                                            <a
                                                                                                href={linkMenu.href?.toString()}
                                                                                                className={cn(
                                                                                                    linkMenu.current
                                                                                                        ? 'bg-neosiat-red text-white'
                                                                                                        : 'text-neosiat-black hover:text-neosiat-red hover:bg-[#FFF1F2]',
                                                                                                    'group flex items-center gap-x-[8px] rounded-[8px] p-[8px] text-[14px] leading-[24px] font-normal'
                                                                                                )}
                                                                                                target={linkMenu.target}
                                                                                                rel="noopener noreferrer"
                                                                                            >
                                                                                                <div className="p-[4px]">
                                                                                                    <div className="p-[6px]">
                                                                                                        <div className="w-[8px] h-[8px] bg-neosiat-secondary rounded-full"></div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                {item.name}
                                                                                            </a>
                                                                                        ) : null}
                                                                                    </>
                                                                                )}
                                                                            </Fragment>
                                                                        )
                                                                    })}
                                                                </AccordionMenuContent>
                                                            </AccordionMenuItem>
                                                        </AccordionMenu>
                                                    ) : (
                                                        <>
                                                            {linkMenu ? (
                                                                <a
                                                                    href={linkMenu.href?.toString()}
                                                                    className={cn(
                                                                        linkMenu.current
                                                                            ? 'bg-neosiat-red text-white'
                                                                            : 'text-neosiat-black hover:text-neosiat-red hover:bg-[#FFF1F2]',
                                                                        'group flex items-center gap-x-[8px] rounded-[8px] p-[8px] text-[14px] leading-[24px] font-normal'
                                                                    )}
                                                                    target={linkMenu.target}
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <div className="p-[4px]">
                                                                        <div className="p-[6px]">
                                                                            <div className="w-[8px] h-[8px] bg-neosiat-secondary rounded-full"></div>
                                                                        </div>
                                                                    </div>
                                                                    {item.name}
                                                                </a>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Fragment>
                                            )
                                        })}
                                    </AccordionMenuContent>
                                </AccordionMenuItem>
                            </AccordionMenu>
                        ) : (
                            <>
                                {item.link ? (
                                    <a
                                        href={item.link.href?.toString()}
                                        className={cn(
                                            item.link.current
                                                ? 'bg-neosiat-red text-white'
                                                : 'text-neosiat-black hover:text-neosiat-red hover:bg-[#FFF1F2]',
                                            'group flex items-center gap-x-[8px] rounded-[8px] p-[8px] text-[14px] leading-[24px] font-normal'
                                        )}
                                        target={item.link.target}
                                        rel="noopener noreferrer"
                                    >
                                        <div className="p-[4px]">
                                            <Icon
                                                icon={item.id}
                                                className={cn(
                                                    item.link.current
                                                        ? "text-white"
                                                        : "text-neosiat-red group-hover:text-white",
                                                    "h-[20px] w-[20px] shrink-0"
                                                )}
                                                fillClassName={cn(
                                                    item.link.current
                                                        ? "fill-white"
                                                        : ""
                                                )}
                                            />
                                        </div>
                                        {item.name}
                                    </a>
                                ) : (
                                    <a
                                        href="#"
                                        className={cn(
                                            'text-neosiat-black hover:text-neosiat-red hover:bg-[#FFF1F2]',
                                            'group flex items-center gap-x-[8px] rounded-[8px] p-[8px] text-[14px] leading-[24px] font-normal'
                                        )}
                                        rel="noopener noreferrer"
                                    >
                                        <div className="p-[4px]">
                                            <Icon
                                                icon={item.id}
                                                className={cn(
                                                    "h-[20px] w-[20px] shrink-0"
                                                )}
                                            />
                                        </div>
                                        {item.name}
                                    </a>
                                )}
                            </>
                        )}
                    </li>
                )
            })}
        </ul>
    )
}