import { Component, OnInit } from '@angular/core';
import { faUser, faSearch, faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  faSearch = faSearch;
  faGlobe = faGlobe;
  faChevronDown = faChevronDown;

  navItems = [
    { name: 'عن الوزارة', route: '/about' },
    { name: 'الخدمات الإلكترونية', route: '/e-services', dropdown: [] },
    { name: 'فعاليات المعرفة التدريبية', route: '/events' },
    { name: 'المبادرات والبرامج', route: '/initiatives', dropdown: [] },
    { name: 'المركز الإعلامي', route: '/media-center', dropdown: [] }
  ];

  constructor() { }

  ngOnInit(): void {
  }

} 