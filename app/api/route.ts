import pool from "@/lib/db";
import type { NextApiRequest, NextApiResponse } from "next"; 
import { NextResponse } from "next/server";

type Data = {
    [key: string]: any;
}

// export async function GET(req: NextApiRequest, res: NextApiResponse<Data>) {
export async function GET() {

    try {
        const [rows] = await pool.query(`SELECT * FROM questions`) 
        return NextResponse.json({
            hello: "world",
            data: rows
        })
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message })
    } 
}
