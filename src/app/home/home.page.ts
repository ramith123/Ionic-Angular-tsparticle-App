import { Component, OnInit } from "@angular/core";
import { Container } from "@angular/compiler/src/i18n/i18n_ast";
import * as particleConfig from "./../../assets/data/particles.json";

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
    console.log(container);
    var event;
    if (typeof Event === "function") {
      event = new Event("resize");
    } else {
      /*IE*/
      event = document.createEvent("Event");
      event.initEvent("resize", true, true);
    }
    window.dispatchEvent(event);
  }
}
