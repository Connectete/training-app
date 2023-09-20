import {
  Controller,
  Param,
  Put,
  Body,
  Get,
  Post
} from '@nestjs/common';
import { DiaryGetRequest, PutRequest, PostRequest } from './request.interface';
import { DiaryGetResponse } from './response.interface';
import { DiaryUseCase } from '@/application/usecase/diary/diary.usecase';

@Controller('')
export class DiaryController {
  constructor(private readonly diaryUseCase: DiaryUseCase) {}

  @Put('users/:userId/dates/:date/diary/update')
  async put(
    @Param('userId') userId: string,
    @Param('date') date: string,
    @Body() updateDiaryRequest: PutRequest,
  ): Promise<boolean> {
    const updateDiary = {
      userId: userId,
      date: new Date(date),
      contents: updateDiaryRequest.contents,
    };
    const result = await this.diaryUseCase.updateByUserId(updateDiary);
    return result;
  }

  @Get('users/:userId/dates/:date/diary')
  async get(
    @Param() { userId }: DiaryGetRequest,
    @Param() { date }: DiaryGetRequest,
  ): Promise<DiaryGetResponse> {
    const getDiary = {
      userId: userId,
      date: new Date(date),
    };
    const result = await this.diaryUseCase.findByUserId(getDiary);
    return result;
  }

  @Post('users/:userId/dates/:date/diary/create')
  async post(
    @Param() { userId }: PostRequest,
    @Param() { date }: PostRequest,
    @Body() createDiaryRequest: PostRequest,
  ): Promise<boolean> {
    console.log(createDiaryRequest);
    const createDiary = {
      userId: userId,
      date: new Date(date),
      contents: createDiaryRequest.contents,
    };
    const result = await this.diaryUseCase.createDiary(createDiary);
    return result;
  };
}
