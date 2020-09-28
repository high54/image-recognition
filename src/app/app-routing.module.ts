import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { FileUploadRecognitionComponent } from './file-upload-recognition/file-upload-recognition.component';
import { VideoRecognitionComponent } from './video-recognition/video-recognition.component';

const routes: Routes = [
  {
    path: '',
    component: FileUploadRecognitionComponent
  },
  {
    path: 'video-recognition',
    component: VideoRecognitionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
