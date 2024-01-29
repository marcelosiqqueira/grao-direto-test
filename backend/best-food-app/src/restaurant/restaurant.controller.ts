import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.restaurantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restaurantService.findOne(+id);
  }

  @Post('search')
  async search(@Body('term') term: string) {
    return await this.restaurantService.search(term);
  }
}