import { AfterViewInit, ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-blocks-adding",
  templateUrl: "./blocks-adding.component.html",
  styleUrls: [ "./blocks-adding.component.scss" ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlocksAddingComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    (window as any).hljs.highlightAll();
  }
}