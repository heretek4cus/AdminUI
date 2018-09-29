import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.css']
})
export class CollaborationComponent implements OnInit {

  pageTitle: string = "Collaboration";
  data = {
    navLinks: [
      {
        index: 0,
        lable: "Notices",
        parent: true,
        subNavLinks: []      
      },
      {
        index: 1,
        lable: "Events",
        parent: true,
        subNavLinks: []
      },
      {
        index: 2,
        lable: "Discussion Forum",
        parent: true,
        subNavLinks: []
      },
      {
        index: 3,
        lable: "Pooling",
        parent: true,
        subNavLinks: [
          {
            index: 0,
            lable: "Active",
            parent: false
          },
          {
            index: 1,
            lable: "Completed",
            parent: false
          }
        ]
      },
      {
        index: 4,
        lable: "Directory",
        parent: true,
        subNavLinks: []
      },
      {
        index: 5,
        lable: "Groups",
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
