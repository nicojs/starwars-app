import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import localeNL from '@angular/common/locales/nl';
import { DecimalPipe, registerLocaleData } from '@angular/common';
import { JedisService } from './jedis/jedis.service';
import { BACKEND_URL } from './injection-tokens';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';

registerLocaleData(localeNL);

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'nl-NL' },
    { provide: BACKEND_URL, useValue: 'http://localhost:4201' },
    DecimalPipe,
    JedisService,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(appRoutes, withComponentInputBinding())
  ],
};
