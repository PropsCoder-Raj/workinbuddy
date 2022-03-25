import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  @ViewChild('slider') slides: IonSlides;
  count = 0;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex().then(res => {
      this.count = res;
    });
  }

  swipeNext() {
    this.slides.slideNext();
  }

  home() {
    this.router.navigate(['/auth/signin']);
  }
}
