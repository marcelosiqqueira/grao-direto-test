import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';

@Injectable()
export class MenuService {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async findAll() {
    return this.prisma.menuItem.findMany();
  }

  async findOne(id: number) {
    return this.prisma.menuItem.findMany({
      where: {
        restaurantId: id
      }
    });
  }
}
