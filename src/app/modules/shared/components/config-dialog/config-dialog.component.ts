import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { ConfigService } from "../../services/config/config.service";

@Component({
  selector: "app-config",
  templateUrl: "./config-dialog.component.html",
  styleUrls: [ "./config-dialog.component.scss" ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigDialogComponent {

  codeStyleControl: FormControl;
  codeStyleOptions = []

  constructor(public ref: MatDialogRef<ConfigDialogComponent>, public config: ConfigService) {
    this.codeStyleControl = config.settings.get("highlightStyle") as FormControl;
  }
  
  close(): void {
    this.ref.close();
  }
}