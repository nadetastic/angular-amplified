import { enableProdMode, isDevMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { Amplify, Auth } from 'aws-amplify';
import aws_exports from './aws-exports';

if (environment.production) {
  enableProdMode();
}

const updatedConfig = {
  ...aws_exports,
  oauth: {
    ...aws_exports.oauth,
    redirectSignIn: isDevMode() ? aws_exports.oauth.redirectSignIn.split(",")[1] : aws_exports.oauth.redirectSignIn.split(",")[0],
    redirectSignOut: isDevMode() ? aws_exports.oauth.redirectSignOut.split(",")[1] : aws_exports.oauth.redirectSignOut.split(",")[0],
  },
};

Amplify.configure(updatedConfig);

console.log('======>',Auth.configure())



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
