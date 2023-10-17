"use client"

import { Button } from "./Button"
import { MdOutlineDeleteForever } from "react-icons/md"
import { FiEdit } from "react-icons/fi"
import { deleteTodo,updateTodo } from "@/lib/actions"
import Select from "./Select"

type Props = {
    title: string,
    description: string,
    id:number,
    stateValue: Status
}

export default function TodoCard({ title, description,id,stateValue }: Props) {
    let todo = { title, description,state:stateValue };
    
    const status = (state: Status) => {
       todo = {...todo,state:state}
       console.log(state);
       
    }
    return (
        <div className="flex flex-col items-center justify-center p-3 border-2 rounded-md border-slate-950">
            <div className='flex items-center justify-between w-full gap-4'>
                <Select stateValue={stateValue} onStatus={status}/>
                <div className="flex items-center justify-center gap-2">
                    <Button fn={deleteTodo} id={id} size="icon">
                        <MdOutlineDeleteForever className="w-6 h-6 cursor-pointer hover:text-red-700" />
                    </Button>
                    <Button fn={updateTodo} todo={todo} id={id} size="icon">
                        <FiEdit className="w-5 h-5 cursor-pointer hover:text-blue-700" />
                    </Button>
                </div>
            </div>
                <h1 className={`mx-auto mt-4 text-xl font-bold ${todo.state.toString() === "CLOSED"? "line-through":""}`}>{title}</h1>
                <p className={`mx-auto my-4 text-slate-700 ${todo.state.toString() === "CLOSED" ? "line-through" : ""}`}>{description}</p>
        </div>
    )
}