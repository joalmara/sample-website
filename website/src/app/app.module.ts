import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { JumbortronheaderComponent } from './jumbortronheader/jumbortronheader.component';
import { ProductComponent } from './product/product.component';
import { VideoComponent } from './video/video.component';
import { ProductsuitComponent } from './productsuit/productsuit.component';

//Third Party imports

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { MilestonesComponent } from './milestones/milestones.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    JumbortronheaderComponent,
    ProductComponent,
    VideoComponent,
    ProductsuitComponent,
    ImageCarouselComponent,
    MilestonesComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
