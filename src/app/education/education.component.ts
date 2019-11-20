import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations =[
    {
        degree: "B.Sc",
        institute:"University of Illinois at Chicago",
        subject: "computer science",
        start: "Aug 2014",
        end:"Dec 2017",
  },
]
  constructor() { }

  ngOnInit() {
  }

}
