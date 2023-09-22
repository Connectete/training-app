import { InfrastructureModule } from "@/infrastructure/infrastructure.module";
import { Module } from "@nestjs/common";
import { DietUseCase } from "./diet.usecase";

@Module({
    imports: [InfrastructureModule],
    providers: [DietUseCase],
    exports: [DietUseCase],
})
export class DietModule {}