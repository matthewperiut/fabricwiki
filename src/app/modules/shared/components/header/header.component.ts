import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ConfigDialogComponent } from "../config-dialog/config-dialog.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: [ "./header.component.scss" ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  constructor(private dialog: MatDialog) {

  }

  openConfigDialog(): void {
    this.dialog.open(ConfigDialogComponent, {
      width: "500px",
      height: "500px"
    });
  }

}