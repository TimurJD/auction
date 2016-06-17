import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import NavbarComponent from '../navbar/navbar';

@Component({
    selector   : 'auction-application',
    templateUrl: 'app/components/application/application.html',
    styleUrls  : ['app/components/application/application.css'],
    directives : [
        ROUTER_DIRECTIVES,
        NavbarComponent
    ]
})
@Routes([
    {
        path     : '/',
        component: NavbarComponent
    }
    // ,
    // {
    //     path     : 'products/:productTitle',
    //     component: ProductDetailComponent
    // }
])
export default class ApplicationComponent {}