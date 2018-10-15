import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatCardModule, MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';

const MATERIAL_MODULES = [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule
];

@NgModule({
    imports     : [
        CommonModule,
        MATERIAL_MODULES
    ],
    exports     : [
        MATERIAL_MODULES
    ],
    declarations: []
})
export class MaterialModule {
}
