import { Component, HostBinding, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from './http.service';

import { DashboardComponent } from './dashboard.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.css',
        './FormList/form-list.component.css',
        './InputType/inputItem.component.css',
    ],
    providers: [HttpService],
})
export class AppMain {
    @ViewChild('form') form: NgForm;

    showPassword: boolean = false;
    typePasswordInput: boolean = false;
    webkitTextSecurity: string = 'disc';
    // false - не показывает пароль
    // true - показывает пароль


    savePassword: boolean = false;
    // true - сохранять
    // false - не сохранять

    transformShowPass() {
        if(this.savePassword){
            this.webkitTextSecurity = this.webkitTextSecurity === 'disc' ? 'disc' : 'none';
            this.typePasswordInput = this.typePasswordInput ? false : true;
        }
        else{
            this.showPassword = this.showPassword ? false : true;
            this.webkitTextSecurity = this.webkitTextSecurity === 'disc' ? 'none' : 'disc';
        }
    }

    constructor(private httpService: HttpService, private router: Router) {}

    strError: string;
    isVisibility: string = 'close'; // open - ошибка; close - ничего

    onSubmit() {
        const user = {
            login: this.form.value.login,
            password: this.form.value.password,
        };

        this.httpService.postData(user).subscribe(
            (data: any) => {
                this.isVisibility = 'close';

                DashboardComponent.prototype.JsonData = JSON.stringify(data);

                this.httpService.setCookie('token', `${data.tokens.token}`);
                this.httpService.setCookie('refreshToken', `${data.tokens.refreshToken}`);

                this.router.navigate(['/dashboard']);
            },
            (error) => {
                this.isVisibility = 'open';
                this.strError = error.error.errors;
            }
        );
    }


    onChangeInput(e){
        if(e.target.checked) {
            this.savePassword = true;
            this.webkitTextSecurity = 'none';
            this.typePasswordInput = true;
        }
        else {
            this.savePassword = false;
            this.webkitTextSecurity = 'disc';
            this.typePasswordInput = false;
        }
    }
}
