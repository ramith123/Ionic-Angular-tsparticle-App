import { Component, OnInit } from "@angular/core";

import * as particleConfig from "./../../assets/data/particles.json";
import { Container } from "tsparticles/dist/Core/Container";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor() {}
  id = "tsparticles";

  particlesOptions = particleConfig["default"];

  particlesLoaded(container: Container): void {
    setTimeout(async () => {
      const canvas = container.canvas.element;
      if (!canvas) {
        console.log("no canvas");
        return;
      }

      const pxRatio = container.retina.pixelRatio;
      container.canvas.size.width = canvas.offsetWidth * pxRatio;
      container.canvas.size.height = canvas.offsetHeight * pxRatio;
      canvas.width = container.canvas.size.width;
      canvas.height = container.canvas.size.height;

      console.log(canvas);
      /* density particles enabled */
      container.densityAutoParticles();
      for (const [, plugin] of container.plugins) {
        if (plugin.resize !== undefined) {
          plugin.resize();
        }
      }

      await container.refresh();
    }, 50);
  }
}
