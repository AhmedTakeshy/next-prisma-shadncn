"use server"
import { revalidatePath } from "next/cache"
import prisma from "./PrismaClient"

type Status = "OPEN" | "CLOSED"



export async function getTodos() {
    try {
        const todos = await prisma.issue.findMany(
            {
            select: {
                title: true,
                description: true,
                id: true,
                status: true
            }
            }
        );
        return todos;
    } catch (error) {
        console.log(error)
    }
}

export async function addTodo(formData: FormData) {
    const form = Object.fromEntries(formData.entries())

    try {
        await prisma.issue.create({
            data: {
                title: form.title.toString(),
                description: form.description.toString(),
            }
        })

        revalidatePath("/")
    } catch (error) {
        console.log(error)
    }
}
export async function deleteTodo(id: number) {
    await prisma.issue.delete({
        where: {
            id
        }
    })

    revalidatePath("/")
}
export async function updateTodo(id: number,todo: Todo ) {
    await prisma.issue.update({
        where: {
            id
        },
        data: {
            title: todo.title,
            description: todo.description.toString(),
            status: todo.state.toString() as Status
        }
    })

    revalidatePath("/")
}

