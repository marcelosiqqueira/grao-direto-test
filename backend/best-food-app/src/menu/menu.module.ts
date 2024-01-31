import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
