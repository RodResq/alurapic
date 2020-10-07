import { UserService } from './../../../core/user/user.service';
import { OnInit, Directive, ElementRef, Renderer } from '@angular/core';


@Directive({
    selector: '[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

    currentDisplay: string;

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer,
        private userService: UserService
    ) {}
    
    ngOnInit(): void {

        this.currentDisplay = getComputedStyle(this.elementRef.nativeElement).display;
        this.userService.getUser().subscribe(user => {
            if (user) {
                this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', this.currentDisplay);
            } else {
                this.currentDisplay = getComputedStyle(this.elementRef.nativeElement).display;
                this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'none');
            }
        });
    }
}