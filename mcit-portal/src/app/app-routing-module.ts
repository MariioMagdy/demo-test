import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'news', loadChildren: () => import('./features/news/news.module').then(m => m.NewsModule) },
  { path: 'partners', loadChildren: () => import('./features/partners/partners.module').then(m => m.PartnersModule) },
  { path: 'media-hub', loadChildren: () => import('./features/media-hub/media-hub.module').then(m => m.MediaHubModule) },
  { path: 'events', loadChildren: () => import('./features/events/events.module').then(m => m.EventsModule) },
  { path: 'e-services', loadChildren: () => import('./features/e-services/e-services.module').then(m => m.EServicesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
