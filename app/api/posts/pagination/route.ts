import prisma from "@/lib/PrismaClient";
// Pagination: size of the page is 5
// offset based pagination
// export async function GET(req: Request) {
//     const {searchParams} = new URL(req.url)

//     const pgNum =  +(searchParams.get("pgNum")?? 0)
//     const pgSize = +(searchParams.get("pgSize")?? 10)

//     const posts = await prisma.post.findMany({
//         // skip: 0, // skip the first 0 posts
//         // take: 10, // take 10 posts
//         skip: pgNum * pgSize, 
//         take: pgSize,
       
//     })

//     return Response.json(posts)
// }

// cursor based pagination
export async function GET(req: Request) {
    
    const {searchParams} = new URL(req.url)

    const cursor = +(searchParams.get("cursor")?? 0)
    const pgSize = +(searchParams.get("pgSize")?? 10)

    const posts = await prisma.post.findMany({
        cursor: { id: cursor },
        take: pgSize,
    
    })
    return Response.json(posts)
}