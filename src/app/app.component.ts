import { Component } from '@angular/core';
import { signIn, ConfirmSignInInput, signUp, confirmSignUp, signOut } from 'aws-amplify/auth'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-amplified';

  code = ''

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

  async handleSignUp() {
    try {
      const res = await signUp({
        username: 'dkkiuna11@gmail.com',
        password: 'abcd1234',
      })
      console.log(res)
    } catch(e){
      console.log(e)
    }
  }

  async handleConfirmSignUp() {
    try {
      const res = await confirmSignUp({
        username: 'dkkiuna11@gmail.com',
        confirmationCode: '038646'
      })
      console.log(res)
    } catch(e) {
      console.log(e)
    }
  }

  async handleSignOut() {
    try {
      await signOut()
      console.log('signed out')
    } catch(e){
      console.log(e)
    }
  }
}

let vopt:ConfirmSignInInput["options"]

