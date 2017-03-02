/**
 * Created by druker on 3/2/2017.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class RulesService {


    // constructor() {
    // }

    constructor(private http: Http) {
    }

    public loadRules() {
        return this.http.get('http://localhost:3000/rules');
    }

}