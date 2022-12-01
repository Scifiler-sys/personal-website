import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FloatingCardComponent } from '../floating-card/floating-card.component';

@Component({
  selector: 'app-floating',
  templateUrl: './floating.component.html',
  styleUrls: ['./floating.component.css']
})
export class FloatingComponent implements OnInit {
  @ViewChild("dynamic", { read: ViewContainerRef })
  component!: ViewContainerRef;

  constructor(private componentFactory: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.randomizeCardCreation();
  }

  //Create card within 3 to 6 secs
  private randomizeCardCreation() : void {
    var rand = 1000 * (Math.floor(Math.random()*4)+3);
    setTimeout(() => {
      this.createCard();
      this.randomizeCardCreation();
    }, rand);
  }

  private createCard(): void {
    let ref:ComponentRef<FloatingCardComponent> = this.component.createComponent(FloatingCardComponent);
    setTimeout(() => {
      this.component.remove(0);
    },25000)
  }

}
