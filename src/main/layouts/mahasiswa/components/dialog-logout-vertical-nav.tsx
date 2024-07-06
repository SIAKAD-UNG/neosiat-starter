"use client"

import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/main/components/default/alert-dialog"
import { useState } from "react"

export function AlertDialogLogoutVerticalNav() {
    const [open, setOpen] = useState<boolean>()

    return (
        <AlertDialog
            onOpenChange={(vl) => setOpen(() => vl)}
            open={open}
        >
            <AlertDialogTrigger asChild>
                <button
                    className="w-full relative flex cursor-default select-none items-center rounded-lg p-[8px] text-[12px] leading-[20px] font-normal text-[#0F172A] outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-[#FFF1F2] hover:text-neosiat-red"
                >
                    Logout
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="p-0 overflow-hidden w-full max-w-sm">
                <AlertDialogHeader className="relative bg-slate-100 px-8 py-4 space-y-1">
                    <AlertDialogTitle className="text-sm leading-4 text-slate-800 font-semibold">Logout</AlertDialogTitle>
                    <div className="absolute top-1 right-8">
                        <button
                            type="button"
                            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200"
                        >
                            <svg className="stroke-slate-500 w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5031 13.4973L2.50171 2.50002M2.50171 13.4973L13.5031 2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </AlertDialogHeader>
                <div className="px-8 pb-8">
                    <div className="mb-12">
                        <p className="text-sm leading-6 font-normal">Logout dan keluar aplikasi?</p>
                    </div>

                    <div className="flex gap-x-3 justify-end">
                        <button
                            type="button"
                            className="text-black bg-white rounded-lg w-20 text-xs leading-6 font-medium text-center py-1.5 border border-neosiat-red"
                        >
                            Batal
                        </button>
                    </div>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    )
}
