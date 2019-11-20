import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
    experiences=
[{
  position:"Application Installer- frontend development",
  institute:"Bold Commerce",
  address:"100 innovation drive, Winnipeg, Manitoba.",
  startdate:"March, 2018",
  enddate:"",
  website:"https://boldcommerce.com/",
},
{
  position:"IT Administrator (Level 1) ",
  institute:"UNIVERSITY OF ILLINOIS AT CHICAGO (UIC)",
  address:"1601 W Taylor St, Chicago, IL 60612, United States",
  startdate:"May, 2017 ",
  enddate:"October, 2017",
  website:"https://www.psych.uic.edu/",
}

]
  constructor() { }

  ngOnInit() {
  }

}
