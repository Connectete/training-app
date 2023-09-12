import { Body, Controller, Get, NotFoundException, Param, Post  } from "@nestjs/common";
import { GetRequest, PostRequest } from './request.interface';
import { GetResponse } from "./respons.interface"; 
import { BodyRecordUseCase } from "@/application/usecase/bodyRecord/bodyRecord.usecases";
import { CreateBodyRecord} from "@/domain/bodyRecord.type";

@Controller('')
export class BodyRecordController {
    constructor(private readonly bodyRecordUseCase: BodyRecordUseCase) {}
    @Get('users/:userId/bodyRecord')
     async get(@Param() { userId }: GetRequest): Promise<GetResponse> {
      const bodyRecord = await this.bodyRecordUseCase.findByUserId(userId);
      return bodyRecord;
  }
    @Post('users/:userId/dates/:date/bodyRecord/create') 
    //関数名（引数、ParamとかBody) ：　返す値の型{
 // 処理の中身。中で返す値の型と同じ型の何かをreturnする
    //}　
     async post(
      @Param('userId') userId: string, 
      @Param('date') date: string,
      @Body() postData: PostRequest): Promise<boolean> {
      const data: CreateBodyRecord = {
        userId: userId,
        date: new Date(date),
        value: postData.value
      }
      const result = await this.bodyRecordUseCase.createByUserId(data);
      return result;
  };
}
  
