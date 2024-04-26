import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {

    @Get()
    getAllUsers(): string {
        return 'All Users List';
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    // @Roles(Role.ADMIN)
    create(@Body() createUserDto: CreateUserDto) {
      return createUserDto;
    }
}
