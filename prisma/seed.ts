import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
    {
        name: "John",
        email: "John@prisma.io",
        posts: {
            create: [
                {
                    title: "Join the Prisma Slack",
                    body: "Hi there, what are you doing today ",
                    published: true,
                    categories: {
                        create: [
                            {
                                name: "Data Base",
                            },
                            {
                                name: "Big Data",
                            },
                        ],
                    },
                },
                {
                    title: "Follow Prisma on Twitter",
                    body: "Hi there, what are you doing today ",
                    categories: {
                        connect: [
                            {
                                id: 1,
                            },
                        ],
                    },
                    published: true,
                },
            ],
        },
    },
    {
        name: "Jack",
        email: "jack@prisma.io",
        posts: {
            create: [
                {
                    title: "Follow Prisma on Twitter",
                    body: "Hi there, what are you doing today ",
                    categories: {
                        connect: [
                            {
                                id: 1,
                            },
                        ],
                    },
                    published: false,
                },
            ],
        },
    },
    {
        name: "sara",
        email: "sara@prisma.io",
        posts: {
            create: [
                {
                    title: "Ask a question about Prisma on GitHub",
                    body: "Hi there, what are you doing today ",
                    published: true,
                    categories: {
                        connect: [
                            {
                                id: 2,
                            },
                        ],
                    },
                },
                {
                    title: "Prisma on YouTube",
                    body: "Hi there, what are you doing today ",
                    published: true,
                    categories: {
                        connect: [
                            {
                                id: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
];

async function main() {
    console.log(`Start seeding ...`);
    for (const u of userData) {
        const user = await prisma.user.create({
            data: u
        })
        console.log(`Created user with id: ${user.id}`);
    }
    console.log(`Seeding finished.`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        console.log(e.message);
        await prisma.$disconnect();
        process.exit(1);
    });