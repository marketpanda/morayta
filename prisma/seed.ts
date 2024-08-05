import { questions } from "../data/questions"
import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

async function main() {
    await prisma.questions.createMany({
       data: questions
    })
   
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async() => {
        await prisma.$disconnect()
    })