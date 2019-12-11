import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trailer-modal',
  templateUrl: './trailer-modal.component.html',
  styleUrls: ['./trailer-modal.component.css']
})
export class TrailerModalComponent implements OnInit {
  @Input() lnikAdress: string;

  constructor() { }

  ngOnInit() {
  }

}
