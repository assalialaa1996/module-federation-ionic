import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import {businessMatcher} from './businessMatcher';
import {personelMatcher} from './personelMatcher';


export const routes: Routes = [
  {
    path: 'login',
    loadChildren:'@module-federation-ionic/auth/src/lib/auth.module#AuthModule'
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  { path:'business', 
  //matcher: businessMatcher,
  loadChildren: () => loadRemoteModule({
    remoteEntry: 'http://localhost:5002/businessremoteEntry.js',
    remoteName:'business',
    exposedModule: './home-module'
  }).then(m => m.HomePageModule)
//loadChildren: () => import('mfe-app/app-module').then((m) => {return m.AppModule})
}, 




/*{ path: 'personel', 

loadChildren: () => loadRemoteModule({
  remoteEntry: 'http://localhost:5001/personelremoteEntry.js',
  remoteName:'personel',
  exposedModule: './home-module'
}).then(m => m.HomePageModule)
//loadChildren: () => import('mfe-app/app-module').then((m) => {return m.AppModule})
},*/
];  


