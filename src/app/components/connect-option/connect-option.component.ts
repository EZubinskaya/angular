import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Connect } from '../../shared/connect';

@Component({
    selector: 'connect-option',
    templateUrl: './connect-option.component.html',
    styleUrls: ['./connect-option.component.scss']

})

export class ConnectOptionComponent implements OnInit {
    @Output() onConnectClick = new EventEmitter<Connect>();
    connect: Connect = new Connect();
    selectedConnectionCode: number;
    isManualConnection: boolean = false;
    manualConnectionCode: number = 2;
    connections = [{ code: 0, name: 'No Connection', },
                    { code: 1, name: 'Connect to Localhost', },
                    { code: this.manualConnectionCode, name: 'Manual connection', }];

    constructor() { }

    onChangeConnectionType(selectedConnectionCode) {
        this.isManualConnection = selectedConnectionCode == this.manualConnectionCode;
        this.onConnectClick.emit(null);
    }

    onConnect(event: any){
        this.onConnectClick.emit(this.connect);
        event.preventDefault();
    }

    ngOnInit() {
        this.selectedConnectionCode = this.connections[0].code;
     }
}