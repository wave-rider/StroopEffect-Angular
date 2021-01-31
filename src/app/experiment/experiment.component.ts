import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css'],  
})

export class ExperimentComponent implements OnInit 
{
  @ViewChild('submit', {static: true}) submitButton: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('continue', {static: true}) continueButton: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('image', {static: true}) myImage: ElementRef<HTMLImageElement> | undefined;
  @ViewChild('header', {static: true}) header: ElementRef<HTMLElement> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit()
  {

  }

  private NowDate = new Date();
  private timeOne : number = new Date().getTime();
  private timeTwo : number = new Date().getTime();
  private timer: number[] = [];
  private counter = 0;
  
  startIt() {
      this.timeOne = new Date().getTime();
  }

  continueIt() {
      this.timeOne = this.NowDate.getTime();
      if (this.submitButton)
        this.submitButton.nativeElement.style.display = '';
      if (this.continueButton)
        this.continueButton.nativeElement.style.display = 'none';
  }
  
  endIt() {
      this.timeTwo = new Date().getTime();
      let your_time = (this.timeTwo - this.timeOne)/1000;
      this.timer.push(your_time);
      if (this.counter == 0){
          alert("It took you " + your_time + " seconds.");
      }
      else
      {
          var person = prompt("It took you " + your_time + " seconds. \n Please enter your name", "Harry Potter");
          if (person!=null)
          {
              db.collection('users').add({
                  firstName: person,
                  firstTest: this.timer[0],
                  secondTest: this.timer[1]
              });
          }   
          //document.getElementById('submit-button').style.display = 'none';
          return;
      }

      this.counter++;
      if (this.header)
        this.header.nativeElement.innerText = "Word Set #2";

      if (this.myImage)
        this.myImage.nativeElement.src = "assets/images/stroopb.gif";

      if (this.submitButton)
        this.submitButton.nativeElement.style.display = 'none';
        
      if (this.continueButton)
        this.continueButton.nativeElement.style.display = '';      
  }
}
