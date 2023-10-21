import prisma from "@/lib/PrismaClient";


export async function PUT() {
    const updatedUsers = await prisma.user.updateMany({
        where: {
            name: {
                contains: "ahmed",
                mode: "insensitive",
            },
        },
        data: {
            role: "ADMIN",
        },
    });
    return Response.json(updatedUsers);
}