import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from 'src/schemas/order.schema';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  calculateOrder(orders: Partial<Order[]>): Order[] {
    orders.forEach((order) => {
      const date = new Date(order.date);
      if (date.getDay() !== 0 || date.getDay() !== 6) {
        order.commission = `$${(+order.total.replace('$', '') * 0.03).toFixed(2)}`;
      } else {
        order.commission = `$${(+order.total.replace('$', '') * 0.3).toFixed(2)}`;
      }
      return order;
    });

    return orders;
  }

  async getAll(): Promise<Order[]> {
    const orders: Order[] = await this.orderModel.find().exec();
    const calcOrders = this.calculateOrder(orders);
    return calcOrders;
  }
}
