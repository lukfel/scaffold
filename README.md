# Scaffold

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

## Documentation
There are two ways to use this library:
1) Clone this project and customize the application
2) Install the dependency with npm to your application

### 1) Clone this project
* ``git clone ...``
* ``cd scaffold/``
* ``npm install``
* ``npm run build-lib``
* ``ng serve``

### 2) Install the dependency
* ``npm install ...``
* import the module (optionally pass if production for logger)
```
import { ComponentsModule } from '@lf/components';
import { environment as env } from 'src/environments/environment';

imports: [
  ...
  ComponentsModule.forRoot( { production: env.production } )
],
```
* add the container in the ``app.component.html`` (optionally omit configs of components you don't need)
```
<!-- container -->
<lf-container
  [containerConfig]="containerConfig"
  [headerConfig]="headerConfig"
  [sidenavConfig]="sidenavConfig"
  [drawerConfig]="drawerConfig"
  [footerConfig]="footerConfig"
  [toTopButtonConfig]="toTopButtonConfig"
  (headerClickEvent)="headerClickEvent($event)"
  (sidenavClickEvent)="sidenavClickEvent($event)">
  <!-- drawer content (optionally omit if no drawer) -->
  <ng-container drawerContent>Drawer Content</ng-container>
  <!-- main content -->
  <router-outlet></router-outlet>
</lf-container>
```
* create the config objects in the ``app.component.ts``
```
import { ContainerConfig, DrawerConfig, FooterConfig, HeaderConfig, SidenavConfig, ToTopButtonConfig } from '@lf/components';

...

public containerConfig: ContainerConfig = {
  loading: false
}

public headerConfig: HeaderConfig = {
  show: true,
  title: 'Scaffold',
  subTitle: 'by Lukas Felbinger',
  loading: false,
  showRouteLoading: true,
  leftMenuButton: {
    id: 'menu',
    matIcon: 'menu',
    outlineIcon: true
  },
  rightMenuButton: {
    id: 'settings',
    matIcon: 'settings',
    outlineIcon: true
  }
}

public sidenavConfig: SidenavConfig = {
  show: true,
  menuButtons: [
    {
      id: 'start',
      matIcon: 'home',
      label: 'Home',
      outlineIcon: true
    },
  ]
}

public drawerConfig: DrawerConfig = {
  show: false,
  open: true
}

public footerConfig: FooterConfig = {
  show: true,
  copyright: '© Lukas Felbinger 2023. All rights reserved.'
}

public toTopButtonConfig: ToTopButtonConfig = {
  show: true
}
```
* listen to click events
```
public headerClickEvent(id: string): void {
  console.log(id);
}

public sidenavClickEvent(id: string): void {
    this.router.navigate([id]);
}
```

## TODO:
* Header - input field (search field)
* Header - mobile version
* Sidenav - active links
* Footer - overall styling
* MenuButtons - functionality for svg icons
* Library - styling overhaul (global variables)
* Library - services for dialogs and snackbars

__________

## Angular
* Reference: https://github.com/angular/angular-cli/wiki

### Requirements
* Node: https://nodejs.org/en/download/
* NPM: ``npm install npm@latest -g``

### Installation
* ``npm install -g @angular/cli``
* ``npm uninstall -g @angular/cli cache verify``

### Update
* ``ng update @angular/cli @angular/core``

### Create Project
* ``ng new [app] --prefix [lf] --style [scss] --routing --skipTests``

### Generate Route
* ``ng generate module [name] --route [route] --module app.module``

### Generate Library
* ``ng generate library [name] --prefix [lf]``

### Serve Project
* ``ng serve --host 0.0.0.0 --port 4200``

### Deployement
* ``ng build --configuration production``

### Testing
* ``ng test --browsers ChromeHeadless --code-coverage true --watch false``

__________

## Material (Design Language)
* Reference: https://material.angular.io/guide/getting-started

### Installation
* ``ng add @angular/material``

### Update
* ``ng update @angular/material``

### Optional
* ``npm install material-design-icons``
* ``npm install roboto-fontface``

__________

## Eslint
* Reference: https://github.com/angular-eslint/angular-eslint

### Installation
* ``ng add @angular-eslint/schematics``
* ``npm install prettier eslint-plugin-prettier eslint-config-prettier --save-dev``
* ``npm install eslint-plugin-unused-imports --save-dev``

__________

## AngularFire/Firebase (Serverless Backend)
* Reference: https://github.com/angular/angularfire

### Installation
* ``ng add @angular/fire``

### Update
* ``ng update @angular/fire``

### Deployement
* ``ng run [app]:deploy``
* Note: Hostable build is created in the folder "dist/"

### Optional
* ``npm install -g firebase-tools``

__________

## Service worker (PWA)
* Reference: https://angular.io/guide/service-worker-getting-started

### Installation
* ``ng add @angular/pwa --project [app]``

__________

## Husky (Git-hooks)
* Reference: https://github.com/typicode/husky

### Installation
* ``npm install husky --save-dev``

### Usage [package.json]
```json
"husky": {
  "hooks": {
    "pre-commit": "npm run lint && git add .",
    "pre-push": "npm run build"
  }
},
```

__________

## Scully (Static Pages)
* Reference: https://github.com/scullyio/scully

### Installation
* ``ng add @scullyio/init``

### Usage
* ``npm run scully``
