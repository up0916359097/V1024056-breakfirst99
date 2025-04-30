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
    console.log(1);
    
    queryStr = queryStr.toLowerCase();
    todos = todos.filter((todo) => todo.title.includes(queryStr));
    console.log(2);
    if (todos.length===0) {
        return NextResponse.json(
            {error:`No todos with ${queryStr} exists`},
            {status: 404}
        );
    }
    console.log(3);
}

export async function POST(request){
    const {title} =await request.json();
    try{
        const todo =await prisma.todo.create({
            data:{title},
        });
        return NextResponse.json(todo);
    }catch(error){
        return NextResponse.json(new Error("Error creating todo"),{
            status: 500,
        });
    }
}