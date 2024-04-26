import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { RolesGuard } from './users/roles.guard';
import { Role } from './users/entities/role.enum';
import { Roles } from './users/roles.decorator';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  // POST /login
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);
  }

  // GET /protected
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): any {
    return req.user;
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Get('test')
  getTest(): any {
    return 'Test Function';
  }
}
