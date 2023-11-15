import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Firestore, collection, onSnapshot } from '@angular/fire/firestore';
import { DialogAddEventComponent } from '../dialog-add-event/dialog-add-event.component';
import { Event } from 'src/models/event.class';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  event = new Event();
  allEvents: Event[] = [];

  constructor(public dialog: MatDialog, private firestore: Firestore) {
    this.loadEvents();
  }

  loadEvents() {
    let eventCollection = collection(this.firestore, 'events');

    onSnapshot(eventCollection, (eventsInfo) => {
      this.allEvents = eventsInfo.docs.map((eventDoc) => {
        let eventData = eventDoc.data() as Event;
        eventData.id = eventDoc.id;
        return eventData;
      });
      console.log(this.allEvents);
    });
  }

  openDialog(): void {
    this.dialog.open(DialogAddEventComponent);
  }
}
