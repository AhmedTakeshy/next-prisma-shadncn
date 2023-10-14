import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


type Props = {
    title: string,
    description: string,
}

export default function TodoCard({ title, description }: Props) {
    return (
        <div className="flex flex-col items-center justify-center p-3 border-2 rounded-md border-slate-950">
            <div className='flex items-center justify-between w-full gap-4'>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="OPEN">Open</SelectItem>
                        <SelectItem value="IN_PROGRESS">In progress</SelectItem>
                        <SelectItem value="CLOSED">Closed</SelectItem>
                    </SelectContent>
                </Select>
                <h1 className="text-xl font-bold">{title}</h1>
            </div>
            <p className="my-6 text-slate-700">{description}</p>
        </div>
    )
}