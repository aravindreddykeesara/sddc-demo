"use strict";(self.webpackChunkui_app=self.webpackChunkui_app||[]).push([[578],{4578:(ie,_,s)=>{s.r(_),s.d(_,{TokenMgmtModule:()=>oe});var e=s(5e3),p=s(3251),g=s(6087),f=s(4847),d=s(4999),v=s(4687),r=s(8570),x=s(9808),T=s(4021),m=s(3075);function b(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"app-success-popup",31),e.NdJ("closePopupEvent",function(){return e.CHM(n),e.oxw().closeSuccessPopup()}),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("textData",n.successPopupTextData)}}function h(t,o){1&t&&(e.O4$(),e.TgZ(0,"svg",59),e._UZ(1,"path",60),e.qZA())}function w(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"li",55),e.NdJ("click",function(){const c=e.CHM(n).$implicit,l=e.oxw(3);return l.selectedOrg=c,l.showOrgOptions=!l.showOrgOptions}),e.TgZ(1,"span",56),e._uU(2),e.qZA(),e.TgZ(3,"span",57),e.YNc(4,h,2,0,"svg",58),e.qZA()()}if(2&t){const n=o.$implicit,i=e.oxw(3);e.xp6(2),e.hij("",n," "),e.xp6(2),e.Q6J("ngIf",n===i.selectedOrg)}}function Z(t,o){if(1&t&&(e.O4$(),e.kcU(),e.TgZ(0,"ul",53),e.YNc(1,w,5,2,"li",54),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",n.orgsList)}}function k(t,o){1&t&&(e.O4$(),e.TgZ(0,"svg",59),e._UZ(1,"path",60),e.qZA())}function A(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"li",55),e.NdJ("click",function(){const c=e.CHM(n).$implicit,l=e.oxw(3);return l.templateDefinition=c,l.showTemplateDefOptions=!l.showTemplateDefOptions}),e.TgZ(1,"span",56),e._uU(2),e.qZA(),e.TgZ(3,"span",57),e.YNc(4,k,2,0,"svg",58),e.qZA()()}if(2&t){const n=o.$implicit,i=e.oxw(3);e.xp6(2),e.hij("",n," "),e.xp6(2),e.Q6J("ngIf",n===i.templateDefinition)}}function y(t,o){if(1&t&&(e.O4$(),e.kcU(),e.TgZ(0,"ul",53),e.YNc(1,A,5,2,"li",54),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",n.templateDefs)}}function C(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"div",32)(1,"div",33)(2,"form",34)(3,"div",34)(4,"div")(5,"div")(6,"h3",6),e._uU(7,"Token Information"),e.qZA(),e.TgZ(8,"p",35),e._uU(9,"Please provide all the required details below to add a new Token. "),e.qZA()(),e.TgZ(10,"div",36)(11,"div",37)(12,"div")(13,"label",38),e._uU(14," Organization "),e.qZA(),e.TgZ(15,"div",39)(16,"button",40),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return a.showOrgOptions=!a.showOrgOptions}),e.TgZ(17,"span",41),e._uU(18),e.qZA(),e.TgZ(19,"span",42),e.O4$(),e.TgZ(20,"svg",43),e._UZ(21,"path",44),e.qZA()()(),e.YNc(22,Z,2,1,"ul",45),e.qZA()()(),e.kcU(),e.TgZ(23,"div",37)(24,"div")(25,"label",38),e._uU(26," Account "),e.qZA(),e.TgZ(27,"div",39)(28,"button",40),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return a.showTemplateDefOptions=!a.showTemplateDefOptions}),e.TgZ(29,"span",41),e._uU(30),e.qZA(),e.TgZ(31,"span",42),e.O4$(),e.TgZ(32,"svg",43),e._UZ(33,"path",44),e.qZA()()(),e.YNc(34,y,2,1,"ul",45),e.qZA()()(),e.kcU(),e.TgZ(35,"div",37)(36,"label",46),e._uU(37," Token Name "),e.qZA(),e.TgZ(38,"div",47),e._UZ(39,"input",48),e.qZA()(),e.TgZ(40,"div",37)(41,"label",46),e._uU(42," Token Value "),e.qZA(),e.TgZ(43,"div",47),e._UZ(44,"input",48),e.qZA()()()()(),e.TgZ(45,"div",49)(46,"div",50)(47,"button",51),e.NdJ("click",function(){return e.CHM(n),e.oxw().displayAddToken=!1}),e._uU(48,"Cancel"),e.qZA(),e.TgZ(49,"button",52),e.NdJ("click",function(){return e.CHM(n),e.oxw().displaySuccessPopupData("New")}),e._uU(50,"Save"),e.qZA()()()()()()}if(2&t){const n=e.oxw();e.Q6J("@dropdownInOut",void 0),e.xp6(18),e.hij(" ",n.selectedOrg," "),e.xp6(4),e.Q6J("ngIf",n.showOrgOptions),e.xp6(8),e.hij(" ",n.templateDefinition," "),e.xp6(4),e.Q6J("ngIf",n.showTemplateDefOptions)}}function O(t,o){1&t&&(e.TgZ(0,"th",61),e._uU(1," Token Name "),e.qZA())}function S(t,o){if(1&t&&(e.TgZ(0,"td",62)(1,"span",63),e._uU(2),e.qZA()()),2&t){const n=o.$implicit;e.xp6(2),e.Oqu(n.tokenName)}}function U(t,o){1&t&&(e.TgZ(0,"th",61),e._uU(1," Organization "),e.qZA())}function D(t,o){if(1&t&&(e.TgZ(0,"td",62),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n.organization," ")}}function q(t,o){1&t&&(e.TgZ(0,"th",61),e._uU(1," Account "),e.qZA())}function N(t,o){if(1&t&&(e.TgZ(0,"td",62),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n.account," ")}}function M(t,o){1&t&&(e.O4$(),e.TgZ(0,"svg",59),e._UZ(1,"path",60),e.qZA())}function J(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"li",55),e.NdJ("click",function(){const c=e.CHM(n).$implicit,l=e.oxw(4);return l.selectedOrg=c,l.showOrgOptions=!l.showOrgOptions}),e.TgZ(1,"span",56),e._uU(2),e.qZA(),e.TgZ(3,"span",57),e.YNc(4,M,2,0,"svg",58),e.qZA()()}if(2&t){const n=o.$implicit,i=e.oxw(4);e.xp6(2),e.hij("",n," "),e.xp6(2),e.Q6J("ngIf",n===i.selectedOrg)}}function Q(t,o){if(1&t&&(e.O4$(),e.kcU(),e.TgZ(0,"ul",53),e.YNc(1,J,5,2,"li",54),e.qZA()),2&t){const n=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",n.orgsList)}}function Y(t,o){1&t&&(e.O4$(),e.TgZ(0,"svg",59),e._UZ(1,"path",60),e.qZA())}function P(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"li",55),e.NdJ("click",function(){const c=e.CHM(n).$implicit,l=e.oxw(4);return l.templateDefinition=c,l.showTemplateDefOptions=!l.showTemplateDefOptions}),e.TgZ(1,"span",56),e._uU(2),e.qZA(),e.TgZ(3,"span",57),e.YNc(4,Y,2,0,"svg",58),e.qZA()()}if(2&t){const n=o.$implicit,i=e.oxw(4);e.xp6(2),e.hij("",n," "),e.xp6(2),e.Q6J("ngIf",n===i.templateDefinition)}}function $(t,o){if(1&t&&(e.O4$(),e.kcU(),e.TgZ(0,"ul",53),e.YNc(1,P,5,2,"li",54),e.qZA()),2&t){const n=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",n.templateDefs)}}function I(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"div",67)(1,"div",33)(2,"form",34)(3,"div",34)(4,"div")(5,"div")(6,"h3",6),e._uU(7,"Edit Token Information"),e.qZA(),e.TgZ(8,"p",35),e._uU(9,"Please provide required details below to modify existing token."),e.qZA()(),e.TgZ(10,"div",36)(11,"div",37)(12,"div")(13,"label",38),e._uU(14," Organization "),e.qZA(),e.TgZ(15,"div",39)(16,"button",40),e.NdJ("click",function(){e.CHM(n);const a=e.oxw(2);return a.showOrgOptions=!a.showOrgOptions}),e.TgZ(17,"span",41),e._uU(18),e.qZA(),e.TgZ(19,"span",42),e.O4$(),e.TgZ(20,"svg",43),e._UZ(21,"path",44),e.qZA()()(),e.YNc(22,Q,2,1,"ul",45),e.qZA()()(),e.kcU(),e.TgZ(23,"div",37)(24,"div")(25,"label",38),e._uU(26," Account "),e.qZA(),e.TgZ(27,"div",39)(28,"button",40),e.NdJ("click",function(){e.CHM(n);const a=e.oxw(2);return a.showTemplateDefOptions=!a.showTemplateDefOptions}),e.TgZ(29,"span",41),e._uU(30),e.qZA(),e.TgZ(31,"span",42),e.O4$(),e.TgZ(32,"svg",43),e._UZ(33,"path",44),e.qZA()()(),e.YNc(34,$,2,1,"ul",45),e.qZA()()(),e.kcU(),e.TgZ(35,"div",37)(36,"label",46),e._uU(37," Token Name "),e.qZA(),e.TgZ(38,"div",47),e._UZ(39,"input",68),e.qZA()(),e.TgZ(40,"div",37)(41,"label",46),e._uU(42," Token Value "),e.qZA(),e.TgZ(43,"div",47),e._UZ(44,"input",48),e.qZA()()()()(),e.TgZ(45,"div",49)(46,"div",50)(47,"button",51),e.NdJ("click",function(){return e.CHM(n),e.oxw(2).editTokenDisplay=!1}),e._uU(48,"Cancel"),e.qZA(),e.TgZ(49,"button",52),e.NdJ("click",function(){return e.CHM(n),e.oxw(2).displaySuccessPopupData("Edit")}),e._uU(50,"Save"),e.qZA()()()()()()}if(2&t){const n=e.oxw().$implicit,i=e.oxw();e.xp6(18),e.hij(" ",null==n?null:n.organization," "),e.xp6(4),e.Q6J("ngIf",i.showOrgOptions),e.xp6(8),e.hij(" ",n.account," "),e.xp6(4),e.Q6J("ngIf",i.showTemplateDefOptions),e.xp6(5),e.s9C("value",n.tokenName)}}function z(t,o){if(1&t&&(e.TgZ(0,"td",64)(1,"div",65),e.YNc(2,I,51,5,"div",66),e.qZA()()),2&t){const n=o.$implicit,i=e.oxw();e.uIk("colspan",i.displayedColumns.length),e.xp6(1),e.Q6J("@detailExpand",n==i.expandedElement?"expanded":"collapsed"),e.xp6(1),e.Q6J("ngIf",i.editTokenDisplay)}}function E(t,o){1&t&&e._UZ(0,"th",61)}function H(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"td",62)(1,"div"),e.O4$(),e.TgZ(2,"svg",69),e.NdJ("click",function(a){const l=e.CHM(n).$implicit,u=e.oxw();return a.stopPropagation(),u.editTokenDisplay=!0,u.expandedElement=u.expandedElement===l?null:l}),e._UZ(3,"path",70)(4,"path",71),e.qZA()()()}}function F(t,o){1&t&&e._UZ(0,"tr",72)}function L(t,o){if(1&t&&e._UZ(0,"tr",73),2&t){const n=o.$implicit,i=e.oxw();e.ekj("expanded-row",i.expandedElement===n),e.Q6J("@fadeInUp",void 0)}}function j(t,o){1&t&&e._UZ(0,"tr",74)}const B=function(){return["expandedDetail"]},R=function(){return[5,10,25,100]};let V=(()=>{class t{constructor(){this.displayedColumns=["tokenName","organization","account","icons"],this.displaySuccessPopup=!1,this.showOrgOptions=!1,this.selectedOrg="Select Organization",this.orgsList=["Test Customer 1","Test Customer 3","Test Customer 4"],this.showTemplateDefOptions=!1,this.templateDefinition="Select Account",this.templateDefs=["account(832783263832)","account(1546634243)","account(321266677)"],this.successPopupTextData={primaryText:"Added successfully",secondaryText:"The Organization ID and Account have been verified against the provided token. The new token is saved"},this.displayAddSddcOptions=!1,this.displayAddToken=!1,this.editTokenDisplay=!0,this.dataSource=new d.by(v.BR)}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(n){this.dataSource.filter=n.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}displaySuccessPopupData(n){this.displaySuccessPopup=!0,"Edit"==n&&(this.successPopupTextData={primaryText:"Edited successfully",secondaryText:"The Organization ID and Account have been verified against the provided token. The token value is replaced and saved"}),"New"==n&&(this.successPopupTextData={primaryText:"Added successfully",secondaryText:"The Organization ID and Account have been verified against the provided token. The new token is saved"})}closeSuccessPopup(){this.displaySuccessPopup=!1,this.displayAddToken=!1}saveSddcExtract(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-available-sddc-tokens"]],viewQuery:function(n,i){if(1&n&&(e.Gf(g.NW,5),e.Gf(f.YE,5)),2&n){let a;e.iGM(a=e.CRH())&&(i.paginator=a.first),e.iGM(a=e.CRH())&&(i.sort=a.first)}},decls:43,vars:9,consts:[[3,"textData","closePopupEvent",4,"ngIf"],[1,"px-4","pb-4","sm:px-6","lg:px-8"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start start","fxLayoutAlign.xs","start stretch","fxLayoutGap","24px",1,"mt-4","mb-4","container"],["fxFlex","","fxFlex.xs","auto",1,"bg-white","shadow","sm:rounded-lg"],[1,"px-4","py-5","sm:p-6"],[1,"sm:flex","sm:items-start","sm:justify-between"],[1,"text-lg","leading-6","font-medium","text-gray-900"],[1,"mt-2","max-w-xl","text-sm","text-gray-500"],[1,"relative"],[1,"inline-flex","shadow-sm","rounded-md","divide-x","divide-indigo-600"],[1,"relative","z-0","inline-flex","shadow-sm","rounded-md","divide-x","divide-indigo-600"],["type","button",1,"inline-flex","items-center","justify-center","rounded-md","border","border-transparent","bg-indigo-600","px-2","text-sm","font-medium","text-white","shadow-sm","hover:bg-indigo-700","focus:outline-none","focus:ring-2","focus:ring-indigo-500","focus:ring-offset-2","sm:w-auto",3,"click"],[1,"ml-2.5","mr-1","text-sm","font-medium"],["class","px-4 py-5 sm:p-6 bg-gray-50",4,"ngIf"],[1,"mt-8","flex","flex-col"],[1,"-my-2","-mx-4","overflow-x-auto","sm:-mx-6","lg:-mx-8"],[1,"inline-block","min-w-full","py-2","align-middle","md:px-6","lg:px-8"],[1,"overflow-hidden","shadow","ring-1","ring-black","ring-opacity-5","md:rounded-lg"],["mat-table","","multiTemplateDataRows","","matSort","",1,"min-w-full","divide-y","divide-gray-300",3,"dataSource"],["matColumnDef","tokenName"],["mat-header-cell","","mat-sort-header","","class","bg-gray-50 px-3 py-3.5 text-left text-sm font-semibold text-gray-900",4,"matHeaderCellDef"],["mat-cell","","class","whitespace-nowrap px-3 py-4 text-sm text-gray-500",4,"matCellDef"],["matColumnDef","organization"],["matColumnDef","account"],["matColumnDef","expandedDetail"],["mat-cell","",4,"matCellDef"],["matColumnDef","icons"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","hover:bg-hover trans-ease-out cursor-pointer","mat-row","",3,"expanded-row",4,"matRowDef","matRowDefColumns"],["mat-row","","class","detail-row",4,"matRowDef","matRowDefColumns"],["aria-label","Select page of users",3,"pageSizeOptions"],[3,"textData","closePopupEvent"],[1,"px-4","py-5","sm:p-6","bg-gray-50"],[1,""],[1,"space-y-8","divide-y","divide-gray-200"],[1,"mt-1","text-sm","text-gray-500"],[1,"mt-6","grid","grid-cols-1","gap-y-6","gap-x-4","sm:grid-cols-6"],[1,"sm:col-span-3"],["id","listbox-label",1,"block","text-sm","font-medium","text-gray-700"],[1,"mt-1","relative"],["type","button","aria-haspopup","listbox","aria-expanded","true","aria-labelledby","listbox-label",1,"relative","w-full","bg-white","border","border-gray-300","rounded-md","shadow-sm","pl-3","pr-10","py-2","text-left","cursor-default","focus:outline-none","focus:ring-1","focus:ring-indigo-500","focus:border-indigo-500","sm:text-sm",3,"click"],[1,"block","truncate"],[1,"absolute","inset-y-0","right-0","flex","items-center","pr-2","pointer-events-none"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor","aria-hidden","true",1,"h-5","w-5","text-gray-400"],["fill-rule","evenodd","d","M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule","evenodd"],["class","absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm","tabindex","-1","role","listbox","aria-labelledby","listbox-label","aria-activedescendant","listbox-option-3",4,"ngIf"],["for","last-name",1,"block","text-sm","font-medium","text-gray-700"],[1,"mt-1"],["type","text","name","last-name","id","last-name","autocomplete","family-name",1,"shadow-sm","focus:ring-indigo-500","focus:border-indigo-500","block","w-full","sm:text-sm","border-gray-300","rounded-md"],[1,"pt-5"],[1,"flex","justify-end"],["type","button",1,"bg-white","py-2","px-4","border","border-gray-300","rounded-md","shadow-sm","text-sm","font-medium","text-gray-700","hover:bg-gray-50","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-indigo-500",3,"click"],["type","submit",1,"ml-3","inline-flex","justify-center","py-2","px-4","border","border-transparent","shadow-sm","text-sm","font-medium","rounded-md","text-white","bg-indigo-600","hover:bg-indigo-700","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-indigo-500",3,"click"],["tabindex","-1","role","listbox","aria-labelledby","listbox-label","aria-activedescendant","listbox-option-3",1,"absolute","z-10","mt-1","w-full","bg-white","shadow-lg","max-h-60","rounded-md","py-1","text-base","ring-1","ring-black","ring-opacity-5","overflow-auto","focus:outline-none","sm:text-sm"],["class","text-gray-900 cursor-default select-none relative py-2 pl-8 pr-4","id","listbox-option-0","role","option",3,"click",4,"ngFor","ngForOf"],["id","listbox-option-0","role","option",1,"text-gray-900","cursor-default","select-none","relative","py-2","pl-8","pr-4",3,"click"],[1,"font-normal","block","truncate"],[1,"text-indigo-600","absolute","inset-y-0","left-0","flex","items-center","pl-1.5"],["class","h-5 w-5","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor","aria-hidden","true",4,"ngIf"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor","aria-hidden","true",1,"h-5","w-5"],["fill-rule","evenodd","d","M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule","evenodd"],["mat-header-cell","","mat-sort-header","",1,"bg-gray-50","px-3","py-3.5","text-left","text-sm","font-semibold","text-gray-900"],["mat-cell","",1,"whitespace-nowrap","px-3","py-4","text-sm","text-gray-500"],[1,"text-gray-900","font-medium"],["mat-cell",""],[1,"element-detail"],["class","bg-gray-50 mt-4 mb-4 px-4 py-5 sm:p-6 rounded-lg ",4,"ngIf"],[1,"bg-gray-50","mt-4","mb-4","px-4","py-5","sm:p-6","rounded-lg"],["type","text","name","last-name","id","last-name","autocomplete","family-name",1,"shadow-sm","focus:ring-indigo-500","focus:border-indigo-500","block","w-full","sm:text-sm","border-gray-300","rounded-md",3,"value"],["xmlns","http://www.w3.org/2000/svg","aria-hidden","true","role","img","preserveAspectRatio","xMidYMid meet","viewBox","0 0 24 24",1,"h-6","w-6",2,"vertical-align","-0.125em",3,"click"],["fill","currentColor","d","m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585l1.594-1.58zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006v-1.589z"],["fill","currentColor","d","M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"],["mat-header-row",""],["mat-row","","mat-row","",1,"hover:bg-hover","trans-ease-out","cursor-pointer"],["mat-row","",1,"detail-row"]],template:function(n,i){1&n&&(e.YNc(0,b,1,1,"app-success-popup",0),e.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div")(7,"h3",6),e._uU(8," Active Tokens "),e.qZA(),e.TgZ(9,"div",7)(10,"p"),e._uU(11," The list of previously saved access token can be seen below. To add a new Token, use the action button provided "),e.qZA()()(),e.TgZ(12,"div")(13,"div",8)(14,"div",9)(15,"div",10)(16,"button",11),e.NdJ("click",function(){return i.displayAddToken=!0}),e.TgZ(17,"p",12),e._uU(18,"Add Token"),e.qZA()()()()()()()(),e.YNc(19,C,51,5,"div",13),e.qZA()(),e.TgZ(20,"div",14)(21,"div",15)(22,"div",16)(23,"div",17)(24,"table",18),e.ynx(25,19),e.YNc(26,O,2,0,"th",20),e.YNc(27,S,3,1,"td",21),e.BQk(),e.ynx(28,22),e.YNc(29,U,2,0,"th",20),e.YNc(30,D,2,1,"td",21),e.BQk(),e.ynx(31,23),e.YNc(32,q,2,0,"th",20),e.YNc(33,N,2,1,"td",21),e.BQk(),e.ynx(34,24),e.YNc(35,z,3,3,"td",25),e.BQk(),e.ynx(36,26),e.YNc(37,E,1,0,"th",20),e.YNc(38,H,5,0,"td",21),e.BQk(),e.YNc(39,F,1,0,"tr",27),e.YNc(40,L,1,3,"tr",28),e.YNc(41,j,1,0,"tr",29),e.qZA(),e._UZ(42,"mat-paginator",30),e.qZA()()()()()),2&n&&(e.Q6J("ngIf",i.displaySuccessPopup),e.xp6(19),e.Q6J("ngIf",i.displayAddToken),e.xp6(5),e.Q6J("dataSource",i.dataSource),e.xp6(15),e.Q6J("matHeaderRowDef",i.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",i.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",e.DdM(7,B)),e.xp6(1),e.Q6J("pageSizeOptions",e.DdM(8,R)))},directives:[x.O5,T.a,m._Y,m.JL,m.F,x.sg,d.BZ,d.w1,d.fO,d.ge,d.Dz,d.ev,d.as,d.XQ,d.nj,d.Gk,g.NW],styles:["p[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:1rem}tr.detail-row[_ngcontent-%COMP%]{height:0;background-color:#ebebee}tr.element-row[_ngcontent-%COMP%]:not(.expanded-row):hover{background:whitesmoke}tr.element-row[_ngcontent-%COMP%]:not(.expanded-row):active{background:#efefef}.element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom-width:0}.element-detail[_ngcontent-%COMP%]{overflow:hidden}"],data:{animation:[r.$_,r.fd,r.Um,r.Ut]}}),t})();function G(t,o){1&t&&e._UZ(0,"app-available-sddc-tokens")}function X(t,o){}let W=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-token-mgmt-landing"]],decls:14,vars:0,consts:[[1,"min-h-full"],[1,"bg-gradient-to-r","from-blue-800","to-indigo-600","pb-32"],[1,"py-10"],[1,"lg:max-w-screen-lg","sm:max-w-screen-sm","md:max-w-screen-sm","xl:max-w-screen-xl","mx-auto","px-4","sm:px-6","lg:px-8"],[1,"text-3xl","font-medium","text-white"],[1,"-mt-32"],[1,"lg:max-w-screen-lg","sm:max-w-screen-sm","md:max-w-screen-sm","xl:max-w-screen-xl","mx-auto","pb-12","px-4","sm:px-6","lg:px-8"],[1,"bg-white","rounded-lg","shadow","px-5","py-6","sm:px-6"],["dynamicHeight","true"],["label","Available"],["matTabContent",""],["label","Activity"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"header",2)(3,"div",3)(4,"h1",4),e._uU(5,"Tokens"),e.qZA()()()(),e.TgZ(6,"main",5)(7,"div",6)(8,"div",7)(9,"mat-tab-group",8)(10,"mat-tab",9),e.YNc(11,G,1,0,"ng-template",10),e.qZA(),e.TgZ(12,"mat-tab",11),e.YNc(13,X,0,0,"ng-template",10),e.qZA()()()()()())},directives:[p.SP,p.uX,p.Vc,V],styles:[""]}),t})();var K=s(1083),ee=s(1245),te=s(8013);const ne=[{path:"",component:W}];let oe=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[ee.qX,te._,K.Bz.forChild(ne)]]}),t})()}}]);