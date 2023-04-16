import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-attorney-details',
  templateUrl: './attorney-details.component.html',
  styleUrls: ['./attorney-details.component.scss']
})
export class AttorneyDetailsComponent implements OnInit {

  public attorneys = [];
  public attorneyDetail: any;
  public attorneyName: string;

  constructor(private appService: AppService,
    private activatedroute: ActivatedRoute) {

    this.attorneyName = this.activatedroute.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.getAttroneys();
  }

  getAttroneys() {
    this.appService.getAttorneysDetails().subscribe((data) => {
      this.attorneys = data['attorneys'];
      let that = this;
      this.attorneyDetail = this.attorneys.find(function (element) {
        return element.employeeName == that.attorneyName;
      });
    });
  }


}
