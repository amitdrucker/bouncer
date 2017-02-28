/**
 * Created by Eyal on 25/01/2017.
 */
import {Directive, ElementRef, Renderer, HostBinding, HostListener, Input, ViewContainerRef} from "@angular/core";
import * as $ from 'jquery';


@Directive({
    selector: '[highlight]'
})
export class HighlightDirective{
    @Input('highlight')
    color:{bg:string,id:number};

    @Input()
    elad:string;

    _bg:string;

    @HostBinding('style.backgroundColor')
    get bg(){
        return this._bg;
    }
    @HostListener('mouseenter')
    onMouseEnter(){
        this._bg = this.color.bg || 'yellow';
    }
    @HostListener('mouseleave')
    onMouseLeave(){
        this._bg = null;
    }

    constructor(private elm:ElementRef,
                private renderer:Renderer,
                private vcr:ViewContainerRef
    ){
        renderer.setElementStyle(
            elm.nativeElement,
            'border',
            '2px solid red'
        );
        $(elm.nativeElement).addClass('blabla');
    }
}