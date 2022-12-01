import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Wish } from '../../models/Wish';
import { RsvpService } from '../../services/rsvp.service';

@Component({
  selector: 'app-floating-card',
  templateUrl: './floating-card.component.html',
  styleUrls: ['./floating-card.component.css']
})
export class FloatingCardComponent implements OnInit, OnChanges {
  screenWidth: number = 0;
  title:string = "";

  @Input()
  wish: Wish =
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

  constructor() {
  }

  //Generates the title required for the card
  //Will create a title fitting for single or married couple
  ngOnChanges(changes: SimpleChanges): void {
    this.wish.relation = this.wish.relation.trim().toLowerCase();

    this.title = `${this.wish.guests[0].firstName} `;
    if (this.wish.guests[1]) {

      if (this.wish.guests[1].lastName.trim().toLowerCase() == this.wish.guests[0].lastName.trim().toLowerCase()) {
        this.title += ` & ${this.wish.guests[1].firstName} ${this.wish.guests[1].lastName}`;
      }
      else {
        this.title += `${this.wish.guests[0].lastName} & ${this.wish.guests[1].firstName} ${this.wish.guests[1].lastName}`;
      }
    }
    else {
      this.title += ` ${this.wish.guests[0].lastName}`;
    }
  }

  ngOnInit(): void {
    this.getScreenSize();
    this.randomizeWidthPosition();
  }

  @HostListener("window:resize", ["$event"])
  getScreenSize(event?: any): void {
    this.screenWidth = window.innerWidth;
  }

  //Mathematical operation to randomize positoning of component
  //Will occur more in the center
  randomizeWidthPosition() {
    this.screenWidth = Math.floor(Math.random() * this.screenWidth * .30);
    
  }

}
