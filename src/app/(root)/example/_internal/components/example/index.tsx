import { AlertDialogDemo } from "./alert-dialog";
import { AspectRatioDemo } from "./aspect-ratio";
import { CalendarDemo } from "./calendar";
import { DatePickerDemo } from "./date-picker";
import { DialogDemo } from "./dialog";
import { DropdownMenuDemo } from "./dropdown-menu";
import { PopoverDemo } from "./popover";
import RowItemComponent from "./row-item";
import { SheetDemo } from "./sheet";
import { ToastDemo } from "./toast";
import { TooltipDemo } from "./tooltip";

export default function ExampleComponent() {
    return (
        <>
            <div className="p-4 rounded-xl bg-gray-200 mb-4">
                <div className="py-3">
                    <div className="text-sm font-semibold text-black leading-4">Alert Dialog</div>
                    <div className="text-sm font-normal text-black leading-4">A modal dialog that interrupts the user with important content and expects a response.</div>
                </div>
                <AlertDialogDemo />
            </div>

            <div className="p-4 rounded-xl bg-gray-200 mb-4">
                <div className="py-3">
                    <div className="text-sm font-semibold text-black leading-4">Dialog</div>
                    <div className="text-sm font-normal text-black leading-4">A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.</div>
                </div>
                <DialogDemo />
            </div>

            <div className="p-4 rounded-xl bg-gray-200 mb-4">
                <div className="py-3">
                    <div className="text-sm font-semibold text-black leading-4">Sheet</div>
                    <div className="text-sm font-normal text-black leading-4">Extends the Dialog component to display content that complements the main content of the screen.</div>
                </div>
                <SheetDemo />
            </div>

            <div className="p-4 rounded-xl bg-gray-200 mb-4">
                <div className="py-3">
                    <div className="text-sm font-semibold text-black leading-4">Calendar</div>
                    <div className="text-sm font-normal text-black leading-4">A date field component that allows users to enter and edit date.</div>
                </div>
                <CalendarDemo />
            </div>

            <div className="p-4 rounded-xl bg-gray-200 mb-4">
                <div className="py-3">
                    <div className="text-sm font-semibold text-black leading-4">Date Picker</div>
                    <div className="text-sm font-normal text-black leading-4">A date picker component with range and presets.</div>
                </div>
                <DatePickerDemo />
            </div>

            <div className="p-4 rounded-xl bg-gray-200 mb-4">
                <div className="py-3">
                    <div className="text-sm font-semibold text-black leading-4">Aspect Ratio</div>
                    <div className="text-sm font-normal text-black leading-4">Displays content within a desired ratio.</div>
                </div>

                <div className="w-full max-w-[300px]">
                    <AspectRatioDemo />
                </div>
            </div>

            <div className="p-4 rounded-xl bg-gray-200 mb-4">
                <div className="py-3">
                    <div className="text-sm font-semibold text-black leading-4">Toast</div>
                    <div className="text-sm font-normal text-black leading-4">A succinct message that is displayed temporarily.</div>
                </div>
                <ToastDemo />
            </div>

            <div className="p-4 rounded-xl bg-gray-200 mb-4">
                <div className="py-3">
                    <div className="text-sm font-semibold text-black leading-4">Tooltip</div>
                    <div className="text-sm font-normal text-black leading-4">A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.</div>
                </div>
                <TooltipDemo />
            </div>

            <div className="p-4 rounded-xl bg-gray-200 mb-4">
                <div className="py-3">
                    <div className="text-sm font-semibold text-black leading-4">Popover</div>
                    <div className="text-sm font-normal text-black leading-4">Displays rich content in a portal, triggered by a button.</div>
                </div>
                <PopoverDemo />
            </div>

            <div className="p-4 rounded-xl bg-gray-200 mb-4">
                <div className="py-3">
                    <div className="text-sm font-semibold text-black leading-4">Dropdown Menu</div>
                    <div className="text-sm font-normal text-black leading-4">Displays a menu to the user — such as a set of actions or functions — triggered by a button.</div>
                </div>
                <DropdownMenuDemo />
            </div>

            <div className="p-4 rounded-xl bg-gray-200 mb-4">
                <div className="py-3">
                    <div className="text-sm font-semibold text-black leading-4">Data Table</div>
                    <div className="text-sm font-normal text-black leading-4">Supercharge your tables or build a datagrid from scratch for TS/JS, React, Vue, Solid & Svelte while retaining 100% control over markup and styles.</div>
                </div>
                <RowItemComponent />
            </div>
        </>
    )
}