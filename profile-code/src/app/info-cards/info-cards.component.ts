import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.css']
})
export class InfoCardsComponent implements OnInit {

  year: string
  job: string
  company: string
  location: string
  description: string

  experiences = [
    {
      year: 'JAN 2019 - DEC 2019',
      job: 'FRONT END SOFTWARE DEVELOPER',
      company: 'TeamLease Services Ltd',
      location: 'Bengaluru, India',
      description: 'Lead the Front-End Development for the application. Developed UI of various components using HTML5, CSS3. Integrating REST APIs with VueJS. Point of contact for the Client and the team. Responsible for managing tasks in JIRA. Handled code deployment in AWS. '
    },
    {
      year: 'JUN 2017 - DEC 2018',
      job: 'ASSOCIATE',
      company: 'Cognizant Technology Solutions',
      location: 'Bengaluru, India',
      description: 'Developed UI page using Bootstrap for various methods to ingest data where the user can create his sandbox, instance, container for storing data. Using Bootstrap cards functionality created separate cards for each different kind of Data Ingestion'
    },
    {
      year: 'MAY 2016 - JUN 2017',
      job: 'PROGRAMMER ANALYST',
      company: 'Cognizant Technology Solutions',
      location: 'Bengaluru, India',
      description: 'Front End Development for the application and Interaction with back end using AngularJS Framework. Generating graphs using Highcharts with AngularJS and Visualizing the Analysis reports using PowerBI tool.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
