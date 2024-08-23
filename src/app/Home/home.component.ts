import { Component } from '@angular/core';
import { BannerComponent } from '../shared/banner/banner.component';
import { MenuComponent } from '../shared/menu/menu.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { GalleryComponent } from '../shared/gallery/gallery.component';
import { InfoTextComponent } from '../shared/info-text/info-text.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    MenuComponent,
    FooterComponent,
    GalleryComponent,
    InfoTextComponent,
  ],
  templateUrl: './home.component.html',
})
export default class HomeComponent {}
