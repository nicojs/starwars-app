import { InjectionToken } from '@angular/core';

export const BACKEND_URL = new InjectionToken<string>('Backend url');
export const DEBUG = new InjectionToken<boolean>('Debug');
