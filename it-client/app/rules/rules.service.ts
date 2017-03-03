/**
 * Created by druker on 3/2/2017.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Rules} from "./rules.class";

@Injectable()
export class RulesService {

    constructor(private http: Http) {
    }

    loadRules(): Observable<Rules> {
        return this.http
            .get('http://localhost:3000/rules')
            .map(response => response.json());
    }
}