import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public users: any;
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {

    this.db.collection('users').snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ( c.payload.doc.data())
        )
      )
    ).subscribe(data => {
      this.users = data;
    });

  }   
}
