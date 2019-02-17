import { NgModule } from "@angular/core";

import { NativeScriptFormsModule } from "nativescript-angular";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { FloatTextField } from "./float-text-field/float-text-field.component";

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptFormsModule],
  declarations: [FloatTextField],
  exports: [FloatTextField, NativeScriptCommonModule, NativeScriptFormsModule]
})
export class FloatTextFieldModule {
  static forRoot() {
    return {
      ngModule: FloatTextFieldModule
    };
  }
}
