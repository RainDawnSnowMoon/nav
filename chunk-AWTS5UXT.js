import{a as Be,b as ie,f as Ge}from"./chunk-KMKV7SDY.js";import{j as _,r as ne}from"./chunk-XD7KP7G2.js";import{a as We,b as Le,f as Qe}from"./chunk-SXYN5HYN.js";import{Ba as Fe,Q as te,R as Ie,S as $e,T as Ae,aa as Te,ba as R,bb as Pe,gb as oe,hb as Ze,ja as je,mb as Xe,pb as Ye,ua as Y,ya as $,zb as He}from"./chunk-KJXJ7QMJ.js";import{$b as Se,$c as Ve,Ba as ze,Ca as y,Cb as w,D as C,Da as k,Db as E,E as pe,Eb as ye,Gc as I,Ia as ve,Ib as ke,J as j,Ka as D,La as K,M as g,N as b,Nb as De,O as he,Oa as P,Ob as V,Pa as u,Qb as M,Rb as we,Sa as Ce,Sb as Me,Tc as X,W as ue,Wc as d,Yc as Oe,Zc as Ee,_b as xe,ab as ge,ac as x,bc as f,cc as Ne,fa as me,ga as p,gc as B,jc as G,la as F,lc as m,mc as S,na as O,nc as N,pa as fe,q as v,qb as q,qc as W,r as T,rc as L,sa as a,sb as be,sc as Z,ub as J,v as ce,vb as r,w as de,wb as ee,x as U,xc as Re,zc as _e}from"./chunk-4NIUZYF5.js";var re=["*"],nt=["inputElement"],it=["nz-checkbox",""],ot=(i,s)=>s.value;function rt(i,s){if(i&1&&(x(0,"label",0),Re(1),f()),i&2){let e=s.$implicit,n=m(2);V("nzValue",e.value)("nzName",n.nzName())("nzDisabled",e.disabled||n.finalDisabled()),q(),_e(" ",e.label," ")}}function st(i,s){if(i&1&&xe(0,rt,2,4,"label",0,ot),i&2){let e=m();Se(e.normalizedOptions())}}var at=(()=>{class i{nzOnChange=new D;checkboxList=[];addCheckbox(e){this.checkboxList.push(e)}removeCheckbox(e){this.checkboxList.splice(this.checkboxList.indexOf(e),1)}onChange(){let e=this.checkboxList.filter(n=>n.nzChecked).map(n=>n.nzValue);this.nzOnChange.emit(e)}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=w({type:i,selectors:[["nz-checkbox-wrapper"]],hostAttrs:[1,"ant-checkbox-group"],outputs:{nzOnChange:"nzOnChange"},exportAs:["nzCheckboxWrapper"],ngContentSelectors:re,decls:1,vars:0,template:function(n,t){n&1&&(S(),N(0))},encapsulation:2,changeDetection:0})}return i})(),Ue=new fe("NZ_CHECKBOX_GROUP"),Ke=(()=>{class i{ngZone;elementRef;cdr;focusMonitor;directionality;dir="ltr";destroy$=new v;isNzDisableFirstChange=!0;onChange=()=>{};onTouched=()=>{};inputElement;nzCheckedChange=new D;nzValue=null;nzAutoFocus=!1;nzDisabled=!1;nzIndeterminate=!1;nzChecked=!1;nzId=null;nzName=null;innerCheckedChange(e){!this.nzDisabled&&!this.checkboxGroupComponent?.finalDisabled()&&(this.setValue(e),this.nzCheckboxWrapperComponent?.onChange(),this.checkboxGroupComponent?.onCheckedChange(this.nzValue,e))}writeValue(e){this.nzChecked=e,this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||e,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}focus(){this.focusMonitor.focusVia(this.inputElement,"keyboard")}blur(){this.inputElement.nativeElement.blur()}nzCheckboxWrapperComponent=a(at,{optional:!0});checkboxGroupComponent=a(Ue,{optional:!0});nzFormStatusService=a(Qe,{optional:!0});constructor(e,n,t,o,l){this.ngZone=e,this.elementRef=n,this.cdr=t,this.focusMonitor=o,this.directionality=l,this.checkboxGroupComponent&&Ve(()=>{let h=this.checkboxGroupComponent.value()||[];this.setValue(h.includes(this.nzValue)),this.cdr.markForCheck()})}ngOnInit(){this.focusMonitor.monitor(this.elementRef,!0).pipe(p(this.destroy$)).subscribe(e=>{e||Promise.resolve().then(()=>this.onTouched())}),this.nzCheckboxWrapperComponent?.addCheckbox(this),this.directionality.change.pipe(p(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value,te(this.elementRef.nativeElement,"click").pipe(p(this.destroy$)).subscribe(e=>{e.preventDefault(),this.focus(),!this.nzDisabled&&this.ngZone.run(()=>{this.innerCheckedChange(!this.nzChecked),this.cdr.markForCheck()})}),te(this.inputElement.nativeElement,"click").pipe(p(this.destroy$)).subscribe(e=>e.stopPropagation())}ngAfterViewInit(){this.nzAutoFocus&&this.focus()}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef),this.nzCheckboxWrapperComponent?.removeCheckbox(this),this.destroy$.next(),this.destroy$.complete()}setValue(e){this.nzChecked=e,this.onChange(e),this.nzCheckedChange.emit(e)}static \u0275fac=function(n){return new(n||i)(r(K),r(u),r(X),r(Y),r(R))};static \u0275cmp=w({type:i,selectors:[["","nz-checkbox",""]],viewQuery:function(n,t){if(n&1&&W(nt,7),n&2){let o;L(o=Z())&&(t.inputElement=o.first)}},hostAttrs:[1,"ant-checkbox-wrapper"],hostVars:10,hostBindings:function(n,t){n&2&&M("ant-checkbox-group-item",!!t.checkboxGroupComponent)("ant-checkbox-wrapper-in-form-item",!!t.nzFormStatusService)("ant-checkbox-wrapper-checked",t.nzChecked)("ant-checkbox-wrapper-disabled",t.nzDisabled||(t.checkboxGroupComponent==null?null:t.checkboxGroupComponent.finalDisabled()))("ant-checkbox-rtl",t.dir==="rtl")},inputs:{nzValue:"nzValue",nzAutoFocus:[2,"nzAutoFocus","nzAutoFocus",d],nzDisabled:[2,"nzDisabled","nzDisabled",d],nzIndeterminate:[2,"nzIndeterminate","nzIndeterminate",d],nzChecked:[2,"nzChecked","nzChecked",d],nzId:"nzId",nzName:"nzName"},outputs:{nzCheckedChange:"nzCheckedChange"},exportAs:["nzCheckbox"],features:[I([{provide:oe,useExisting:F(()=>i),multi:!0}])],attrs:it,ngContentSelectors:re,decls:6,vars:12,consts:[["inputElement",""],[1,"ant-checkbox"],["type","checkbox",1,"ant-checkbox-input",3,"ngModelChange","checked","ngModel","disabled"],[1,"ant-checkbox-inner"]],template:function(n,t){if(n&1){let o=B();S(),x(0,"span",1)(1,"input",2,0),G("ngModelChange",function(h){return y(o),k(t.innerCheckedChange(h))}),f(),Ne(3,"span",3),f(),x(4,"span"),N(5),f()}if(n&2){let o;M("ant-checkbox-checked",t.nzChecked&&!t.nzIndeterminate)("ant-checkbox-disabled",t.nzDisabled||(t.checkboxGroupComponent==null?null:t.checkboxGroupComponent.finalDisabled()))("ant-checkbox-indeterminate",t.nzIndeterminate),q(),V("checked",t.nzChecked)("ngModel",t.nzChecked)("disabled",t.nzDisabled||((o=t.checkboxGroupComponent==null?null:t.checkboxGroupComponent.finalDisabled())!==null&&o!==void 0?o:!1)),De("autofocus",t.nzAutoFocus?"autofocus":null)("id",t.nzId)("name",t.nzName||(t.checkboxGroupComponent==null?null:t.checkboxGroupComponent.nzName()))}},dependencies:[He,Ze,Xe,Ye],encapsulation:2,changeDetection:0})}return i})(),lt=(()=>{class i{onChange=()=>{};onTouched=()=>{};isDisabledFirstChange=!0;directionality=a(R);nzName=P(null);nzDisabled=P(!1,{transform:d});nzOptions=P([]);value=Ce(null);finalDisabled=Ee(()=>this.nzDisabled());dir=Le(this.directionality.change,{initialValue:this.directionality.value});normalizedOptions=Oe(()=>ct(this.nzOptions()));constructor(){let e=a(u),n=a(Y),t=a(ve);ge(()=>{n.monitor(e,!0).pipe(We(t)).subscribe(o=>{o||this.onTouched()}),t.onDestroy(()=>{n.stopMonitoring(e)})})}writeValue(e){this.value.set(e)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.finalDisabled.set(this.isDisabledFirstChange&&this.nzDisabled()||e),this.isDisabledFirstChange=!1}onCheckedChange(e,n){this.finalDisabled()||(this.value.update(t=>n?t?.concat(e)||[e]:t?.filter(o=>o!==e)||[]),this.onChange(this.value()))}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=w({type:i,selectors:[["nz-checkbox-group"]],hostAttrs:[1,"ant-checkbox-group"],hostVars:2,hostBindings:function(n,t){n&2&&M("ant-checkbox-group-rtl",t.dir()==="rtl")},inputs:{nzName:[1,"nzName"],nzDisabled:[1,"nzDisabled"],nzOptions:[1,"nzOptions"]},exportAs:["nzCheckboxGroup"],features:[I([{provide:oe,useExisting:F(()=>i),multi:!0},{provide:Ue,useExisting:F(()=>i)}])],ngContentSelectors:re,decls:2,vars:0,consts:[["nz-checkbox","",3,"nzValue","nzName","nzDisabled"]],template:function(n,t){n&1&&(S(),N(0,0,null,st,2,0))},dependencies:[Ke],encapsulation:2,changeDetection:0})}return i})();function ct(i){return i.map(s=>typeof s=="string"||typeof s=="number"?{label:`${s}`,value:s}:s)}var It=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=E({type:i});static \u0275inj=O({imports:[Ke,lt]})}return i})();var pt=["*"];function ht(i,s){if(i&1){let e=B();x(0,"div",0),G("@slideMotion.done",function(t){y(e);let o=m();return k(o.onAnimationEvent(t))})("mouseenter",function(){y(e);let t=m();return k(t.setMouseState(!0))})("mouseleave",function(){y(e);let t=m();return k(t.setMouseState(!1))}),N(1),f()}if(i&2){let e=m();we(e.nzOverlayStyle),Me(e.nzOverlayClassName),M("ant-dropdown-rtl",e.dir==="rtl"),V("@slideMotion",void 0)("@.disabled",!!(e.noAnimation!=null&&e.noAnimation.nzNoAnimation))("nzNoAnimation",e.noAnimation==null?null:e.noAnimation.nzNoAnimation)}}var ut="dropDown",mt=[_.bottomLeft,_.bottomRight,_.topRight,_.topLeft],dn=(()=>{let i,s=[],e=[];return class se{static{let t=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;i=[$e()],de(null,null,i,{kind:"field",name:"nzBackdrop",static:!1,private:!1,access:{has:o=>"nzBackdrop"in o,get:o=>o.nzBackdrop,set:(o,l)=>{o.nzBackdrop=l}},metadata:t},s,e),t&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}nzConfigService;renderer;viewContainerRef;platform;_nzModuleName=ut;elementRef=a(u);overlay=a(Fe);portal;overlayRef=null;destroy$=new v;positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown");inputVisible$=new T(!1);nzTrigger$=new T("hover");overlayClose$=new v;nzDropdownMenu=null;nzTrigger="hover";nzMatchWidthElement=null;nzBackdrop=U(this,s,!1);nzClickHide=(U(this,e),!0);nzDisabled=!1;nzVisible=!1;nzOverlayClassName="";nzOverlayStyle={};nzPlacement="bottomLeft";nzVisibleChange=new D;setDropdownMenuValue(t,o){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(t,o)}constructor(t,o,l,h){this.nzConfigService=t,this.renderer=o,this.viewContainerRef=l,this.platform=h}ngAfterViewInit(){if(this.nzDropdownMenu){let t=this.elementRef.nativeElement,o=g(j(t,"mouseenter").pipe(C(()=>!0)),j(t,"mouseleave").pipe(C(()=>!1))),l=this.nzDropdownMenu.mouseState$,h=g(l,o),H=j(t,"click").pipe(C(()=>!this.nzVisible)),Q=this.nzTrigger$.pipe(me(c=>c==="hover"?h:c==="click"?H:ce)),A=this.nzDropdownMenu.descendantMenuItemClick$.pipe(b(()=>this.nzClickHide),C(()=>!1)),qe=g(Q,A,this.overlayClose$).pipe(b(()=>!this.nzDisabled)),Je=g(this.inputVisible$,qe);pe([Je,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe(C(([c,ae])=>c||ae),he(150),ue(),b(()=>this.platform.isBrowser),p(this.destroy$)).subscribe(c=>{let le=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:t).getBoundingClientRect().width;if(this.nzVisible!==c&&this.nzVisibleChange.emit(c),this.nzVisible=c,c){if(!this.overlayRef)this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:le,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&this.nzTrigger==="click",scrollStrategy:this.overlay.scrollStrategies.reposition()}),g(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe(b(z=>!this.elementRef.nativeElement.contains(z.target))),this.overlayRef.keydownEvents().pipe(b(z=>z.keyCode===27&&!Te(z)))).pipe(p(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)});else{let z=this.overlayRef.getConfig();z.minWidth=le}this.positionStrategy.withPositions([_[this.nzPlacement],...mt]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new je(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)}else this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe(p(this.destroy$)).subscribe(c=>{c.toState==="void"&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(t){let{nzVisible:o,nzDisabled:l,nzOverlayClassName:h,nzOverlayStyle:H,nzTrigger:Q}=t;if(Q&&this.nzTrigger$.next(this.nzTrigger),o&&this.inputVisible$.next(this.nzVisible),l){let A=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(A,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(A,"disabled")}h&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),H&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}static \u0275fac=function(o){return new(o||se)(r(Ie),r(J),r(ee),r(Ae))};static \u0275dir=ye({type:se,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:[2,"nzBackdrop","nzBackdrop",d],nzClickHide:[2,"nzClickHide","nzClickHide",d],nzDisabled:[2,"nzDisabled","nzDisabled",d],nzVisible:[2,"nzVisible","nzVisible",d],nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[ze]})}})(),ft=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=E({type:i});static \u0275inj=O({})}return i})();var pn=(()=>{class i{cdr;elementRef;renderer;viewContainerRef;directionality;mouseState$=new T(!1);nzMenuService=a(ie);isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$;descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$;animationStateChange$=new D;nzOverlayClassName="";nzOverlayStyle={};templateRef;dir="ltr";destroy$=new v;onAnimationEvent(e){this.animationStateChange$.emit(e)}setMouseState(e){this.mouseState$.next(e)}setValue(e,n){this[e]=n,this.cdr.markForCheck()}noAnimation=a(ne,{host:!0,optional:!0});constructor(e,n,t,o,l){this.cdr=e,this.elementRef=n,this.renderer=t,this.viewContainerRef=o,this.directionality=l}ngOnInit(){this.directionality.change?.pipe(p(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static \u0275fac=function(n){return new(n||i)(r(X),r(u),r(J),r(ee),r(R))};static \u0275cmp=w({type:i,selectors:[["nz-dropdown-menu"]],viewQuery:function(n,t){if(n&1&&W(be,7),n&2){let o;L(o=Z())&&(t.templateRef=o.first)}},exportAs:["nzDropdownMenu"],features:[I([ie,{provide:Be,useValue:!0}])],ngContentSelectors:pt,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"mouseenter","mouseleave","nzNoAnimation"]],template:function(n,t){n&1&&(S(),ke(0,ht,2,9,"ng-template"))},dependencies:[ne],encapsulation:2,data:{animation:[Pe]},changeDetection:0})}return i})(),hn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=E({type:i});static \u0275inj=O({imports:[ft,Ge]})}return i})(),un=[new $({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new $({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new $({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new $({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})];export{dn as a,pn as b,hn as c,Ke as d,lt as e,It as f};
