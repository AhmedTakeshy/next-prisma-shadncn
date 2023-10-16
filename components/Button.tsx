"use client"
import { Button as Btn } from "@/components/ui/button"

type Props = {
    classNames?: string,
    fn?: (id: number, todo?:Todo)=> Promise<void>,
    children?: React.ReactNode
    size?: "default" | "sm" | "lg" | "icon"
    id: number
    todo?:Todo
}


export function Button({classNames, fn, children,size,id,todo}:Props) {

    
        const deleteTodo = async () => {
            if(fn){
                await fn(id,todo)
            }
        }
    

    return (
        <Btn size={size} onClick={deleteTodo} variant="outline" className={`${classNames}`}>
        {children}
    </Btn>
    )
}