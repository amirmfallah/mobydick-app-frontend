import { interval, Observable, Subject, BehaviorSubject } from 'rxjs';
import { NeshanService } from './../../../core/services/neshan.service';
import { Configuration } from './../../../core/configuration';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { debounce, map } from 'rxjs/operators';
declare var L: any;

@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.component.html',
  styleUrls: ['./new-address.component.scss'],
})
export class NewAddressComponent implements OnInit {
  form = this.fb.group({
    address: ['', Validators.required],
    phone: ['', Validators.required],
    x: [],
    y: [],
  });
  $address: Observable<any>;
  subject = new Subject();

  constructor(private fb: FormBuilder, private neshanService: NeshanService) {}

  ngOnInit(): void {
    var newMap = new L.Map('newMap', {
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
  }

  addressUpdated(e) {
    this.subject.next(this.form.get('address').value);
  }

  submitAddress() {
    console.log(this.form.value);
  }
}
