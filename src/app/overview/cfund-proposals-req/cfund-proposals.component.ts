import { Component, OnInit } from '@angular/core';

export interface CFundProposalsModel {
  transactions: any;
}

@Component({
  selector: 'cfund-proposals-req-list',
  templateUrl: './cfund-proposals-req-list.html',
  styleUrls: ['../overview.component.css', './cfund-proposals-req-list.css']
})
export class CFundProposalsComponent implements OnInit {

  proposals: CFundProposalsModel;

  constructor(
    private proposal: CFundProposalsModel
  ) {}

  ngOnInit() {
  }
}
