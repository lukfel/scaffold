"use strict";(self.webpackChunkscaffold_app=self.webpackChunkscaffold_app||[]).push([[797],{1797:(I,p,l)=>{l.r(p),l.d(p,{StartpageModule:()=>d});var s=l(6895),f=l(858),c=l(727),e=l(4650),C=l(8461),h=l(4859),Z=l(4144),_=l(9549),T=l(455),M=l(4850),b=l(7392),A=l(266),m=l(4006);function J(g,a){if(1&g){const t=e.EpF();e.TgZ(0,"mat-slide-toggle",6),e.NdJ("ngModelChange",function(n){e.CHM(t);const i=e.oxw();return e.KtG(i.floatingButtonConfig.outlineIcon=n)}),e._uU(1," Outlined \xa0\xa0 "),e.qZA()}if(2&g){const t=e.oxw();e.Q6J("ngModel",t.floatingButtonConfig.outlineIcon)}}function v(g,a){if(1&g&&(e.TgZ(0,"mat-icon",12),e._uU(1),e.qZA()),2&g){const t=e.oxw(2).menuButton;e.xp6(1),e.Oqu(t.matIcon)}}function S(g,a){if(1&g){const t=e.EpF();e.TgZ(0,"mat-slide-toggle",6),e.NdJ("ngModelChange",function(n){e.CHM(t);const i=e.oxw(2).menuButton;return e.KtG(i.outlineIcon=n)}),e._uU(1," Outlined \xa0\xa0 "),e.qZA()}if(2&g){const t=e.oxw(2).menuButton;e.Q6J("ngModel",t.outlineIcon)}}function U(g,a){if(1&g){const t=e.EpF();e.TgZ(0,"div",8)(1,"mat-form-field")(2,"mat-label"),e._uU(3,"Event id"),e.qZA(),e.TgZ(4,"input",3),e.NdJ("ngModelChange",function(n){e.CHM(t);const i=e.oxw().menuButton;return e.KtG(i.id=n)}),e.qZA()(),e.TgZ(5,"mat-form-field")(6,"mat-label"),e._uU(7,"Label"),e.qZA(),e.TgZ(8,"input",9),e.NdJ("ngModelChange",function(n){e.CHM(t);const i=e.oxw().menuButton;return e.KtG(i.label=n)}),e.qZA()(),e.TgZ(9,"mat-form-field")(10,"mat-label"),e._uU(11,"Material Icon"),e.qZA(),e.TgZ(12,"input",3),e.NdJ("ngModelChange",function(n){e.CHM(t);const i=e.oxw().menuButton;return e.KtG(i.matIcon=n)}),e.qZA(),e.YNc(13,v,2,1,"mat-icon",10),e.YNc(14,S,2,1,"mat-slide-toggle",4),e.qZA(),e.TgZ(15,"mat-form-field")(16,"mat-label"),e._uU(17,"Tooltop"),e.qZA(),e.TgZ(18,"input",3),e.NdJ("ngModelChange",function(n){e.CHM(t);const i=e.oxw().menuButton;return e.KtG(i.tooltip=n)}),e.qZA()(),e.TgZ(19,"button",11),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(),i=n.menuButton,w=n.isLeftButton,Q=e.oxw();return e.KtG(Q.removeHeaderButton(i,w))}),e.TgZ(20,"mat-icon"),e._uU(21,"delete"),e.qZA()()()}if(2&g){const t=e.oxw(),o=t.menuButton,n=t.isLeftButton;e.xp6(4),e.Q6J("ngModel",o.id),e.xp6(4),e.Q6J("disabled",n)("ngModel",o.label),e.xp6(4),e.Q6J("ngModel",o.matIcon),e.xp6(1),e.Q6J("ngIf",o.matIcon),e.xp6(1),e.Q6J("ngIf",o.matIcon),e.xp6(4),e.Q6J("ngModel",o.tooltip)}}function q(g,a){1&g&&e.YNc(0,U,22,7,"div",7),2&g&&e.Q6J("ngIf",a.menuButton)}class u{constructor(a,t){this.scaffoldService=a,this.themeService=t,this.scaffoldConfig={},this.headerConfig={},this.navbarConfig={},this.drawerConfig={},this.footerConfig={},this.contentTitleCardConfig={},this.floatingButtonConfig={},this._subscription=new c.w0}ngOnInit(){this._subscription.add(this.scaffoldService.scaffoldConfig$.subscribe(a=>{this.scaffoldConfig=a,this.headerConfig=a.headerConfig||{},this.navbarConfig=a.navbarConfig||{},this.drawerConfig=a.drawerConfig||{},this.footerConfig=a.footerConfig||{},this.contentTitleCardConfig=a.contentTitleCardConfig||{},this.contentTitleCardConfig.label="Home",this.floatingButtonConfig=a.floatingButtonConfig||{}}))}ngOnDestroy(){this._subscription&&this._subscription.unsubscribe()}showContainerLoading(){this.scaffoldService.scaffoldConfig.loading=!0,setTimeout(()=>{this.scaffoldService.scaffoldConfig.loading=!1},3e3)}headerImgLogoChange(a){this.headerConfig.svgLogo=a?"":"lf_logo"}footerImgLogoChange(a){this.footerConfig.svgLogo=a?"":"lf_logo"}setTheme(a){this.themeService.setTheme(a,!0)}addHeaderButton(a){a?a&&!this.headerConfig?.leftMenuButton&&(this.headerConfig.leftMenuButton={id:""}):this.headerConfig.rightMenuButtons?.push({id:""})}removeHeaderButton(a,t){t?t&&this.headerConfig?.leftMenuButton===a&&(this.headerConfig.leftMenuButton=void 0):this.headerConfig.rightMenuButtons=this.headerConfig.rightMenuButtons?.filter(o=>o!==a)}}u.\u0275fac=function(a){return new(a||u)(e.Y36(C.Nr),e.Y36(C.fY))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-startpage"]],decls:149,vars:26,consts:[[1,"lf-startpage"],["mat-flat-button","","color","accent",3,"click"],[3,"ngModel","ngModelChange"],["matInput","",3,"ngModel","ngModelChange"],["matSuffix","",3,"ngModel","ngModelChange",4,"ngIf"],["menuButtonFormTemplate",""],["matSuffix","",3,"ngModel","ngModelChange"],["class","mb-2",4,"ngIf"],[1,"mb-2"],["matInput","",3,"disabled","ngModel","ngModelChange"],["matPrefix","",4,"ngIf"],["mat-icon-button","","color","warn","matTooltip","Remove button",3,"click"],["matPrefix",""]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2,"Demo"),e.qZA(),e.TgZ(3,"p"),e._uU(4,"This is a simple demo application that lets you play around with the scaffold elements."),e.qZA(),e._UZ(5,"mat-divider"),e.TgZ(6,"h2"),e._uU(7,"Themes"),e.qZA(),e.TgZ(8,"p"),e._uU(9," You can define multiple themes and switch through them by setting the corresponding css class. "),e.qZA(),e.TgZ(10,"button",1),e.NdJ("click",function(){return t.setTheme("")}),e._uU(11,"Theme 1"),e.qZA(),e.TgZ(12,"button",1),e.NdJ("click",function(){return t.setTheme("theme2")}),e._uU(13,"Theme 2"),e.qZA(),e.TgZ(14,"button",1),e.NdJ("click",function(){return t.setTheme("theme3")}),e._uU(15,"Theme 3"),e.qZA(),e.TgZ(16,"button",1),e.NdJ("click",function(){return t.setTheme("theme4")}),e._uU(17,"Theme 4"),e.qZA(),e._UZ(18,"mat-divider"),e.TgZ(19,"h2"),e._uU(20,"Scaffold"),e.qZA(),e.TgZ(21,"p"),e._uU(22," The scaffold is the global wrapper element that controls all ui elements based on its config. "),e.qZA(),e.TgZ(23,"p")(24,"button",1),e.NdJ("click",function(){return t.showContainerLoading()}),e._uU(25," Loading (3 seconds) "),e.qZA()(),e.TgZ(26,"p")(27,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.scaffoldConfig.scrollPositionRestoration=n}),e._uU(28," Restore scroll position after navigation "),e.qZA()(),e._UZ(29,"mat-divider"),e.TgZ(30,"h2"),e._uU(31,"Header"),e.qZA(),e.TgZ(32,"p"),e._uU(33," The header is a responsive mat-toolbar with a customizable logo, title, subtitle, menu-buttons and an input field. "),e.qZA(),e.TgZ(34,"p")(35,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.headerConfig.enable=n}),e._uU(36,"Enable"),e.qZA()(),e.TgZ(37,"p")(38,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.headerConfig.loading=n}),e._uU(39,"Loading"),e.qZA()(),e.TgZ(40,"p")(41,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.headerConfig.showRouteLoading=n}),e._uU(42," Show navigation loading "),e.qZA()(),e.TgZ(43,"mat-form-field")(44,"mat-label"),e._uU(45,"Image Logo (url)"),e.qZA(),e.TgZ(46,"input",3),e.NdJ("ngModelChange",function(n){return t.headerConfig.imgLogo=n})("ngModelChange",function(n){return t.headerImgLogoChange(n)}),e.qZA()(),e.TgZ(47,"mat-form-field")(48,"mat-label"),e._uU(49,"Titel"),e.qZA(),e.TgZ(50,"input",3),e.NdJ("ngModelChange",function(n){return t.headerConfig.title=n}),e.qZA()(),e.TgZ(51,"mat-form-field")(52,"mat-label"),e._uU(53,"Subtitel"),e.qZA(),e.TgZ(54,"input",3),e.NdJ("ngModelChange",function(n){return t.headerConfig.subtitle=n}),e.qZA()(),e.TgZ(55,"h3"),e._uU(56,"Header Input Field"),e.qZA(),e.TgZ(57,"p")(58,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.headerConfig.inputConfig.enable=n}),e._uU(59,"Enable"),e.qZA()(),e.TgZ(60,"mat-form-field")(61,"mat-label"),e._uU(62,"Label"),e.qZA(),e.TgZ(63,"input",3),e.NdJ("ngModelChange",function(n){return t.headerConfig.inputConfig.label=n}),e.qZA()(),e.TgZ(64,"mat-form-field")(65,"mat-label"),e._uU(66,"Material Icon"),e.qZA(),e.TgZ(67,"input",3),e.NdJ("ngModelChange",function(n){return t.headerConfig.inputConfig.matIcon=n}),e.qZA()(),e._UZ(68,"mat-divider"),e.TgZ(69,"h2"),e._uU(70,"Title Card"),e.qZA(),e.TgZ(71,"p"),e._uU(72," The title card is a mat-card below the header that can display the current page title and a back button. "),e.qZA(),e.TgZ(73,"p")(74,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.contentTitleCardConfig.enable=n}),e._uU(75,"Enable"),e.qZA()(),e.TgZ(76,"p")(77,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.contentTitleCardConfig.showBackButton=n}),e._uU(78," Show back button "),e.qZA()(),e.TgZ(79,"mat-form-field")(80,"mat-label"),e._uU(81,"Title"),e.qZA(),e.TgZ(82,"input",3),e.NdJ("ngModelChange",function(n){return t.contentTitleCardConfig.label=n}),e.qZA()(),e._UZ(83,"mat-divider"),e.TgZ(84,"h2"),e._uU(85,"Navbar"),e.qZA(),e.TgZ(86,"p"),e._uU(87," The navbar is a fixed navigation element that is positioned vertically left on desktop and moves horizontally to the bottom on mobile. "),e.qZA(),e.TgZ(88,"p")(89,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.navbarConfig.enable=n}),e._uU(90,"Enable"),e.qZA()(),e.TgZ(91,"p")(92,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.navbarConfig.showAllLabels=n}),e._uU(93,"Show all labels"),e.qZA()(),e._UZ(94,"mat-divider"),e.TgZ(95,"h2"),e._uU(96,"Drawer"),e.qZA(),e.TgZ(97,"p"),e._uU(98," The drawer is an empty mat-sidenav that let's you place custom html templates as its content. "),e.qZA(),e.TgZ(99,"p")(100,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.drawerConfig.enable=n}),e._uU(101,"Enable"),e.qZA()(),e.TgZ(102,"p")(103,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.drawerConfig.open=n}),e._uU(104,"Open"),e.qZA()(),e.TgZ(105,"p")(106,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.drawerConfig.fixed=n}),e._uU(107,"Fixed"),e.qZA()(),e._UZ(108,"mat-divider"),e.TgZ(109,"h2"),e._uU(110,"Footer"),e.qZA(),e.TgZ(111,"p"),e._uU(112,"The footer is a bottom element with a logo, navigation links and the copyright."),e.qZA(),e.TgZ(113,"p")(114,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.footerConfig.enable=n}),e._uU(115,"Enable"),e.qZA()(),e.TgZ(116,"mat-form-field")(117,"mat-label"),e._uU(118,"Image Logo (url)"),e.qZA(),e.TgZ(119,"input",3),e.NdJ("ngModelChange",function(n){return t.footerConfig.imgLogo=n})("ngModelChange",function(n){return t.footerImgLogoChange(n)}),e.qZA()(),e.TgZ(120,"mat-form-field")(121,"mat-label"),e._uU(122,"Copyright"),e.qZA(),e.TgZ(123,"input",3),e.NdJ("ngModelChange",function(n){return t.footerConfig.copyright=n}),e.qZA()(),e._UZ(124,"mat-divider"),e.TgZ(125,"h2"),e._uU(126,"Floating Button"),e.qZA(),e.TgZ(127,"p"),e._uU(128," The floating button is an action button to scroll back to the top of the application or to call custom methods. "),e.qZA(),e.TgZ(129,"p")(130,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.floatingButtonConfig.enable=n}),e._uU(131,"Enable"),e.qZA()(),e.TgZ(132,"mat-form-field")(133,"mat-label"),e._uU(134,"Event id"),e.qZA(),e.TgZ(135,"input",3),e.NdJ("ngModelChange",function(n){return t.floatingButtonConfig.id=n}),e.qZA()(),e.TgZ(136,"mat-form-field")(137,"mat-label"),e._uU(138,"Label"),e.qZA(),e.TgZ(139,"input",3),e.NdJ("ngModelChange",function(n){return t.floatingButtonConfig.label=n}),e.qZA()(),e.TgZ(140,"mat-form-field")(141,"mat-label"),e._uU(142,"Material Icon"),e.qZA(),e.TgZ(143,"input",3),e.NdJ("ngModelChange",function(n){return t.floatingButtonConfig.matIcon=n}),e.qZA(),e.YNc(144,J,2,1,"mat-slide-toggle",4),e.qZA(),e.TgZ(145,"p"),e._UZ(146,"br"),e.qZA()(),e.YNc(147,q,1,1,"ng-template",null,5,e.W1O)),2&a&&(e.xp6(27),e.Q6J("ngModel",t.scaffoldConfig.scrollPositionRestoration),e.xp6(8),e.Q6J("ngModel",t.headerConfig.enable),e.xp6(3),e.Q6J("ngModel",t.headerConfig.loading),e.xp6(3),e.Q6J("ngModel",t.headerConfig.showRouteLoading),e.xp6(5),e.Q6J("ngModel",t.headerConfig.imgLogo),e.xp6(4),e.Q6J("ngModel",t.headerConfig.title),e.xp6(4),e.Q6J("ngModel",t.headerConfig.subtitle),e.xp6(4),e.Q6J("ngModel",t.headerConfig.inputConfig.enable),e.xp6(5),e.Q6J("ngModel",t.headerConfig.inputConfig.label),e.xp6(4),e.Q6J("ngModel",t.headerConfig.inputConfig.matIcon),e.xp6(7),e.Q6J("ngModel",t.contentTitleCardConfig.enable),e.xp6(3),e.Q6J("ngModel",t.contentTitleCardConfig.showBackButton),e.xp6(5),e.Q6J("ngModel",t.contentTitleCardConfig.label),e.xp6(7),e.Q6J("ngModel",t.navbarConfig.enable),e.xp6(3),e.Q6J("ngModel",t.navbarConfig.showAllLabels),e.xp6(8),e.Q6J("ngModel",t.drawerConfig.enable),e.xp6(3),e.Q6J("ngModel",t.drawerConfig.open),e.xp6(3),e.Q6J("ngModel",t.drawerConfig.fixed),e.xp6(8),e.Q6J("ngModel",t.footerConfig.enable),e.xp6(5),e.Q6J("ngModel",t.footerConfig.imgLogo),e.xp6(4),e.Q6J("ngModel",t.footerConfig.copyright),e.xp6(7),e.Q6J("ngModel",t.floatingButtonConfig.enable),e.xp6(5),e.Q6J("ngModel",t.floatingButtonConfig.id),e.xp6(4),e.Q6J("ngModel",t.floatingButtonConfig.label),e.xp6(4),e.Q6J("ngModel",t.floatingButtonConfig.matIcon),e.xp6(1),e.Q6J("ngIf",null==t.floatingButtonConfig?null:t.floatingButtonConfig.matIcon))},dependencies:[s.O5,h.lW,h.RK,Z.Nt,_.KE,_.hX,_.qo,_.R9,T.Rr,M.d,b.Hw,A.gM,m.Fj,m.JJ,m.On],styles:[".lf-startpage[_ngcontent-%COMP%]{max-width:1080px;margin:auto}.lf-startpage[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{margin:64px 0}.lf-startpage[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin:0 8px 8px 0}.lf-startpage[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{display:none}.lf-startpage[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 8px 8px 0}"]});const B=[{path:"",component:u}];class r{}r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[f.Bz.forChild(B),f.Bz]});var N=l(3306);class d{}d.\u0275fac=function(a){return new(a||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[s.ez,r,N.m]})}}]);