import { Module } from "@nestjs/common";
import { InfrastructureModule } from "@/infrastructure/infrastructure.module";
import { DietUseCase } from "./diet.usecase";

@Module({
    imports: [InfrastructureModule],
    providers: [DietUseCase],
    exports: [DietUseCase],
})
export class DietModule {}