import { Component, EventEmitter, Input, Output } from '@angular/core';

// typeInput - 0: text
//           - 1: password
// FlagRequired - true: required
//              - false: null

interface InputComponent{
    title: string,
    typeInput: number,
    name: string,
    flagRequired: boolean,
    placeholder: string
}

@Component({
    selector: 'contacts-list',
    template:`
    <!-- <inputItem class="inputBase" *ngFor="let car of inputList" [inputItems]="car">{{car}}</inputItem> -->
    `,
    styleUrls: [
        './form-list.component.css'
    ]
})

export class FormListComponent {
    inputList: InputComponent[] = [{
        title: 'Логин*',
        typeInput: 0,
        name: "login",
        flagRequired: true,
        placeholder: 'mail@simmmple.com',
    }, {
        title: 'Пароль*',
        typeInput: 1,
        name: "password",
        flagRequired: true,
        placeholder: 'Минимум 8 символов'
    }];

    constructor(){}
}
