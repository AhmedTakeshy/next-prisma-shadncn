import prisma from "@/lib/PrismaClient";
export async function GET() {
    const posts = await prisma.post.groupBy({
        by:["authorId"], // group posts of every author and return the result of sum and avg of likeNum
        _sum:{
            likeNum:true,
        },
        _avg:{
            likeNum:true
        }
    })

    return Response.json(posts)
}