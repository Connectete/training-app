import { PrismaClient, Prisma } from '@prisma/client';

/**
 * 全てのテーブルのデータを削除する
 * 参考: https://github.com/prisma/docs/issues/451
 */
export const cleanupDatabase = async (): Promise<void> => {
  const prisma = new PrismaClient();
  const modelNames = Prisma.dmmf.datamodel.models.map((model) => model.name);

  await Promise.all(
    modelNames.map((modelName) => prisma[modelName.toLowerCase()].deleteMany()),
  );

  prisma.$disconnect();
};
