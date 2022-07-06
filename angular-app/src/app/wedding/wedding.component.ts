import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css']
})
export class WeddingComponent implements OnInit {

  currentImage = "../../assets/Wedding/001.JPG";
  // Will add in 500px div after scrolling is done
  isFixed: boolean = true;
  // Will show loader until loaded
  isLoaded: boolean = true;
  //Counts how many images are loaded
  imageTotal: number = 0;

  //Listens to scroll event and change image based on scroll
  @HostListener("window:scroll", ["$event"])
  onScroll($event: any): void {
    // console.log($event);
    let scrollHeight = $event.srcElement.scrollingElement.scrollTop;

    if (scrollHeight > 500) {
      this.isFixed = false;
    }
    else {
      this.isFixed = true;
      //Will calculate what image to show after a certain px is hit
      let currentPhotoNumber: number = Math.max(1, Math.round(scrollHeight / 100) + 1);
      this.currentImage = `../../assets/Wedding/00${currentPhotoNumber}.JPG`
    }
  }

  imageLoaded(){
    this.imageTotal +=1;
    console.log(this.imageTotal);

    if (this.imageTotal == 6) {
      this.isLoaded = false;
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
