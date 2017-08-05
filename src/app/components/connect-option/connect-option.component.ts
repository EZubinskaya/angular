import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'connect-option',
    templateUrl: './connect-option.component.html',
    styleUrls: ['./connect-option.component.scss']

})

export class ConnectOptionComponent implements OnInit {
    constructor() { }

 selectedManualConnection:boolean = false;

  onChangeConnectionType(connectionType) {
      if(connectionType == 2){
          this.selectedManualConnection = true;
      }
  }
 
    ngOnInit() { }
}