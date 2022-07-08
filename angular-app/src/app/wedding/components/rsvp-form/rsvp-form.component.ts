import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RSVP } from '../../models/RSVP';

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
    guests1F: new FormControl(''),
    guests1L: new FormControl(''),
    guest2F: new FormControl(''),
    guest2L: new FormControl(''),
    yourWish: new FormControl(''),
    address: new FormControl('')
  });

  currentRSVP: RSVP = {
    attending: true,
    relation: '',
    yourWish: '',
    extraGuest: 0,
    address: '',
    guests: []
  }

  constructor() { }

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
  }

  ngOnInit(): void {
  }

}
