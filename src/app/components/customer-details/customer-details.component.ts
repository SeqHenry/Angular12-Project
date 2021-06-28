import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  selectArea = new FormControl();
  selectAreaList: string[] = ['Lobby', 'Entrance', 'Hall', 'Auditorium', 'Networking Lounge', 'Helpdesk'];
  languageList: string[] = ['English', 'Hindi', 'Marathi', 'Konkani', 'German', 'French'];
  startDate = new Date(2021, 0, 1);
  @Input() group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
