import { Component, OnInit } from "@angular/core";

declare var particlesJS: any;
var ParticlesConfig: String = "./../../assets/data/particles.json";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  constructor() {}
  ngOnInit() {
    particlesJS.load("particles-js", ParticlesConfig, function () {
      console.log("callback - particles.js config loaded");
    });
  }
}
