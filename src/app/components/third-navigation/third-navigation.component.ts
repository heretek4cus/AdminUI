import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-third-navigation',
  templateUrl: './third-navigation.component.html',
  styleUrls: ['./third-navigation.component.css']
})
export class ThirdNavigationComponent implements OnInit {

  @Input() data: string;

  @Output()
  menuClick: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
    
  }

  onMenuClick(event, val){
    this.menuClick.emit(val);
  }
}
