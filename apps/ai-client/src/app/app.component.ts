import { Component } from '@angular/core';
import { AUTH_ROUTES } from '@ai-playground/infra';

@Component({
  selector: 'ai-playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  registerUserLink = AUTH_ROUTES.registerUser();
}
