// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Services
import { PlaceService } from '../../place.service';
// Model
import { Place } from '../../place.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  place: Place;
  private placeId = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private placeService: PlaceService,
  ) { }

  ngOnInit() {
    this.placeId = this.activatedRoute.snapshot.paramMap.get('placeId');
    this.getPlace();
  }

  getPlace(): void {
    this.place = this.placeService.getPlace(this.placeId);
  }

}
