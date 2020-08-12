import { PhotoComment } from './../photo/photo-comment';
import { Observable } from 'rxjs';
import { PhotoService } from './../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';

@Component({
    templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit{

    photoId: string = '';

    photo$: Observable<Photo>;

    constructor(
        private acativateRoute: ActivatedRoute,
        private photoService: PhotoService) {}
   
    ngOnInit(): void {
        this.photoId = this.acativateRoute.snapshot.params.photoId
        this.photo$ = this.photoService.findById(this.photoId);
            
    }

}