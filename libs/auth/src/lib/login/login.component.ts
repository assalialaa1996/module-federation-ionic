import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../+state/auth.reducer';
import * as AuthActions from '../+state/auth.actions';
import { Router } from '@angular/router';


@Component({
  selector: 'module-federation-ionic-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<State>, private router: Router) {'' }

  ngOnInit(): void {''
  }

  onSubmit(){
    this.store.dispatch(AuthActions.login());
    this.router.navigate(['/business']);
  }

}
