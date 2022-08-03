import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attorney',
  templateUrl: './attorney.component.html',
  styleUrls: ['./attorney.component.scss']
})
export class AttorneyComponent implements OnInit {

  public attorneys =[
    {
      "image":"",
      "employeeId":"",
      "employeeName":"Krishna Sharma",
      "designation":"Partner",
      "expertise":"",
      "linkedInUrl":"",
      "twitterUrl":""
    },
    {
      "image":"",
      "employeeId":"",
      "employeeName":"Seeta Ram Sharma",
      "designation":"Founder",
      "expertise":"",
      "linkedInUrl":"",
      "twitterUrl":""
    },
    {
      "image":"",
      "employeeId":"",
      "employeeName":"Aditi Sharma",
      "designation":"Partner",
      "expertise":"",
      "linkedInUrl":"",
      "twitterUrl":""
    },
    {
      "image":"",
      "employeeId":"",
      "employeeName":"Himanshu Sharma",
      "designation":"Partner",
      "expertise":"",
      "linkedInUrl":"",
      "twitterUrl":""
    },
    {
      "image":"",
      "employeeId":"",
      "employeeName":"Vinay Kumar",
      "designation":"Sr. Associate",
      "expertise":"",
      "linkedInUrl":"",
      "twitterUrl":""
    },
    {
      "image":"",
      "employeeId":"",
      "employeeName":"Arun Raghav",
      "designation":"Associate",
      "expertise":"",
      "linkedInUrl":"",
      "twitterUrl":""
    },
    {
      "image":"",
      "employeeId":"",
      "employeeName":"Basant Kumar",
      "designation":"Associate",
      "expertise":"",
      "linkedInUrl":"",
      "twitterUrl":""
    },
    {
      "image":"",
      "employeeId":"",
      "employeeName":"Ghanshyam Sharma",
      "designation":"Regd. Clerk",
      "expertise":"",
      "linkedInUrl":"",
      "twitterUrl":""
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
