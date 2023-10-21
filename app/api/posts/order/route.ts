import prisma from "@/lib/PrismaClient";
export async function GET() {
    const posts = await prisma.post.findMany({
        orderBy:{
            //createdAt:"asc" // order posts by createdAt in ascending order
            likeNum:"desc" // order posts by likeNum in descending order
        }
    })

    return Response.json(posts)
}