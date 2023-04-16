import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-attorney',
  templateUrl: './attorney.component.html',
  styleUrls: ['./attorney.component.scss']
})
export class AttorneyComponent implements OnInit {

  public attorneys = [];
  constructor(private appService: AppService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAttroneys();
  }

  getAttroneys() {
    this.appService.getAttorneysDetails().subscribe((data) => {
      this.attorneys = data['attorneys'];
    });
  }

  goToDetails(item){
this.router.navigate(['/attorney-details',item.employeeName]);
  }

}
