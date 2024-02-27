import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import localeNL from '@angular/common/locales/nl';
import { DecimalPipe, registerLocaleData } from '@angular/common';
import { JedisService } from './jedis.service';
import { BACKEND_URL } from './injection-tokens';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';

registerLocaleData(localeNL);

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'nl-NL' },
    { provide: BACKEND_URL, useValue: 'http://localhost:4201' },
    DecimalPipe,
    JedisService,
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
};
