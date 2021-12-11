import { Component, OnInit } from '@angular/core';
import { GetBranchByIdService } from './services/get-branch-by-id.service';
import { ActivatedRoute } from '@angular/router';
import { branchbyid } from './interfaces/branchbyid.interface';
import { ProductComponent } from '../product/product.component';
import { Product } from 'src/core/interfaces/product.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  carouselimages = [];
  favouriteProducts: Product[]
  branch: branchbyid;
  constructor(
    private branchService: GetBranchByIdService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id="61b359d03de833e1093b3786";
    this.branchService.getBranch(id).subscribe((res: branchbyid) => {
      this.branch = res;
      this.carouselimages=res.sliderPictures;
      this.favouriteProducts=res.favoriteProducts;
      console.log(this.favouriteProducts)
    });
  }
}


