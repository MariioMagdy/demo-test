import { Component, OnInit } from '@angular/core';
import { faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSearchPlus, faSearchMinus, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false
})
export class FooterComponent implements OnInit {

  // Social Icons
  faTwitter = faTwitter;
  faLinkedinIn = faLinkedinIn;
  faYoutube = faYoutube;

  // Accessibility Icons
  faSearchPlus = faSearchPlus;
  faSearchMinus = faSearchMinus;
  faUniversalAccess = faUniversalAccess;

  // Link Columns
  aboutLinks = [
    { text: 'الاستراتيجية', url: '#' },
    { text: 'المهام', url: '#' },
    { text: 'الهيكل التنظيمي', url: '#' },
    { text: 'الوكالات', url: '#' },
    { text: 'الأنظمة واللوائح والسياسات', url: '#' },
    { text: 'الأعمال والاستثمار', url: '#' }
  ];

  initiativesLinks = [
    { text: 'مهارات المستقبل', url: '#' },
    { text: 'تنمية القطاع غير الربحي', url: '#' },
    { text: 'المرصد الوطني للجيل الخامس', url: '#' },
    { text: 'الممكنات الرقمية', url: '#' }
  ];

  mediaCenterLinks = [
    { text: 'الأخبار', url: '#' },
    { text: 'الفعاليات', url: '#' },
    { text: 'الإصدارات', url: '#' },
    { text: 'الصور والفيديو', url: '#' },
    { text: 'الأسئلة الشائعة', url: '#' },
    { text: 'تواصل معنا', url: '#' }
  ];

  // Partner Logos
  partners = [
    { name: 'KACST', logo: 'assets/images/logo-kacst.svg' },
    { name: 'RDIA', logo: 'assets/images/logo-rdia.svg' },
    { name: 'SSA', logo: 'assets/images/logo-ssa.svg' },
    { name: 'DGA', logo: 'assets/images/logo-dga.svg' },
    { name: 'CST', logo: 'assets/images/logo-cst.svg' }
  ];

  // Bottom Links
  bottomLinks = [
    { text: 'سياسة الخصوصية', url: '#' },
    { text: 'شروط الاستخدام', url: '#' },
    { text: 'سياسة المشاركة الإلكترونية', url: '#' },
    { text: 'سياسة الوصول للمعلومات', url: '#' },
    { text: 'البيانات المفتوحة', url: '#' },
    { text: 'نداء استغاثة', url: '#' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

} 