import {NgModule} from '@angular/core';
import {HeaderModule} from '@shared/components/header/header.module';

@NgModule({
  imports:[
    HeaderModule,
  ],
  exports: [
    HeaderModule
  ],
})
export class SharedModule {
}
