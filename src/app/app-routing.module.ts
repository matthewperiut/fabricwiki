import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", loadChildren: () => import("./modules/landing/landing.module").then(m => m.LandingModule) },
  { path: "blocks", loadChildren: () => import("./modules/blocks/blocks.module").then(m => m.BlocksModule) },
  { path: "entities", loadChildren: () => import("./modules/entities/entities.module").then(m => m.EntitiesModule) },
  { path: "items", loadChildren: () => import("./modules/items/items.module").then(m => m.ItemsModule) },
  { path: "setup", loadChildren: () => import("./modules/setup/setup.module").then(m => m.SetupModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
