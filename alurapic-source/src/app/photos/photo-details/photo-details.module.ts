import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-ony.directive';
import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoModule } from './../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoDetailsComponent } from './photo-details.component';

@NgModule({
    declarations: [ 
        PhotoDetailsComponent,
        PhotoCommentsComponent,
        PhotoOwnerOnlyDirective
     ],
    imports: [ 
        CommonModule,
        VMessageModule,
        PhotoModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [ PhotoDetailsComponent ]
})
export class PhotoDetailsModule {

}