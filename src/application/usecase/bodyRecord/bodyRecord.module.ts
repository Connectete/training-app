import { Module } from "@nestjs/common";
import { InfrastructureModule } from "@/infrastructure/infrastructure.module";
import { BodyRecordUseCase } from "@/application/usecase/bodyRecord/bodyRecord.usecases"; 

@Module({
    imports: [InfrastructureModule],
    providers: [BodyRecordUseCase],
    exports: [BodyRecordUseCase],
  })
  export class BodyRecordModule {}
  