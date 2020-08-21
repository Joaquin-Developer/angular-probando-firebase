import { Component } from '@angular/core';
//import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Observable<any[]>;
  constructor(public db: AngularFirestore) {
    this.items = db.collection('list').valueChanges();
  }
}

