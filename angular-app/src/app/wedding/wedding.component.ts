import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeddingComponent implements OnInit {

  currentImage = "../../assets/Wedding/001.JPG";
  // Will add in 500px div after scrolling is done
  isFixed:boolean = true;


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

  getYPosition(e: Event) : number{
    return (e.target as Element).scrollTop;
  }

  constructor() {
    window.scroll({
      top:0
    })

   }

  ngOnInit(): void {
  }

}
