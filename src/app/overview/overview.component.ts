import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  overview={
    name: "Snigdha Sultana",
    address: "77 University Creascent",
    city: "Winnipeg, Manitoba.",
    email: "snigdha.sultana.2018@gmail.com"


  };
  objective= "Experienced Application Specialist with a demonstrated history of working in the information technology and services industry. Skilled in C,Java, Microsoft Word, F#, HTML, CSS, and C#. Strong information technology professional with a Bachelor's degree focused in Computer Science from University of Illinois at Chicago. "
  constructor() { }

  ngOnInit() {
  }

}
