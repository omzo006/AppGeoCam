import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';


@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

// Fonction d'initialisation du composant.
  ngOnInit() {
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.

    const map = L.map('map').setView([14.712019, -17.5440600], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    // const marker = L.marker([51.5, -0.09]).addTo(mymap);

    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });
    // pour ajouter plusieurs marker a partir de l'API
    // this.http.get('').subscribe((data: any) => {
    //   data.records.forEach(podotactile => {
    //     L.marker([podotactile.geometry.coordinates[1], podotactile.geometry.coordinates[0]], {icon: myIcon}).addTo(map);
    //   });
    // });
    // //pour ajouter un marker
     L.marker([14.69686602, -17.47185787], {icon: myIcon}).bindPopup('Je suis un camera de surveillance ').addTo(map).openPopup();


    L.Routing.control({
      waypoints: [
        L.latLng(57.74, 11.94),
        L.latLng(57.6792, 11.949)
      ]
    }).addTo(map);
  }

}
