import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Wish } from '../../models/Wish';
import { RsvpService } from '../../services/rsvp.service';
import { FloatingCardComponent } from '../floating-card/floating-card.component';

@Component({
  selector: 'app-floating',
  templateUrl: './floating.component.html',
  styleUrls: ['./floating.component.css']
})
export class FloatingComponent implements OnInit {

  private wishes: Wish[] = [{
    yourWish: "",
    guests: [
      {
        firstName: "",
        lastName: ""
      }
    ],
    relation: ""
  }]

  @ViewChild("dynamic", { read: ViewContainerRef })
  component!: ViewContainerRef;

  constructor(private http:RsvpService) { }

  ngOnInit(): void {
    this.http.getWishes().subscribe((resp) => {
      this.wishes = resp.filter(wish => wish.yourWish);
      this.randomizeCardCreation();
    });
  }

  //Create card within 2 to 5 secs
  private randomizeCardCreation(): void {
    var rand = 1000 * (Math.floor(Math.random() * 4) + 2);
    setTimeout(() => {
      this.createCard();
      this.randomizeCardCreation();
    }, rand);
  }

  private createCard(): void {
    let ref = this.component.createComponent(FloatingCardComponent);

    let wish: Wish = this.getRandomWish();

    ref.setInput("wish", wish);

    setTimeout(() => {
      this.component.remove(0);
    }, 25000)
  }

  //Will grab a randomWish with proper information inside
  private getRandomWish() : Wish {
    let randIndex = Math.floor(Math.random()*this.wishes.length);

    return this.wishes[randIndex];
  }

}
