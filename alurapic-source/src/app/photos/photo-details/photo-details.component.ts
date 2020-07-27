import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit{

    photoId: string = '';

    constructor(private acativateRoute: ActivatedRoute) {}
   
    ngOnInit(): void {
        this.photoId = this.acativateRoute.snapshot.params.photoId;
        console.log(this.photoId);
            
    }

}