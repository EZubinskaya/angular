import { Component, OnInit } from '@angular/core';
import { Connect } from '../../shared/connect';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    resultConnect: Connect;
    constructor() {
     }

     updateConnect(newConnect: Connect){
         this.resultConnect = newConnect;
     }

    ngOnInit() { }
}