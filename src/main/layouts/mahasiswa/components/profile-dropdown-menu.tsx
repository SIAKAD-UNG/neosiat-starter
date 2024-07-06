import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/main/components/default/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/main/components/default/avatar"
import { ChevronDown } from "@/main/icons/neosiat"
import { AlertDialogLogoutVerticalNav } from "./dialog-logout-vertical-nav"

export default function ProfileDropdownMenuComponent() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button type="button" className="rounded-full">
                    <div className="flex items-center">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="p-[12px]">
                            <ChevronDown />
                        </div>
                    </div>
                    <span className="sr-only">User menu</span>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <AlertDialogLogoutVerticalNav />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}