import { Controller,Param, Put, Body,Post } from '@nestjs/common';
import { PutRequest, PostRequest } from './request.interface';
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

  @Post('users/:userId/dates/:date/diary/create')
  async post(
    @Param('userId') userId: string,
    @Param('date') date: string,
    @Body() createContentsRequest: PostRequest,
  ): Promise<boolean> {
    const createContents= {
      userId : userId,
      date : new Date(date),
      contents : createContentsRequest.contents
    }
    const result = await this.diaryUseCase.createByUserId(createContents);
    return result;
  }
}