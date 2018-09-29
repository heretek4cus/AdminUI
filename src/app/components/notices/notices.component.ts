import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {

  @Input() childMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
