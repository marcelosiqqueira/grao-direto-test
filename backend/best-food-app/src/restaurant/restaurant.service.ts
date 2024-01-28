import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@Injectable()
export class RestaurantService {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  async findAll() {
    return this.prisma.restaurant.findMany();
  }

  async findOne(id: number) {
    return this.prisma.restaurant.findUnique({
      where: {id}
    });
  }
}
