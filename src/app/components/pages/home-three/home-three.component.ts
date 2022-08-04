import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-home-three',
  templateUrl: './home-three.component.html',
  styleUrls: ['./home-three.component.scss']
})
export class HomeThreeComponent implements OnInit {
  public attorneys = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getAttorneys();
  }

  getAttorneys() {
    this.appService.getAttorneysDetails().subscribe((data) => {
      this.attorneys = data['attorneys']
    });
  }

}
