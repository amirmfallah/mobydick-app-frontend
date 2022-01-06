import { debounce, map } from 'rxjs/operators';
import { Configuration } from 'src/core/configuration';
import { NeshanService } from './../../../core/services/neshan.service';
import { Observable, Subject, interval, BehaviorSubject } from 'rxjs';
import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
declare var L: any;

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss'],
})
export class EditAddressComponent implements OnInit {
  form = this.fb.group({
    address: ['', Validators.required],
    phone: ['', Validators.required],
    x: [],
    y: [],
  });
  $address: Observable<any>;
  subject = new Subject();
  $getLocation = new BehaviorSubject<any>(undefined);

  constructor(private fb: FormBuilder, private neshanService: NeshanService) {}

  ngOnInit(): void {
    var newMap = new L.Map('editMap', {
      key: Configuration.NeshanWebMapApiToken,
      maptype: 'neshan',
      poi: true,
      traffic: false,
      center: [35.699739, 51.338097],
      zoom: 14,
      zoomControl: false,
    });
    console.log(newMap.getCenter());
    console.log(L);
    var marker = L.marker([35.699739, 51.338097]).addTo(newMap);

    const updatePoint = (point) => {
      this.form.get('x').setValue(point.lng);
      this.form.get('y').setValue(point.lat);
    };

    newMap.on('move', function () {
      marker.setLatLng(newMap.getCenter());
      updatePoint(newMap.getCenter());
    });

    this.$address = this.subject.pipe(
      debounce(() => interval(1000)),
      map((addr) =>
        this.neshanService.getPointByAddress(<string>addr).subscribe((x) => {
          console.log(x);
          if (x.status != 'NO_RESULT') {
            newMap.panTo(new L.LatLng(x.location.y, x.location.x));
          }
        })
      )
    );

    this.$address.subscribe((x) => console.log(x));

    this.$getLocation.subscribe(() => {
      navigator.geolocation.getCurrentPosition((x) => {
        newMap.panTo(new L.LatLng(x.coords.latitude, x.coords.longitude));
      });
    });
  }

  addressUpdated(e) {
    this.subject.next(this.form.get('address').value);
  }

  submitAddress() {
    console.log(this.form.value);
  }
}
