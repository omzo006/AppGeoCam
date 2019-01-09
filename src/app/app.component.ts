import { Component, OnInit } from '@angular/core';
declare let L;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Implementation de OnInit
export class AppComponent implements OnInit {

  constructor() {

  }
// Fonction d'initialisation du composant.
  ngOnInit() {
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.

    const map = L.map('map').setView([14.6937000, -17.5440600], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
   // const marker = L.marker([51.5, -0.09]).addTo(mymap);

    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });
    L.marker([14.69686602, -17.47185787], {icon: myIcon}).bindPopup('Je suis un camera de surveillance ').addTo(map).openPopup();


    L.Routing.control({
      waypoints: [
        L.latLng(57.74, 11.94),
        L.latLng(57.6792, 11.949)
      ]
    }).addTo(map);
  }

}
