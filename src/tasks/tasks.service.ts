import { Injectable } from '@nestjs/common';
import { TaskModel } from './tasks.model';
@Injectable()
export class TasksService {
  private tasks: TaskModel[] = [];
  getAllTasks(): TaskModel[] {
    return this.tasks;
  }
}
