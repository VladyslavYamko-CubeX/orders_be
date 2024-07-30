import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop({ required: true })
  order: string;

  @Prop({ required: true })
  date: number;

  @Prop({ required: true })
  customer: string;

  @Prop({ required: true })
  total: string;

  @Prop({ required: true })
  attributedStaffName: string;

  @Prop({ required: false })
  commission: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
