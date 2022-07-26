import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class HttpService {
    constructor(private http: HttpClient, private cookieService: CookieService){ }

    postData(user: User){
        const body = {'login': user.login, 'password': user.password};
        return this.http.post('http://51.15.220.219:81/api/login', body);
    }

    setCookie(nameCookie, valueCookie){
        this.cookieService.set(nameCookie, valueCookie);
    }

    getCookie(nameCookie){
        return this.cookieService.get(nameCookie);
    }
}
