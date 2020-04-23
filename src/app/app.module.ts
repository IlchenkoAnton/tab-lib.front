import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './routing/pages/main/main.component';
import { NotFoundModule } from './routing/pages/not-found/not-found.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        CoreModule,
        NotFoundModule
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