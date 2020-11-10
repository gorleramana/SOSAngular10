import { Component } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './sso.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private oauthService:OAuthService) { 
	    this.configureSingleSignOn();
	  }
	  configureSingleSignOn() {
	    this.oauthService.configure(authConfig);
	    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
	    this.oauthService.loadDiscoveryDocumentAndTryLogin();
	    // The below function is needed when we don't want any login button
		// functions to login, replace the above line with below
	    // this.oauthService.loadDiscoveryDocumentAndLogin();
	  }
	  
	  ngOnInit() {
	  }
	  // comment the below function if we don't want login button to login
	  login(){
	    this.oauthService.initImplicitFlow();
	  }
	  // comment the below function if we don't want logout button
	  logout(){
	    this.oauthService.logOut();
	  }

	  get token(){
	    let claims: any = this.oauthService.getIdentityClaims();
	    return claims ? claims : null;
	  }
}
