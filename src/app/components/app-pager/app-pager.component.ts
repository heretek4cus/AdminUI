import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './app-pager.component.html',
  styleUrls: ['./app-pager.component.css']
})
export class AppPagerComponent implements OnInit {
  
   @Input()
  private page:number=1;
  constructor() { }

  ngOnInit() {
  }

}
