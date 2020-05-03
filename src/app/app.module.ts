import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './routing/pages/main/main.component';
import { AuthenticationModule } from './modules/authentication';
import { CoreModule } from './core';
import { HeaderComponent } from './components';
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
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        MainComponent,
        HeaderComponent
    ],
    providers: [
        fakeBackendProvider
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}