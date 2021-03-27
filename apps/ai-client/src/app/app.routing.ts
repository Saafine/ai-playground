import { RouterModule, Routes } from '@angular/router';
import { AUTH_PATHS } from '@ai-playground/infra';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: AUTH_PATHS.ROOT,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
