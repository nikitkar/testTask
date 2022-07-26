import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

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
    selector: 'inputItem',
    templateUrl: './inputItem.component.html',
    styleUrls: ['./inputItem.component.css', '../FormList/form-list.component.css'],
})

export class inputItemComponent {
    @Input() inputItems: InputComponent;
    showPassword: boolean = false;
    // false - не показывает пароль
    // true - показывает пароль
    transformShowPass(){
        this.showPassword = this.showPassword ? false : true;
    }
}
