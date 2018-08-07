import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HttpClient],
  declarations: []
})
export class HttpModule { }
