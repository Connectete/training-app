import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Put,
  Post,
} from '@nestjs/common';
import { GetRequest, PostRequest, PutRequest } from './request.interface';
import { GetResponse } from './response.interface';
import { BodyRecordUseCase } from '@/application/usecase/bodyRecord/bodyRecord.usecases';
import { CreateBodyRecord } from '@/domain/bodyRecord.type';

@Controller('')
export class BodyRecordController {
  constructor(private readonly bodyRecordUseCase: BodyRecordUseCase) {}
  @Get('users/:userId/bodyRecord')
  async get(@Param() { userId }: GetRequest): Promise<GetResponse> {
    const bodyRecord = await this.bodyRecordUseCase.findByUserId(userId);
    return bodyRecord;
  }
  @Put('users/:userId/dates/:date/bodyRecord/update')
  async put(
    @Param('userId') userId: string,
    @Param('date') date: string,
    @Body() updateWeightRequest: PutRequest,
  ): Promise<boolean> {
    const updateBodyRecord = {
      userId: userId,
      date: new Date(date),
      value: updateWeightRequest.value,
    };

    const result = await this.bodyRecordUseCase.updateByUserId(
      updateBodyRecord,
    );
    return result;
  }
  @Post('users/:userId/dates/:date/bodyRecord/create')
  async post(
    @Param('userId') userId: string,
    @Param('date') date: string,
    @Body() createWeightRequest: PostRequest,
  ): Promise<boolean> {
    const createBodyRecord = {
      userId: userId,
      date: new Date(date),
      value: createWeightRequest.value,
    };
    const result = await this.bodyRecordUseCase.createByUserId(
      createBodyRecord,
    );
    return result;
  }
}
