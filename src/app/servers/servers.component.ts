import {Component} from '@angular/core';

@Component({
    selector: '[app-servers]',
    // selector: '.app-servers',
    // template: `
    //   <h2>elo melo</h2>
    //   <app-server></app-server>
    //   <app-server></app-server>`,
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent {
    allowNewServer = false;

    constructor() {
        setTimeout(()=>{
            this.allowNewServer=true},2000
        )
    }

    ngOnInit() {
    }
}
