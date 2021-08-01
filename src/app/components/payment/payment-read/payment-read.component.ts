import { Component, OnInit } from '@angular/core';
import { Brokers } from '../../brokers/brokers.model';
import { BrokersService } from '../../brokers/brokers.service';
import { Payment } from '../payment.model';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-read',
  templateUrl: './payment-read.component.html',
  styleUrls: ['./payment-read.component.css']
})
export class PaymentReadComponent implements OnInit {

  payment: Payment[]
  tipoCorretor: string
  yearMonth: string
  displayedColumns = ['nomeCorretor', 'tipoCorretor', 'valorRecebido', 'dataAdmissao']

  brokers: Brokers[]

  constructor(private paymentService: PaymentService, private brokersService: BrokersService) { }

  ngOnInit(): void {
    this.paymentService.read().subscribe(payment => { 
      this.payment = payment
    })
    
    this.brokersService.read().subscribe(broker => {
      this.brokers = broker
    })
  }

}
