import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../wallet/wallet.service';
import { RpcReceive } from '../../rpc/rpc-receive.model';
import { RpcSend } from 'src/app/rpc/rpc-send.model';
import { NotificationService } from 'src/app/notification-bar/notification.service';
import {
  Notification,
  NotifType
} from 'src/app/notification-bar/notification.model';
import { Transaction } from './transaction.model';

@Component({
  selector: 'app-transactions-view',
  templateUrl: './transactions-view.component.html',
  styleUrls: ['../overview.component.css', './transactions-view.component.css']
})
export class TransactionsViewComponent implements OnInit {
  rpcReceive: RpcReceive;
  transactions: Array<Transaction>;

  constructor(
    private walletService: WalletService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.getTransactions();
  }
  getDateNum(str) {
    return parseInt(str) * 1000;
  }
  getTransactions() {
    const command = new RpcSend('listtransactions', ['', 15]);
    this.walletService.sendRPC(command).subscribe(
      (receieve: RpcReceive) => {
        if (receieve.type === 'SUCCESS') {
          this.transactions = receieve.data;
        } else {
          this.notificationService.addNotification(
            new Notification(
              `Unable to get transactions ${receieve.data}. ${
                receieve.message
              }`,
              NotifType.ERROR
            )
          );
        }
      },
      error => {
        this.notificationService.addNotification(
          new Notification(
            `Unable to get transactions ${error}`,
            NotifType.ERROR
          )
        );
      }
    );
  }
}
