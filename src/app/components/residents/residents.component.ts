import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-resident',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css']
})
export class ResidentsComponent implements OnInit {
  
  @Input() childMessage: string;

  sampleData = [];
  sampleData1 = [];
  constructor() { }

  ngOnInit() {
    this.sampleData = [
      {
        "heading": "Awaiting Approval",
        "data" : [{},{},{}]
      }
    ];
    this.sampleData1 = [
      {
        "heading": "Awaiting Registration",
        "data" : [{},{},{}]
      }
    ];
  }

}