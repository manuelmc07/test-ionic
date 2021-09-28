import { Injectable } from '@angular/core';
// Data
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private places: Place[] = [
    {
      id: '1',
      title: 'París',
      imageUrl: 'https://www.paris-forever.com/wp-content/uploads/2018/08/tour-eiffel-3.jpg',
      comments: ['Awesome place', 'Great place']
    },
    {
      id: '2',
      title: 'New York',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Estatua_de_la_Libertad_New_York.jpg',
      comments: ['Carefully place', 'Cute place']
    },
    {
      id: '3',
      title: 'Manhhatan',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Estatua_de_la_Libertad_New_York.jpg',
      comments: [],
    },
  ];

  constructor() { }

  getPlaces() {
    return[...this.places];
  }

  addPlace(title: string, imageUrl: string) {
    this.places.push({
      id: `${this.places.length + 2}`,
      title,
      imageUrl,
      comments: [],
    });
  }

  removePlace(placeId: string) {
   return[...this.places.filter((place) => place.id !== placeId)];
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => place.id === placeId)
    };
  }
}
