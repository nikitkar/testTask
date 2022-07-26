import { Component, HostBinding, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
// type - true: successful
//      - false: warning

@Component({
    selector: '[ToolTip]',
    templateUrl: './ToolTip.component.html',
    styleUrls: ['./ToolTip.component.css'],
    animations:[
        trigger('animationTriggerName', [
            state('open', style({opacity: 1})),
            state('close', style({opacity: 0, visibility: 'hidden'})),
            transition('open <=> close', animate('.4s'))
        ])
    ]
})

export class ToolTip {
    @Input() title: string;
    @HostBinding("style.--color") @Input() color: string;
    @Input() typeToolTip: boolean;
    @Input() isVisibility: string;

    closeToolTip(){
        this.isVisibility = this.isVisibility === 'open' ? 'close' : 'open';
    }

    constructor(){
        setTimeout(()=>{
            this.isVisibility = 'close';
        }, 16000);
    }
}
