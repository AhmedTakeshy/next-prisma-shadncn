import prisma from "@/lib/PrismaClient";


export async function GET() {
    const users = await prisma.user.findMany({
        where: {
            // OR: [
            //     {
            //         id: {
            //             not: {
            //                 gt: 1
            //             }
            //         }
            //     },
            //     {
            //         name:{
            //             contains:"S",
            //             mode:"insensitive"
            //         }
            //     }
            // ],
            posts: {  // Many-to-many and one-to-many relationship
            every:{
                published:true
            }
           }
        }
    })
        
    
    return Response.json(users)
}