import { Component, Inject } from '@angular/core';
import { RoomData } from '../../../utils/interfaces';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.css',
  imports: [ReactiveFormsModule]
})
export class AppBookingForm {

  // form controls
  guestName = new FormControl('')
  checkinDate = new FormControl('')
  checkoutDate = new FormControl('')

  // used to limit booking to only future dates
  TODAY = new Date()

  constructor(
    @Inject(DIALOG_DATA) public room: RoomData,
    public dialogRef: DialogRef<string>) { }


  handleSubmit(e: Event) {
    e.preventDefault()
    console.log("submitted", {
      name: this.guestName.value,
      checkin: this.checkinDate.value,
      checkout: this.checkoutDate.value
    })
    this.dialogRef.close("success")
  }

}
