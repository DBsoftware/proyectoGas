import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppNotFoundComponent} from './app-not-found/app-not-found.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoggedInterceptor} from './interceptors/LoggedInterceptor';
import {RECAPTCHA_SETTINGS, RecaptchaModule, RecaptchaSettings} from 'ng-recaptcha';
import { RECAPTCHA_LANGUAGE } from 'ng-recaptcha';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatNativeDateModule,
  MatPaginatorIntl
} from '@angular/material';
import {ErrorInterceptorProvider} from './interceptors/ErrorResponseInterceptor';
import {InfoDialogModule} from './shared/info-dialog/info-dialog.module';
import {getSpanishPaginatorIntl} from './class/spanishPaginator';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {SpinnerBarModule} from './shared/spinner-bar/spinner-bar.module';
import {LoadingInterceptorProvider} from './interceptors/loading-interceptor';
import {AgmCoreModule} from '@agm/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AppNotFoundComponent,
  ],
  imports: [
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    SpinnerBarModule,
    FlexLayoutModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDividerModule,
    MatDialogModule,
    InfoDialogModule,
    MatNativeDateModule,
    RecaptchaModule.forRoot(),
    FormlyModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA9VAa-mHq0uX0isS9jqIilyntL-IcIPCk'
    }),
    FormlyMaterialModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getSpanishPaginatorIntl() },
    {
      provide: HTTP_INTERCEPTORS, useClass: LoggedInterceptor, multi: true
    },
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: 'es', // use Spanish language
    },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
      } as RecaptchaSettings
    },
    LoadingInterceptorProvider,
    ErrorInterceptorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
