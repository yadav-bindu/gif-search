import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchLandingComponent } from './pages/search-landing/search-landing.component';
import { SafePipe } from './pipe/safe.pipe';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchLandingComponent,
    SafePipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
