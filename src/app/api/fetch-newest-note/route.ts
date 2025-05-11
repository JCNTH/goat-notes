import { prisma } from "@/db/prisma";
import { createServerClient } from "@supabase/ssr";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const { userId } = await request.json()
   
    const newestNote = await prisma.note.findFirst({
        where: {
            authorId: userId
        },
        orderBy: {
            createdAt: "desc"
        },
        select: {
            id: true
        }
    })
    
    return NextResponse.json({ newestNoteId: newestNote?.id })
}