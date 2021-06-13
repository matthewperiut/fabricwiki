import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlocksAddingComponent } from "./components/blocks-adding/blocks-adding.component";
import { BlocksEntityComponent } from "./components/blocks-entity/blocks-entity.component";
import { BlocksStateComponent } from "./components/blocks-state/blocks-state.component";
import { BlocksTransparentComponent } from "./components/blocks-transparent/blocks-transparent.component";

const routes: Routes = [
  { path: "", redirectTo: "adding" },
  { path: "adding", component: BlocksAddingComponent },
  { path: "entity", component: BlocksEntityComponent },
  { path: "state", component: BlocksStateComponent },
  { path: "transparent", component: BlocksTransparentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocksRoutingModule {

}