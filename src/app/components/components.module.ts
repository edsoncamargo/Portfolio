import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LdsFacebookBlueComponent } from './loadings/lds-facebook-blue/lds-facebook-blue.component';
import { LdsFacebookComponent } from './loadings/lds-facebook/lds-facebook.component';

const components = [
  LdsFacebookComponent,
  LdsFacebookBlueComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    components
  ],
  declarations: [
    components
  ],
  providers: []
})

export class ComponentsModule { }
