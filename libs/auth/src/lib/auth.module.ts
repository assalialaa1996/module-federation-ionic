import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class AuthModule {}
