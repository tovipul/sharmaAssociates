import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public practices = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getPractices();
  }

  getPractices() {
    this.appService.getPracticesAreas().subscribe((data) => {
      this.practices = data['practices'];
    });
  }

}
