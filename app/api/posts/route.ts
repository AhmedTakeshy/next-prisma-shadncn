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
            author:{
                isNot:{  // Many-to-one and one-to-one relationship
                    name:"Jack"
                    
                },
                is:{
                    email:{
                        startsWith:"s",
                        mode:"insensitive"
                    }
                }
            }
        },
        include:{  // To include the the searched field in the results
            author:true
        }
    })
    return Response.json(posts)
}