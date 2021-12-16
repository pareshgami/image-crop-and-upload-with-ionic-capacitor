import { Component } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ImageUploadService } from '../services/image-upload.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    imageChangedEvent: any = '';
    croppedImage: any = '';
    ratio = "1";
    constructor(
        private imageUploadService: ImageUploadService
    ) {
    }

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }

    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }

    openFilePicker() {
        document.getElementById('file').click();
    }

    uploadFormData() {
        fetch(this.croppedImage)
        .then(res => res.blob())
        .then(blob => {
            const file = new File([blob], "filename.jpeg");
            const formData = new FormData();
            formData.append('image', file);

            this.imageUploadService.formData(formData)
            .subscribe(res => {
                alert("Server Path: " + res.uploaded_path);
            });
        });
    }

    uploadBase64() {
        const base64 = this.croppedImage.split(',');
        this.imageUploadService.base64(base64[1])
        .subscribe(res => {
            alert("Server Path: " + res.uploaded_path);
        }); 
    }

}
