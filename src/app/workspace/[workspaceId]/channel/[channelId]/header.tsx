import { Button } from "@/components/ui/button";
import { FaChevronDown } from "react-icons/fa";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { TrashIcon } from "lucide-react";  
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";

interface HeaderProps {
    title: string;
};

export const Header = ({ title }: HeaderProps) => {

    const [ editOpen, setEditOpen ] = useState(false);
    const [ value, setValue ] = useState(title); // [setValue]

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\s+/g, "-").toLowerCase();
        setValue(value);
      }


    return (
        <div className="bg-white border-b h-[49px] flex items-center px-4 overflow-hidden">
            <Dialog>
                <DialogTrigger asChild>
            <Button
            variant="ghost"
            className="text-lg font-semibold px-2 overflow-hidden w-auto h-7"
            size="sm"
            >
                <span>
                    # {title}
                </span>
                <FaChevronDown className="size-2.5 ml-2"/>
            </Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-gray-50 overflow-hidden">
                <DialogHeader className="p-4 border-b bg-white">
                    <DialogTitle>
                        #{title}
                    </DialogTitle>
                </DialogHeader>
                <div className="px-4 pb-4 flex flex-col gap-y-2">
                    <Dialog open={editOpen} onOpenChange={setEditOpen}>
                        <DialogTrigger asChild>
                    <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold">Channel Name</p>
                            <p className="text-sm text-[#1264a3] hover:underline font-semibold">
                                Edit
                            </p>
                        </div>
                        <p className="text-sm"># {title}</p>
                    </div> 
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                Rename this title
                            </DialogTitle>
                            <form className="space-y-4">
                                <Input
                                 value={value}
                                 disabled={false}
                                 onChange={handleChange}
                                 required
                                 autoFocus
                                 minLength={3}
                                 maxLength={80}
                                 placeholder="e.g. plan-budget"
                                />
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button variant="outline" disabled={false}>
                                            Cancel
                                        </Button>
                                    </DialogClose>
                                    <Button disabled={false}>
                                        Save
                                    </Button>
                                </DialogFooter>
                            </form>
                        </DialogHeader>

                    </DialogContent>
                    </Dialog>
                    <button
                        className="flex items-center gap-x-2 px-5 py-4 bg-white rounded-lg cursor-pointer border hover:bg-gray-50 text-rose-600"
                    >
                        <TrashIcon className="size-4"/>
                        <p className="text-sm font-semibold">
                            Delete channel
                        </p>
                    </button>
                </div>
            </DialogContent>
            </Dialog>
        </div>
    )
}