import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { AuthHttp } from "angular2-jwt";
import { Response } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import "rxjs/add/operator/map";

@Injectable()
export class ApiService {

    constructor(private authHttp: AuthHttp, private http: Http) {
    }

    get(url: string) {
        return this
            .authHttp
            .get(url)
            .map((response: Response) => response.json());
    }

    getRecipes() {
        return this
            .http
            .get('/api/recipe/')
            .map((response: Response) => response.json());
    }

    getRecipe(id: number) {
        return this
            .http
            .get(`/api/recipe/${id}`)
            .map((response: Response) => response.json());
    }

    addRecipe(name: String, description: String) {
        let params = JSON.stringify({ name: name, description: description });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this
            .http
            .put('/api/recipe/', params, options)
            .map((response: Response) => response.json());
    }

    deleteRecipe(id: number): Observable<any> {
        return this
            .http
            .delete(`/api/recipe/${id}`)
            .map((response: Response) => true);
    }

    searchRecipes(term: string) {
        return this
            .http
            .get(`/api/recipe/search/${term}`)
            .map((response: Response) => response.json());
    };

    getGroceries() {
        return this
            .http
            .get('/api/grocery/')
            .map((response: Response) => response.json());
    }

    getGrocery(id: number) {
        return this
            .http
            .get(`/api/grocery/${id}`)
            .map((response: Response) => response.json());
    }

    remGrocery(id: number) {
        return this
            .http
            .get(`/api/grocery/remove/${id}`)
            .map((response: Response) => true);

    }

    updateGrocery(groceries: any) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this
            .http
            .post(`api/grocery/update/${groceries.id}`, { groceries }, options)
            .map((response: Response) => response.json());

    }

    createGrocery(groceries: any) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this
            .http
            .post(`api/grocery/create`, { groceries }, options)
            .map((response: Response) => response.json());

    }

    search(term: string) {

        return this
            .http
            .get(`/api/grocery/search/${term}`)
            .map((response: Response) => response.json());
    };
    //создание меры
    getMeasures() {
        return this
            .http
            .get('/api/measure/')
            .map((response: Response) => response.json());
    }

    getMeasure(id: number) {
        return this
            .http
            .get(`/api/measure/${id}`)
            .map((response: Response) => response.json());
    }

    postCreateMeasure(measures: any, type: String) {
        let params = JSON.stringify({ name: measures.name, type: type, power: measures.power });
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this
            .http
            .post("/api/measure/", params, { headers: headers })
            .map(res => res.json())
    }

    putUpdateMeasure(measure: any, type: String) {
        let params = JSON.stringify({ id: measure.id, name: measure.name, type: type, power: measure.power });
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this
            .http
            .put(`/api/measure/${measure.id}`, params, { headers: headers })
            .map(res => res.json())
    }

    deleteMeasure(id: number) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this
            .http
            .delete(`/api/measure/${id}`, { headers: headers })
            .map(res => res.json())

    }
    //создание комментария
    sendComment(name: String, comment: String, recipeId: number) {
        let params = JSON.stringify({ name: name, comment: comment , RecipeId: recipeId});
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this
            .http
            .post('/api/comment/', params, { headers: headers })
            .map(res => res.json())
    }

    getComments(id:number) {
        return this
            .http
            .get(`/api/comment/${id}`)
            .map((response: Response) => response.json());
    }

    //ЛАЙКИ
    addLikes(recipeId: number){
        let params = JSON.stringify({RecipeId: recipeId});
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this
            .http
            .post('/api/like/', params, { headers: headers })
            .map(res => res.json())
    }

    getLikes(recipeId: number){
        return this
            .http
            .get(`/api/like/${recipeId}`)
            .map((res: Response) => res.json());
    }
}



