import { Component } from '@angular/core';
import { Firestore, collection, setDoc, doc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Review } from 'src/models/review.class';

@Component({
  selector: 'app-dialog-add-review',
  templateUrl: './dialog-add-review.component.html',
  styleUrls: ['./dialog-add-review.component.scss']
})
export class DialogAddReviewComponent {
  loading = false;
  review = new Review();

  constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogAddReviewComponent>) { }

  saveReview() {
    this.setReview();
    this.closeDialog();
  }

  async setReview() {
    this.loading = true;
    let reviewCollection = collection(this.firestore, 'reviews');
    await setDoc(doc(reviewCollection), this.review.toJSON());
  }

  closeDialog() {
    this.loading = false;
    this.dialogRef.close();
  }
}
