import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

@Component({  
  selector: 'app-datatable',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  dtOptions: any = {};
  tableData = [];
  constructor() { 

  }

  ngOnInit() {
    this.dtOptions = {
     
    
      info: false,
      lengthChange: false,
      language: { 
        search: "", 
        searchPlaceholder: "Search" 
      }
      
      
    };

    this.tableData = [
      {
        "name": "Jaanvi Varma",
        "type": "Owner",
        "unit": "979119045",
        "date_added": "09 Nov 2017",
        "status": "Active"
      },
      {
        "name": "Kailash Varma",
        "type": "Owner",
        "unit": "979119045",
        "date_added": "09 Nov 2017",
        "status": "Active"
      }
    ];
  }

  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('select', this.header()).on('change', function () {
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }
 

}