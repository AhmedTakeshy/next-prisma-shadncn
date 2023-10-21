import prisma from "@/lib/PrismaClient";

export async function POST (){
    const withdrawLikes = prisma.user.create({
        data:{
            name: "Shadncn",
            email: "Ahmedtakeshy@gmail.com"
            
        },
    })

    const receiveLikes = prisma.post.update({
        where: {
            id: 6,
        },
        data: {
            likeNum: {
                increment: 8
            }
        }
    })

    const transaction = await prisma.$transaction([withdrawLikes, receiveLikes]) 
    // If one of the queries fails, the entire transaction is rolled back. If all of the queries succeed, the transaction is committed. All-or-nothing.
    return Response.json(transaction)
}