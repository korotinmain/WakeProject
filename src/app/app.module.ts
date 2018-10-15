import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { PagesModule } from './pages/pages.module';
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
        MaterialModule,
        FlexLayoutModule
    ],
    providers   : [],
    bootstrap   : [AppComponent]
})
export class AppModule {
}
