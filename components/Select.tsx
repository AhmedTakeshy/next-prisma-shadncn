"use client"
import {
    Select as Sel,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type Props = {
    onStatus?: (state: string) => void,
    stateValue: string
}

export default function Select({ onStatus, stateValue }: Props) {


   const selectHandler = (value:string) =>  {
        console.log(value);
        
         if(onStatus){
              onStatus(value)
         }
    }

    return (
        <Sel onValueChange={(value) => selectHandler(value)} defaultValue={stateValue}>
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