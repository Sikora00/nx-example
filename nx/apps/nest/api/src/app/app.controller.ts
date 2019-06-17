import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { mapToObj } from '@nx/utils';
import { AppService } from './app.service';
import { ToDo } from '@nx/data';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('todos')
  getData(): any {
    return mapToObj(this.appService.getData());
  }

  @Post('addTodo')
  addTodo(@Body() todo: ToDo): any {
    return this.appService.addToDo(todo);
  }

  @Put('todo')
  updateToDo(@Body() todo: ToDo): any {
    return this.appService.updateToDo(todo);
  }
}
