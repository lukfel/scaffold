# Documentation
## Introduction
This Angular library provides a basic scaffold for modern web and mobile applications and includes ui elements such as header, sidebar, drawer, footer, floating button etc as well as basic services to display snackbars, dialogs and more. Simply wrap your ``router-outlet`` with the ``lf-scaffold`` element and start configuring the ``ScaffoldConfig`` in the `ScaffoldService` store.

* Demo https://lukfel.github.io/scaffold
* Example https://www.create-a-tournament.com, https://www.what-a-waste.at

## Installation
Install the npm package ``npm install @lukfel/scaffold``.

## Module
Import the module ``ScaffoldModule`` in your ``app.module.ts``.
* Hint: The library has a built in logger service ``Logger`` which logs certain events if a ``LibraryConfig`` is passed and the property ``production`` is to ``false`` (no logging in production mode).
```ts
import { ScaffoldModule } from '@lukfel/scaffold';
import { environment as env } from 'src/environments/environment';

imports: [
  ...
  // omit '.forRoot( { production: env.production } )' if you don't need the logger
  ScaffoldModule.forRoot( { production: env.production } )
],
```

## Style
Import the styles ``@lukfel/scaffold/styles`` on top of your ``styles.scss`` and include the theme.
* Hint: The styles also include material icons and the roboto font.
```scss
@use "@lukfel/scaffold/styles" as lf;
@include lf.scaffold-theme();     // include the default theme
...
```

### Custom Theme
To customize the theme, overwrite the color palettes directly after the ``@use "@lukfel/scaffold/styles" as lf`` import.
* Hint: To use Material palettes, install and import the Angular Material library in your application.
```scss
@use "@lukfel/scaffold/styles" as lf;
@use '@angular/material' as mat;

$theme: (
  primary: mat.define-palette(mat.$pink-palette),
  accent: mat.define-palette(mat.$blue-palette),
  warn: mat.define-palette(mat.$red-palette),
  dark: false
);

@include lf.scaffold-theme($theme);
...
```

### Multiple Themes
To dynamically switch between themes, create and include the theme with ``lf.scaffold-colors($theme2, 'theme2')`` where the second parameter is the class name that needs to be present on the body like ``<body class="theme2">``.
* Hint: You can dynamically change to an available theme with the service ``ThemeService``.
```scss
@use "@lukfel/scaffold/styles" as lf;
@use '@angular/material' as mat;

$base-theme: (
  primary: mat.define-palette(mat.$pink-palette),
  accent: mat.define-palette(mat.$blue-palette),
  warn: mat.define-palette(mat.$red-palette),
  dark: false
);

$theme2: (
  primary: mat.define-palette(mat.$purple-palette),
  accent: mat.define-palette(mat.$amber-palette),
  dark: false
);

@include lf.scaffold-theme($base-theme);              // Set the primary theme with lf.scaffold-theme(...)
@include lf.scaffold-colors($theme2, 'theme2');       // Set additional themes with lf.scaffold-colors(...)
...
```

### Custom Typography
The change the default typography from Roboto, you can pass an additional property ``font-family`` in the base theme map.
* Hint: Don't forget to import and set your desired font-family in your application.
```scss
@use "@lukfel/scaffold/styles" as lf;
@use '@angular/material' as mat;

$base-theme: (
  primary: mat.define-palette(mat.$pink-palette),
  accent: mat.define-palette(mat.$blue-palette),
  warn: mat.define-palette(mat.$red-palette),
  dark: false,
  font-family: 'Comic Sans'
);

@include lf.scaffold-theme($base-theme); 

body {
    font-family: "Comic Sans MS" !important;
}
...
```

## Template
Add the ``lf-scaffold`` element to your ``app.component.html``.
```html
<lf-scaffold>
  <router-outlet></router-outlet>
</lf-scaffold>
```

## Config
Import the ``ScaffoldService`` in your ``app.component.ts``.
* Hint: The ``ScaffoldService`` is the global store of the library. With this service you can change the ``ScaffoldConfig`` and subscribe to the `Observable` to detect changes.
```ts
import { ScaffoldService } from '@lukfel/scaffold';

export class AppComponent {

  constructor(private scaffoldService: ScaffoldService) {}

}
```

