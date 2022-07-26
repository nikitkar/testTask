import { Component, Input} from '@angular/core';
import { HttpService } from './http.service';
  
@Component({
    selector: 'dashboard',
    template: `
    <h3>token:</h3><p>{{getCookie('token')}}</p>
    <br>
    <h3>refreshToken:</h3><p>{{getCookie('refreshToken')}}</p>
    <br>
    <button routerLink="/login">Главная</button>
    `,
    providers: [HttpService],
})
export class DashboardComponent {
    JsonData: string;

    constructor(private httpService: HttpService){}

    getCookie(value){
        return this.httpService.getCookie(value);
    }
}
