import { Component } from '@angular/core';

@Component({
   selector: '[app-servers]',
   // selector: '.app-servers',
   // template: `
   //   <h2>elo melo</h2>
   //   <app-server></app-server>
   //   <app-server></app-server>`,
   templateUrl: './servers.component.html',
   styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
   allowNewServer = false;
   serverCreationStatus = 'No server was created!';
   serverName = 'Testserver';
   serverCreated = false;

   constructor() {
      setTimeout(() => {
            this.allowNewServer = true;
         }, 2000,
      );
   }

   ngOnInit() {
   }

   onCreateServer() {
      this.serverCreated = true;
      this.serverCreationStatus = 'Server was created ' + this.serverName;
   }

   onUpdateServerName(event: any) {
      this.serverName = (<HTMLInputElement>event.target).value;
   }
}
