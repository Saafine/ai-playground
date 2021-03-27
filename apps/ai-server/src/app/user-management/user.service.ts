import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  handleUserRegistration(): { message: string } {
    return { message: 'Registered' };
  }

  getUser() {
    return {
      name: 'John',
    };
  }
}
