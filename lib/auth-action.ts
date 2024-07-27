"use server" 
 
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache' 
import { createClient } from './server'

export async function login(formData: FormData) {
    const supabase = createClient()
    
    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        redirect("/error")
    }

    revalidatePath("/", "layout")
    redirect("/")
}

export async function signup(formData: FormData) {
    const supabase = createClient() 
    const firstName = formData.get("first-name") as string
    const lastName = formData.get("last-name") as string
    
    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        options: {
            data: {
                fullName: `${firstName + " " + lastName }`,
                email: formData.get("email") as string
            }
        }
        
    } 

    const { error } = await supabase.auth.signUp(data)
    if (error) {
        console.log(error)
        redirect("/error")
    }

    revalidatePath("/", "layout")
    redirect("/")

}

export async function signOut() {
    const supabase = createClient()
    const { error } = await supabase.auth.signOut()
    if (error) {
        console.log("error")
        redirect("/error")
    }

    redirect("/logout")
}

export async function signInWithGoogle() {
    const supabase = createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            queryParams: {
                access_type: "offline",
                prompt: "consent"
            }
        }
    })

    if (error) { 
        redirect("/error")
    }

    redirect(data.url)
}
