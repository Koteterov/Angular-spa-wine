import { NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { SessionStorage } from './injection-tokens';
import { UserService } from './services/user.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ErrorComponent
  ],
  providers: [
    {
      provide: SessionStorage,
      useFactory: (platformId: Object) => {

        if (isPlatformBrowser(platformId)) {
          return window.sessionStorage;
        }
        if (isPlatformServer(platformId)) {
          return class implements Storage {
            length = 0;
            private data: Record<string, string> = {};

            clear(): void {
              this.data = {};
            }

            getItem(key: string): string | null {
              return this.data[key];
            }

            key(index: number): string | null {
              throw new Error('Method not implemented.');
            }

            removeItem(key: string): void {
              const { [key]: removedItem, ...others } = this.data;
              this.data = others;
            }

            setItem(key: string, value: string): void {
              this.data[key] = value;
            }
          }
        }
        throw Error('NOT IMPLEMENTED');
      },
      deps: [PLATFORM_ID]
    },
    UserService
  ]
})
export class CoreModule { }
