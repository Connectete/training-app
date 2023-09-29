import { PrismaClient, DietType } from '@prisma/client';
const prisma = new PrismaClient();

const generateRandomString = (charCount = 7): string => {
  const str = Math.random().toString(36).substring(2).slice(-charCount);
  return str.length < charCount
    ? str + 'a'.repeat(charCount - str.length)
    : str;
};

async function main() {
  const now = new Date();
  const password = 'Password123';
  const userId = generateRandomString();
  const name = 'Test User';
  const { createHmac } = await import('crypto');
  const data = new TextEncoder().encode(password);
  const hashPassword = await createHmac('sha256', data)
    .update('default utf8')
    .digest('hex');
  try {
    // テストデータ作成
    await prisma.user.create({
      data: {
        userId: userId,
        name: name,
        createdAt: now,
        updatedAt: now,
        account: {
          create: {
            password: hashPassword,
            createdAt: now,
            updatedAt: now,
          },
        },
      },
    });
    await prisma.exercise.createMany({
      data: [
        { name: '腹筋' },
        { name: 'スクワット' },
        { name: '腕立て伏せ' },
        { name: '背筋' },
        { name: 'ランニング' },
        { name: 'ウォーキング' },
        { name: 'サイクリング' },
        { name: 'ヨガ' },
        { name: 'ストレッチ' },
        { name: '水泳' },
        { name: 'ダンベル' },
      ],
    });
    await prisma.goal.create({
      data: {
        userId: userId,
        value: 65,
        createdAt: now,
        updatedAt: now,
      },
    });
    await prisma.bodyRecord.create({
      data: {
        userId: userId,
        date: now,
        value: 70,
        createdAt: now,
        updatedAt: now,
      },
    });
    await prisma.exerciseRecord.create({
      data: {
        userId: userId,
        date: now,
        exerciseId: 1,
        timeCount: 20,
      },
    });
    await prisma.diary.create({
      data: {
        userId: userId,
        date: now,
        contents: 'TEST DIARY',
        createdAt: now,
        updatedAt: now,
      },
    });
    await prisma.diet.create({
      data: {
        userId: userId,
        date: now,
        photo: 'PATH-TO-PHOTO',
        type: DietType.MORNING,
        createdAt: now,
        updatedAt: now,
      },
    });
    await prisma.column.create({
      data: {
        title: 'column title',
        contents: 'column contents',
        createdAt: now,
        updatedAt: now,
      },
    });
    await prisma.columnTag.create({
      data: {
        name: 'tag',
        createdAt: now,
      },
    });
  } catch (e) {
    console.error('error: create test data', e);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
