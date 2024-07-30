import { Injectable } from '@nestjs/common';
export interface Order {
  id: string;
  order: string;
  date: number;
  customer: string;
  total: string;
  attributedStaffName: string;
  commission: string;
}
const orders: Order[] = [
  {
    id: '1020',
    order: '#1020',
    date: new Date(2024, 6, 29).getTime(),
    customer: 'Jaydon Stanton',
    total: '$969.44',
    attributedStaffName: 'Jaydon Westerfelt',
    commission: '$8.24',
  },
  {
    id: '1019',
    order: '#1019',
    date: new Date(2024, 6, 30).getTime(),
    customer: 'Ruben Westerfelt',
    total: '$701.19',
    attributedStaffName: 'Leo Westerfelt',
    commission: '$8.24',
  },
  {
    id: '1018',
    order: '#1018',
    date: new Date(2024, 6, 31).getTime(),
    customer: 'Leo Carder',
    total: '$798.24',
    attributedStaffName: 'Ruben Carder',
    commission: '$8.24',
  },
];
@Injectable()
export class OrdersService {
  getAll(): Order[] {
    return orders;
  }
}
