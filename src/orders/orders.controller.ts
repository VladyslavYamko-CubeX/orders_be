import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from 'src/schemas/order.schema';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('')
  async getAll(): Promise<Order[]> {
    console.log('Get it');

    return await this.ordersService.getAll();
  }
}
