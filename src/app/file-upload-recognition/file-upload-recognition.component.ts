import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// Interfaces
import { Prediction } from '../app.component';
// Tensorflow
import * as mobilenet from '@tensorflow-models/mobilenet';
// Services
import { AppService } from '../app.service';
@Component({
  selector: 'app-file-upload-recognition',
  templateUrl: './file-upload-recognition.component.html',
  styleUrls: ['./file-upload-recognition.component.scss']
})
export class FileUploadRecognitionComponent implements OnInit {

  @ViewChild('img', { static: false }) imageEl: ElementRef;

  public loading = true;
  public imageSrc: string;
  public predictions: Prediction[];

  private model: any;
  constructor(
    private service: AppService
  ) { }

  public ngOnInit(): void {
    mobilenet.load().then((model) => {
      this.model = model;
      this.loading = false;
    }).catch((error) => { console.error('Oups ! ', error); });
  }

  public async fileChangeEvent(event): Promise<void> {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (res: any) => {
        this.imageSrc = res.target.result;
        setTimeout(async () => {
          const imgEl = this.imageEl.nativeElement;
          this.predictions = await this.model.classify(imgEl);
        }, 0);
      };
    }
  }

  public roundProbability(probability): string {
    return this.service.roundProbability(probability);
  }

}
