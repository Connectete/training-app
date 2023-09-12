import { Controller, Post, Param, Body} from "@nestjs/common"; 
import { DiaryUseCase } from "@/application/usecase/diary/diary.usecases"; 
import { PostRequest } from "./request.interface";

@Controller('')
export class DiaryController {
    constructor(private readonly DiaryUseCase: DiaryUseCase) {}
  @Post('users/:userId/dates/:date/diary/create')
  async post(
    @Param('userId') userId: string,
    @Param('date') date: string,
    @Body() createContentsRequest: PostRequest,
  ): Promise<boolean> {
    const createContents= {
      userId : userId,
      dateTime : new Date(date),
      contents : createContentsRequest.contents
    }
    
    const result = await this.DiaryUseCase.createDiaryByUserId(createContents);
    return result;
  }
}