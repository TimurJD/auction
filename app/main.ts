import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: '<h1>{{name}}</h1>'
})
class AppComponent {
    private name: string;

    constructor() {
        this.name = 'Welcome to the Jungle!';
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

bootstrap(AppComponent);