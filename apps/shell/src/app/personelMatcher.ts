import {UrlSegment, UrlSegmentGroup, Route} from '@angular/router';
import { Store } from '@ngrx/store';
import * as selectors from '@module-federation-ionic/auth'
/*export function personelMatcherrrr (
 segments: UrlSegment[],
 group: UrlSegmentGroup,
 route: Route,
 store: Store<any>
 ) {
 // const userService =  appInjector.get(UserService);
  const isPathMatch = segments[0].path === route.path;
 // const isUserTypeMatch = userService.isUserType('seller');      
 const isUserTypeMatch = store.select(selectors.getUserType).subscribe(userType => userType == 'Personel'? true : false);      

  if(isPathMatch && isUserTypeMatch) { 
    return {consumed: [segments[0]]};
  } else {
    return null;
  }
} */

export const personelMatcher = (url:any, store: Store<any>) => {
  const isUserTypeMatch = store.select(selectors.getUserType).subscribe(userType => userType == 'Personel'? true : false);      

  if (url.length === 1 && url[0].path.endsWith('mfe') && isUserTypeMatch) {
      return {
        consumed: url,
      };
    }

    return null;
}