import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brokers } from '../brokers.model';
import { BrokersService } from '../brokers.service';

@Component({
  selector: 'app-broker-update',
  templateUrl: './broker-update.component.html',
  styleUrls: ['./broker-update.component.css']
})
export class BrokerUpdateComponent implements OnInit {
  brokers: Brokers;

  constructor(private brokersService: BrokersService, private router: Router) { }

  ngOnInit(): void {
    
  }

  updateBroker(): void {

  }

  cancel(): void {
    this.router.navigate(['/brokers']);
  }
}
