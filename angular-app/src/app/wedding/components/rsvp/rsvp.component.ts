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

    console.log(scrollHeight);
    if (scrollHeight > 400) {
      this.upwardForm = true;
    }
    else {
      this.upwardForm = false;
    }
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
