import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-practice-details',
  templateUrl: './practice-details.component.html',
  styleUrls: ['./practice-details.component.scss']
})
export class PracticeDetailsComponent implements OnInit {

  public practices = [];
  public practiceArea: string;
  public practiceDetail: any;

  constructor(private appService: AppService,
    private activatedroute: ActivatedRoute) {

    this.practiceArea = this.activatedroute.snapshot.paramMap.get("id");
    console.log('111111111111111  :::::::: ', this.practiceArea);
  }

  ngOnInit(): void {
    this.getPractices();
  }

  getPractices() {
    this.appService.getPracticesAreas().subscribe((data) => {
      this.practices = data['practices'];
      let that = this;
      this.practiceDetail = this.practices.find(function (element) {
        return element.practiceArea == that.practiceArea;
    });
      console.log('1111111111111111111 ::::::', this.practices);
    });
  }

  details(item) {
    this.practiceDetail = item;
  }

}
