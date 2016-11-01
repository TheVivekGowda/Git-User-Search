import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private userName: string;
    private client_id = 'a20342716982413651d9';
    private client_secret = 'bcad9a92667691e174d6a7e8843a26b90ccc917f';
    
    constructor(private _http: Http) {
        console.log("Github Service is Ready to go..");
        this.userName = 'BuckyRoberts';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/'+this.userName+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/'+this.userName+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
    }

    updateUsername(username: string) {
        this.userName = username;
    }
}