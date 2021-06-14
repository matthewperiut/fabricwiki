import { NgModule } from "@angular/core";
import { SetupIntellijComponent } from "./components/setup-intellij/setup-intellij.component";
import { SetupJavaComponent } from "./components/setup-java/setup-java.component";
import { SetupVSCodeComponent } from "./components/setup-vscode/setup-vscode.component";
import { SetupRoutingModule } from "./setup-routing.module";

@NgModule({
  declarations: [
    SetupIntellijComponent,
    SetupJavaComponent,
    SetupVSCodeComponent
  ],
  imports: [
    SetupRoutingModule
  ]
})
export class SetupModule {
  
}