Create the ``ScaffoldConfig`` object in your ``app.component.ts`` and set it in the ``ScaffoldService``.
* Hint: If a sub config (e.g. ``headerConfig``) is not defined within the ``ScaffoldConfig`` or doesn't have the property ``enable: true``, the corresponding ui element won't be displayed.
```ts
import { ScaffoldService, ScaffoldConfig } from '@lukfel/scaffold';

export class AppComponent {

  public scaffoldConfig: ScaffoldConfig = {
    scrollPositionRestoration: true,
    // see HeaderConfig
    headerConfig: {
      enable: true,
      title: 'Scaffold',
      subtitle: 'by Lukas Felbinger',
      leftMenuButton: {
        id: 'menu',
        matIcon: 'menu'
      },
      rightMenuButtons: [
        {
          id: 'item1',
          label: 'Item 1'
        },
        {
          id: 'item2',
          label: 'Item 2'
        },
        {
          id: 'item3',
          matIcon: 'settings'
        }
      ],
      inputConfig: {
        enable: false
      }
    },
    // see NavbarConfig
    navbarConfig: {
      enable: true,
      showAllLabels: true,
      menuButtons: [
        {
          id: 'nav1',
          label: 'Nav 1',
          matIcon: 'looks_one'
        },
        {
          id: 'nav2',
          label: 'Nav 2',
          matIcon: 'looks_two'
        },
        {
          id: 'nav3',
          label: 'Nav 3',
          matIcon: 'looks_3'
        }
      ]
    },
    // see DrawerConfig
    drawerConfig: {
      enable: false
    },
    // see FooterConfig
    footerConfig: {
      enable: true,
      links: [
        {
          label: 'Link 1'
        },
        {
          label: 'Link 2'
        },
      ],
      copyright: '© Lukas Felbinger 2023. All rights reserved.'
    },
    // see ContentTitleCardConfig
    contentTitleCardConfig: {
      enable: true,
      label: 'Example Title',
      showBackButton: true
    },
    // see FloatingButtonConfig
    floatingButtonConfig: {
      enable: true
    },
    // see BottomBarConfig
    bottomBarConfig: {
      enable: false
    }
  }

  constructor(private scaffoldService: ScaffoldService) {
    // Set the new scaffoldConfig in the global store
    this.scaffoldService.scaffoldConfig = this.scaffoldConfig;
  }

}
```

## Events
To listen to scaffold user events, add the output events and define the corresponding methods in your ``app.component.ts``.
```html
<lf-scaffold
  (headerButtonClickEvent)="headerButtonClickEvent($event)"
  (headerInputSubmitEvent)="headerInputSubmitEvent($event)"
  (headerInputChangeEvent)="headerInputChangeEvent($event)"
  (navbarButtonClickEvent)="navbarButtonClickEvent($event)">
  <!-- drawer content (content that is placed in the left drawer if enabled) -->
  <ng-container drawerContent></ng-container>
  <!-- main content -->
  <router-outlet></router-outlet>
</lf-scaffold>
```

```ts
// Listen to header click events (header menu buttons - click)
public headerButtonClickEvent(id: string): void {
  ...
}

// Listen to header input submit events (header input field - submit)
public headerInputSubmitEvent(value: string): void {
  ...
}

// Listen to header input change events (header input field - change)
public headerInputChangeEvent(value: string): void {
  ...
}

// Listen to navbar click events (navbar menu buttons - click)
public navbarButtonClickEvent(id: string): void {
  ...
}
```

## Additional Services
The library provides some additional commonly used services, such as:
* ``Logger`` (for logging during development only)
* ``SnackbarService`` (display simple snackbars)
* ``DialogService`` (display simple and custom dialogs)
* ``BreakpointService`` (listen for breakpoint changes)
* ``RouterService`` (listen for route changes and retrieve route history)
* ``SeoService`` (set all meta tags with one method)
* ``ThemeService`` (dynamically change the theme)
* ``LocalStorageService`` (persist data in the local storage)

### Logger
This service only logs out information if you set ``ScaffoldModule.forRoot( { production: env.production } )`` where the ``production`` property must be ``false`` (no console logging in production mode).
```ts
import { Logger } from '@lukfel/scaffold';

export class AppComponent {

  constructor(private logger: Logger) {}
  
  // Generic api call with logging
  public apiCallWithLogging(): void {
    this.apiService.apiCall().then(result => {
      this.logger.log(result);
    }).catch(error => {
      this.logger.error(error);
    });
  }
}
```

### SnackbarService
This service provides basic methods to display a simple snackbar with or without an action.
```ts
import { SnackbarService } from '@lukfel/scaffold';

export class AppComponent {

  constructor(private snackbarService: SnackbarService) {}
  
  // Generic api call with snackbar response
  public apiCallWithSnackbarResponse(): void {
    this.apiService.apiCall().then(result => {
      this.snackbarService.openSnackbar('Call was successful');
    }).catch(error => {
      this.snackbarService.openSnackbar('Call was not successful');
    });
  }
}
```

### DialogService
This service provide a basic confirmation dialog with a ``boolean`` response. Additionally you can use the method `openCustomDialog` to pass your own dialog template and config.
```ts
import { DialogService } from '@lukfel/scaffold';

export class AppComponent {

  constructor(private dialogService: DialogService) {}
  
  // Generic api call with a subsequent confirmation dialog
  public apiCallWithDialogConfirmation(): void {
    this.dialogService.openConfirmDialog('Do you really want to make this api call?').then(response => {
      // If the user confirmed the dialog, go through with the api call
      if(response === true) {
        this.apiService.apiCall().then(result => {
          ...
        }).catch(error => {
          ...
        }); 
      }
    });
  }
}
```

### BreakpointService
This service allows you to subscribe to breakpoint changes and act accordingly
```ts
import { BreakpointService } from '@lukfel/scaffold';

export class AppComponent {

  constructor(private breakpointService: BreakpointService) {
    this.breakpointService.breakpoint$.subscribe((result: BreakpointState) => {
      // Check which breakpoint is active
      if (result.breakpoints[Breakpoints.XSmall]) {
        ...
      } else if (result.breakpoints[Breakpoints.Small]) {
        ...
      } else if (result.breakpoints[Breakpoints.Medium]) {
        ...
      } else if (result.breakpoints[Breakpoints.Large]) {
        ...
      }
    });
  }
}
```
