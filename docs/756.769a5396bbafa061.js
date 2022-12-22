"use strict";(self.webpackChunkSOTNew=self.webpackChunkSOTNew||[]).push([[756],{7756:(I,d,c)=>{c.r(d),c.d(d,{LoginModule:()=>S});var g=c(6895),l=c(9197),a=c(4006),t=c(4650),f=c(2340),h=c(529);let p=(()=>{class n{constructor(e){this.http=e,this.baseUrl=f.N.url}login(e,o){return this.http.post(this.baseUrl+"/auth/login",{nombre:e,password:o})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(h.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),m=(()=>{class n{constructor(){}setItem(e,o){localStorage.setItem(e,JSON.stringify(o))}getItem(e){return JSON.parse(localStorage.getItem(e)||"{}")}setItems(e){for(const[o,i]of Object.entries(e))this.setItem(o,i)}clear(){localStorage.clear()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),v=(()=>{class n{constructor(e,o,i){this.renderer=e,this.element=o,this.router=i,this.updateIsShowing=new t.vpe,this.updateIsFirstTap=new t.vpe}onResize(e){this.setListeners()}ngAfterViewInit(){this.setListeners()}setListeners(){this.click?.(),this.touchend?.(),this.mouseenter?.(),this.mouseleave?.();const e=this.element.nativeElement;this.click=this.renderer.listen(e,"click",()=>{this.selectButton(this.type,this.isShowing?"redirect":"show")}),this.touchend=this.renderer.listen(e,"touchend",()=>{this.selectButton(this.type,this.isShowing?"redirect":"show")}),this.mouseenter=this.renderer.listen(e,"mouseenter",()=>{this.selectButton(this.type,"show")}),this.mouseleave=this.renderer.listen(e,"mouseleave",()=>{this.selectButton(this.type,"hide")}),window.innerWidth<=1025?this.click():this.touchend()}selectButton(e,o){if("show"===o)return this.updateIsShowing.next(!0),void this.updateIsFirstTap.next(!0);if("hide"===o)return this.updateIsShowing.next(!1),void this.updateIsFirstTap.next(!1);const i={BAR:()=>{this.changeRoute("/cocina-bar/bar")},CHECADOR:()=>{this.changeRoute("/cocina-bar")},COCINA:()=>{this.changeRoute("/cocina-bar/cocina")}};return i[e]?i[e]():console.error("Opcion no implementada")}changeRoute(e){this.router.navigate([e])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.Qsj),t.Y36(t.SBq),t.Y36(l.F0))},n.\u0275dir=t.lG2({type:n,selectors:[["","appMenuButton",""]],hostBindings:function(e,o){1&e&&t.NdJ("resize",function(r){return o.onResize(r)},!1,t.Jf7)},inputs:{type:"type",isShowing:"isShowing"},outputs:{updateIsShowing:"updateIsShowing",updateIsFirstTap:"updateIsFirstTap"}}),n})();const _=function(n){return{fadeOutUp:n}};function w(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",43),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.showCurtain=!i.showCurtain)}),t._UZ(1,"img",44),t.TgZ(2,"div",45),t._UZ(3,"img",46),t.TgZ(4,"h2",47),t._uU(5,"Sistema de gestion hotelera"),t.qZA()()()}if(2&n){const e=t.oxw();t.Q6J("ngClass",t.VKq(1,_,!e.showCurtain))}}function C(n,s){if(1&n&&(t.TgZ(0,"div",48)(1,"span",49),t._uU(2),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.hij(" ",e.mensajeResultadoLogin," ")}}function b(n,s){1&n&&(t.TgZ(0,"small",50),t._uU(1,"El usuario es requerido."),t.qZA())}function T(n,s){1&n&&(t.TgZ(0,"small",50),t._uU(1,"El password es requerido."),t.qZA())}function x(n,s){1&n&&(t.TgZ(0,"small",50),t._uU(1,"Usuario o contrase\xf1a incorrectos."),t.qZA())}const u=function(n){return{"show-button":n}},M=function(n){return{fingerButtonActive:n}},Z=[{path:"",component:(()=>{class n{constructor(e,o,i,r){this.router=e,this.fb=o,this.loginService=i,this.localStorageService=r,this.mensajeResultadoLogin="",this.isFingerScannerDetected=!1,this.usuarioLogin="",this.loginForm=this.fb.group({name:["",[a.kI.required]],password:["",[a.kI.required]]}),this.isUserAndPasswordCorrect=!0,this.showPassword=!1,this.showCurtain=!0,this.showCocinaButton=!1,this.showBarButton=!1,this.showChecadorButton=!1,this.isCocinaFirstTap=!1,this.isBarFirstTap=!1,this.isChecadorFirstTap=!1,this.behaviorCurtain=!0}ngOnInit(){setTimeout(()=>{this.showCurtain=!1},2e3)}isRequiredError(e){const o=this.loginForm.get(e);return o?.errors?.required&&o?.touched}login(){if(this.loginForm.invalid)return;const{name:e,password:o}=this.loginForm.value;this.loginService.login(e,o).subscribe({next:i=>{this.localStorageService.setItems({idUsuario:i.id,username:i.nombre,rol:i.rol.nombre,token:i.token,permisos:i.rol.permisos}),this.isUserAndPasswordCorrect=!0,this.router.navigate(["hotel"])},error:i=>{this.isUserAndPasswordCorrect=!1}})}toggleShowPassword(){this.showPassword=!this.showPassword}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.F0),t.Y36(a.qu),t.Y36(p),t.Y36(m))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:66,vars:26,consts:[["id","curtain","class","animated fadeInDown principal-login",3,"ngClass","click",4,"ngIf"],[1,"content-login"],[1,"curtain-login"],["viewBox","0 0 500 150","preserveAspectRatio","none",1,"size-100"],["id","shadow"],["dx","0","dy","3","stdDeviation","6"],["d","M0.00,49.99 C150.00,150.00 273.36,-30.29 502.48,66.41 L500.00,0.00 L0.00,0.00 Z",1,"svg-style-login"],[1,"curtain-login-2"],["d","M-0.90,0.30 C89.95,-14.50 355.19,223.31 493.45,-11.54 L501.35,-6.60 L-9.93,-23.39 Z",1,"svg-style-login2"],[1,"w-100","d-flex","flex-column","align-items-center","header"],["src","./assets/img/sot_logo_dark.svg","alt","Motel Logo",1,"logo-login","mb-3"],[1,"color-title"],[1,"hide-buttons"],[1,"d-flex","flex-column","justify-content-center"],[1,"div-sot-button-cocina","mb-3"],["appMenuButton","",1,"sot-button-cocina","sot-login-boton","animated","slideInLeft",3,"ngClass","type","isShowing","updateIsShowing","updateIsFirstTap"],[1,"icon-login"],[1,"icon-cocina"],[1,"font-2-5vh"],[1,"mb-3"],["appMenuButton","",1,"sot-button-bar","sot-login-boton","mr-2","animated","slideInLeft",3,"ngClass","type","isShowing","updateIsShowing","updateIsFirstTap"],[1,"icon-bar"],["appMenuButton","",1,"sot-button-checador","sot-login-boton","ml-5","animated","slideInLeft",3,"ngClass","type","isShowing","updateIsShowing","updateIsFirstTap"],[1,"fas","fa-user"],[1,"div-form-login"],["autocomplete","off",1,"card","shadow",3,"formGroup","ngSubmit"],[1,"d-flex","justify-content-center","mb-4vh"],[1,"btn-gray","d-flex","justify-content-center","finger-button-login","shadow",3,"ngClass"],[3,"ngClass"],["class","d-flex justify-content-center mb-2vh",4,"ngIf"],[1,"field","w-100"],[1,"text-center","w-100","labelTitle"],["type","text","aria-describedby","username2-help","pInputText","","formControlName","name","placeholder","Ingresa un usuario",1,"text-center"],[1,"d-flex","justify-content-center","mb-3"],[1,"p-input-icon-right","w-100"],[1,"fa","fa-eye","text-secondary","ojo",3,"click"],["aria-describedby","username2-help","pInputText","","formControlName","password","placeholder","Ingresa una Contrase\xf1a",1,"text-center",3,"type"],["class","p-error d-block",4,"ngIf"],[1,"text-center","p-3vh"],["type","submit","data-dismiss","modal",1,"btn-modal-details","btn-green"],[1,"font-3vh"],[1,"fas","fa-check","accept-button__icon"],[1,"size-txt","font-2vh"],["id","curtain",1,"animated","fadeInDown","principal-login",3,"ngClass","click"],["src","./assets/img/fondoIndex.svg","alt","Motel Logo",1,"background-login"],[1,"logo-cont-login"],["src","./assets/img/sot_logo.svg","alt","Motel Logo"],[1,"title-login"],[1,"d-flex","justify-content-center","mb-2vh"],[1,"text-danger","font-2-5vh"],[1,"p-error","d-block"]],template:function(e,o){1&e&&(t.YNc(0,w,6,3,"div",0),t.TgZ(1,"div",1)(2,"div",2),t.O4$(),t.TgZ(3,"svg",3)(4,"defs")(5,"filter",4),t._UZ(6,"feDropShadow",5),t.qZA()(),t._UZ(7,"path",6),t.qZA()(),t.kcU(),t.TgZ(8,"div",7),t.O4$(),t.TgZ(9,"svg",3)(10,"defs")(11,"filter",4),t._UZ(12,"feDropShadow",5),t.qZA()(),t._UZ(13,"path",8),t.qZA()()(),t.kcU(),t.TgZ(14,"div")(15,"div",9),t._UZ(16,"img",10),t.TgZ(17,"h1",11),t._uU(18,"SISTEMA DE GESTI\xd3N HOTELERA"),t.qZA()(),t.TgZ(19,"div",12)(20,"div",13)(21,"div",14)(22,"button",15),t.NdJ("updateIsShowing",function(r){return o.showCocinaButton=r})("updateIsFirstTap",function(r){return o.isCocinaFirstTap=r}),t.TgZ(23,"div",16),t._UZ(24,"i",17),t.qZA(),t.TgZ(25,"div",18),t._uU(26,"Cocina"),t.qZA()()(),t.TgZ(27,"div",19)(28,"button",20),t.NdJ("updateIsShowing",function(r){return o.showBarButton=r})("updateIsFirstTap",function(r){return o.isBarFirstTap=r}),t.TgZ(29,"div",16),t._UZ(30,"i",21),t.qZA(),t.TgZ(31,"div",18),t._uU(32,"Bar"),t.qZA()()(),t.TgZ(33,"div",19)(34,"button",22),t.NdJ("updateIsShowing",function(r){return o.showChecadorButton=r})("updateIsFirstTap",function(r){return o.isChecadorFirstTap=r}),t.TgZ(35,"div",16),t._UZ(36,"i",23),t.qZA(),t.TgZ(37,"div",18),t._uU(38,"Checador"),t.qZA()()()()(),t.TgZ(39,"div",24)(40,"form",25),t.NdJ("ngSubmit",function(){return o.login()}),t.TgZ(41,"div",26)(42,"div",27),t._UZ(43,"i",28),t.qZA()(),t.YNc(44,C,3,1,"div",29),t.TgZ(45,"div",26)(46,"div",30)(47,"p",31),t._uU(48,"USUARIO"),t.qZA(),t._UZ(49,"input",32),t.qZA()(),t.TgZ(50,"div",33)(51,"div",30)(52,"p",31),t._uU(53,"CONTRASE\xd1A"),t.qZA(),t.TgZ(54,"span",34)(55,"i",35),t.NdJ("click",function(){return o.toggleShowPassword()}),t.qZA(),t._UZ(56,"input",36),t.qZA(),t.YNc(57,b,2,0,"small",37),t.YNc(58,T,2,0,"small",37),t.YNc(59,x,2,0,"small",37),t.qZA()(),t.TgZ(60,"div",38)(61,"button",39)(62,"div",40),t._UZ(63,"i",41),t.qZA(),t.TgZ(64,"div",42),t._uU(65,"Aceptar"),t.qZA()()()()()()),2&e&&(t.Q6J("ngIf",o.behaviorCurtain),t.xp6(22),t.Q6J("ngClass",t.VKq(18,u,o.showCocinaButton))("type","COCINA")("isShowing",o.showCocinaButton),t.xp6(6),t.Q6J("ngClass",t.VKq(20,u,o.showBarButton))("type","BAR")("isShowing",o.showBarButton),t.xp6(6),t.Q6J("ngClass",t.VKq(22,u,o.showChecadorButton))("type","CHECADOR")("isShowing",o.showChecadorButton),t.xp6(6),t.Q6J("formGroup",o.loginForm),t.xp6(2),t.Q6J("ngClass",t.VKq(24,M,o.isFingerScannerDetected)),t.xp6(1),t.Q6J("ngClass","icon-manita_fingerprint"),t.xp6(1),t.Q6J("ngIf",""!==o.mensajeResultadoLogin),t.xp6(12),t.Q6J("type",o.showPassword?"text":"password"),t.xp6(1),t.Q6J("ngIf",o.isRequiredError("name")),t.xp6(1),t.Q6J("ngIf",o.isRequiredError("password")),t.xp6(1),t.Q6J("ngIf",!o.isUserAndPasswordCorrect))},dependencies:[g.mk,g.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,v],styles:[".font-2vh[_ngcontent-%COMP%], .font-2vh[_ngcontent-%COMP%]::placeholder{font-size:2vh;font-weight:300}.hide-buttons[_ngcontent-%COMP%]{margin-top:-8vh;margin-left:-6.8vw}.show-button[_ngcontent-%COMP%]{margin-left:6vw}.sot-login-boton[_ngcontent-%COMP%]{width:16vh;height:15vh}.div-sot-button-cocina[_ngcontent-%COMP%]{margin-right:6vh}.sot-button-cocina[_ngcontent-%COMP%]{background-color:#e0433a;color:#fff;box-shadow:0 3px 6px #a51209;border:1px solid #E0433A;border-radius:10px}.sot-button-bar[_ngcontent-%COMP%]{color:#fff;background-color:#7b09a6;box-shadow:0 3px 6px #21062c;border:1px solid #7B09A6;border-radius:10px}.sot-button-checador[_ngcontent-%COMP%]{color:#fff;background-color:#058e6e;box-shadow:0 3px 6px #033328;border:1px solid #058E6E;border-radius:10px}.labelTitle[_ngcontent-%COMP%]{font-family:Rubik,sans-serif;color:#707070;font-weight:600;font-size:18pt;margin:0}.font-2-5vh[_ngcontent-%COMP%], .font-2-5vh[_ngcontent-%COMP%]::placeholder{font-size:2.5vh}.line-h-5vh[_ngcontent-%COMP%]{line-height:5vh}.btn-modal-details[_ngcontent-%COMP%]{width:12vh;height:11vh;border-radius:10px;opacity:1;color:#fff;border:1px solid transparent}.btn-modal-details[_ngcontent-%COMP%]:disabled{color:#e8e7e7;background:#808080!important;box-shadow:0 3px 6px #3d403d80;cursor:not-allowed}.btn-green[_ngcontent-%COMP%]{background:#0AC917;box-shadow:0 3px 6px #0ac91780}.mb-4vh[_ngcontent-%COMP%]{margin-bottom:4vh}.font-3vh[_ngcontent-%COMP%], .font-3vh[_ngcontent-%COMP%]::placeholder{font-size:3vh}.div-form-login[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:-37vh}.color-title[_ngcontent-%COMP%]{color:#707070}.card[_ngcontent-%COMP%]{width:24vw;height:59vh;padding:25px;border:none}.ojo[_ngcontent-%COMP%]{border-radius:0 10px 10px 0!important}.principal-login[_ngcontent-%COMP%]{position:fixed;z-index:10;top:-10px;left:-14px;height:75%;display:block;cursor:pointer;background-color:#fff}.background-login[_ngcontent-%COMP%]{height:111%}.logo-cont-login[_ngcontent-%COMP%]{position:absolute;z-index:20;top:28%;left:70px}.logo-login[_ngcontent-%COMP%]{height:8vh}.title-login[_ngcontent-%COMP%]{font-size:8vh;color:#fff;font-family:Rubik,sans-serif}.content-login[_ngcontent-%COMP%]{position:relative;height:11vh}.curtain-login[_ngcontent-%COMP%]{height:100%;overflow:hidden;top:0;right:0;left:0;display:block}.curtain-login-2[_ngcontent-%COMP%]{height:100%;overflow:hidden;position:absolute;top:0;right:0;left:0;display:block;z-index:-1}.size-100[_ngcontent-%COMP%]{height:100%;width:100%}.icon-login[_ngcontent-%COMP%]{font-size:6vh}.finger-button-login[_ngcontent-%COMP%]{width:6vw;height:12vh;font-size:9vh;color:#801336;border-radius:10px}.fingerButtonActive[_ngcontent-%COMP%]{background-color:#801336}.fingerButtonActive[_ngcontent-%COMP%]   .icon-manita_fingerprint[_ngcontent-%COMP%]{color:#fff}.pass-margin[_ngcontent-%COMP%]{margin:0px -5vh 0px 0px}.svg-style-login[_ngcontent-%COMP%]{stroke:none;fill:#c72c41f2;filter:url(#shadow)}.svg-style-login2[_ngcontent-%COMP%]{stroke:none;fill:#e0433a80;filter:url(#shadow)}.accept-button__icon[_ngcontent-%COMP%]{font-weight:900;-webkit-text-stroke:1.5px white}@media (max-width: 1025px) and (orientation: landscape){.hide-buttons[_ngcontent-%COMP%]{margin-top:-8vh;margin-left:-10.4vw}.show-button[_ngcontent-%COMP%]{margin-left:9vw}.card[_ngcontent-%COMP%]{width:35vw;height:60vh;padding:30px}.finger-button-login[_ngcontent-%COMP%]{width:9vw}.labelTitle[_ngcontent-%COMP%]{font-size:14pt}.div-form-login[_ngcontent-%COMP%]{margin-top:-46vh}.header[_ngcontent-%COMP%]{margin-bottom:3rem}}"]}),n})()}];let O=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild(Z),l.Bz]}),n})(),S=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[p],imports:[g.ez,O,h.JF,a.UX]}),n})()}}]);