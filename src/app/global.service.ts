import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  theme = '';
  constructor() { }

  initTheme() {

    // Query for the toggle that is used to change between themes
    const toggle = document.querySelector('ion-toggle[data-type="theme-toggle"]') as HTMLIonToggleElement;

    if (localStorage.themeMode === "dark") {
      document.body.classList.toggle('dark', true);
      toggle.checked = true;
      this.theme = localStorage.themeMode;

    } else if (localStorage.themeMode === "light") {
      document.body.classList.toggle('dark', false);
      toggle.checked = false;
      this.theme = localStorage.themeMode;

    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (prefersDark)
        this.theme = "dark";
      else
        this.theme = "light";

      toggle.checked = prefersDark;
    }

  }

  toggleMode(ev): string {

    const toggle = ev.target;

    if (toggle) {

      // Listen for the toggle check/uncheck to toggle the dark class on the <body>
      document.body.classList.toggle('dark', toggle.checked);

      if (toggle.checked) {
        localStorage.themeMode = "dark";
        this.theme = "dark";
        return 'dark';
      } else {
        localStorage.themeMode = "light";
        this.theme = "light";
        return 'light';
      }

      // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

      // // Listen for changes to the prefers-color-scheme media query
      // prefersDark.addListener((e) => checkToggle(e.matches));

      // // Called when the app loads
      // function loadApp() {
      //   checkToggle(prefersDark.matches);
      // }

      // // Called by the media query to check/uncheck the toggle
      // function checkToggle(shouldCheck) {
      //   toggle.checked = shouldCheck;
      // }
    }
  }
}
