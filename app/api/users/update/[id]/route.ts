import prisma from "@/lib/PrismaClient";

interface Body {
    name: string;
}

interface Params {
    params:{
        id: string 
    }
}


export async function PUT(request: Request, { params }: Params) {
    const body: Body = await request.json();

    const updatedUsers = await prisma.user.update({
        where: {
            id: +params.id,
        },
        data: {
            name: body.name,
        },
    });

    return Response.json(updatedUsers);
}