"use strict";(self.webpackChunkscaffold_app=self.webpackChunkscaffold_app||[]).push([[797],{1797:(A,p,g)=>{g.r(p),g.d(p,{StartpageModule:()=>l});var u=g(6895),m=g(858),h=g(727),e=g(4650),_=g(8461),C=g(4859),T=g(4144),f=g(9549),Z=g(455),c=g(4850),s=g(4006);class d{constructor(a,t){this.scaffoldService=a,this.document=t,this.scaffoldConfig={},this.headerConfig={},this.navbarConfig={},this.drawerConfig={},this.footerConfig={},this.contentTitleCardConfig={},this.toTopButtonConfig={},this._subscription=new h.w0}ngOnInit(){this._subscription.add(this.scaffoldService.scaffoldConfig$.subscribe(a=>{this.scaffoldConfig=a,this.headerConfig=a.headerConfig||{},this.navbarConfig=a.navbarConfig||{},this.drawerConfig=a.drawerConfig||{},this.footerConfig=a.footerConfig||{},this.contentTitleCardConfig=a.contentTitleCardConfig||{},this.contentTitleCardConfig.label="Home",this.toTopButtonConfig=a.toTopButtonConfig||{}}))}ngOnDestroy(){this._subscription&&this._subscription.unsubscribe()}showContainerLoading(){this.scaffoldService.scaffoldConfig.loading=!0,setTimeout(()=>{this.scaffoldService.scaffoldConfig.loading=!1},3e3)}headerImgLogoChange(a){this.headerConfig.svgLogo=a?"":"lf_logo"}footerImgLogoChange(a){this.footerConfig.svgLogo=a?"":"lf_logo"}setTheme(a){this.document.body.classList.forEach(t=>{this.document.body.classList.remove(t)}),this.document.body.classList.add(a)}}d.\u0275fac=function(a){return new(a||d)(e.Y36(_.Nr),e.Y36(u.K0))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-startpage"]],decls:129,vars:21,consts:[[1,"lf-startpage"],["mat-flat-button","","color","accent",3,"click"],[3,"ngModel","ngModelChange"],["matInput","",3,"ngModel","ngModelChange"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2,"Demo"),e.qZA(),e.TgZ(3,"p"),e._uU(4,"This is a simple demo application that lets you play around with the scaffold elements."),e.qZA(),e._UZ(5,"mat-divider"),e.TgZ(6,"h2"),e._uU(7,"Themes"),e.qZA(),e.TgZ(8,"p"),e._uU(9," You can define multiple themes and switch through them by setting the corresponding css class. "),e.qZA(),e.TgZ(10,"button",1),e.NdJ("click",function(){return t.setTheme("theme1")}),e._uU(11,"Theme 1"),e.qZA(),e.TgZ(12,"button",1),e.NdJ("click",function(){return t.setTheme("theme2")}),e._uU(13,"Theme 2"),e.qZA(),e.TgZ(14,"button",1),e.NdJ("click",function(){return t.setTheme("theme3")}),e._uU(15,"Theme 3"),e.qZA(),e.TgZ(16,"button",1),e.NdJ("click",function(){return t.setTheme("theme4")}),e._uU(17,"Theme 4"),e.qZA(),e._UZ(18,"mat-divider"),e.TgZ(19,"h2"),e._uU(20,"Scaffold"),e.qZA(),e.TgZ(21,"p"),e._uU(22," The scaffold is the global wrapper element that controls all ui elements based on its config. "),e.qZA(),e.TgZ(23,"p")(24,"button",1),e.NdJ("click",function(){return t.showContainerLoading()}),e._uU(25," Loading (3 seconds) "),e.qZA()(),e.TgZ(26,"p")(27,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.scaffoldConfig.scrollPositionRestoration=n}),e._uU(28," Restore scroll position after navigation "),e.qZA()(),e._UZ(29,"mat-divider"),e.TgZ(30,"h2"),e._uU(31,"Header"),e.qZA(),e.TgZ(32,"p"),e._uU(33," The header is a responsive mat-toolbar with a customizable logo, title, subtitle, menu-buttons and an input field. "),e.qZA(),e.TgZ(34,"p")(35,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.headerConfig.loading=n}),e._uU(36,"Loading"),e.qZA()(),e.TgZ(37,"p")(38,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.headerConfig.showRouteLoading=n}),e._uU(39," Show navigation loading "),e.qZA()(),e.TgZ(40,"mat-form-field")(41,"mat-label"),e._uU(42,"Image Logo (url)"),e.qZA(),e.TgZ(43,"input",3),e.NdJ("ngModelChange",function(n){return t.headerConfig.imgLogo=n})("ngModelChange",function(n){return t.headerImgLogoChange(n)}),e.qZA()(),e.TgZ(44,"mat-form-field")(45,"mat-label"),e._uU(46,"Titel"),e.qZA(),e.TgZ(47,"input",3),e.NdJ("ngModelChange",function(n){return t.headerConfig.title=n}),e.qZA()(),e.TgZ(48,"mat-form-field")(49,"mat-label"),e._uU(50,"Subtitel"),e.qZA(),e.TgZ(51,"input",3),e.NdJ("ngModelChange",function(n){return t.headerConfig.subtitle=n}),e.qZA()(),e.TgZ(52,"h3"),e._uU(53,"Header Input"),e.qZA(),e.TgZ(54,"p")(55,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.headerConfig.inputConfig.enable=n}),e._uU(56,"Enable"),e.qZA()(),e.TgZ(57,"mat-form-field")(58,"mat-label"),e._uU(59,"Input Label"),e.qZA(),e.TgZ(60,"input",3),e.NdJ("ngModelChange",function(n){return t.headerConfig.inputConfig.label=n}),e.qZA()(),e._UZ(61,"mat-divider"),e.TgZ(62,"h2"),e._uU(63,"Title Card"),e.qZA(),e.TgZ(64,"p"),e._uU(65," The title card is a mat-card below the header that can display the current page title and a back button. "),e.qZA(),e.TgZ(66,"p")(67,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.contentTitleCardConfig.enable=n}),e._uU(68,"Enable"),e.qZA()(),e.TgZ(69,"p")(70,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.contentTitleCardConfig.showBackButton=n}),e._uU(71," Show back button "),e.qZA()(),e.TgZ(72,"mat-form-field")(73,"mat-label"),e._uU(74,"Title"),e.qZA(),e.TgZ(75,"input",3),e.NdJ("ngModelChange",function(n){return t.contentTitleCardConfig.label=n}),e.qZA()(),e._UZ(76,"mat-divider"),e.TgZ(77,"h2"),e._uU(78,"Navbar"),e.qZA(),e.TgZ(79,"p"),e._uU(80," The navbar is a fixed navigation element that is positioned vertically left on desktop and moves horizontally to the bottom on mobile. "),e.qZA(),e.TgZ(81,"p")(82,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.navbarConfig.enable=n}),e._uU(83,"Enable"),e.qZA()(),e.TgZ(84,"p")(85,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.navbarConfig.showAllLabels=n}),e._uU(86,"Show all labels"),e.qZA()(),e._UZ(87,"mat-divider"),e.TgZ(88,"h2"),e._uU(89,"Drawer"),e.qZA(),e.TgZ(90,"p"),e._uU(91," The drawer is an empty mat-sidenav that let's you place custom html templates as its content. "),e.qZA(),e.TgZ(92,"p")(93,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.drawerConfig.enable=n}),e._uU(94,"Enable"),e.qZA()(),e.TgZ(95,"p")(96,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.drawerConfig.open=n}),e._uU(97,"Open"),e.qZA()(),e.TgZ(98,"p")(99,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.drawerConfig.fixed=n}),e._uU(100,"Fixed"),e.qZA()(),e._UZ(101,"mat-divider"),e.TgZ(102,"h2"),e._uU(103,"Footer"),e.qZA(),e.TgZ(104,"p"),e._uU(105,"The footer is a bottom element with a logo, navigation links and the copyright."),e.qZA(),e.TgZ(106,"p")(107,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.footerConfig.enable=n}),e._uU(108,"Enable"),e.qZA()(),e.TgZ(109,"mat-form-field")(110,"mat-label"),e._uU(111,"Image Logo (url)"),e.qZA(),e.TgZ(112,"input",3),e.NdJ("ngModelChange",function(n){return t.footerConfig.imgLogo=n})("ngModelChange",function(n){return t.footerImgLogoChange(n)}),e.qZA()(),e.TgZ(113,"mat-form-field")(114,"mat-label"),e._uU(115,"Copyright"),e.qZA(),e.TgZ(116,"input",3),e.NdJ("ngModelChange",function(n){return t.footerConfig.copyright=n}),e.qZA()(),e._UZ(117,"mat-divider"),e.TgZ(118,"h2"),e._uU(119,"To-Top Button"),e.qZA(),e.TgZ(120,"p"),e._uU(121,"The to-top button is a floating action button to scroll back to the top of the application."),e.qZA(),e.TgZ(122,"p")(123,"mat-slide-toggle",2),e.NdJ("ngModelChange",function(n){return t.toTopButtonConfig.enable=n}),e._uU(124,"Enable"),e.qZA()(),e.TgZ(125,"mat-form-field")(126,"mat-label"),e._uU(127,"Tooltip"),e.qZA(),e.TgZ(128,"input",3),e.NdJ("ngModelChange",function(n){return t.toTopButtonConfig.tooltip=n}),e.qZA()()()),2&a&&(e.xp6(27),e.Q6J("ngModel",t.scaffoldConfig.scrollPositionRestoration),e.xp6(8),e.Q6J("ngModel",t.headerConfig.loading),e.xp6(3),e.Q6J("ngModel",t.headerConfig.showRouteLoading),e.xp6(5),e.Q6J("ngModel",t.headerConfig.imgLogo),e.xp6(4),e.Q6J("ngModel",t.headerConfig.title),e.xp6(4),e.Q6J("ngModel",t.headerConfig.subtitle),e.xp6(4),e.Q6J("ngModel",t.headerConfig.inputConfig.enable),e.xp6(5),e.Q6J("ngModel",t.headerConfig.inputConfig.label),e.xp6(7),e.Q6J("ngModel",t.contentTitleCardConfig.enable),e.xp6(3),e.Q6J("ngModel",t.contentTitleCardConfig.showBackButton),e.xp6(5),e.Q6J("ngModel",t.contentTitleCardConfig.label),e.xp6(7),e.Q6J("ngModel",t.navbarConfig.enable),e.xp6(3),e.Q6J("ngModel",t.navbarConfig.showAllLabels),e.xp6(8),e.Q6J("ngModel",t.drawerConfig.enable),e.xp6(3),e.Q6J("ngModel",t.drawerConfig.open),e.xp6(3),e.Q6J("ngModel",t.drawerConfig.fixed),e.xp6(8),e.Q6J("ngModel",t.footerConfig.enable),e.xp6(5),e.Q6J("ngModel",t.footerConfig.imgLogo),e.xp6(4),e.Q6J("ngModel",t.footerConfig.copyright),e.xp6(7),e.Q6J("ngModel",t.toTopButtonConfig.enable),e.xp6(5),e.Q6J("ngModel",t.toTopButtonConfig.tooltip))},dependencies:[C.lW,T.Nt,f.KE,f.hX,Z.Rr,c.d,s.Fj,s.JJ,s.On],styles:[".lf-startpage[_ngcontent-%COMP%]{max-width:960px;margin:auto}.lf-startpage[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{margin:48px 0}.lf-startpage[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin:0 8px 8px 0}.lf-startpage[_ngcontent-%COMP%]   .mdc-button[_ngcontent-%COMP%]{margin:0 8px 8px 0}"]});const M=[{path:"",component:d}];class i{}i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[m.Bz.forChild(M),m.Bz]});var b=g(3306);class l{}l.\u0275fac=function(a){return new(a||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,i,b.m]})}}]);