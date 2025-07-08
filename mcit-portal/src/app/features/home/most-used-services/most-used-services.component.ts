import { Component, OnInit } from '@angular/core';
import { faUsers, faBuilding, faHandHoldingHeart, faBell, faLink, faCheckCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-most-used-services',
  templateUrl: './most-used-services.component.html',
  styleUrls: ['./most-used-services.component.scss'],
  standalone: false
})
export class MostUsedServicesComponent implements OnInit {
  // Icons
  faUsers = faUsers;
  faBuilding = faBuilding;
  faHandHoldingHeart = faHandHoldingHeart;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  services = [
    {
      icon: faCheckCircle,
      title: 'طلب جهة مهتمة بخدمة البحث عن الكفاءات',
      description: 'نص إضافي لمحتوى البطاقة',
      tags: ['وسم', 'وسم', 'وسم'],
      type: 'individual'
    },
    {
      icon: faLink,
      title: 'تقديم علي فرصة مع ربط الشركات',
      description: 'تقديم علي فرصة مع ربط الشركات',
      tags: ['وكالة التكنولوجيا'],
      type: 'institution'
    },
    {
      icon: faBell,
      title: 'طلب تقديم إستشارات للشركات المهتمة بالحصول على رخصة مقر إقليمي',
      description: 'نص إضافي لمحتوى البطاقة',
      tags: ['وسم', 'وسم', 'وسم'],
      type: 'non-profit'
    },
    {
      icon: faCheckCircle,
      title: 'خدمة البحث عن الكفاءات (نسخة 2)',
      description: 'نص إضافي لمحتوى البطاقة',
      tags: ['وسم'],
      type: 'individual'
    },
    {
      icon: faLink,
      title: 'فرصة مع ربط الشركات (نسخة 2)',
      description: 'تقديم علي فرصة مع ربط الشركات',
      tags: ['وكالة التكنولوجيا'],
      type: 'institution'
    },
    {
      icon: faBell,
      title: 'رخصة مقر إقليمي (نسخة 2)',
      description: 'نص إضافي لمحتوى البطاقة',
      tags: ['وسم', 'وسم'],
      type: 'non-profit'
    }
  ];

  activeFilter = 'individual';
  currentPage = 0;
  pageSize = 3;
  showAll = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  get paginatedServices() {
    if (this.showAll) {
      return this.services;
    }
    const startIndex = this.currentPage * this.pageSize;
    return this.services.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.services.length / this.pageSize);
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
    this.currentPage = 0; // Reset to first page
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
  
  goToPage(page: number) {
    this.currentPage = page;
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
    this.currentPage = 0; // Reset to first page on filter change
  }

} 