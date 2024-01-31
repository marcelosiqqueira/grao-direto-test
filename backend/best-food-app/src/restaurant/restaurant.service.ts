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

  async search(term: string) {
    const restaurants = await this.prisma.restaurant.findMany({
      where: {
        OR: [
          {
            name: {
              contains: term,
            },
          },
          {
            menu_items: {
              some: {
                OR: [
                  {
                    name: {
                      contains: term,
                    },
                  },
                  {
                    description: {
                      contains: term,                    
                    },
                  },
                ],
              },
            },
          },
        ],
      },
      include: {
        menu_items: true, // Inclui itens de menu nos resultados
      },
    }); 


    return restaurants;
  }
}
