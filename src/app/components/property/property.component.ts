import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  pageTitle: string = "Property";
  data = {
    navLinks: [
      {
        index: 0,
        lable: "People",
        parent: true,         
        subNavLinks: [
          {
            index: 0,
            lable: "Residents",
            parent: false
          },
          {
            index: 1,
            lable: "Vendors",
            parent: false
          },
          {
            index: 2,
            lable: "Staff",
            parent: false
          },
          {
            index: 3,
            lable: "Visitors",
            parent: false
          }
        ]
      },
      {
        index: 1,
        lable: "Follow",
        parent: true,
        subNavLinks: []
      },
      {
        index: 2,
        lable: "Maintain",
        parent: true,
        subNavLinks: []
      }
    ]
  }


  constructor() { }

  ngOnInit() : void {
    this.showData(this.data.navLinks[0]);
  }

  showData = function(val){
    if(val.parent) {
      this.data.navStatus = val.index;
      this.data.subNavLinks = val.subNavLinks;
      if(val.subNavLinks && val.subNavLinks.length > 0){
        this.data.subNavStatus = 0;
        this.data.parentMessage = val.subNavLinks[0].lable;
      } else {
        this.data.parentMessage = val.lable;
      }
    } else{
      this.data.parentMessage = val.lable;
      this.data.subNavStatus = val.index;
    }     
  }
}
