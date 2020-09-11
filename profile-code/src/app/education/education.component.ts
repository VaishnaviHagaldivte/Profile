import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  year: string
  location: string
  description: string
  university: string
  degree: string
  major: string
  
  educations = [
    {
      year: 'JAN 2020 - AUG 2020',
      university: 'MCMASTER UNIVERSITY CONTINUING EDUCATION',
      degree: 'Certification',
      major: 'Big Data Analytics',
      location: 'Hamilton, Canada',
      description: 'Lead the Front-End Development for the application. Developed UI of various components using HTML5, CSS3. Integrating REST APIs with VueJS. Point of contact for the Client and the team. Responsible for managing tasks in JIRA. Handled code deployment in AWS. '
    },
    {
      year: 'AUG 2011 - MAY 2015',
      university: 'JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY',
      degree: 'Bachelors in Technology',
      major: 'Computer Science and Engineering',
      location: 'Hyderabad, India',
      description: 'Lead the Front-End Development for the application. Developed UI of various components using HTML5, CSS3. Integrating REST APIs with VueJS. Point of contact for the Client and the team. Responsible for managing tasks in JIRA. Handled code deployment in AWS. '
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
