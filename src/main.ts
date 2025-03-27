import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  ...appConfig, // ✅ Spread existing appConfig settings
  providers: [
    provideHttpClient(), // ✅ Ensure HttpClient is provided
    ...(appConfig.providers || []) // ✅ Include existing providers if any
  ]
}).catch((err) => console.error(err));
