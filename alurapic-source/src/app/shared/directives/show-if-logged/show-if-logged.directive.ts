import { UserService } from './../../../core/user/user.service';
import { OnInit, Directive, ElementRef, Renderer } from '@angular/core';


@Directive({
    selector: '[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer,
        private userService: UserService
    ) {}
    
    ngOnInit(): void {
        !this.userService.isLogged() &&
            this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'none');
    }
}