import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import { AppComponent } from './app/app.component';
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';

bootstrapApplication(AppComponent,
  {
    providers: [
      provideProtractorTestingSupport(),
      provideRouter(routeConfig)
    ]
  }
).catch(err => console.error(err));