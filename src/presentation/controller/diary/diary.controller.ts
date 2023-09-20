<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0ce6b4190df28e94ca14993e0fab0fdcfa00cf6a
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
<<<<<<< HEAD

=======
import { Controller, Post, Param, Body} from "@nestjs/common";
import { DiaryUseCase } from "@/application/usecase/diary/diary.usecases";
import { PostRequest } from "./request.interface";

@Controller('')
export class DiaryController {
    constructor(private readonly DiaryUseCase: DiaryUseCase) {}
>>>>>>> 0684630 (PostRequest以外をコミット)
=======
>>>>>>> 0ce6b4190df28e94ca14993e0fab0fdcfa00cf6a
  @Post('users/:userId/dates/:date/diary/create')
  async post(
    @Param('userId') userId: string,
    @Param('date') date: string,
    @Body() createDiaryRequest: PostRequest,
  ): Promise<boolean> {
<<<<<<< HEAD
<<<<<<< HEAD
    const createDiary= {
      userId : userId,
      date : new Date(date),
      contents : createDiaryRequest.contents
    };

    const result = await this.diaryUseCase.createByUserId(createDiary);
    return result;
  }
}
=======
    const createContents= {
      userId : userId,
      dateTime : new Date(date),
      contents : createContentsRequest.contents
    }

    const result = await this.DiaryUseCase.createDiaryByUserId(createContents);
=======
    const createDiary= {
      userId : userId,
      date : new Date(date),
      contents : createDiaryRequest.contents
    };

    const result = await this.diaryUseCase.createDiaryByUserId(createDiary);
>>>>>>> 0ce6b4190df28e94ca14993e0fab0fdcfa00cf6a
    return result;
  }
}
