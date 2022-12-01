import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { RSVP } from '../../models/RSVP';
import { RsvpService } from '../../services/rsvp.service';

@Component({
  selector: 'app-floating-card',
  templateUrl: './floating-card.component.html',
  styleUrls: ['./floating-card.component.css']
})
export class FloatingCardComponent implements OnInit {
  screenWidth: number = 0;

  @Input()
  rsvps: RSVP[] = [
    {
      yourWish: "",
      guests: [
        {
          firstName: "test",
          lastName: ""
        }
      ],
      relation: ""
    }
  ]
  constructor() 
  { 
  }
  
  ngOnInit(): void {
    this.getScreenSize();
    this.randomizeWidthPosition();
    console.log(this.screenWidth);
  }

  @HostListener("window:resize", ["$event"])
  getScreenSize(event?:any) : void {
    this.screenWidth = window.innerWidth;
  }

  //Mathematical operation to randomize positoning of component
  //Will occur more in the center
  randomizeWidthPosition() {
    this.screenWidth = Math.floor(Math.random()*this.screenWidth*.30);
  }

}
