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
  brokers2: Brokers[]
  teste: string
  displayedColumns = ['tipo', 'nomeCorretor', 'creci', 'salario', 'percentualComissao', 'action']
  displayedColumns2 = ['tipo', 'nomeCorretor', 'creci', 'salario', 'dataAdmissao', 'action']

  constructor(private brokersService: BrokersService) { }

  ngOnInit(): void {
    this.brokersService.read2().subscribe(brokers => {
      this.brokers2 = brokers
    })

    this.brokersService.read().subscribe(brokers => {
      this.brokers = brokers
    })
  }
}
