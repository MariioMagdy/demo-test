import { Component, OnInit } from '@angular/core';
import { faImages, faVideo, faThLarge } from '@fortawesome/free-solid-svg-icons';

interface MediaItem {
  title: string;
  type: 'photo' | 'video';
  imageUrl: string;
}

@Component({
  selector: 'app-media-center',
  templateUrl: './media-center.component.html',
  styleUrls: ['./media-center.component.scss'],
  standalone: false
})
export class MediaCenterComponent implements OnInit {
  faImages = faImages;
  faVideo = faVideo;
  faThLarge = faThLarge;

  activeFilter: 'all' | 'photo' | 'video' = 'all';

  allItems: MediaItem[] = [
    { title: 'عنوان البطاقة', type: 'photo', imageUrl: 'https://picsum.photos/seed/media1/500/500' },
    { title: 'عنوان البطاقة', type: 'photo', imageUrl: 'https://picsum.photos/seed/media2/500/500' },
    { title: 'عنوان البطاقة', type: 'video', imageUrl: 'https://picsum.photos/seed/media3/500/500' },
    { title: 'عنوان البطاقة', type: 'video', imageUrl: 'https://picsum.photos/seed/media4/500/500' },
    { title: 'عنوان البطاقة', type: 'photo', imageUrl: 'https://picsum.photos/seed/media5/500/500' },
    { title: 'عنوان البطاقة', type: 'video', imageUrl: 'https://picsum.photos/seed/media6/500/500' },
    { title: 'عنوان البطاقة', type: 'photo', imageUrl: 'https://picsum.photos/seed/media7/500/500' },
    { title: 'عنوان البطاقة', type: 'video', imageUrl: 'https://picsum.photos/seed/media8/500/500' },
  ];

  filteredItems: MediaItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filterItems();
  }

  setFilter(filter: 'all' | 'photo' | 'video'): void {
    this.activeFilter = filter;
    this.filterItems();
  }

  filterItems(): void {
    if (this.activeFilter === 'all') {
      this.filteredItems = this.allItems;
    } else {
      this.filteredItems = this.allItems.filter(item => item.type === this.activeFilter);
    }
  }
} 