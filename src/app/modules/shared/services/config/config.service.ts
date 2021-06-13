import { Injectable } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";


@Injectable({
  providedIn: "root"
})
export class ConfigService {

  highlightLinkElement = document.getElementById("highlight-link") as HTMLLinkElement;

  settings: FormGroup;

  constructor(builder: FormBuilder) {
    this.settings = builder.group({
      highlightStyle: ['github-dark-dimmed'],
      fullWidth: [false]
    });

    this.settings.valueChanges.subscribe(async (value) => {
      localStorage.setItem("config", JSON.stringify(value));
    });

    this.settings.get("highlightStyle")?.valueChanges.subscribe((value: string) => {
      this.highlightLinkElement.href = `//unpkg.com/@highlightjs/cdn-assets@11.0.1/styles/${value}.min.css`;
    });

    this.load();
  }

  load(): void {
    const saved = JSON.parse(localStorage.getItem("config") || "{}");

    Object.entries(saved).forEach((value: [string, any]) => {
      this.settings.get(value[0])?.setValue(value[1]);
    });
  }
}