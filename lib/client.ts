import { createBrowserClient } from "@supabase/ssr";


export function createClient() {

    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

}


//https://www.youtube.com/watch?v=_XM9ziOzWk4