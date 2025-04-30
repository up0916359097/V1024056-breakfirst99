// Restful API
//method: GET | POST |PUT(PATCH) | DELETE
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request){
    let todos = await prisma.todo.findMany({orderBy:[{id:"asc"}]})

    // /api/todo?filter=abc&name=xyz
    let queryStr = request.nextUrl.searchParams.get("filter");
    if (!queryStr){
        return NextResponse.json(todos);
    }    

    queryStr = queryStr.toLowerCase();
    todos = todos.filter((todo) => todo.title.includes(queryStr));
    if (!todos) {
        return NextResponse.error(new Error(`No todos with ${queryStr} exists`),{status: 404});
    }
}