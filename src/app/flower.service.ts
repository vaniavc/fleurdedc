import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Flower } from './flower';
import { FLOWERS } from './flowers';

@Injectable({
    providedIn: 'root'
})
export class FlowerService {
    constructor() { }

    getFlowers(): Observable<Flower[]> {
        return of(FLOWERS);
    }

    getFlower(id: number): Observable<Flower> {
        return of(FLOWERS.find(flower => flower.id === id));
    }
}
