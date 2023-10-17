"use client"
import {
    Select as Sel,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useTransition } from "react"

type Props = {
    onStatus?: (state: Status) => void,
    stateValue: Status
}

export default function Select({ onStatus, stateValue }: Props) {
    const [isPending, startTransition] = useTransition()

   const selectHandler = (value:Status) =>  {
        console.log(value);
        
         if(onStatus){
              onStatus(value)
         }
    }

    return (
        <Sel onValueChange={(value) => startTransition(() => selectHandler(value as Status))} >
            <SelectTrigger className="w-[137px]">
                <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent >
                <SelectItem value="OPEN">Open</SelectItem>
                <SelectItem value="CLOSED">Closed</SelectItem>
            </SelectContent>
        </Sel>
    )
}