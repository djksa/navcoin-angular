import { Component, OnInit } from '@angular/core';

import { WalletModel } from '../../wallet/wallet.model';
import { WalletService } from '../../wallet/wallet.service';
import { RpcSend } from '../../rpc/rpc-send.model';
import { RpcReceive } from '../../rpc/rpc-receive.model';

export interface LatestTransactionsModel {
  transactions: any;
}

@Component({
  selector: 'latest-transactions-req-list',
  templateUrl: './latest-transactions-req-list.html',
  styleUrls: ['../overview.component.css', './latest-transactions-req-list.css']
})
export class LatestTransactionsComponent implements OnInit {

  transactions: LatestTransactionsModel;
  rpcSend: RpcSend;
  rpcReceive: RpcReceive;
  qrMainAddress: string;

  constructor(
    private walletService: WalletService
  ) {}

  ngOnInit() {
  }
}
