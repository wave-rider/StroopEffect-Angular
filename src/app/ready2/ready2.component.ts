import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ready2',
  templateUrl: './ready2.component.html',
  styleUrls: ['./ready2.component.css']
})
export class Ready2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit()
  {
    setTimeout(function(){ 
      window.location.href = "experiment.html";
   }, 3000);
  }

}
