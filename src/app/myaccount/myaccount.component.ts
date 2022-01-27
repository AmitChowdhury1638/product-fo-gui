import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../services/messenger.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  constructor(private msessengerService: MessengerService) { }

  ngOnInit(): void {
    this.msessengerService.sendLoginValue(false);
  }

}
