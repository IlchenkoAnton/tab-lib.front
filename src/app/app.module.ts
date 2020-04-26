import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './routing/pages/main/main.component';
import { AuthenticationModule } from './modules/authentication';
import { CoreModule } from './core';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        CoreModule,
        AuthenticationModule.forRoot({
            redirectPath: [ '/', 'login' ]
        })
    ],
    declarations: [
        AppComponent,
        MainComponent
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}