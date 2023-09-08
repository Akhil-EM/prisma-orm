import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const user = await prisma.users.upsert({
        where: { email: 'admin@gmail.com' }, // Unique constraint for the email field
        create: {
          email: 'admin@gmail.com',
          name: 'admin',
          age: 25,
          posts: {
            create: {
              title: 'New Post',
              content: 'This is the content of the new post.',
              published: false,
            },
          },
        },
        update: {
          name: 'admin', // If a user with this email already exists, update the name
          age: 25,       // If a user with this email already exists, update the age
        },
      });

}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
