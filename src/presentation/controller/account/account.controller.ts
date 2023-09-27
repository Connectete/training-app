import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { AccountUseCase } from '@/application/usecase/account/account.usecase';
import { AccountCreateRequest, AccountChangePasswordRequest } from './request.interface';

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
    @Put('users/:userId/changePassword')
    async put(
        @Param ('userId') userId: string,
        @Body() changePasswordRequest: AccountChangePasswordRequest,
    ): Promise<boolean> {
        const changePassword = {
            userId: userId,
            password: changePasswordRequest.password,
        };
        const result = await this.accountUseCase.changePassword(changePassword);
        return result;
    }
}