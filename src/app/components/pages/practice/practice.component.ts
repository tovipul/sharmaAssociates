import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  public practices = [];

  constructor(private appService: AppService,
    private router:Router) { }

  ngOnInit(): void {
    this.getPractices();
  }

  getPractices() {
    this.appService.getPracticesAreas().subscribe((data) => {
      this.practices = data['practices'];
      console.log('1111111111111111111 ::::::', this.practices);
    
    });
  }

  goToDetails(item){
this.router.navigate(['/practice-details',item.practiceArea])
  }

}
