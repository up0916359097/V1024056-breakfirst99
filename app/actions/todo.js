'use server';

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";



export async function addTodo(formData) {
    const title = formData.get("title");
    try{
        await prisma.todo.create({
            data: { title },
        });
        revalidatePath("/todo");
    } catch (error) {
      console.log(error);
    }
}


    export  async function deleteTodo(formData) {
    const id = Number(formData.get("id"));
    try{
        await prisma.todo.delete({
            where: { id },
        });
        revalidatePath("/todo");
    } catch (error) {
      console.log(error);
    }
}

    export  async function toggleTodo(formData) {
    const id = Number(formData.get("id"));
    const done = formData.get("done") === "true";
    try{
        await prisma.todo.update({
            where: { id },
            data: { done: !done },
        });
        revalidatePath("/todo");
    } catch (error) {
      console.log(error);
    }
}