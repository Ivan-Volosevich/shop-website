import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MockCatalogService {
    
    getMenSlides(): Observable<any> {
        return of([
            {
                id: "m-1",
                size: "size",
                color: "color",
                name: "t-shirt",
                price: 5,
                image: "../assets/t-shirt.png",
                desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolorum voluptatum amet. Voluptas laborum a veniam minima adipisci suscipit."
            },
            {
                id: "m-2",
                size: "size",
                color: "",
                name: "Pants FORCLAZ",
                price: 30,
                image: "../assets/pants.png",
                desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad neque aut assumenda voluptas aliquid asperiores, vitae tenetur necessitatibus distinctio illo suscipit explicabo eaque sunt deserunt iusto."
            },
        ]);
        // return this.http.get('assets/mocks/menSlides.json');
    }
    
    getWomenSlides(): Observable<any> {
        return of([
            {
                id: "m-1",
                size: "size",
                color: "color",
                name: "t-shirt",
                price: 5,
                image: "../assets/t-shirt.png",
                desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolorum voluptatum amet. Voluptas laborum a veniam minima adipisci suscipit."
            },
            {
                id: "m-2",
                size: "size",
                color: "",
                name: "Pants FORCLAZ",
                price: 30,
                image: "../assets/pants.png",
                desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad neque aut assumenda voluptas aliquid asperiores, vitae tenetur necessitatibus distinctio illo suscipit explicabo eaque sunt deserunt iusto."
            },
        ]);
        // return this.http.get('assets/mocks/womenSlides.json');
    }

    getChildrenSlides(): Observable<any> {
        return of([
            {
                id: "m-1",
                size: "size",
                color: "color",
                name: "t-shirt",
                price: 5,
                image: "../assets/t-shirt.png",
                desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolorum voluptatum amet. Voluptas laborum a veniam minima adipisci suscipit."
            },
            {
                id: "m-2",
                size: "size",
                color: "",
                name: "Pants FORCLAZ",
                price: 30,
                image: "../assets/pants.png",
                desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad neque aut assumenda voluptas aliquid asperiores, vitae tenetur necessitatibus distinctio illo suscipit explicabo eaque sunt deserunt iusto."
            },
        ]);
        // return this.http.get('assets/mocks/childrenSlides.json');
    }

}