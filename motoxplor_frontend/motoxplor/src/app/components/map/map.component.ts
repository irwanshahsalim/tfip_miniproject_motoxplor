import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 40.7128;
  lng = -74.0060;
  zoom = 12;
  places: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  onMapClick(event: any) {
    const place = {
      lat: event.coords.lat,
      lng: event.coords.lng
    };
    this.places.push(place);
  }
}
