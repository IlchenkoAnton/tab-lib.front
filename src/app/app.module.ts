import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './routing/pages/main/main.component';
import { AuthenticationModule } from './modules/authentication';
import { CoreModule } from './core';
import { HeaderComponent, UsersMenuComponent } from './components';
import { fakeBackendProvider } from './fake-backend/fake-backend.interceptor';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        CoreModule,
        AuthenticationModule.forRoot({
            notAuthorizedZone: [ '/', 'login' ],
            authorizedZone: [ '/' ]
        }),
        BrowserAnimationsModule,

        MatMenuModule,
        MatButtonModule,
        MatIconModule
    ],
    declarations: [
        AppComponent,
        MainComponent,
        HeaderComponent,
        UsersMenuComponent
    ],
    providers: [
        fakeBackendProvider
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}