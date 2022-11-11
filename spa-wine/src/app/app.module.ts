import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { ErrorHandlerInterceptor } from './core/error-handler.interceptor';
import { UserService } from './core/services/user.service';
import { WinesModule } from './feature/wines/wines.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    AuthModule,
    WinesModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (userservice: UserService) => {
        return () => userservice.authenticate();
      },
      deps: [UserService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: ErrorHandlerInterceptor,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
