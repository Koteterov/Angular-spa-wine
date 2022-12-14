import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { UserService } from './core/services/user.service';
import { WinesModule } from './feature/wines/wines.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './feature/pages/pages.module';
import { StoreModule } from '@ngrx/store';
import { currentUserReducer, IRootState } from './+store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    PagesModule,
    // AuthModule, // not needed with lazy loading
    // WinesModule, // not needed with lazy loading
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot<IRootState>({
      currentUser: currentUserReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
