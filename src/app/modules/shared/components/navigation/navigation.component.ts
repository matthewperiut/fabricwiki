import { ChangeDetectionStrategy, Component } from "@angular/core";

interface NavigationSection {
  title: string;
  img: string;
  links: {
    route: string;
    title: string;
  }[];
}

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: [ "./navigation.component.scss" ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  sections: NavigationSection[] = [];

  constructor() {
    // Setup section
    this.sections.push({
      title: "Setup",
      img: "assets/img/setup.png",
      links: [
        { route: "setup/java", title: "Install Java"}, 
        { route: "setup/intellij", title: "Setting up Intellij"}, 
        { route: "setup/vscode", title: "Setting up VSCode"}
      ]
    });

    // Blocks Section
    this.sections.push({
      title: "Blocks",
      img: "assets/img/block.png",
      links: [
        { route: "blocks/adding", title: "Adding a block" }, 
        { route: "blocks/entity", title: "Adding a block entity" },
        { route: "blocks/state", title: "Adding to block state" }, 
        { route: "blocks/transparent", title: "Making a block transparent" },
        { route: "blocks/material", title: "Creating a custom material" }
      ]
    });


    // Items Section
    this.sections.push({
      title: "Items",
      img: "assets/img/item.png",
      links: [
        { route: "items/adding", title: "Adding an item" },
        { route: "items/nbt", title: "Giving an item NBT data" }
      ]
    });

    this.sections.push({
      title: "Tools",
      img: "assets/img/pickaxe.png",
      links: [
        { route: "tools/adding", title: "Adding a tool" },
        { route: "tools/material", title: "Adding a custom material" }
      ]
    })

    // Entities Section
    this.sections.push({
      title: "Entities",
      img: "assets/img/entity.png",
      links: [
        { route: "entities/adding", title: "Adding an entity" },
        { route: "entities/render", title: "Adding an entity renderer" }
      ]
    });

    this.sections.push({
      title: "Screens",
      img: "assets/img/screen.png",
      links: []
    });

    this.sections.push({
      title: "Networking",
      img: "assets/img/networking.png",
      links: []
    })
  }
}