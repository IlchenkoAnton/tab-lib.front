import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './core/routing';
import { ApiService } from './data/api.service';
import { AuthenticationRepository, TabLibRepository } from './data/repositories';
import { NotAuthenticationGuard, AuthenticationGuard } from './core/guards';
import { AuthenticationService } from './core/services';
import { fakeBackendProvider } from './fake-backend/fake-backend.interceptor';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        fakeBackendProvider,

        ApiService,
        AuthenticationRepository,
        TabLibRepository,
        
        NotAuthenticationGuard,
        AuthenticationGuard,

        AuthenticationService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}