import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import * as moment from 'moment';

import { HeaderComponent } from '@ui/components';
import { AppComponent } from './app.component';
import { fakeBackendProvider } from './fake-backend/fake-backend.interceptor';
import { MainComponent } from './routing/main.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { AuthorizationModule } from '@modules/authorization';
import { authorizationModuleConfig } from '@config/authorization-module-config';

moment.locale('ru');

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        AuthorizationModule.forRoot(authorizationModuleConfig)
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