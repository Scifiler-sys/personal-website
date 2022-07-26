import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RSVPComponent implements OnInit, OnDestroy {

  private sub?: Subscription;
  private weddingDate:Date = new Date("Dec 17 2022 00:00:00");

  //Will show form after user clicks on button to start
  showForm: boolean = false;
  //Will expand downwards for form
  expandBody: boolean = false;
  //Will pull form upwards
  upwardForm: boolean = false;
  //Will close form after submit
  closeForm: boolean = false;
  //Will show thank you form [DEPRECATED]
  thankYouForm: boolean = true;
  
  //Time till wedding
  day = 0;
  hrs = 0;
  mins = 0;
  sec = 0;

   calculateTimeDiff() {
    let currentDate = new Date();
    let Tsec = (this.weddingDate.getTime() - currentDate.getTime())/1000;
    this.day = Math.floor(Tsec / 86400);
    this.hrs = Math.floor(Tsec % 86400 / 3600);
    this.mins = Math.floor(Tsec % 86400 % 3600 / 60);
    this.sec = Math.floor(Tsec % 86400 % 60 % 60);
  }

  constructor() { }

  handleShowButton(){
    this.expandBody = true;

    setTimeout(() => {
      this.showForm = true;
    }, 300);
  }

  @HostListener("window:scroll", ["$event"])
  onScroll($event: any): void {
    let scrollHeight = $event.srcElement.scrollingElement.scrollTop;

    if (scrollHeight > 400) {
      this.upwardForm = true;
    }
    else {
      this.upwardForm = false;
    }
  }

  formHasBeenSubmittedHandler(submit: boolean){

    this.closeForm = true;
    //Scrolls you back to the top
    setTimeout(() => {
      for (let index = 1000; index > 450; index--) {
        setTimeout(() => {
          window.scroll({
            top: index
          })
        }, 100);
      }

      document.querySelector(".body")?.remove();
      this.thankYouForm = true;
    }, 500);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = interval(1000).subscribe(x => {
      this.calculateTimeDiff();
    })
  }

}
