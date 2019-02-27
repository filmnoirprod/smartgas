import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { SearchPrices } from '../../interfaces/search-prices';
import { DatePipe } from '@angular/common';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShopService } from 'src/app/services/shop.service';
import { MatDialogRef,  MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { AddressesListComponent } from '../addresses-list/addresses-list.component';
import { LocalStorageService } from '../../services/local-storage.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  private allProducts; 
  private please: string;
  private disableDates: boolean;
  private disableLocation: boolean;

  constructor(
    private form: FormBuilder,
    private productService: ProductsService,
    private shopService: ShopService,
    private dialog: MatDialog,
    private myStorage: LocalStorageService,
    private searchService: SearchService
  ) { }

  private searchForm = this.form.group({
    'fuel': [''],
    'maxDist': [''],
    'here': [''],
    'location': [''],
    'maxPrice': [''],
    'today': [''],
    'dateFrom': [''],
    'dateTo': ['']
  });

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (response) => {
        this.allProducts = response.products;
      }
    );
  }

  openListAdd(result: any): void {
    const dialogRef = this.dialog.open(AddressesListComponent, {
      width: '600px'
    });
  };

  submit() {

    var objSearch = {};

    var products = this.searchForm.controls['fuel'].value;
    var geoDist = this.searchForm.controls['maxDist'].value;
    var here = this.searchForm.controls['here'].value;
    var location = this.searchForm.controls['location'].value;
    var maxPrice = this.searchForm.controls['maxPrice'].value;
    var today = this.searchForm.controls['today'].value;
    var dateFrom = this.searchForm.controls['dateFrom'].value;
    var dateTo = this.searchForm.controls['dateTo'].value;

    if(!this.disableLocation) {

      const provider = new OpenStreetMapProvider();

    if(!this.disableDates && !today && dateFrom) {
      objSearch['dateFrom'] = dateFrom.toISOString();
      objSearch['dateTo'] = dateTo.toISOString();
    }

    if(products){
      objSearch['products'] = [products];
    }

    if(geoDist) {
      objSearch['geoDist'] = geoDist;
    }

    objSearch['sort'] = 'price|ASC';

    const results = provider.search({ query: location }).then(
      (result) => {
        if(result.length > 1){
          this.myStorage.storeOnLocal('adds', result);
          this.openListAdd(result);
        }else if(result.length == 1){
          objSearch['geoLat'] = result[0].x;
          objSearch['geoLng'] = result[0].y;
          console.log('ok');
          this.searchService.searchShops(objSearch).subscribe(
            (response) => {
              console.log(response);
            }
          );
        }
      })
  }else{
    console.log('here');
    navigator.geolocation.getCurrentPosition(
      (response) => {
        objSearch['geoLng'] = response.coords.latitude;
        objSearch['geoLat'] = response.coords.longitude;
        console.log(response.coords.latitude);
        this.searchService.searchShops(objSearch).subscribe(
          (response) => {
            console.log(response);
          }
        );
      }
    );
  }

  this.searchService.searchShops(objSearch);
  };

  disablerLocation(): void {
    this.disableLocation = !this.disableLocation;
  };

  disablerDates(): void {
    this.disableDates = !this.disableDates;
  };

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  };
}
