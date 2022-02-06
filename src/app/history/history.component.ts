import { OrdersService } from './../orderpage/services/orders.service';
import {
  OrderDto,
  OrderExistingDto,
} from './../orderpage/interfaces/orders.interface';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CartStatus } from 'src/core/interfaces/cart.interface';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  constructor(private ordersService: OrdersService) {}
  $orders = new BehaviorSubject<OrderExistingDto>(undefined);
  ngOnInit(): void {
    this.ordersService.getAll().subscribe((res: OrderExistingDto) => {
      console.log(res);
      this.$orders.next(res);
    });
  }

  isDoneOrder(order: OrderExistingDto) {
    if (
      order.status === CartStatus.DELIVERED ||
      order.status === CartStatus.CANCELED
    ) {
      return true;
    }
    return false;
  }
}
