import { Module } from '@nestjs/common';
import { InfrastructureModule } from '@/infrastructure/infrastructure.module';
import { AccountUseCase } from '@/application/usecase/account/account.usecase';

@Module({
    imports: [InfrastructureModule],
    providers: [AccountUseCase],
    exports: [AccountUseCase],
})
export class AccountModule {}
