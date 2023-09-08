import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
const { users, posts } = prisma;

(async () => {
    const dbUsers = await users.findMany({
        where: {
            NOT: {
                email: "user"
            }
        }
    });

    console.log({ dbUsers });

    const postsWithAuthors = await prisma.posts.findMany({
        include: {
            author:{
                select:{
                    id:true,
                    name:true
                }
            }, // This includes the related user (author) for each post
            
        },
    });

    console.log({postsWithAuthors});
})()