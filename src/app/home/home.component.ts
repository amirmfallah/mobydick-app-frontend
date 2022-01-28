import { switchMap } from 'rxjs/operators';
import { BranchesService } from './../ui-kit/branches-list/services/branches.service';
import { Component, OnInit } from '@angular/core';
import { GetBranchByIdService } from './services/get-branch-by-id.service';
import { ActivatedRoute } from '@angular/router';
import { branchbyid } from './interfaces/branchbyid.interface';
import { ProductComponent } from '../product/product.component';
import { Product } from 'src/core/interfaces/product.interface';
import Glide, {
  Controls,
  Breakpoints,
} from '@glidejs/glide/dist/glide.modular.esm';
import { branchSearch } from '../ui-kit/branches-list/interfaces/branch.interfaces';
import * as _ from 'lodash';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  carouselimages: any;
  favouriteProducts: Product[] = undefined;
  branch: branchbyid;
  constructor(
    private branchService: GetBranchByIdService,
    private branchesService: BranchesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.branchesService.selectedBranch.subscribe((branch: branchSearch) => {
      this.branchService
        .getBranch(_.get(branch, '_id'))
        .subscribe((res: branchbyid) => {
          this.branch = res;
          this.carouselimages = res.sliderPictures.map((url) => {
            return {
              path: url,
            };
          });
          console.log(this.carouselimages);
          this.favouriteProducts = res.favoriteProducts;
          console.log(this.favouriteProducts);
        });
    });
  }
}
