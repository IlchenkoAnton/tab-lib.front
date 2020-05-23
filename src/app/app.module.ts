import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

import { FacadeModule } from '@facades';
import { HeaderComponent, UsersMenuComponent } from '@ui/components';
import { AppComponent } from './app.component';
import { fakeBackendProvider } from './fake-backend/fake-backend.interceptor';
import { MainComponent } from './routing/main.component';
import { AppRoutingModule } from './routing/app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        FacadeModule,

        MatMenuModule,
        MatIconModule,
        MatButtonModule
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