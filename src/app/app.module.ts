import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        PagesModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        SharedModule,
        MaterialModule,
        FlexLayoutModule
    ],
    providers   : [],
    bootstrap   : [AppComponent]
})
export class AppModule {
}
