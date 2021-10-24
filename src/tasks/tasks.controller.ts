import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {
    this.tasksService = tasksService;
  } // service injected and become class property

  // @Get()
  // async getAllTasks() {
  //   return await this.tasksService.getAllTasks();
  // }
}
