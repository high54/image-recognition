import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular Material Modules
import { AppMaterialModule } from './app-material.module';
// Routes
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { FileUploadRecognitionComponent } from './file-upload-recognition/file-upload-recognition.component';
import { VideoRecognitionComponent } from './video-recognition/video-recognition.component';
// Services
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadRecognitionComponent,
    VideoRecognitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
