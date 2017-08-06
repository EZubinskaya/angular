import { Component, OnInit, Input } from '@angular/core';
import { Connect } from '../../shared/connect';

@Component({
    selector: 'result-connection',
    templateUrl: './result-connection.component.html',
    styleUrls: ['./result-connection.component.scss']

})

export class ResultConnectionComponent implements OnInit {
    @Input() connect: Connect;
    constructor() { }

    ngOnInit() { }
}