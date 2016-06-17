import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector   : 'auction-stars',
    templateUrl: 'app/components/stars/stars.html',
    styleUrls  : [`app/components/stars/stars.css`]
})
export default class StarsComponent implements OnInit {
    @Input() private count: number = 5;
    @Input() private rating: number = 0;
    private stars: boolean[] = [];

    public ngOnInit(): void {
        for(let i = 1; i <= this.count; i++) {
            this.stars.push(i > this.rating);
        }
    }
}