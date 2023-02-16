import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { Amplify } from 'aws-amplify';
import aws_exports from './aws-exports';


const updatedConfig = {
  ...aws_exports,
  oauth: {
    ...aws_exports.oauth,
    redirectSignIn: 'http://localhost:4200/in/',
    redirectSignOut: 'http://localhost:4200/out/',
  },
};

Amplify.configure(updatedConfig);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
