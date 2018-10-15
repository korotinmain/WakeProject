import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports     : [
        CommonModule,
        MaterialModule,
        RouterModule
    ],
    exports     : [
        ToolbarComponent
    ],
    declarations: [
        ToolbarComponent
    ]
})
export class SharedModule {
}
