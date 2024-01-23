import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { getCurrentUser, signInWithRedirect } from 'aws-amplify/auth';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'amplify-app';

  public handleSignIn = () => {
    return signInWithRedirect({ provider: 'Google' });
  };

  public currentUser = async () => {
    try {
      const result = await getCurrentUser();
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };
}
