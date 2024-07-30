import { Controller, Get } from '@nestjs/common';
import { Order, OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('')
  async getAll(): Promise<Order[]> {
    console.log('Get it');

    return await this.ordersService.getAll();
  }
}
