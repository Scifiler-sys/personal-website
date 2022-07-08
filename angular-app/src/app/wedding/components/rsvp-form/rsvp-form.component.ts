import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RSVP } from '../../models/RSVP';
import { RsvpService } from '../../services/rsvp.service';

@Component({
  selector: 'app-rsvp-form',
  templateUrl: './rsvp-form.component.html',
  styleUrls: ['./rsvp-form.component.css']
})
export class RsvpFormComponent implements OnInit {

  hasPlusOne: boolean = false;
  plusOneVisited: boolean = false;

  //Controlling button css when clicked
  relationButton: boolean = true;
  relationButtonVisited: boolean = false;
  howYesButton: boolean = true;
  yesButtonVisited: boolean = false;

  rsvpForm = new FormGroup({
    guests1F: new FormControl('', Validators.required),
    guests1L: new FormControl('', Validators.required),
    guest2F: new FormControl(''),
    guest2L: new FormControl(''),
    yourWish: new FormControl(''),
    address: new FormControl('', Validators.required)
  });

  public get guests1F() {
    return this.rsvpForm.get("guests1F");
  }
  
  public get guests1L() {
    return this.rsvpForm.get("guests1L");
  }
  
  public get guests2F() {
    return this.rsvpForm.get("guest2F");
  }
  
  public get guests2L() {
    return this.rsvpForm.get("guests2L")
  }
  
  public get address() {
    return this.rsvpForm.get("address");
  }
  
  currentRSVP: RSVP = {
    attending: true,
    relation: '',
    yourWish: '',
    address: '',
    guests: []
  }

  constructor(private service: RsvpService) { }

  attendHandler(answer: boolean) {
    this.currentRSVP.attending = answer;
    this.yesButtonVisited = true;
  }

  relationHandler(answer: boolean) {
    this.relationButton = answer;
    this.relationButtonVisited = true;

    if (this.relationButton) {
      this.currentRSVP.relation = 'Stephen';
    }
    else {
      this.currentRSVP.relation = 'Sigrid';
    }
  }

  plusOneHandler(plusOne: boolean) {
    this.hasPlusOne = plusOne;
    this.plusOneVisited = true;

    if (this.hasPlusOne) {
      setTimeout(() => {
        this.howYesButton = false;
      }, 300);
    }
    else {
      this.howYesButton = true;
    }
  }

  submitEvent(rsvpForm: FormGroup) {
    if (rsvpForm.valid) {
      this.currentRSVP.address = rsvpForm.value.address;
      this.currentRSVP.yourWish = rsvpForm.value.yourWish;
  
      this.currentRSVP.guests = [];
      this.currentRSVP.guests.push({
        firstName: rsvpForm.value.guests1F,
        lastName: rsvpForm.value.guests1L
      })
  
      if (this.hasPlusOne) {
        this.currentRSVP.guests.push({
          firstName: rsvpForm.value.guest2F,
          lastName: rsvpForm.value.guest2L
        })
      }
  
      console.log(this.currentRSVP);
  
      // this.service.sendRSVP(this.currentRSVP).subscribe((response) => {
      //   console.log(response);
      // });
    }

  }

  ngOnInit(): void {
  }

}
