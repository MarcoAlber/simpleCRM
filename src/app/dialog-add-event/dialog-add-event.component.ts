import { Component } from '@angular/core';
import { Firestore, collection, setDoc, doc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Event } from 'src/models/event.class';

@Component({
  selector: 'app-dialog-add-event',
  templateUrl: './dialog-add-event.component.html',
  styleUrls: ['./dialog-add-event.component.scss']
})
export class DialogAddEventComponent {
  loading = false;
  event = new Event();
  date!: Date;
  today = new Date(); 

  constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogAddEventComponent>) { }

  saveEvent() {
    this.setEvent();
    this.closeDialog();
  }

  async setEvent() {
    this.event.date = this.date.getTime();
    this.loading = true;
    let eventCollection = collection(this.firestore, 'events');
    await setDoc(doc(eventCollection), this.event.toJSON());
  }

  closeDialog() {
    this.loading = false;
    this.dialogRef.close();
  }
}
