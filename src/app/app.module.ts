import { NgModule, InjectionToken, Injector }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpClientModule, HttpXsrfTokenExtractor } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { RequestCache, RequestCacheWithMap } from './request-cache.service';

import { AppComponent }         from './app.component';
import { AuthService }          from './auth.service';
import { ConfigComponent }      from './config/config.component';
import { DownloaderComponent }  from './downloader/downloader.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HttpErrorHandler }     from './http-error-handler.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';
import { PackageSearchComponent } from './package-search/package-search.component';
import { UploaderComponent }    from './uploader/uploader.component';

import { httpInterceptorProviders } from './http-interceptors/index';
import { API_URI, PROXY_URI, AngularHalModule, RestService } from 'angular4-hal';
import { TeamManagerComponent } from './team-manager/team-manager.component';

import { RouterModule, Routes } from '@angular/router';
import { ResourceService } from 'angular4-hal/src/resource.service';
import { TeamsService } from './teams.service';
import { Team } from './team';

const appRoutes: Routes = [
  { path: 'teams', component: TeamManagerComponent },
  { path: '', component: AppComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        passThruUnknownUrl: true,
        put204: false // return entity after PUT/update
      }
    ),
    AngularHalModule.forRoot() 
  ],
  declarations: [
    AppComponent,
    ConfigComponent,
    DownloaderComponent,
    HeroesComponent,
    MessagesComponent,
    UploaderComponent,
    PackageSearchComponent,
    TeamManagerComponent
  ],
  providers: [
    AuthService,
    HttpErrorHandler,
    MessageService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders,
    { provide: API_URI, useValue: 'https://localhost:8080/' },
    { provide: PROXY_URI, useValue: '' }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
