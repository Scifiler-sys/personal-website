import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css']
})
export class WeddingComponent implements OnInit, AfterViewInit {

  currentImage = "../../assets/Wedding/001.JPG";
  // Will add in 500px div after scrolling is done
  isFixed:boolean = true;
  // Will show loader until loaded
  isLoaded:boolean = true;


  @HostListener("window:scroll", ["$event"]) 
    onScroll($event: any): void {
      // console.log($event);
      let scrollHeight = $event.srcElement.scrollingElement.scrollTop
      console.log(scrollHeight);

      if (scrollHeight > 500) {
        this.isFixed = false;
      }
      else
      {
        this.isFixed = true;
        //Will calculate what image to show after a certain px is hit
        let currentPhotoNumber: number = Math.max(1,Math.round(scrollHeight / 100)+1);
        console.log(currentPhotoNumber)
        this.currentImage = `../../assets/Wedding/00${currentPhotoNumber}.JPG`
      }
    }

  constructor() {
    // Resets view back to the very top
    window.scroll({
      top:0
    })
  }

  ngAfterViewInit(): void {
    this.isLoaded = false;
  }

  ngOnInit(): void {
  }

}
