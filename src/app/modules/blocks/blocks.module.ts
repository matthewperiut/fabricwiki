import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { BlocksRoutingModule } from "./blocks-routing.module";
import { BlocksAddingComponent } from "./components/blocks-adding/blocks-adding.component";
import { BlocksEntityComponent } from "./components/blocks-entity/blocks-entity.component";
import { BlocksStateComponent } from "./components/blocks-state/blocks-state.component";
import { BlocksTransparentComponent } from "./components/blocks-transparent/blocks-transparent.component";


@NgModule({
  declarations: [
    BlocksAddingComponent,
    BlocksEntityComponent,
    BlocksStateComponent,
    BlocksTransparentComponent
  ],
  imports: [
    BlocksRoutingModule,
    SharedModule
  ]
})
export class BlocksModule {

}