import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/typings/esm5/checkbox';

const MATERIAL_MODULES = [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule
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
