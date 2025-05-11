import { prisma } from "@/db/prisma";
import { createServerClient } from "@supabase/ssr";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const { userId } = await request.json()
   
    const id = await prisma.note.create({
        data: {
            authorId:userId,
            text: "New Note"
        }
    })
    
    return NextResponse.json({ noteId: id.id })
}