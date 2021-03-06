import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  ClrAlertModule,
  ClrInputModule,
  ClrModalModule,
  ClrSelectModule,
  ClrTextareaModule,
  ClrWizardModule,
} from '@clr/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { profileRoutes } from './profile.routes';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule( {
             declarations: [ ProfileComponent ],
	           imports: [ CommonModule,
	                      RouterModule.forChild( profileRoutes ),
	                      ImageCropperModule,
	                      ClrModalModule,
	                      ClrWizardModule,
	                      ClrInputModule,
	                      FormsModule,
	                      ClrSelectModule,
	                      ClrAlertModule,
	                      ClrTextareaModule,
	                      ReactiveFormsModule,
	                      TranslateModule,
	           ],
           } )
export class ProfileModule {
}
