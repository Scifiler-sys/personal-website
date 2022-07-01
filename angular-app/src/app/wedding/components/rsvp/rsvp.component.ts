import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RSVPComponent implements OnInit {

  private sub?: Subscription;
  private weddingDate:Date = new Date("Dec 17 2022 00:00:00");

  // public day

  private calculateTimeDiff() {
    let currentDate = new Date();
    // this.timeDifference = currentDate.getTime() - this.weddingDate.getTime();


  }

  constructor() { }

  ngOnInit(): void {
  }

}
