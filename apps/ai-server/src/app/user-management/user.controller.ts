import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { API_USER_MANAGEMENT } from '@ai-playground/shared/infra';

@Controller(API_USER_MANAGEMENT.ROOT)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(API_USER_MANAGEMENT.USER)
  getUser() {
    return this.userService.getUser();
  }

  @Post(API_USER_MANAGEMENT.USER)
  registerUser() {
    return this.userService.handleUserRegistration();
  }
}
