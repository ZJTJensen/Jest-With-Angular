import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { AboutComponent } from './about/about.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: '', component: InfoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'video', component: VideoComponent }
];

@NgModule({
  
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}




