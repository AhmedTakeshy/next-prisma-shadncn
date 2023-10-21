import prisma from "@/lib/PrismaClient";

interface Body {
    name: string;
    email: string;
}

export async function POST(request: Request) {
    //   const users = await prisma.user.create({
    //     data: {
    //       email: "sakura2@prisma.io",
    //       name: "Sakura Dev",
    //       role: "USER",
    //       posts: {
    //         create: [
    //           {
    //             title: "Crash Course of prisma",
    //             body: "This is a crash course of prisma",
    //             published: true,
    //             categories: {
    //               connectOrCreate: {
    //                 where: {
    //                   id: 3,
    //                 },
    //                 create: {
    //                   name: "ORM",
    //                 },
    //               },
    //             },
    //           },
    //         ],
    //       },
    //     },
    //   });

    const body: Body = await request.json();
    const users = await prisma.user.create({
        data: body,  // create a user with the body data from the request
    });
    //   const users = await prisma.user.createMany({
    //     data: [
    //       { name: "Yewande", email: "yewande@prisma.io" },  // it will be skipped
    //       { name: "Yewande", email: "yewande@prisma.io" },
    //       { name: "Angelique", email: "angelique@prisma.io" },
    //     ],
    //     skipDuplicates: true, // if true, skips records that already exist during seeding
    //   });

    return Response.json(users);
}