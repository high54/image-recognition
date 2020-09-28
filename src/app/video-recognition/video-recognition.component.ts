import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
// Interfaces
import { Prediction } from '../app.component';
// Tensorflow
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';
// Services
import { AppService } from '../app.service';
@Component({
  selector: 'app-video-recognition',
  templateUrl: './video-recognition.component.html',
  styleUrls: ['./video-recognition.component.scss']
})
export class VideoRecognitionComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('video', { static: false }) video: ElementRef;

  public loading = true;
  public imageSrc: string;
  public predictions: Prediction[];

  private model: any;
  private stream: MediaStream;
  constructor(
    private service: AppService
  ) { }

  public ngOnInit(): void {
    mobilenet.load().then((model) => {
      this.model = model;
      this.loading = false;
      setInterval(async () => {
        this.predictions = await this.model.classify(this.video.nativeElement);
        await tf.nextFrame();
      }, 3000);
    }).catch((error) => { console.error('Oups ! ', error); });

  }
  public ngOnDestroy(): void {
    this.stream.getTracks().forEach((track) => {
      if (track.readyState === 'live' && track.kind === 'video') {
        track.stop();
      }
    });
  }

  public async ngAfterViewInit(): Promise<void> {
    const vid = this.video.nativeElement;
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          vid.srcObject = stream;
          this.stream = stream;
        }).catch((error) => { console.error('Oups ! ', error); });
    }
  }

  public roundProbability(probability): string {
    return this.service.roundProbability(probability);
  }

}
