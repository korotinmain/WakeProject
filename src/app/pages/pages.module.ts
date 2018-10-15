import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MaterialModule } from '../material.module';
import { FeedComponent } from './feed/feed.component';

@NgModule({
    imports     : [
        CommonModule,
        MaterialModule
    ],
    exports     : [
        AuthenticationComponent,
        FeedComponent
    ],
    declarations: [AuthenticationComponent, FeedComponent]
})
export class PagesModule {
}
