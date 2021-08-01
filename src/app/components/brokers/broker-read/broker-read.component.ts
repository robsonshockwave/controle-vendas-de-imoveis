import { Component, OnInit } from '@angular/core';
import { Brokers } from '../brokers.model';
import { BrokersService } from '../brokers.service';

@Component({
  selector: 'app-broker-read',
  templateUrl: './broker-read.component.html',
  styleUrls: ['./broker-read.component.css']
})
export class BrokerReadComponent implements OnInit {

  brokers: Brokers[]
  teste: string
  displayedColumns = ['tipo', 'nomeCorretor', 'creci', 'salario', 'dataAdmissao', 'percentualComissao', 'action']

  constructor(private brokersService: BrokersService) { }

  ngOnInit(): void {
    this.brokersService.read().subscribe(brokers => {
      this.brokers = brokers
    })
  }

}
