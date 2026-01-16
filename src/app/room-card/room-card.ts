import { Component, inject, input, model } from '@angular/core';
import { BOOKED_KEY, RoomData } from '../../utils/interfaces';
import { Dialog } from '@angular/cdk/dialog';
import { AppBookingForm } from './booking-form/booking-form';

@Component({
    selector: 'app-room-card',
    templateUrl: './room-card.html',
    styleUrl: './room-card.css'
})
export class AppRoomCardComponent {
    room = input.required<RoomData>()
    private dialog = inject(Dialog);
    bookedMap: Record<string, boolean> = {}

    isAvailable = model(true)

    constructor() {
        this.bookedMap = JSON.parse(localStorage.getItem(BOOKED_KEY) ?? "")
    }

    openDialog() {
        const ref = this.dialog.open(AppBookingForm, {
            width: '600px',
            panelClass: "dialog",
            data: this.room(),
        })

        ref.closed.subscribe((result) => {
            if (result == 'success') {
                alert("Booking successful! Please refer to your email inbox for your accomodation details.")
                this.bookedMap[this.room().id] = true
                localStorage.setItem(BOOKED_KEY, JSON.stringify(this.bookedMap))
                this.isAvailable.set(false)
            } else {
                alert("Something went wrong! You may attempt another booking, or contact our help desk for assistance.")
            }
        })
    }

}
