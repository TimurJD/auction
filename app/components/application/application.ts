import {Component, ViewEncapsulation} from '@angular/core';
import NavbarComponent from '../navbar/navbar';
import CarouselComponent from '../carousel/carousel';
import SearchComponent from '../search/search';
import StarsComponent from '../stars/stars';
import ProductItemComponent from '../product-item/product-item';
import FooterComponent from '../footer/footer';
import {Product, ProductService} from '../../services/product-service';

@Component({
    selector     : 'auction-application',
    encapsulation: ViewEncapsulation.None,
    providers    : [
        ProductService
    ],
    templateUrl  : 'app/components/application/application.html',
    styleUrls    : ['app/components/application/application.css'],
    directives   : [
        NavbarComponent,
        CarouselComponent,
        SearchComponent,
        StarsComponent,
        ProductItemComponent,
        FooterComponent
    ]
})
export default class ApplicationComponent {
    products: Array<Product> = []; // <1>

    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
    }
}