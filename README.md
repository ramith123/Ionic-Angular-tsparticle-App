# Ionic-Angular-tsparticle-App
An Ionic-angular integration example with tsparticle. (More specifically ag-particles)
Recent for going with tsparticles instead of particlejs is because tsparticles supports touch on mobile. (the Same `onHold` function)
live application is available [Here](https://first-ionic-app-theme-change.web.app/home). (Hopefully)

## [tsparticles](https://github.com/matteobruni/tsparticles) config file

This file is located in `src/assets/data/particles.json`. You can generate a custom one using [tsparticle generator](https://github.com/matteobruni/tsparticles#usage), and replace the one in file. 

## Some unconventional fixes
I am new to Angular so I had to come with a fix for a problem I couldn't figure out. 

### Problem

The content inside `<particles>` tag loads after the css content (which sets the `<div> `holding `<particles>` to fit window), maybe because of how the js is executed (I think), which sets the canvas size to 0, 0 on start. But when the window is resized the canvas size is set to the proper window size. 

### Solution

Simulate Through JS (check `home.page.ts`), a page resize.

Solution found here. [How to trigger the window resize event in JavaScript?](https://stackoverflow.com/questions/1818474/how-to-trigger-the-window-resize-event-in-javascript)
```ts
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
```

This only works some of the time. If anyone knows a solution feel free to implement.

Thanks!

