import prisma from "@/lib/PrismaClient";


interface Params {
  params:{
      id: string 
  }
}

export async function PUT(request: Request, { params }: Params) {

  const updatedUsers = await prisma.user.upsert({  // upsert is a combination of update and create
    where: {
      id: +params.id,
    },
    update: {
      email: "Ahmedtakeshy@gmail.com",
    },
    create: {
      name: "Mohammed",
      email: "Mohammed@gmail.com",
    },
  });
    return Response.json(updatedUsers);
}