import { HttpClient } from "@angular/common/http";
import { Injectable, inject, signal } from "@angular/core";
import { environment } from "@envs/environment.development";
import { Product } from "@shared/models/product.interface";
import { tap } from "rxjs";

@Injectable({providedIn: 'root'}) /* El decorador @Injectable() se utiliza para marcar una clase como un servicio que puede inyectarse en otras clases. */
export class ProductsService { /* La clase ProductsService es un servicio que se utiliza para realizar solicitudes HTTP a la API de productos. */
    public products = signal<any[]>([]); /* es un signal que almacena una lista de productos. */
    private readonly _http = inject(HttpClient); /* _http es una instancia de HttpClient utilizada para realizar solicitudes HTTP en la aplicación Angular */
    private readonly _endPoint = environment.apiURL; /* _endPoint es una cadena que almacena la URL de la API. */;

    constructor() { /* El constructor es un método que se utiliza para inicializar la clase ProductsService. */
        this.getProducts(); /* getProducts es un método que se utiliza para realizar una solicitud GET a la API de productos. */
    }

    public getProducts(): void { /* getProducts es un método que se utiliza para realizar una solicitud GET a la API de productos. */
        this._http.get<Product[]>(`${this._endPoint}/?sort=desc`) 
            .pipe(tap((data: Product[]) => this.products.set(data))) /* tap se utiliza para realizar operaciones secundarias en los datos de la secuencia. */
            .subscribe(); /* subscribe se utiliza para suscribirse a la secuencia y recibir los datos. */
    }
    
    public getProductById(id: string){ /* getProductById es un método que se utiliza para realizar una solicitud GET a la API de productos. */
        return this._http.get<Product[]>(`${this._endPoint}/${id}`)
    }
}