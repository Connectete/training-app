import { Body, Controller, Get, NotFoundException, Param, Post  } from "@nestjs/common";
import { GetRequest, PostRequest } from './request.interface';
import { GetResponse } from "./respons.interface"; 
import { BodyRecordUseCase } from "@/application/usecase/bodyRecord/bodyRecord.usecases";
import { CreateBodyRecod } from "@/domain/bodyRecord.type";

@Controller('')
export class BodyRecordController {
    constructor(private readonly bodyRecordUseCase: BodyRecordUseCase) {}
    @Get('users/:userId/bodyRecord')
     async get(@Param() { userId }: GetRequest): Promise<GetResponse> {
      const bodyRecord = await this.bodyRecordUseCase.findByUserId(userId);
      return bodyRecord;
  }
    @Post('users/:userId/bodyRecord/create') 
    //関数名（引数、ParamとかBody) ：　返す値の型{
 // 処理の中身。中で返す値の型と同じ型の何かをreturnする
    //}　
     async Post(@Param('userId') userId: string,  @Body() postData: PostRequest): Promise<boolean> {
     console.log(postData);
      const data: CreateBodyRecod = {
        userId: userId,
        dateTime: postData.dateTime,
        value: postData.value
      }
      const result = await this.bodyRecordUseCase.createByUserId(data);
      return result;
  };
}
  
