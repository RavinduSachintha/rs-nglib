import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavItemComponent } from './nav-item/nav-item.component';

@NgModule({
  declarations: [NavItemComponent],
  imports: [RouterModule],
  exports: [NavItemComponent],
})
export class ComponentsModule {}
