import { Component } from '@angular/core';
import { signIn, ConfirmSignInInput } from 'aws-amplify/auth'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-amplified';

  async handleSignIn(){
    try {
      const res = await signIn({
        username: 'dkkiuna11@gmail.com',
        password: 'abcd1234',
      })
      console.log(res)
    } catch(e){
      console.log(e)
    }
  }
}

let vopt:ConfirmSignInInput["options"]

