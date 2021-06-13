import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { RouterModule } from "@angular/router";

import { ConfigDialogComponent } from "./components/config-dialog/config-dialog.component";
import { HeaderComponent } from "./components/header/header.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { ConfigService } from "./services/config/config.service";


@NgModule({
  declarations: [
    ConfigDialogComponent,
    HeaderComponent,
    NavigationComponent,
  ],
  exports: [
    ConfigDialogComponent,
    HeaderComponent,
    NavigationComponent,
  ], 
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    ConfigService
  ]
})
export class SharedModule {

}