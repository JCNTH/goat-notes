"use client"

import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { logoutAction } from "@/actions/users"

export default function LogOutButton() {
  const { toast } = useToast()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleLogout = async () => {
    setLoading(true)
    const {errorMessage} = await logoutAction(); 

    if (!errorMessage) {
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account.",
        variant: "success",
      });
      router.push("/")
    } else {
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      })
    }

    setLoading(false) 
  }

  return (
    <Button 
      variant="outline" 
      onClick={handleLogout} 
      disabled={loading} 
      className="w-24"
    >
      {loading ? <Loader2 className="animate-spin" /> : "Logout"}
    </Button>
  )
} 