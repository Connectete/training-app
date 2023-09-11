import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '@/app.module';

describe('GoalController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('/users/{userId}/goal returns goal data(200)', async () => {
    const res = await request(app.getHttpServer())
      .get(`/users/testId/goal`)
      .expect(200);
    expect(res.body).toEqual({
      id: 1,
      userId: 'testId',
      value: 55,
    });
  });
});
