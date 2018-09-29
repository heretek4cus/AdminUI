import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  documentupload: any[] = [
    {
     "docId" : 2543679,
     "documentName" :"Calender Doc",
     "attachmentCount":2,
     "dateTime": "1 Dec 2017 09:00"
    },
    {
      "docId" : 2543680,
     "documentName" :"Property Doc",
     "attachmentCount":2,
     "dateTime": "1 Dec 2017 09:00"
    },
    {
      "docId" : 2543681,
     "documentName" :"Resident Doc",
     "attachmentCount":2,
     "dateTime": "1 Dec 2017 09:00"
    }, {
      "docId" : 2543679,
      "documentName" :"Calender Doc",
      "attachmentCount":2,
      "dateTime": "1 Dec 2017 09:00"
     },
     {
       "docId" : 2543680,
      "documentName" :"Property Doc",
      "attachmentCount":2,
      "dateTime": "1 Dec 2017 09:00"
     },
     {
       "docId" : 2543681,
      "documentName" :"Resident Doc",
      "attachmentCount":2,
      "dateTime": "1 Dec 2017 09:00"
     }, {
      "docId" : 2543679,
      "documentName" :"Calender Doc",
      "attachmentCount":2,
      "dateTime": "1 Dec 2017 09:00"
     }];

     
     

}
