import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import localeNL from '@angular/common/locales/nl';
import { DecimalPipe, registerLocaleData } from '@angular/common';

registerLocaleData(localeNL);

export const appConfig: ApplicationConfig = {
  providers: [{ provide: LOCALE_ID, useValue: 'nl-NL' }, DecimalPipe],
};
