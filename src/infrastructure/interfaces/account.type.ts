import { AccountInfo, ChangePassword } from "@/domain/account.type";

export const ACCOUNT_REPOSITORY = Symbol.for('ACCOUNT_REPOSITORY');

export interface AccountRepository {

    /**
     *
     * @param userId
     */
    createAccount(accountInfo: AccountInfo);
    changePassword(changePassword: ChangePassword);
}