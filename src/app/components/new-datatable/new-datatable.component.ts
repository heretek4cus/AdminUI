import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'new-datatable',
  templateUrl: './new-datatable.component.html',
  styleUrls: ['./new-datatable.component.css']
})
export class NewDatatableComponent implements OnInit {
  
  documentupload: any[] = [
    {
     "name" : "Harshit Jain",
     "type" :"Owner",
     "blockname":"zen",
     "unit":"9867456391",
     "lastlogin": "1 Dec 2017 09:00",
     "status" : "Active"
    },
    {
      "name" : "Kaushal Varma",
      "type" :"Owner",
      "blockname":"zen",
      "unit":"9867456821",
      "lastlogin": "1 Dec 2017 09:00",
      "status" : "Active"
    },
   ];
  constructor() { }

  ngOnInit() {
  }
 

}

