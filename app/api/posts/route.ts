import prisma from "@/lib/PrismaClient";
export async function GET(){
    const posts = await prisma.post.findMany({
        where: {
            // OR: [
            //     {
            //         id: {
            //             not: {
            //                 gt: 4
            //             }
            //         }
            //     },
            // ],
            // AND:{
            //     published:false
            // }
            
        }
    })
    return Response.json(posts)
}