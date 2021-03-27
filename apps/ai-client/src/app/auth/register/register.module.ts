import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { WebcamModule } from 'ngx-webcam';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, WebcamModule],
  exports: [RegisterComponent],
})
export class RegisterModule {}
