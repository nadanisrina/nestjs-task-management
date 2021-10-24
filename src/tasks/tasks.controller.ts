import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskModel } from './tasks.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {
    // this.tasksService = tasksService;
  } // service injected and become class property

  @Get()
  getAllTasks(): TaskModel[] {
    return this.tasksService.getAllTasks();
  }
}
