import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return todos', () => {
      expect(service.getData().length).toBe(2);
    });
  });

  describe('addToDo', () => {
    it('should add ToDo', () => {
      service.addTodo();
      expect(service.getData().length).toBe(3);
    })
  })
});
