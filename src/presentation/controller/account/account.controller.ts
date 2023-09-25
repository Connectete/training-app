import { Controller, Post, Body } from '@nestjs/common';
import { AccountUseCase } from '@/application/usecase/account/account.usecase';
import { AccountCreateRequest } from './request.interface';

@Controller('')
export class AccountController {
    constructor(private readonly accountUseCase: AccountUseCase) {}
    @Post('users/create')
    async post(@Body() createAccountRequest: AccountCreateRequest): Promise<boolean> {
        const createAccount = {
            userId: createAccountRequest.userId,
            name: createAccountRequest.name,
            password: createAccountRequest.password,
        };
        const result = await this.accountUseCase.createAccount(createAccount);
        return result;
    }
}