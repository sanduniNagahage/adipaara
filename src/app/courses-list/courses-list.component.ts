import { Component, OnInit } from '@angular/core';

import{ AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  courseObservable: Observable<any[]>;
  constructor(private db:AngularFireDatabase) { }

  ngOnInit() {
    this.courseObservable=this.getCourse('/Course');
  }

  getCourse(listPath):Observable<any[]>{
    return this.db.list(listPath).valueChanges();
  }

}
