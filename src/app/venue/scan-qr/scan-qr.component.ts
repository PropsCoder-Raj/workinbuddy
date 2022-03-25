import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { ToastController, LoadingController, Platform } from '@ionic/angular';
import jsQR from 'jsqr';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.component.html',
  styleUrls: ['./scan-qr.component.scss'],
})
export class ScanQrComponent implements OnInit, AfterViewInit {
  qrScnnerText = '';
  @ViewChild('video', { static: false }) video: ElementRef;
  @ViewChild('canvas', { static: false }) canvas: ElementRef;
  @ViewChild('fileinput', { static: false }) fileinput: ElementRef;

  canvasElement: any;
  videoElement: any;
  canvasContext: any;
  scanActive = false;
  scanResult = null;
  loading: HTMLIonLoadingElement = null;
  public stream : any;

  loaderStatus = false;
  constructor(public auth: AngularFireAuth, public firestore: AngularFirestore, public router: Router, private qrScanner: QRScanner,
    private toastCtrl: ToastController, private loadingCtrl: LoadingController, private plt: Platform) {
      this.loaderStatus = true;
    const isInStandaloneMode = () =>
      'standalone' in window.navigator && window.navigator['standalone'];
    if (this.plt.is('android') && isInStandaloneMode()) {
      // E.g. hide the scan functionality!
    }
  }

  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
    this.videoElement = this.video.nativeElement;
  }

  async showQrToast() {
    const toast = await this.toastCtrl.create({
      message: `Open ${this.scanResult}?`,
      position: 'top',
      buttons: [
        {
          text: 'Open',
          handler: () => {
            window.open(this.scanResult, '_system', 'location=yes');
          }
        }
      ]
    });
    toast.present();
  }

  reset() {
    this.scanResult = null;
  }

  async stopCamera(){
    this.stream.getTracks().forEach(function(track) {
      if (track.readyState == 'live' && track.kind === 'video') {
          track.stop();
      }
    });
    this.scanActive = false;
  }

  home(){
    this.router.navigate(['/home'])
  }

  stopScan() {
    this.scanActive = false;
  }

  async startScan() {
    // Not working on iOS standalone mode!
    this.stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }
    });

    this.videoElement.srcObject = this.stream;
    // Required for Safari
    this.videoElement.setAttribute('playsinline', true);

    this.loading = await this.loadingCtrl.create({});
    await this.loading.present();

    this.videoElement.play();
    requestAnimationFrame(this.scan.bind(this));
    this.loaderStatus = false
  }

  async scan() {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
        this.scanActive = true;
      }

      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;

      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });

      if (code) {
        this.scanActive = false;
        this.scanResult = code.data;
        this.checkin(this.scanResult);
        // this.showQrToast();
      } else {
        if (this.scanActive) {
          requestAnimationFrame(this.scan.bind(this));
        }
      }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }

  checkin(text){
    this.router.navigate(['/venue/checkin'], {
      queryParams: {text : text}
    }).then(res=>{
      this.stopCamera();
    });
  }


  captureImage() {
    this.fileinput.nativeElement.click();
  }

  // handleFile(files: FileList) {
  //   const file = files.item(0);
  //   var img = new Image();
  //   img.onload = () => {
  //     this.canvasContext.drawImage(img, 0, 0, this.canvasElement.width, this.canvasElement.height);
  //     const imageData = this.canvasContext.getImageData(
  //       0,
  //       0,
  //       this.canvasElement.width,
  //       this.canvasElement.height
  //     );
  //     const code = jsQR(imageData.data, imageData.width, imageData.height, {
  //       inversionAttempts: 'dontInvert'
  //     });

  //     if (code) {
  //       this.scanResult = code.data;
  //       this.showQrToast();
  //     }
  //   };
  //   img.src = URL.createObjectURL(file);
  // }

  ngOnInit() {
    this.startScan();
  }

}
