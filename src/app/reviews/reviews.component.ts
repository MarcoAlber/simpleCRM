import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Firestore, collection, onSnapshot } from '@angular/fire/firestore';
import { DialogAddReviewComponent } from '../dialog-add-review/dialog-add-review.component';
import { Review } from 'src/models/review.class';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  review = new Review();
  allReviews: Review[] = [];

  constructor(public dialog: MatDialog, private firestore: Firestore) {
    this.loadReviews();
  }

  loadReviews() {
    let reviewCollection = collection(this.firestore, 'reviews');

    onSnapshot(reviewCollection, (reviewsInfo) => {
      this.allReviews = reviewsInfo.docs.map((reviewDoc) => {
        let reviewData = reviewDoc.data() as Review;
        reviewData.id = reviewDoc.id;
        return reviewData;
      });
      console.log(this.allReviews);
    });
  }

    openDialog(): void {
      this.dialog.open(DialogAddReviewComponent);
    }
}
