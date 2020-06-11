import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementRoutingModule } from './element-routing.module';
import { ElementHomeComponent } from './element-home/element-home.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { SegmentComponent } from './segment/segment.component';
import { SharedModule } from '../shared/shared.module';
import { TimesDirective } from './times.directive';


@NgModule({
  declarations: [ElementHomeComponent, PlaceHolderComponent, SegmentComponent, TimesDirective],
  imports: [
    CommonModule, ElementRoutingModule, SharedModule ],
  exports: []
})
export class ElementModule { }
