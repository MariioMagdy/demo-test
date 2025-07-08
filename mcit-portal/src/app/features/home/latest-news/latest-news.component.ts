import { Component, HostListener, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

interface NewsArticle {
  title: string;
  imageUrl: string;
  date: string;
  link: string;
}

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss'],
  standalone: false,
})
export class LatestNewsComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faCalendarDays = faCalendarDays;

  articles: NewsArticle[] = [
    {
      title: 'الأكاديمية السعودية الرقمية تنظم ملتقى همة للكفاءات الرقمية 2024 لتوفير فرص توظيف في القطاع الرقمي',
      imageUrl: 'https://picsum.photos/seed/news1/400/300',
      date: '12 مايو 2025',
      link: '#'
    },
    {
      title: 'المملكة تستضيف منتدى حوكمة الإنترنت 2024 تحت شعار "نبتكر معًا لنصنع الغد" ديسمبر المقبل',
      imageUrl: 'https://picsum.photos/seed/news2/400/300',
      date: '12 مايو 2025',
      link: '#'
    },
    {
      title: 'وزارة الاتصالات تطلق برنامجي الذكاء الاصطناعي التوليدي والعمل الحر لتطوير مهارات الكفاءات الوطنية',
      imageUrl: 'https://picsum.photos/seed/news3/400/300',
      date: '12 مايو 2025',
      link: '#'
    },
    {
      title: 'مبادرة جديدة لتعزيز ريادة الأعمال التقنية في المملكة العربية السعودية',
      imageUrl: 'https://picsum.photos/seed/news4/400/300',
      date: '11 مايو 2025',
      link: '#'
    },
    {
      title: 'إطلاق صندوق استثماري بقيمة مليار دولار لدعم الشركات الناشئة في مجال التكنولوجيا المالية',
      imageUrl: 'https://picsum.photos/seed/news5/400/300',
      date: '10 مايو 2025',
      link: '#'
    }
  ];

  currentPage = 0;
  pageSize = 3;
  
  private slideInterval: any;

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.updatePageSize();
  }

  ngOnInit(): void {
    this.updatePageSize();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  updatePageSize() {
    const width = window.innerWidth;
    if (width < 768) {
      this.pageSize = 1;
    } else if (width < 992) {
      this.pageSize = 2;
    } else {
      this.pageSize = 3;
    }
    if (this.currentPage * this.pageSize >= this.articles.length) {
      this.currentPage = 0;
    }
  }

  startAutoSlide() {
    this.stopAutoSlide(); // Ensure no multiple intervals are running
    this.slideInterval = setInterval(() => {
      this.nextPage();
    }, 5000); // Change slide every 5 seconds
  }

  stopAutoSlide() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  get paginatedArticles(): NewsArticle[] {
    const startIndex = this.currentPage * this.pageSize;
    // This logic handles the looping display
    const articlesToShow = [];
    for(let i = 0; i < this.pageSize; i++) {
        const index = (startIndex + i) % this.articles.length;
        articlesToShow.push(this.articles[index]);
    }
    //This is a temporary fix as the above logic is not working as expected
    return this.articles.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.articles.length / this.pageSize);
  }

  nextPage(): void {
    this.currentPage = (this.currentPage + 1) % this.totalPages;
  }

  prevPage(): void {
    this.currentPage = (this.currentPage - 1 + this.totalPages) % this.totalPages;
  }
} 