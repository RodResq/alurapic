import { UserService } from './../../core/user/user.service';
import { AlertService } from './../../shared/alert/alert.service';
import { PhotoComment } from './../photo/photo-comment';
import { Observable } from 'rxjs';
import { PhotoService } from './../photo/photo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';

@Component({
    templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit{

    photoId: number;

    photo$: Observable<Photo>;

    constructor(
        private acativateRoute: ActivatedRoute,
        private photoService: PhotoService,
        private router: Router,
        private alertService: AlertService, 
        private userService: UserService    
    ) {}
   
    ngOnInit(): void {
        this.photoId = this.acativateRoute.snapshot.params.photoId
        this.photo$ = this.photoService.findById(this.photoId);
        this.photo$.subscribe(() => {}, err => {
            console.log(err);
            this.router.navigate(['not-found'])
            
        })
            
    }

    remove() {
        this.photoService
        .removePhoto(this.photoId)
        .subscribe(
        () => {
            this.alertService.success('Photo removed', true);
            this.router.navigate(['/user', this.userService.getUserName()], {replaceUrl: true});
        },
        err => {
            console.log(err);
            this.alertService.warning('Could not delete the photo!');
        }
        );
    }

    like(photo: Photo) {
        this.photoService.like(photo.id)
            .subscribe(liked => {
                if (liked) {
                    this.photo$ = this.photoService.findById(photo.id);
                }
            })

    }

}