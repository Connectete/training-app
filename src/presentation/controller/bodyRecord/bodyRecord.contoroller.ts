import { Controller, Get, NotFoundException, Param  } from "@nestjs/common";
import { GetRequest } from './request.interface';
import { GetResponse } from "./respons.interface"; 
import { BodyRecordUseCase } from "@/application/usecase/bodyRecord/bodyRecord.usecases";

@Controller('')
export class BodyRecordController {
    constructor(private readonly bodyRecordUseCase: BodyRecordUseCase) {}
    @Get('users/:userId/bodyRecord')
     async get(@Param() { userId }: GetRequest): Promise<GetResponse> {
      const bodyRecord = await this.bodyRecordUseCase.findByUserId(userId);
      return bodyRecord;
       
  }
}