"use client"
import { Button as Btn } from "@/components/ui/button"

type Props = {
    classNames?: string,
    fn?: (...args:any)=> Promise<void>,
    children?: React.ReactNode
    size?: "default" | "sm" | "lg" | "icon"
    id: number
    todo?:Todo
}


export function Button({classNames, fn, children,size,id,todo}:Props) {
   
    
        const changeTodo = async () => {
            if(fn && todo){
                console.log(todo);
                await fn(id,todo)
            } else if(fn){
                await fn(id)
            }
        }
    

    return (
        <Btn size={size} onClick={changeTodo} variant="outline" className={`${classNames}`}>
        {children}
    </Btn>
    )
}