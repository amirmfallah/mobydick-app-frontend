import { branchSearch } from 'src/app/ui-kit/branches-list/interfaces/branch.interfaces';
import { Configuration } from './../../../../core/configuration';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

interface Coords {
  lat: number;
  lng: number;
}
@Injectable({
  providedIn: 'root',
})
export class BranchesService {
  constructor(private http: HttpClient) {}
  public branches = new BehaviorSubject<branchSearch[]>(undefined);
  public selectedBranch = new BehaviorSubject<branchSearch>(undefined);

  getBranches(): Observable<any> {
    return this.http.get(`${Configuration.MobydickApiUrl}/api/v1/branches`);
  }

  getMyLocation(): Promise<Coords> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (x) => {
          console.log(x.coords.latitude, x.coords.longitude);

          const coords = <Coords>{
            lat: x.coords.latitude,
            lng: x.coords.longitude,
          };
          resolve(coords);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  async selectNearestBranch() {
    this.getBranches().subscribe(async (branches: branchSearch[]) => {
      this.branches.next(branches);
      let coords;
      try {
        coords = await this.getMyLocation();
      } catch (err) {
        if (branches.length > 0) this.selectedBranch.next(branches[0]);
        return;
      }
      let minDist = undefined;
      for (let i = 0; i < branches.length; i++) {
        const branch = branches[i];
        if (minDist == undefined) {
          minDist = this.calcDistance(
            {
              lat: branch.address.lat,
              lng: branch.address.lng,
            },
            coords
          );
          this.selectedBranch.next(branch);
        } else {
          const dist = this.calcDistance(
            {
              lat: branch.address.lat,
              lng: branch.address.lng,
            },
            coords
          );
          if (dist < minDist) {
            minDist = dist;
            this.selectedBranch.next(branch);
          }
        }
      }
      console.log(this.selectedBranch.value);
    });
  }

  calcDistance(coords1: Coords, coords2: Coords): number {
    return Math.sqrt(
      Math.pow(coords1.lat - coords2.lat, 2) +
        Math.pow(coords1.lng - coords2.lng, 2)
    );
  }
}
