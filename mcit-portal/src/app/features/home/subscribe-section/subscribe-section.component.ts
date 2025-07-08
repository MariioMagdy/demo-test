import { Component, OnInit } from '@angular/core';
import { faEnvelope, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-subscribe-section',
  templateUrl: './subscribe-section.component.html',
  styleUrls: ['./subscribe-section.component.scss'],
  standalone: false
})
export class SubscribeSectionComponent implements OnInit {

  faEnvelope = faEnvelope;
  faChevronLeft = faChevronLeft;

  constructor() { }

  ngOnInit(): void {
  }

  onSubscribe(email: string) {
    console.log(`Subscribed with email: ${email}`);
    // Here you would typically call a service to handle the subscription
  }

} 