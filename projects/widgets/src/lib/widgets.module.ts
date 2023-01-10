import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '@rs-nglib/components';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [BrowserModule, ComponentsModule],
  exports: [HeaderComponent],
})
export class WidgetsModule {}
