import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SetupIntellijComponent } from "./components/setup-intellij/setup-intellij.component";
import { SetupJavaComponent } from "./components/setup-java/setup-java.component";
import { SetupVSCodeComponent } from "./components/setup-vscode/setup-vscode.component";

const routes: Routes = [
  { path: "", redirectTo: "java" },
  { path: "java", component: SetupJavaComponent },
  { path: "intellij", component: SetupIntellijComponent },
  { path: "vscode", component: SetupVSCodeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule {

}