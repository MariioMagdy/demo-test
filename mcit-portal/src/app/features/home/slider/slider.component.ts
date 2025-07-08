import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  standalone: false
})
export class SliderComponent implements OnInit {
  faChevronLeft = faChevronLeft;

  slides = [
    {
      image: 'assets/images/slider1.jpg',
      title: 'مهارات المستقبل',
      subtitle: 'بداية جديدة لجيل رقمي واعد'
    },
    {
      image: 'assets/images/slider2.jpg',
      title: 'العنوان الثاني',
      subtitle: 'وصف العنوان الثاني'
    },
    {
      image: 'assets/images/slider3.jpg',
      title: 'العنوان الثالث',
      subtitle: 'وصف العنوان الثالث'
    }
  ];

  currentSlide = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.next();
    }, 5000); // Change slide every 5 seconds
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  next(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prev(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
} 