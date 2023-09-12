import { Module } from "@nestjs/common";
import { InfrastructureModule } from "@/infrastructure/infrastructure.module";
import { DiaryUseCase } from "./diary.usecases"; 

@Module({
    imports: [InfrastructureModule],
    providers: [DiaryUseCase],
    exports: [DiaryUseCase],
  })
  export class DiaryModule {}
  