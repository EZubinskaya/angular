import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'connect-option',
    templateUrl: './connect-option.component.html',
    styleUrls: ['./connect-option.component.scss']

})

export class ConnectOptionComponent implements OnInit {
    selectedConnectionCode: number;
    isManualConnection: boolean = false;
    manualConnectionCode: number = 2;
    connections = [{ code: 0, name: 'No Connection', },
                    { code: 1, name: 'Connect to Localhost', },
                    { code: this.manualConnectionCode, name: 'Manual connection', }];

    constructor() { }

    onChangeConnectionType(selectedConnectionCode) {
        this.isManualConnection = selectedConnectionCode == this.manualConnectionCode;
    }

    ngOnInit() {
        this.selectedConnectionCode = this.connections[0].code;
     }
}