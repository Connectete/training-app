import {
  bodyRecord,
  createBodyRecord,
  updateBodyRecord,
} from '@/domain/bodyRecord.type';

export const BODYRECORD_REPOSITORY = Symbol.for('BODYRECORD_REPOSITORY');

export interface BodyRecordRepository {
  /**
   * 記録体重をユーザIDから取得する
   * @param userId
   */
  findByUserId(userId: string);
  updateByUserId(updateBodyRecord: updateBodyRecord);
  createBodyRecord(createBodyRecord: createBodyRecord);
}
