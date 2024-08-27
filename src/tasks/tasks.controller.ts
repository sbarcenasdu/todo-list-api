import { Controller, Get, Param, Post, Body, Delete, Patch, Put, NotFoundException, HttpStatus, HttpException } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './entities/task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async findAll(): Promise<{ message: string; data: Task[] }> {
    const tasks = await this.tasksService.findAll();
    return {
      message: 'Tareas recuperadas exitosamente',
      data: tasks,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<{ message: string; data: Task }> {
    try {
      const task = await this.tasksService.findOne(id);
      return {
        message: `Tarea con ID ${id} recuperada exitosamente`,
        data: task,
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Post()
  async create(@Body() createTaskDto: Partial<Task>): Promise<{ message: string; data: Task }> {
    const task = await this.tasksService.create(createTaskDto);
    return {
      message: 'Tarea creada exitosamente',
      data: task,
    };
  }

  @Patch(':id')
  async updatePartial(@Param('id') id: number, @Body() updateTaskDto: Partial<Task>): Promise<{ message: string; data: Task }> {
    try {
      const task = await this.tasksService.update(id, updateTaskDto);
      return {
        message: `Tarea con ID ${id} actualizada exitosamente`,
        data: task,
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Put(':id')
  async updateFull(@Param('id') id: number, @Body() updateTaskDto: Partial<Task>): Promise<{ message: string; data: Task }> {
    try {
      const task = await this.tasksService.update(id, updateTaskDto);
      return {
        message: `Tarea con ID ${id} completamente actualizada con {exito`,
        data: task,
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<{ message: string }> {
    try {
      await this.tasksService.remove(id);
      return {
        message: `Tarea con ID ${id} eliminada exitosamente`,
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
