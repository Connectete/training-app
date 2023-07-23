import { Module } from '@nestjs/common';
import { PrismaRepositoryModule } from './prisma_repository/prisma_repository.module';

@Module({
  imports: [PrismaRepositoryModule],
  exports: [PrismaRepositoryModule],
})
export class InfrastructureModule {}
