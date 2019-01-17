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

    const map = L.map('map').setView([14.6937000, -17.4440600], 13);
   // map.addControl(new L.Control.Fullscreen());
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // function onLocationFound(e) {
    //   const radius = e.accuracy / 5;
    //
    //   L.marker(e.latlng).addTo(map)
    //       .bindPopup("\n" + " Vous êtes à moins de " + radius + " mètres de ce point" ).openPopup();
    //
    //   L.circle(e.latlng, radius).addTo(map);
    // }
    //
    // function onLocationError(e) {
    //   alert(e.message);
    // }
    //
    // map.on('locationfound', onLocationFound);
    // map.on('locationerror', onLocationError);
    //
    // map.locate({setView: true, maxZoom: 16});
    // function currentLocation() {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition((function (position) {
    //       L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
    //     }));
    //   } else {
    //     alert("La géolocalisation n'est pas supportée par ce navigateur.");
    //   }
    // }

    const myIcon = L.icon({
      iconUrl: 'http://iconshow.me/media/images/Application/Map-Markers-icons/png/48/MapMarker_Marker_Outside_Pink.png'
    });

    // pour ajouter plusieurs marker a partir de l'API
    // this.http.get('').subscribe((data: any) => {
    //   data.records.forEach(podotactile => {
    //     L.marker([podotactile.geometry.coordinates[1], podotactile.geometry.coordinates[0]], {icon: myIcon}).addTo(map);
    //   });
    // });
    // //pour ajouter un markerL.marker([14.69686602, -17.47185787], {icon: myIcon}).bindPopup('Je suis un camera de surveillance ').addTo(map).openPopup();
    L.marker([14.69686602, -17.47185787], {icon: myIcon}).addTo(map);
    L.marker([14.69182379, -17.47420119], {icon: myIcon}).addTo(map);
    L.marker([14.68882162, -17.47285495], {icon: myIcon}).addTo(map);
    L.marker([14.68553263, -17.46917817], {icon: myIcon}).addTo(map);
    L.marker([14.67791396, -17.46751698], {icon: myIcon}).addTo(map);
    L.marker([14.67736926, -17.46393494], {icon: myIcon}).addTo(map);
    L.marker([14.67772, -17.45823], {icon: myIcon}).addTo(map);
    L.marker([14.68023898, -17.45541603], {icon: myIcon}).addTo(map);
    L.marker([14.67586, -17.45386], {icon: myIcon}).addTo(map);
    L.marker([14.67661799, -17.45155789], {icon: myIcon}).addTo(map);
    L.marker([14.67430465, -17.44905546], {icon: myIcon}).addTo(map);
    L.marker([14.67335048, -17.4501742], {icon: myIcon}).addTo(map);
    L.marker([14.67126346, -17.44658193], {icon: myIcon}).addTo(map);
    L.marker([14.67060589, -17.4449014], {icon: myIcon}).addTo(map);
    L.marker([14.66984511, -17.44327073], {icon: myIcon}).addTo(map);
    L.marker([14.66740539, -17.44307767], {icon: myIcon}).addTo(map);
    L.marker([14.6671642, -17.44165497], {icon: myIcon}).addTo(map);
    L.marker([14.66676073, -17.44045358], {icon: myIcon}).addTo(map);
    L.marker([14.66552, -17.4368], {icon: myIcon}).addTo(map);
    L.marker([14.66529, -17.43562], {icon: myIcon}).addTo(map);
    L.marker([14.6648, -17.43401], {icon: myIcon}).addTo(map);
    L.marker([14.66808, -17.43226], {icon: myIcon}).addTo(map);
    L.marker([14.66802, -17.43149], {icon: myIcon}).addTo(map);
    L.marker([14.66859, -17.43167], {icon: myIcon}).addTo(map);
    L.marker([14.66955, -17.43175], {icon: myIcon}).addTo(map);
    L.marker([14.66958, -17.43227], {icon: myIcon}).addTo(map);
    L.marker([14.67072, -17.43197], {icon: myIcon}).addTo(map);
    L.marker([14.67204, -17.43205], {icon: myIcon}).addTo(map);
    L.marker([14.66917, -17.43736], {icon: myIcon}).addTo(map);
    L.marker([14.67082, -17.43929], {icon: myIcon}).addTo(map);
    L.marker([14.67142568, -17.43997219], {icon: myIcon}).addTo(map);
    L.marker([14.69882328, -17.46844761], {icon: myIcon}).addTo(map);
    L.marker([14.69908373, -17.46775865], {icon: myIcon}).addTo(map);
    L.marker([14.7040128, -17.46285524], {icon: myIcon}).addTo(map);
    L.marker([14.70352, -17.45535], {icon: myIcon}).addTo(map);
    L.marker([14.70190953, -17.45549614], {icon: myIcon}).addTo(map);
    L.marker([14.69985329, -17.45384806], {icon: myIcon}).addTo(map);
    L.marker([14.69687507, -17.45150266], {icon: myIcon}).addTo(map);
    L.marker([14.69686402, -17.45146322], {icon: myIcon}).addTo(map);
    L.marker([14.69838, -17.4474], {icon: myIcon}).addTo(map);
    L.marker([14.71365027, -17.45480696], {icon: myIcon}).addTo(map);
    L.marker([14.71243875, -17.454438969999998], {icon: myIcon}).addTo(map);
    L.marker([14.69690972, -17.466365], {icon: myIcon}).addTo(map);
    L.marker([14.69281937, -17.46155838], {icon: myIcon}).addTo(map);
    L.marker([14.69277157, -17.46162278], {icon: myIcon}).addTo(map);
    L.marker([14.69023046, -17.45887194], {icon: myIcon}).addTo(map);
    L.marker([14.68473721, -17.45376008], {icon: myIcon}).addTo(map);
    L.marker([14.68446953, -17.45348477], {icon: myIcon}).addTo(map);
    L.marker([14.68066, -17.44952], {icon: myIcon}).addTo(map);
    L.marker([-17.44952, -17.44772], {icon: myIcon}).addTo(map);
    L.marker([14.67737994, -17.44607996], {icon: myIcon}).addTo(map);
    L.marker([14.67740945, -17.4454683], {icon: myIcon}).addTo(map);
    L.marker([14.67522208, -17.44341255], {icon: myIcon}).addTo(map);
    L.marker([14.6741014, -17.44241776], {icon: myIcon}).addTo(map);
    L.marker([14.67269054, -17.44175938], {icon: myIcon}).addTo(map);
    L.marker([14.67607308, -17.43985445], {icon: myIcon}).addTo(map);
    L.marker([14.6794825, -17.44290697], {icon: myIcon}).addTo(map);
    L.marker([14.67952667, -17.44334731], {icon: myIcon}).addTo(map);
    L.marker([14.68323505, -17.44436751], {icon: myIcon}).addTo(map);
    L.marker([14.68757923, -17.44592178], {icon: myIcon}).addTo(map);
    L.marker([14.69055682, -17.44691316], {icon: myIcon}).addTo(map);
    L.marker([14.69263318, -17.44786979], {icon: myIcon}).addTo(map);
    L.marker([14.70418579, -17.45168485], {icon: myIcon}).addTo(map);
    L.marker([14.70733449, -17.46009926], {icon: myIcon}).addTo(map);
    L.marker([14.69485608, -17.46357017], {icon: myIcon}).addTo(map);
    L.marker([14.7070649, -17.46015059], {icon: myIcon}).addTo(map);
    L.marker([14.7093702, -17.458066], {icon: myIcon}).addTo(map);
    L.marker([14.71291, -17.45489], {icon: myIcon}).addTo(map);
    L.marker([14.67310501, -17.43195843], {icon: myIcon}).addTo(map);
    L.marker([14.66976062, -17.42729532], {icon: myIcon}).addTo(map);
    L.marker([14.66247818, -17.43426629], {icon: myIcon}).addTo(map);
    L.marker([14.66251902, -17.43448391], {icon: myIcon}).addTo(map);
    L.marker([14.66286501, -17.43713777], {icon: myIcon}).addTo(map);
    L.marker([14.6630799, -17.43769548], {icon: myIcon}).addTo(map);
    L.marker([14.7056403, -17.45870133], {icon: myIcon}).addTo(map);
    L.marker([14.70528269, -17.48255554], {icon: myIcon}).addTo(map);
    L.marker([14.70945327, -17.48677321], {icon: myIcon}).addTo(map);
    L.marker([14.71675704, -17.4899791], {icon: myIcon}).addTo(map);
    L.marker([14.717182619999999, -17.49185778], {icon: myIcon}).addTo(map);
    L.marker([14.71942837, -17.49255375], {icon: myIcon}).addTo(map);
    L.marker([14.72395656, -17.4950842], {icon: myIcon}).addTo(map);
    L.marker([14.72622751, -17.50065448], {icon: myIcon}).addTo(map);
    L.marker([14.73256073, -17.5084852], {icon: myIcon}).addTo(map);
    L.marker([14.73662181, -17.50911521], {icon: myIcon}).addTo(map);
    L.marker([14.74359199, -17.51200665], {icon: myIcon}).addTo(map);
    L.marker([14.74790695, -17.50823398], {icon: myIcon}).addTo(map);
    L.marker([14.75146251, -17.50181517], {icon: myIcon}).addTo(map);
    L.marker([14.75362384, -17.49400203], {icon: myIcon}).addTo(map);
    L.marker([14.74734563, -17.49023878], {icon: myIcon}).addTo(map);
    L.marker([14.74678544, -17.49121238], {icon: myIcon}).addTo(map);
    L.marker([14.728961, -17.45740553], {icon: myIcon}).addTo(map);
    L.marker([14.72849829, -17.4573057], {icon: myIcon}).addTo(map);
    L.marker([14.72803434, -17.45229363], {icon: myIcon}).addTo(map);
    L.marker([14.72721375, -17.4464455], {icon: myIcon}).addTo(map);
    L.marker([14.72671528, -17.44421654], {icon: myIcon}).addTo(map);
    L.marker([14.72116901, -17.44762086], {icon: myIcon}).addTo(map);
    L.marker([14.71803883, -17.45040339], {icon: myIcon}).addTo(map);
    L.marker([14.72320346, -17.45794682], {icon: myIcon}).addTo(map);
    L.marker([14.72309865, -17.45824433], {icon: myIcon}).addTo(map);
    L.marker([14.69827548, -17.44390285], {icon: myIcon}).addTo(map);


    L.Routing.control({
      waypoints: [
        L.latLng(57.74, 11.94),
        L.latLng(57.6792, 11.949)
      ]
    }).addTo(map);
  }
}
