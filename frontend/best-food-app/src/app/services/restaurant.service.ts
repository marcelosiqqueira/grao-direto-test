import { Injectable } from '@angular/core';
import { Restaurant } from '../shared/models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurants: Restaurant[] = [
    {
      id: 1,
      name: 'Bonelle - Carnes, Massas e Grelhados',
      logoImage: 'assets/uploads/restaurants/1/logo.png',
      bannerImage: 'assets/uploads/restaurants/1/banner.png',
      rating: 4.8,
      deliveryTime: '25-35 min',
      deliveryFee: 4.90,
      distance: '2.1 km',
      menuItems: [
        {
          id: 1,
          restaurantId: 1,
          name: 'Filé Mignon ao Molho Madeira + Arroz Cremoso + Fritas',
          image: 'assets/uploads/restaurants/1/menu/1.png',
          description: 'Delicioso Filé Mignon ao Molho Madeira + Arroz Cremoso da Casa + Batatas Fritas',
          price: 37.90
        },
        {
          id: 2,
          restaurantId: 1,
          name: 'SUPER PROMO - FRANGO CREMOSO + ARROZ + FEIJÃO + BATATA PALHA',
          image: 'assets/uploads/restaurants/1/menu/2.png',
          description: 'Delicioso picadinho de frango ao Molho Branco e Queijo + Arroz branco Soltinho + Batata Palha + Feijão Fresquinho',
          price: 28.90
        },{
          id: 3,
          restaurantId: 1,
          name: 'PICANHA SUÍNA GRELHADA',
          image: 'assets/uploads/restaurants/1/menu/3.png',
          description: 'Picanha suína grelhada, arroz branco Fresquinho, Feijão Saboroso e batatas fritas e Salada!',
          price: 29.90
        },{
          id: 4,
          restaurantId: 1,
          name: 'FRANGO A PARMEGIANA + REFRI LATA',
          image: 'assets/uploads/restaurants/1/menu/4.png',
          description: 'Filé frango empanado guarnecido com molho ao sugo da casa, muçarela, arroz branco e fritas.',
          price: 35.90
        },
      ]
    },
    {
      id: 2,
      name: 'Pamonha do Milho',
      logoImage: 'assets/uploads/restaurants/2/logo.png',
      bannerImage: 'assets/uploads/restaurants/2/banner.png',
      rating: 4.5,
      deliveryTime: '40-55 min',
      deliveryFee: 7.90,
      distance: '4.1 km',
      menuItems: [
        {
          id: 1,
          restaurantId: 1,
          name: 'PROMOÇÃO LEVE 6 PAGUE 5!',
          image: 'assets/uploads/restaurants/2/menu/1.png',
          description: 'PROMOÇÃO LEVE 6 PAGUE 5! A melhor pamonha da região!',
          price: 79.90
        },
        {
          id: 2,
          restaurantId: 2,
          name: 'PAMONHA DOCE COM QUEIJO',
          image: 'assets/uploads/restaurants/2/menu/2.png',
          description: 'Pamonha doce recheada com queijo.',
          price: 8.90
        },{
          id: 3,
          restaurantId: 2,
          name: 'PAMONHA SAL COM QUEIJO',
          image: 'assets/uploads/restaurants/2/menu/3.png',
          description: 'Pamonha salgada com queijo.',
          price: 7.90
        },{
          id: 4,
          restaurantId: 2,
          name: 'MINGAU DE MILHO VERDE',
          image: 'assets/uploads/restaurants/2/menu/4.png',
          description: 'MINGAU DE MILHO VERDE (250 ML)',
          price: 17.90
        },
      ]
    },
  ];

  getMenuByRestaurantId(id: number | null) {
    if(!id) {
      return [];
    }
    const restaurant = this.restaurants.find(r => r.id == id);
    return restaurant ? restaurant.menuItems : [];
  }

  getAll() {
    return this.restaurants;
  }

  constructor() { }
}
