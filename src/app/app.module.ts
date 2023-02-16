import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InComponent } from './in/in.component';
import { OutComponent } from './out/out.component';
import { RouterModule, Routes } from '@angular/router'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'in', component: InComponent },
  { path: 'out', component: OutComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`

]

@NgModule({
  declarations: [
    AppComponent,
    InComponent,
    OutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AmplifyAuthenticatorModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
