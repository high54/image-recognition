import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadRecognitionComponent } from './file-upload-recognition.component';

describe('FileUploadRecognitionComponent', () => {
  let component: FileUploadRecognitionComponent;
  let fixture: ComponentFixture<FileUploadRecognitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadRecognitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
