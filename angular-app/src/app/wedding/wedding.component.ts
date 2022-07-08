import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css']
})
export class WeddingComponent implements OnInit {

  currentImage: number = 1;
  // Will add in 500px div after scrolling is done
  isFixed: boolean = true;
  // Will show loader until loaded
  isLoaded: boolean = true;
  //Counts how many images are loaded
  imageTotal: number = 0;
  //Show title after hitting the end
  showTitle: boolean = false;

  //Listens to scroll event and change image based on scroll
  @HostListener("window:scroll", ["$event"])
  onScroll($event: any): void {
    let scrollHeight = $event.srcElement.scrollingElement.scrollTop;

    if (scrollHeight > 600) {
      this.isFixed = false;
    }
    else {
      this.isFixed = true;
      //Will calculate what image to show after a certain px is hit
      this.currentImage = Math.min(Math.max(1, Math.floor(scrollHeight / 100) + 1),6);
      // console.log(this.currentImage);
    }

    if (scrollHeight > 400) {
      this.showTitle = true;
    }
  }

  imageLoaded(){
    this.imageTotal +=1;

    if (this.imageTotal == 6) {
      this.isLoaded = false;
      window.scroll({
        top:0
      });
    }
  }

  constructor() {
    // Resets view back to the very top
    window.scroll({
      top: 0
    })
  }

  ngOnInit(): void {
  }

}
