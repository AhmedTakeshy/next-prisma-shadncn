import prisma from "@/lib/PrismaClient";
export async function GET() {
    const posts = await prisma.post.aggregate({
        _sum: {
            likeNum:true
        },
        _avg:{
            likeNum:true
        },
        _count:{
            likeNum: true
        },
        _min:{
            likeNum: true
        },
        _max:{
            likeNum: true
        }
    })
    console.log(posts)

    return Response.json(posts)
}