import prisma from "@/lib/PrismaClient";


export async function GET() {
    const users = await prisma.user.findMany({
        where: {
            OR: [
                {
                    id: {
                        not: {
                            gt: 1
                        }
                    }
                },
                {
                    name:{
                        contains:"S",
                        mode:"insensitive"
                    }
                }
            ],
           
        }
    })
        
    
    return Response.json(users)
}