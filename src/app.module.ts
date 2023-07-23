import { Module } from '@nestjs/common';
import { PresentationModule } from '@/presentation/presentation.module';
import { ApplicationModule } from '@/application/application.module';
import { InfrastructureModule } from '@/infrastructure/infrastructure.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PresentationModule,
    ApplicationModule,
    InfrastructureModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
