"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from "./ui/button"
import { Loader2, Trash2 } from "lucide-react"
import { useTransition } from "react"
import { toast } from "sonner"
import { useRouter, useSearchParams } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { deleteNoteAction } from "@/actions/Notes"
  

type Note = {
    id: string
    title: string
    text: string    
    authorId: string
    createdAt: Date
    updatedAt: Date
}

type Props = {
    noteId: string
    deleteNoteLocally: (noteId: string) => void
}

function DeleteNoteButton({noteId, deleteNoteLocally}: Props) {
    const router = useRouter();
    const {toast} = useToast()
    const noteIdParam = useSearchParams().get("noteId") || ""
    const [isPending, startTransition] = useTransition();

    const handleDeleteNote = async () => {
        startTransition(async () => {
            const { errorMessage } = await deleteNoteAction(noteId);

            if (!errorMessage) {
                toast({
                    title: "Note deleted successfully",
                    description: "Your note has been deleted successfully",
                    variant: "success",
                })
                deleteNoteLocally(noteId);

                if(noteId === noteIdParam) {
                    router.replace("/");
                }
            } else {
                toast({
                    title: "Error deleting note",
                    description: errorMessage,
                    variant: "destructive",
                })
            }
        });
    }
    
  return (
    <AlertDialog>
    <AlertDialogTrigger asChild >
        <Button variant="ghost" className="absolute right-2 top-1/2 -translate-y-1/2 size-7 p-0 opacity-0 group-hover/item:opacity-100 [&_svg]:size-3">
            <Trash2 />
            
        </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
        <AlertDialogHeader>
        <AlertDialogTitle>Are you sure you want to delete this note?</AlertDialogTitle>
        <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this note.
        </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={handleDeleteNote} className="w-24 bg-destructive text-destructive-foreground hover:bg-destructive/90">
            {isPending ? <Loader2 className="size-4 animate-spin" /> : "Delete"}
        </AlertDialogAction>
        </AlertDialogFooter>
    </AlertDialogContent>
    </AlertDialog>

  )
}

export default DeleteNoteButton