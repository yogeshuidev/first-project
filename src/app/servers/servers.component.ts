import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowServer = false;
  constructor() { 
    setTimeout(() => {
    return this.allowServer=true;
    },3000)
  }

  ngOnInit() {
  }

}
