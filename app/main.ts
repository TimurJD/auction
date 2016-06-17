import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: '<h1>{{message}}</h1>'
})
class AppComponent {
    private message: string;

    constructor() {
        this.message = 'Welcome to the Jungle!';
    }

    public setName(message: string): void {
        this.message = message;
    }

    public getName(): string {
        return this.message;
    }
}

bootstrap(AppComponent);