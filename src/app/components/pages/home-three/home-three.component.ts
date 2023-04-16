import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-home-three',
  templateUrl: './home-three.component.html',
  styleUrls: ['./home-three.component.scss']
})
export class HomeThreeComponent implements OnInit {
  public attorneys = [];
  public practiceAreas = [];

  constructor(private appService: AppService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAttorneys();
    this.getPracticeAreas();
  }

  getAttorneys() {
    this.appService.getAttorneysDetails().subscribe((data) => {
      this.attorneys = data['attorneys']
    });
  }

  getPracticeAreas() {
    this.appService.getPracticesAreas().subscribe((data) => {
      this.practiceAreas = data['practices'];
    });
  }

  goToDetails(item) {
    this.router.navigate(['/practice-details', item.practiceArea]);
  }

}
