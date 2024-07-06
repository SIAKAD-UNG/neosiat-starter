"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cn } from "@/main/tw-merge"

const AccordionMenu = AccordionPrimitive.Root

const AccordionMenuItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn(className)}
        {...props}
    />
))
AccordionMenuItem.displayName = "AccordionMenuItem"

const AccordionMenuTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                "flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:-rotate-90",
                className
            )}
            {...props}
        >
            {children}
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
))
AccordionMenuTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionMenuContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
    >
        <div className={cn("pb-1 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
))

AccordionMenuContent.displayName = AccordionPrimitive.Content.displayName

export { AccordionMenu, AccordionMenuItem, AccordionMenuTrigger, AccordionMenuContent }
