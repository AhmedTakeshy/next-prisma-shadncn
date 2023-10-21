import prisma from "@/lib/PrismaClient";


interface Body {
    name: string;
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const users = await prisma.user.delete({
        where: {
            id: +params.id,
        },
    });
    return Response.json(users);
}