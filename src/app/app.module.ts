import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CachingService } from './cache.service';
import { CachingInterceptor } from './cache.interceptor.service';
@NgModule({
  declarations: [AppComponent, UserCardComponent, UsersComponent, UserDetailComponent, PaginatorComponent, SpinnerComponent],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule],
  providers: [
    CachingService,
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
