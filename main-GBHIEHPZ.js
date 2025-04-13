import{a as Pe}from"./chunk-YJJNUOFB.js";import{$ as x,Aa as ue,Ab as Se,Ba as pe,C as K,Ca as ge,Da as de,E as G,Ea as fe,Fa as me,Ga as he,Ha as ve,I as Y,Ia as N,J as p,K as l,M as Z,Ma as be,N as C,Na as we,Nb as Ee,O as R,Ob as ke,P as X,Pb as Me,Q as j,Qb as Te,R as g,Rb as Re,Sb as Oe,T as d,U as a,Ub as Ae,V as O,W as q,X as J,Xb as Be,_ as Q,a as H,ca as ee,da as m,e as M,ea as L,f as T,fa as te,h as I,hb as D,k as v,ka as ne,l as A,m as b,na as ie,oa as re,qa as oe,r as _,ra as se,sa as ae,t as B,u as w,v as V,w as P,wb as Ce,x as S,xa as le,xb as ye,y as $,ya as ce,yb as Ie,zb as _e}from"./chunk-H5FW7C3M.js";var je={production:!0};var He=[{path:"",redirectTo:"/start",pathMatch:"full"},{path:"start",loadChildren:()=>import("./chunk-SNY5BQIQ.js").then(t=>t.StartpageModule)},{path:"documentation",loadChildren:()=>import("./chunk-ZEZHSFCC.js").then(t=>t.DocumentationModule)},{path:"typography",loadChildren:()=>import("./chunk-ITHS772K.js").then(t=>t.TypographyModule)},{path:"**",loadChildren:()=>import("./chunk-UIAYOTIT.js").then(t=>t.NotFoundModule)}],xe=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=C({type:t})}static{this.\u0275inj=w({imports:[N.forRoot(He,{useHash:!0,anchorScrolling:"enabled",scrollPositionRestoration:"enabled"}),N]})}}return t})();var U={name:"scaffold-app",version:"19.1.5",scripts:{ng:"ng",start:"ng serve",build:"ng build --configuration production",watch:"ng build --watch --configuration development",test:"ng test --browsers ChromeHeadless --code-coverage true --watch false",lint:"ng lint --fix","build-lib":"ng build scaffold --configuration production","watch-lib":"ng build scaffold --watch --configuration development","publish-lib":"npm publish ./dist/scaffold --access public",deploy:"ng deploy --project scaffold-app --base-href /scaffold/ --repo https://github.com/lukfel/scaffold.git"},dependencies:{"@angular/animations":"^19.2.1","@angular/cdk":"^19.2.2","@angular/common":"^19.2.1","@angular/compiler":"^19.2.1","@angular/core":"^19.2.1","@angular/forms":"^19.2.1","@angular/material":"^19.2.2","@angular/platform-browser":"^19.2.1","@angular/platform-browser-dynamic":"^19.2.1","@angular/router":"^19.2.1","@angular/service-worker":"^19.2.1","@lukfel/scaffold":"file:dist/scaffold",marked:"^15.0.0","ngx-markdown":"^19.1.0",rxjs:"~7.8.0",tslib:"^2.3.0","zone.js":"~0.15.0"},devDependencies:{"@angular-devkit/build-angular":"19.2.1","@angular-eslint/builder":"19.2.0","@angular-eslint/eslint-plugin":"19.2.0","@angular-eslint/eslint-plugin-template":"19.2.0","@angular-eslint/schematics":"19.2.0","@angular-eslint/template-parser":"19.2.0","@angular/cli":"~19.2.1","@angular/compiler-cli":"^19.2.1","@types/jasmine":"~4.3.0","@typescript-eslint/eslint-plugin":"^8.26.0","@typescript-eslint/parser":"^8.26.0","angular-cli-ghpages":"^2.0.3",eslint:"^8.45.0","eslint-config-prettier":"^8.10.0","eslint-plugin-prettier":"^5.1.3","eslint-plugin-unused-imports":"^4.1.4","jasmine-core":"~4.5.0",karma:"~6.4.0","karma-chrome-launcher":"~3.1.0","karma-coverage":"~2.2.0","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"~2.0.0","ng-packagr":"19.2.0",prettier:"^3.4.1",typescript:"~5.8.2"}};var Ke=t=>[t];function Ge(t,r){if(t&1&&(d(0,"mat-icon",11),m(1),a()),t&2){let e=x().$implicit;p(),te(" ",e.matIcon," ")}}function Ye(t,r){if(t&1&&O(0,"mat-icon",12),t&2){let e=x().$implicit;g("svgIcon",e.svgIcon)}}function Ze(t,r){if(t&1&&(d(0,"a",8)(1,"span",9),m(2),a(),R(3,Ge,2,1,"mat-icon",10)(4,Ye,1,1,"ng-template",null,0,ie),a()),t&2){let e=r.$implicit,i=ee(5);g("routerLink",ne(4,Ke,e.id)),p(2),L(e.label),p(),g("ngIf",e.matIcon)("ngIfElse",i)}}function Xe(t,r){if(t&1&&(d(0,"a",13)(1,"span",14),m(2),a(),O(3,"mat-icon",15),a()),t&2){let e=r.$implicit;g("href",e.id,Y),p(2),L(e.label),p(),g("ngClass",e.class)("svgIcon",e.svgIcon)}}var Le=(()=>{class t{constructor(e,i,n,s,o,c,f,u,h){this.router=e,this.logger=i,this.snackbarService=n,this.dialogService=s,this.iconRegistry=o,this.sanitizer=c,this.scaffoldService=f,this.breakpointService=u,this.seoService=h,this.version=U.version,this.scaffoldConfig={loading:!1,scrollPositionRestoration:!0,headerConfig:{enable:!0,svgLogo:"logo",title:"Scaffold",subtitle:`by Lukas Felbinger (v${U.version})`,titleRouterLink:"start",loading:!1,showRouteLoading:!0,leftMenuButton:{id:"drawer",matIcon:"menu",outlineIcon:!0},rightMenuButtons:[{id:"start",label:"Home"},{id:"documentation",label:"Docs"},{id:"typography",label:"Typography"},{id:"github",svgIcon:"github_logo",tooltip:"GitHub",class:"gray-icon"},{id:"npm",svgIcon:"npm_logo",tooltip:"NPM",class:"gray-icon"}],inputConfig:{enable:!0,label:"Search",matIconSubmit:"search",autoFocus:!1}},navbarConfig:{enable:!1,showAllLabels:!1,menuButtons:[{id:"start",label:"Home",matIcon:"home",outlineIcon:!0},{id:"documentation",label:"Docs",matIcon:"description",outlineIcon:!0},{id:"typography",label:"Typography",matIcon:"text_fields",outlineIcon:!0}]},drawerConfig:{enable:!0,open:!0,fixed:!0},footerConfig:{enable:!0,svgLogo:"logo",links:[{label:"About me",href:"https://www.lukasfelbinger.at",externalTab:!0},{label:"GitHub",href:"https://github.com/lukfel/scaffold",externalTab:!0},{label:"NPM",href:"https://www.npmjs.com/package/@lukfel/scaffold",externalTab:!0}],copyright:"\xA9 Lukas Felbinger 2025. All rights reserved."},contentTitleCardConfig:{enable:!0,showBackButton:!0},floatingButtonConfig:{enable:!0,autoHide:!0},bottomBarConfig:{enable:!1}},this.mobileRightMenuButtons=[{id:"menu",matIcon:"more_vert"}],this.externalMenuButtons=[{id:"https://www.create-a-tournament.com",label:"Create A Tournament",svgIcon:"cat_logo",class:"lf-cat-blue"},{id:"https://www.what-a-waste.at",label:"What A Waste",svgIcon:"waw_logo",class:"lf-waw-cyan"}],this.iconRegistry.addSvgIcon("logo",this.sanitizer.bypassSecurityTrustResourceUrl("assets/img/logos/logo.svg")),this.iconRegistry.addSvgIcon("lf_logo",this.sanitizer.bypassSecurityTrustResourceUrl("assets/img/logo.svg")),this.iconRegistry.addSvgIcon("github_logo",this.sanitizer.bypassSecurityTrustResourceUrl("assets/img/github.svg")),this.iconRegistry.addSvgIcon("npm_logo",this.sanitizer.bypassSecurityTrustResourceUrl("assets/img/npm.svg")),this.iconRegistry.addSvgIcon("cat_logo",this.sanitizer.bypassSecurityTrustResourceUrl("assets/img/cat.svg")),this.iconRegistry.addSvgIcon("waw_logo",this.sanitizer.bypassSecurityTrustResourceUrl("assets/img/waw.svg")),this.iconRegistry.addSvgIcon("ugly_logo",this.sanitizer.bypassSecurityTrustResourceUrl("assets/img/uglygotchi.svg")),this.scaffoldService.scaffoldConfig=this.scaffoldConfig;let W=this.scaffoldConfig.headerConfig?.rightMenuButtons||[];this.breakpointService.breakpoint$.subscribe(z=>{this.scaffoldConfig?.headerConfig&&(z.breakpoints[D.XSmall]?(this.mobileRightMenuButtons[0].menuButtons=W,this.scaffoldConfig.headerConfig.rightMenuButtons=this.mobileRightMenuButtons):this.scaffoldConfig.headerConfig.rightMenuButtons=W),this.scaffoldConfig?.navbarConfig?.enable===!1&&z.breakpoints[D.XSmall]&&(this.scaffoldConfig.navbarConfig.enable=!0)}),this.seoService.setMetaTags({metaPageTitle:"Demo | Scaffold Library",metaPageDescription:"This Angular library provides a basic UI scaffold and services for mordern web and mobile apps",metaImagePath:"scaffold/assets/img/meta.jpg"})}headerButtonClickEvent(e){if(this.snackbarService.openSnackbar(`You clicked the header button with id:   ${e}`),e==="drawer"){this.scaffoldConfig.drawerConfig&&(this.scaffoldConfig.drawerConfig.open=!this.scaffoldConfig.drawerConfig.open);return}else if(e==="github"){window.open("https://github.com/lukfel/scaffold","_blank");return}else if(e==="npm"){window.open("https://www.npmjs.com/package/@lukfel/scaffold","_blank");return}else if(e==="start"||e==="documentation"||e==="typography"){this.router.navigate([e]);return}}headerInputSubmitEvent(e){this.dialogService.openConfirmDialog({title:"You have entered:",message:e,closeLabel:"Close",confirmLabel:"Confirm"}).then(i=>{this.logger.log("close result: ",i)})}headerInputChangeEvent(e){this.logger.log(e)}navbarButtonClickEvent(e){this.router.navigate([e])}floatingButtonClickEvent(e){this.snackbarService.openSnackbar(`You clicked the floating button with id:   ${e}`)}static{this.\u0275fac=function(i){return new(i||t)(l(me),l(Me),l(Oe),l(ke),l(be),l(ge),l(Te),l(Ee),l(Re))}}static{this.\u0275cmp=Z({type:t,selectors:[["app-root"]],standalone:!1,decls:13,vars:2,consts:[["svgIcon",""],[3,"headerButtonClickEvent","headerInputSubmitEvent","headerInputChangeEvent","navbarButtonClickEvent","floatingButtonClickEvent"],["drawerContent",""],[1,"drawer-container"],["mat-subheader","",1,"hint"],["mat-list-item","","routerLinkActive","active",3,"routerLink",4,"ngFor","ngForOf"],["mat-list-item","","target","_blank",3,"href",4,"ngFor","ngForOf"],[1,"p-4","hint"],["mat-list-item","","routerLinkActive","active",3,"routerLink"],["matListItemTitle",""],["matListItemIcon","","class","mx-3 material-icons-outlined",4,"ngIf","ngIfElse"],["matListItemIcon","",1,"mx-3","material-icons-outlined"],["matListItemIcon","",1,"mx-3","material-icons-outlined",3,"svgIcon"],["mat-list-item","","target","_blank",3,"href"],["matListItemTitle","",1,"title-small"],["matListItemIcon","",1,"mx-3",3,"ngClass","svgIcon"]],template:function(i,n){i&1&&(d(0,"lf-scaffold",1),Q("headerButtonClickEvent",function(o){return n.headerButtonClickEvent(o)})("headerInputSubmitEvent",function(o){return n.headerInputSubmitEvent(o)})("headerInputChangeEvent",function(o){return n.headerInputChangeEvent(o)})("navbarButtonClickEvent",function(o){return n.navbarButtonClickEvent(o)})("floatingButtonClickEvent",function(o){return n.floatingButtonClickEvent(o)}),q(1,2),d(2,"div",3)(3,"mat-nav-list")(4,"div",4),m(5,"Navigation"),a(),R(6,Ze,6,6,"a",5),d(7,"div",4),m(8,"Other projects"),a(),R(9,Xe,4,4,"a",6),a(),d(10,"div",7),m(11," The content of this drawer is customizable through content projection or component portal. "),a()(),J(),O(12,"router-outlet"),a()),i&2&&(p(6),g("ngForOf",n.scaffoldConfig==null||n.scaffoldConfig.navbarConfig==null?null:n.scaffoldConfig.navbarConfig.menuButtons),p(3),g("ngForOf",n.externalMenuButtons))},dependencies:[oe,se,ae,fe,he,ve,Se,Ie,ye,_e,Ce,we,Ae],styles:[".drawer-container[_ngcontent-%COMP%]{height:100%;display:flex;flex-flow:column;justify-content:space-between}.drawer-container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .drawer-container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500;color:var(--color-primary)!important}.drawer-container[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{overflow:unset}.drawer-container[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%]{font-size:12px;margin-bottom:0}.drawer-container[_ngcontent-%COMP%]   .title-small[_ngcontent-%COMP%]{font-size:14px;line-height:14px;padding-top:2px}"]})}}return t})();var E="Service workers are disabled or not supported by this browser",y=class{serviceWorker;worker;registration;events;constructor(r,e){if(this.serviceWorker=r,!r)this.worker=this.events=this.registration=new M(i=>i.error(new Error(E)));else{let i=null,n=new T;this.worker=new M(u=>(i!==null&&u.next(i),n.subscribe(h=>u.next(h))));let s=()=>{let{controller:u}=r;u!==null&&(i=u,n.next(i))};r.addEventListener("controllerchange",s),s(),this.registration=this.worker.pipe(_(()=>r.getRegistration()));let o=new T;this.events=o.asObservable();let c=u=>{let{data:h}=u;h?.type&&o.next(h)};r.addEventListener("message",c),e?.get(j,null,{optional:!0})?.onDestroy(()=>{r.removeEventListener("controllerchange",s),r.removeEventListener("message",c)})}}postMessage(r,e){return new Promise(i=>{this.worker.pipe(b(1)).subscribe(n=>{n.postMessage(H({action:r},e)),i()})})}postMessageWithOperation(r,e,i){let n=this.waitForOperationCompleted(i),s=this.postMessage(r,e);return Promise.all([s,n]).then(([,o])=>o)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(r){let e;return typeof r=="string"?e=i=>i.type===r:e=i=>r.includes(i.type),this.events.pipe(A(e))}nextEventOfType(r){return this.eventsOfType(r).pipe(b(1))}waitForOperationCompleted(r){return new Promise((e,i)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(A(n=>n.nonce===r),b(1),I(n=>{if(n.result!==void 0)return n.result;throw new Error(n.error)})).subscribe({next:e,error:i})})}get isEnabled(){return!!this.serviceWorker}},De=(()=>{class t{sw;messages;notificationClicks;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new T;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=v,this.notificationClicks=v,this.subscription=v;return}this.messages=this.sw.eventsOfType("PUSH").pipe(I(n=>n.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(I(n=>n.data)),this.pushManager=this.sw.registration.pipe(I(n=>n.pushManager));let i=this.pushManager.pipe(_(n=>n.getSubscription()));this.subscription=new M(n=>{let s=i.subscribe(n),o=this.subscriptionChanges.subscribe(n);return()=>{s.unsubscribe(),o.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(E));let i={userVisibleOnly:!0},n=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),s=new Uint8Array(new ArrayBuffer(n.length));for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return i.applicationServerKey=s,new Promise((o,c)=>{this.pushManager.pipe(_(f=>f.subscribe(i)),b(1)).subscribe({next:f=>{this.subscriptionChanges.next(f),o(f)},error:c})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(E));let e=i=>{if(i===null)throw new Error("Not subscribed to push notifications.");return i.unsubscribe().then(n=>{if(!n)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return new Promise((i,n)=>{this.subscription.pipe(b(1),_(e)).subscribe({next:i,error:n})})}decodeBase64(e){return atob(e)}static \u0275fac=function(i){return new(i||t)(P(y))};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})(),Fe=(()=>{class t{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=v,this.unrecoverable=v;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(E));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(E));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(i){return new(i||t)(P(y))};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var Ue=new V("");function qe(){let t=S(k);if(!("serviceWorker"in navigator&&t.enabled!==!1))return;let r=S(Ue),e=S(G),i=S(j);e.runOutsideAngular(()=>{let n=navigator.serviceWorker,s=()=>n.controller?.postMessage({action:"INITIALIZE"});n.addEventListener("controllerchange",s),i.onDestroy(()=>{n.removeEventListener("controllerchange",s)})}),e.runOutsideAngular(()=>{let n,{registrationStrategy:s}=t;if(typeof s=="function")n=new Promise(o=>s().subscribe(()=>o()));else{let[o,...c]=(s||"registerWhenStable:30000").split(":");switch(o){case"registerImmediately":n=Promise.resolve();break;case"registerWithDelay":n=Ne(+c[0]||0);break;case"registerWhenStable":n=Promise.race([i.whenStable(),Ne(+c[0])]);break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${t.registrationStrategy}`)}}n.then(()=>navigator.serviceWorker.register(r,{scope:t.scope}).catch(o=>console.error("Service worker registration failed with:",o)))})}function Ne(t){return new Promise(r=>setTimeout(r,t))}function Je(t,r){return new y(t.enabled!==!1?navigator.serviceWorker:void 0,r)}var k=class{enabled;scope;registrationStrategy};function Qe(t,r={}){return $([De,Fe,{provide:Ue,useValue:t},{provide:k,useValue:r},{provide:y,useFactory:Je,deps:[k,K]},X(qe)])}var We=(()=>{class t{static register(e,i={}){return{ngModule:t,providers:[Qe(e,i)]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=C({type:t});static \u0275inj=w({providers:[De,Fe]})}return t})();var ze=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=C({type:t,bootstrap:[Le]})}static{this.\u0275inj=w({providers:[ue(pe())],imports:[ce,de,xe,Pe,Be.forRoot({production:je.production}),We.register("ngsw-worker.js",{enabled:!re(),registrationStrategy:"registerWhenStable:30000"})]})}}return t})();le().bootstrapModule(ze).catch(t=>console.error(t));
