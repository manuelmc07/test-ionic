import { Component, OnInit } from '@angular/core';
// Services
import { PlaceService } from '../../place.service';
import { ToastService } from '../../../../Utils/toast.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  places = [];
  constructor(
    private placeService: PlaceService,
    private toastService: ToastService,
  ) { }

  ngOnInit() {
    this.getPlaces();
  }

  ionViewWillEnter() {
    this.getPlaces();
  }

  getPlaces(): void {
    this.places = this.placeService.getPlaces();
  }

  removePlace(placeId: string): void {
    this.places = this.placeService.removePlace(placeId);
    this.toastService.showToast('Place removed success').then();
  }

}
