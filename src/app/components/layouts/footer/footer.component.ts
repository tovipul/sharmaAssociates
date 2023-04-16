import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public practices = [];

  constructor(private appService: AppService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPractices();
  }

  getPractices() {
    this.appService.getPracticesAreas().subscribe((data) => {
      this.practices = data['practices'];
    });
  }

  goToDetails(item) {
    this.router.navigate(['/practice-details', item.practiceArea]);
  }

}
