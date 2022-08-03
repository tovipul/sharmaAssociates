import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  // public practices = [
  //   {
  //     practiceArea:"Service Matter",
  //     description:"",
  //     overview:""
  //   },
  //   {
  //     practiceArea:"Academic Matter",
  //     description:"",
  //     overview:""
  //   },
  //   {
  //     practiceArea:"Criminial Matter",
  //     description:"",
  //     overview:""
  //   },
  //   {
  //     practiceArea:"Family Law Matter",
  //     description:"",
  //     overview:""
  //   },
  //   {
  //     practiceArea:"Compensation Matter",
  //     description:"",
  //     overview:""
  //   },
  //   {
  //     practiceArea:"Oridnary Civil Matter",
  //     description:"",
  //     overview:""
  //   },
  //   {
  //     practiceArea:"Personal Law Matter",
  //     description:"",
  //     overview:""
  //   },
  //   {
  //     practiceArea:"Consumer Protection",
  //     description:"",
  //     overview:""
  //   },
  //   {
  //     practiceArea:"Land Laws & Agriculture Tenancies",
  //     description:"",
  //     overview:""
  //   }
  // ];

  public practices = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getPractices();
  }

  getPractices() {
    this.appService.getPracticesAreas().subscribe((data) => {
      this.practices = data['practices'];
      console.log('1111111111111111111 ::::::', this.practices);
    
    });
  }


}
