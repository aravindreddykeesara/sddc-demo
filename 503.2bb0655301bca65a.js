"use strict";(self.webpackChunkui_app=self.webpackChunkui_app||[]).push([[503],{1503:(W,m,o)=>{o.r(m),o.d(m,{SddcActivityModule:()=>X});var t=o(5e3),s=o(9808),r=o(6416),u=o(3075);function y(e,d){1&e&&(t.O4$(),t.TgZ(0,"svg",34),t._UZ(1,"path",35),t.qZA())}function x(e,d){if(1&e){const i=t.EpF();t.TgZ(0,"li",30),t.NdJ("click",function(){const p=t.CHM(i).$implicit,c=t.oxw(2);return c.selectedSDDCData=p,c.showExistingSddcOptions=!c.showExistingSddcOptions}),t.TgZ(1,"span",31),t._uU(2),t.qZA(),t.TgZ(3,"span",32),t.YNc(4,y,2,0,"svg",33),t.qZA()()}if(2&e){const i=d.$implicit,n=t.oxw(2);t.xp6(2),t.hij("",i.name," "),t.xp6(2),t.Q6J("ngIf",i.name===n.selectedSDDCData.name)}}function v(e,d){if(1&e&&(t.TgZ(0,"ul",28),t.YNc(1,x,5,2,"li",29),t.qZA()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",i.SDDC_existing)}}function _(e,d){1&e&&(t.TgZ(0,"div",36)(1,"div",37),t.O4$(),t.TgZ(2,"svg",38),t._UZ(3,"path",39),t.qZA()(),t.kcU(),t._UZ(4,"input",40),t.qZA()),2&e&&t.Q6J("@dropdown",void 0)}function Z(e,d){1&e&&(t.TgZ(0,"div",41)(1,"div",42)(2,"div",37),t.O4$(),t.TgZ(3,"svg",38),t._UZ(4,"path",39),t.qZA()(),t.kcU(),t._UZ(5,"input",43),t.qZA(),t.TgZ(6,"span",44),t._uU(7,"to"),t.qZA(),t.TgZ(8,"div",42)(9,"div",37),t.O4$(),t.TgZ(10,"svg",38),t._UZ(11,"path",39),t.qZA()(),t.kcU(),t._UZ(12,"input",45),t.qZA()()),2&e&&t.Q6J("@dropdown",void 0)}let h=(()=>{class e{constructor(){this.showResultsEvent=new t.vpe,this.SDDC_existing=[{name:"SDDC-01-***232-**3434",value:"sddc-01"},{name:"SDDC-02-***124-**3233",value:"sddc-02"},{name:"SDDC-03-***563-**6576",value:"sddc-03"},{name:"SDDC-04-***254-**7635",value:"sddc-04"},{name:"SDDC-05-***223-**3767",value:"sddc-05"}],this.specificDate=!0,this.showExistingSddcOptions=!1,this.selectedSDDCData={name:"Select SDDC",value:"no_select"}}ngOnInit(){}toggleDateOption(i){this.specificDate="specific"==i}showResults(){this.showResultsEvent.emit()}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sddc-activity-search"]],outputs:{showResultsEvent:"showResultsEvent"},decls:42,vars:5,consts:[[1,"bg-gray-50","mt-4","mb-4","px-4","py-5","sm:p-6","rounded-lg"],[1,""],[1,"space-y-8","divide-y","divide-gray-200"],[1,"text-lg","leading-6","font-medium","text-gray-900"],[1,"mt-1","text-sm","text-gray-500"],[1,"mt-6","grid","grid-cols-1","gap-y-6","gap-x-4","sm:grid-cols-6"],[1,"sm:col-span-4"],["id","listbox-label",1,"block","text-sm","font-medium","text-gray-700"],[1,"mt-1","relative"],["type","button","aria-haspopup","listbox","aria-expanded","true","aria-labelledby","listbox-label",1,"relative","w-full","bg-white","border","border-gray-300","rounded-md","shadow-sm","pl-3","pr-10","py-2","text-left","cursor-default","focus:outline-none","focus:ring-1","focus:ring-indigo-500","focus:border-indigo-500","sm:text-sm",3,"click"],[1,"block","truncate"],[1,"absolute","inset-y-0","right-0","flex","items-center","pr-2","pointer-events-none"],["src","assets/svg/solid-selector.svg",1,"h-5","w-5","text-gray-400"],["class","absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm","tabindex","-1","role","listbox","aria-labelledby","listbox-label","aria-activedescendant","listbox-option-3",4,"ngIf"],[1,"text-sm","font-medium","text-gray-700"],[1,"bg-white","mt-1","rounded-md","-space-y-px"],[1,"rounded-tl-md","rounded-tr-md","relative","border","p-4","flex","cursor-pointer","focus:outline-none"],["type","radio","name","privacy-setting","value","Public access","aria-labelledby","privacy-setting-0-label","aria-describedby","privacy-setting-0-description",1,"h-4","w-4","mt-0.5","cursor-pointer","shrink-0","text-indigo-600","border-gray-300","focus:ring-indigo-500",3,"checked","click"],[1,"ml-3","flex","flex-col"],["id","privacy-setting-0-label",1,"block","text-sm","font-medium"],["class","relative p-2",4,"ngIf"],[1,"rounded-bl-md","rounded-br-md","relative","border","p-4","flex","cursor-pointer","focus:outline-none"],["type","radio","name","privacy-setting","value","Private to you","aria-labelledby","privacy-setting-2-label","aria-describedby","privacy-setting-2-description",1,"h-4","w-4","mt-0.5","cursor-pointer","shrink-0","text-indigo-600","border-gray-300","focus:ring-indigo-500",3,"click"],["id","privacy-setting-2-label",1,"block","text-sm","font-medium"],["date-rangepicker","","class","p-2 flex items-center",4,"ngIf"],[1,"pt-5"],[1,"flex","justify-start"],["type","submit",1,"ml-3","inline-flex","justify-center","py-2","px-4","border","border-transparent","shadow-sm","text-sm","font-medium","rounded-md","text-white","bg-indigo-600","hover:bg-indigo-700","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-indigo-500",3,"click"],["tabindex","-1","role","listbox","aria-labelledby","listbox-label","aria-activedescendant","listbox-option-3",1,"absolute","z-10","mt-1","w-full","bg-white","shadow-lg","max-h-60","rounded-md","py-1","text-base","ring-1","ring-black","ring-opacity-5","overflow-auto","focus:outline-none","sm:text-sm"],["class","text-gray-900 cursor-default select-none relative py-2 pl-8 pr-4","id","listbox-option-0","role","option",3,"click",4,"ngFor","ngForOf"],["id","listbox-option-0","role","option",1,"text-gray-900","cursor-default","select-none","relative","py-2","pl-8","pr-4",3,"click"],[1,"font-normal","block","truncate"],[1,"text-indigo-600","absolute","inset-y-0","left-0","flex","items-center","pl-1.5"],["class","h-5 w-5","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor","aria-hidden","true",4,"ngIf"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor","aria-hidden","true",1,"h-5","w-5"],["fill-rule","evenodd","d","M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule","evenodd"],[1,"relative","p-2"],[1,"absolute","inset-y-0","left-0","flex","items-center","pl-3","pointer-events-none"],["fill","currentColor","viewBox","0 0 20 20","xmlns","http://www.w3.org/2000/svg",1,"w-5","h-5","text-gray-500","dark:text-gray-400"],["fill-rule","evenodd","d","M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z","clip-rule","evenodd"],["datepicker","","type","text","placeholder","Select date",1,"bg-gray-50","border","border-gray-300","text-gray-900","sm:text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","pl-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["date-rangepicker","",1,"p-2","flex","items-center"],[1,"relative"],["name","start","type","text","placeholder","Select date start",1,"bg-gray-50","border","border-gray-300","text-gray-900","sm:text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","pl-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],[1,"mx-4","text-gray-500"],["name","end","type","text","placeholder","Select date end",1,"bg-gray-50","border","border-gray-300","text-gray-900","sm:text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","pl-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2)(3,"div",2)(4,"div")(5,"div")(6,"h3",3),t._uU(7,"SDDC Activity Search"),t.qZA(),t.TgZ(8,"p",4),t._uU(9,"Select SDDC and date values to retrieve activity."),t.qZA()(),t.TgZ(10,"div",5)(11,"div",6)(12,"div")(13,"label",7),t._uU(14," SDDC "),t.qZA(),t.TgZ(15,"div",8)(16,"button",9),t.NdJ("click",function(){return n.showExistingSddcOptions=!n.showExistingSddcOptions}),t.TgZ(17,"span",10),t._uU(18),t.qZA(),t.TgZ(19,"span",11),t._UZ(20,"img",12),t.qZA()(),t.YNc(21,v,2,1,"ul",13),t.qZA()()(),t.TgZ(22,"fieldset",6)(23,"legend",14),t._uU(24,"Date Type"),t.qZA(),t.TgZ(25,"div",15)(26,"label",16)(27,"input",17),t.NdJ("click",function(){return n.toggleDateOption("specific")}),t.qZA(),t.TgZ(28,"span",18)(29,"span",19),t._uU(30," Specific Date "),t.qZA(),t.YNc(31,_,5,1,"div",20),t.qZA()(),t.TgZ(32,"label",21)(33,"input",22),t.NdJ("click",function(){return n.toggleDateOption("range")}),t.qZA(),t.TgZ(34,"span",18)(35,"span",23),t._uU(36," Date Range "),t.qZA(),t.YNc(37,Z,13,1,"div",24),t.qZA()()()()()()(),t.TgZ(38,"div",25)(39,"div",26)(40,"button",27),t.NdJ("click",function(){return n.showResults()}),t._uU(41,"Search"),t.qZA()()()()()()),2&i&&(t.xp6(18),t.hij(" ",null==n.selectedSDDCData?null:n.selectedSDDCData.name," "),t.xp6(3),t.Q6J("ngIf",n.showExistingSddcOptions),t.xp6(6),t.Q6J("checked",n.specificDate),t.xp6(4),t.Q6J("ngIf",n.specificDate),t.xp6(6),t.Q6J("ngIf",!n.specificDate))},directives:[u._Y,u.JL,u.F,s.O5,s.sg],styles:[""],encapsulation:2,data:{animation:[r.tJ]}}),e})();var g=o(6087),b=o(4847),l=o(4999),w=o(4687),f=o(1083);function A(e,d){1&e&&(t.TgZ(0,"span",16),t._uU(1,"more"),t.qZA())}function T(e,d){1&e&&(t.TgZ(0,"span",16),t._uU(1,"less"),t.qZA())}function S(e,d){1&e&&(t.TgZ(0,"div",17)(1,"div",18)(2,"div",19)(3,"div",20)(4,"div",21)(5,"table",22)(6,"thead",23)(7,"tr")(8,"th",24),t._uU(9,"Param Name "),t.qZA(),t.TgZ(10,"th",25),t._uU(11,"Value "),t.qZA()()(),t.TgZ(12,"tbody",26)(13,"tr")(14,"td",27),t._uU(15," Segment Name"),t.qZA(),t.TgZ(16,"td",28),t._uU(17,"segment 12"),t.qZA()(),t.TgZ(18,"tr")(19,"td",27),t._uU(20," connected Gateway"),t.qZA(),t.TgZ(21,"td",28),t._uU(22,"Compute Gateway"),t.qZA()(),t.TgZ(23,"tr")(24,"td",27),t._uU(25," subnets"),t.qZA(),t.TgZ(26,"td",28),t._uU(27,"10.10.12.1/14"),t.qZA()()()()()()()()()),2&e&&t.Q6J("@dropdownInOut",void 0)}function C(e,d){if(1&e){const i=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"ul",5)(4,"li")(5,"span",6),t._uU(6,"Path :"),t.qZA()(),t.TgZ(7,"li")(8,"div",7),t.O4$(),t.TgZ(9,"svg",8),t._UZ(10,"path",9),t.qZA(),t.kcU(),t.TgZ(11,"a",10),t._uU(12,"Network & Security"),t.qZA()()(),t.TgZ(13,"li")(14,"div",7),t.O4$(),t.TgZ(15,"svg",8),t._UZ(16,"path",9),t.qZA(),t.kcU(),t.TgZ(17,"a",11),t._uU(18,"Network"),t.qZA()()(),t.TgZ(19,"li")(20,"div",7),t.O4$(),t.TgZ(21,"svg",8),t._UZ(22,"path",9),t.qZA(),t.kcU(),t.TgZ(23,"a",11),t._uU(24,"Segments"),t.qZA()()(),t.TgZ(25,"li")(26,"div",7),t.O4$(),t.TgZ(27,"svg",8),t._UZ(28,"path",9),t.qZA(),t.kcU(),t.TgZ(29,"a",11),t._uU(30,"Add segment"),t.qZA()()()()(),t.TgZ(31,"div",12)(32,"a",13),t.NdJ("click",function(){t.CHM(i);const a=t.oxw();return a.displayAddedNewRule=!a.displayAddedNewRule}),t._uU(33," View "),t.YNc(34,A,2,0,"span",14),t.YNc(35,T,2,0,"span",14),t.qZA()(),t.YNc(36,S,28,1,"div",15),t.qZA()()}if(2&e){const i=t.oxw();t.xp6(34),t.Q6J("ngIf",!i.displayAddedNewRule),t.xp6(1),t.Q6J("ngIf",i.displayAddedNewRule),t.xp6(1),t.Q6J("ngIf",i.displayAddedNewRule)}}function U(e,d){1&e&&(t.TgZ(0,"span",16),t._uU(1,"more"),t.qZA())}function D(e,d){1&e&&(t.TgZ(0,"span",16),t._uU(1,"less"),t.qZA())}function q(e,d){1&e&&(t.TgZ(0,"div",38)(1,"div",18)(2,"div",19)(3,"div",20)(4,"div",21)(5,"table",22)(6,"thead",23)(7,"tr")(8,"th",24),t._uU(9,"Param Name "),t.qZA(),t.TgZ(10,"th",25),t._uU(11,"Old value "),t.qZA(),t.TgZ(12,"th",25),t._uU(13,"New Value "),t.qZA()()(),t.TgZ(14,"tbody",26)(15,"tr")(16,"td",27),t._uU(17," Name"),t.qZA(),t.TgZ(18,"td",28),t._uU(19,"ESXi Outbound"),t.qZA(),t.TgZ(20,"td",28),t._uU(21,"ESXi Outbound"),t.qZA()(),t.TgZ(22,"tr")(23,"td",27),t._uU(24," ID"),t.qZA(),t.TgZ(25,"td",28),t._uU(26,"2022"),t.qZA(),t.TgZ(27,"td",28),t._uU(28,"2022"),t.qZA()(),t.TgZ(29,"tr")(30,"td",39),t._uU(31," Sources"),t.qZA(),t.TgZ(32,"td",40),t._uU(33,"ESXi"),t.qZA(),t.TgZ(34,"td",40),t._uU(35,"VCenter"),t.qZA()(),t.TgZ(36,"tr")(37,"td",27),t._uU(38," Destinations"),t.qZA(),t.TgZ(39,"td",28),t._uU(40,"Any"),t.qZA(),t.TgZ(41,"td",28),t._uU(42,"Any"),t.qZA()(),t.TgZ(43,"tr")(44,"td",41),t._uU(45," added param"),t.qZA(),t.TgZ(46,"td",42),t._uU(47," - "),t.qZA(),t.TgZ(48,"td",42),t._uU(49,"value a"),t.qZA()(),t.TgZ(50,"tr")(51,"td",43),t._uU(52," deleted param"),t.qZA(),t.TgZ(53,"td",44),t._uU(54,"value b"),t.qZA(),t.TgZ(55,"td",44),t._uU(56," - "),t.qZA()()()()()()()()()),2&e&&t.Q6J("@dropdownInOut",void 0)}function k(e,d){if(1&e){const i=t.EpF();t.TgZ(0,"div",29)(1,"div",30)(2,"div",31)(3,"div",32)(4,"span",6),t._uU(5,"Path :"),t.qZA()(),t.TgZ(6,"div",33)(7,"ul",34)(8,"li")(9,"div",7),t.O4$(),t.TgZ(10,"svg",8),t._UZ(11,"path",9),t.qZA(),t.kcU(),t.TgZ(12,"a",10),t._uU(13,"Network & Security"),t.qZA()()(),t.TgZ(14,"li")(15,"div",7),t.O4$(),t.TgZ(16,"svg",8),t._UZ(17,"path",9),t.qZA(),t.kcU(),t.TgZ(18,"a",11),t._uU(19,"Security"),t.qZA()()(),t.TgZ(20,"li")(21,"div",7),t.O4$(),t.TgZ(22,"svg",8),t._UZ(23,"path",9),t.qZA(),t.kcU(),t.TgZ(24,"a",11),t._uU(25,"Gateway Firewall"),t.qZA()()(),t.TgZ(26,"li")(27,"div",7),t.O4$(),t.TgZ(28,"svg",8),t._UZ(29,"path",9),t.qZA(),t.kcU(),t.TgZ(30,"a",11),t._uU(31,"Management Gateway"),t.qZA()()(),t.TgZ(32,"li")(33,"div",7),t.O4$(),t.TgZ(34,"svg",8),t._UZ(35,"path",9),t.qZA(),t.kcU(),t.TgZ(36,"a",11),t._uU(37,"Add Rule"),t.qZA()()()()()(),t.TgZ(38,"div",35)(39,"a",36),t.NdJ("click",function(){t.CHM(i);const a=t.oxw();return a.displayModifiedRule=!a.displayModifiedRule}),t._uU(40," View "),t.YNc(41,U,2,0,"span",14),t.YNc(42,D,2,0,"span",14),t.qZA()(),t.YNc(43,q,57,1,"div",37),t.qZA()()}if(2&e){const i=t.oxw();t.xp6(41),t.Q6J("ngIf",!i.displayModifiedRule),t.xp6(1),t.Q6J("ngIf",i.displayModifiedRule),t.xp6(1),t.Q6J("ngIf",i.displayModifiedRule)}}let R=(()=>{class e{constructor(){this.addedOne=!1,this.displayAddedNewRule=!1,this.displayModifiedRule=!1}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sddc-activity-result-detail"]],inputs:{addedOne:"addedOne"},decls:2,vars:2,consts:[["class","bg-gray-50  sm:rounded-lg",4,"ngIf"],["class","flex-1 space-y-1",4,"ngIf"],[1,"bg-gray-50","sm:rounded-lg"],[1,"px-4","py-5","mt-4","mb-4","sm:p-6"],["aria-label","Breadcrumb",1,"flex"],["role","list",1,"flex","items-center","space-x-4"],[1,"font-medium","text-gray-500","hover:text-gray-700"],[1,"flex","items-center"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor","aria-hidden","true",1,"flex-shrink-0","h-5","w-5","text-gray-400"],["fill-rule","evenodd","d","M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule","evenodd"],[1,"ml-1","text-sm","font-medium","text-gray-500","hover:text-gray-700"],["aria-current","page",1,"ml-1","text-sm","font-medium","text-gray-500","hover:text-gray-700"],[1,"mt-4"],[1,"flex","flex-none","justify-center","items-center","px-4","py-2","border","border-gray-300","shadow-sm","text-sm","font-medium","rounded-md","text-gray-700","bg-white","hover:bg-gray-50",3,"click"],["class","ml-1",4,"ngIf"],["class","px-4 sm:px-6 lg:px-8",4,"ngIf"],[1,"ml-1"],[1,"px-4","sm:px-6","lg:px-8"],[1,"mt-8","flex","flex-col"],[1,"-my-2","-mx-4","overflow-x-auto","sm:-mx-6","lg:-mx-8"],[1,"inline-block","min-w-full","py-2","align-middle","md:px-6","lg:px-8"],[1,"overflow-hidden","shadow","ring-1","ring-black","ring-opacity-5","md:rounded-lg"],[1,"min-w-full","divide-y","divide-gray-300"],[1,"bg-gray-50"],["scope","col",1,"py-3.5","pl-4","pr-3","text-left","text-sm","font-semibold","text-gray-900","sm:pl-6"],["scope","col",1,"px-3","py-3.5","text-left","text-sm","font-semibold","text-gray-900"],[1,"divide-y","divide-gray-200","bg-white"],[1,"whitespace-nowrap","py-4","pl-4","pr-3","text-sm","font-medium","text-gray-900","sm:pl-6"],[1,"whitespace-nowrap","px-3","py-4","text-sm","text-gray-500"],[1,"flex-1","space-y-1"],[1,"bg-gray-50","sm:rounded-lg","mb-4"],[1,"px-4","py-5","mt-4","sm:p-6","flex","gap-5"],[1,"flex-none"],["aria-label","Breadcrumb",1,"flex","flex-wrap"],["role","list",1,"flex","flex-wrap","flex-wrap:","items-center","space-x-4"],[1,"mt-4","pb-4"],[1,"flex","flex-none","justify-center","items-center","px-4","py-2","mx-10","border","border-gray-300","shadow-sm","text-sm","font-medium","rounded-md","text-gray-700","bg-white","hover:bg-gray-50",3,"click"],["class","px-4 pb-4 sm:px-6 lg:px-8",4,"ngIf"],[1,"px-4","pb-4","sm:px-6","lg:px-8"],[1,"bg-yellow-100","whitespace-nowrap","py-4","pl-4","pr-3","text-sm","font-medium","text-gray-900","sm:pl-6"],[1,"bg-yellow-100","whitespace-nowrap","px-3","py-4","text-sm","text-gray-500"],[1,"bg-green-100","whitespace-nowrap","py-4","pl-4","pr-3","text-sm","font-medium","text-gray-900","sm:pl-6"],[1,"bg-green-100","whitespace-nowrap","px-3","py-4","text-sm","text-gray-500"],[1,"bg-red-100","whitespace-nowrap","py-4","pl-4","pr-3","text-sm","font-medium","text-gray-900","sm:pl-6"],[1,"bg-red-100","whitespace-nowrap","px-3","py-4","text-sm","text-gray-500"]],template:function(i,n){1&i&&(t.YNc(0,C,37,3,"div",0),t.YNc(1,k,44,3,"div",1)),2&i&&(t.Q6J("ngIf",n.addedOne),t.xp6(1),t.Q6J("ngIf",!n.addedOne))},directives:[s.O5],styles:[""],data:{animation:[r.Um]}}),e})();function N(e,d){1&e&&(t.TgZ(0,"th",28),t._uU(1," Changed By "),t.qZA())}function O(e,d){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const i=d.$implicit;t.xp6(1),t.hij(" ",i.editedBy," ")}}function J(e,d){1&e&&(t.TgZ(0,"th",28),t._uU(1," Date Changed "),t.qZA())}function E(e,d){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const i=d.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,i.date,"medium")," ")}}function Q(e,d){1&e&&(t.TgZ(0,"th",28),t._uU(1," Edit Type "),t.qZA())}function I(e,d){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const i=d.$implicit;t.xp6(1),t.hij(" ",i.editType," ")}}function M(e,d){if(1&e&&(t.TgZ(0,"td",30)(1,"div",31),t._UZ(2,"app-sddc-activity-result-detail",32),t.qZA()()),2&e){const i=d.$implicit,n=t.oxw();t.uIk("colspan",n.displayedColumns.length),t.xp6(1),t.Q6J("@detailExpand",i==n.expandedElement?"expanded":"collapsed"),t.xp6(1),t.Q6J("addedOne",i.addedOne)}}function Y(e,d){1&e&&t._UZ(0,"tr",33)}function $(e,d){if(1&e){const i=t.EpF();t.TgZ(0,"tr",34),t.NdJ("click",function(){const p=t.CHM(i).$implicit,c=t.oxw();return c.expandedElement=c.expandedElement===p?null:p}),t.qZA()}if(2&e){const i=d.$implicit,n=t.oxw();t.ekj("expanded-row",n.expandedElement===i),t.Q6J("@fadeInUp",void 0)}}function F(e,d){1&e&&t._UZ(0,"tr",35)}const B=function(){return["expandedDetail"]},j=function(){return[5,10,25,100]};let H=(()=>{class e{constructor(i){this.router=i,this.displayedColumns=["editedBy","date","editType"],this.modifySearchEvent=new t.vpe,this.dataSource=new l.by(w.l$)}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(i){this.dataSource.filter=i.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}modifySearch(){this.modifySearchEvent.emit()}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(f.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sddc-activity-results"]],viewQuery:function(i,n){if(1&i&&(t.Gf(g.NW,5),t.Gf(b.YE,5)),2&i){let a;t.iGM(a=t.CRH())&&(n.paginator=a.first),t.iGM(a=t.CRH())&&(n.sort=a.first)}},outputs:{modifySearchEvent:"modifySearchEvent"},decls:42,vars:7,consts:[[1,"px-4","pb-4","sm:px-6","lg:px-8"],[1,"bg-gray-50","mt-4","mb-4","px-4","py-5","sm:p-6","rounded-lg"],[1,"border-b","border-gray-200"],[1,"flex","grid-cols-9","justify-between"],[1,"col-span-6"],[1,"text-lg","leading-6","font-medium","text-gray-900"],[1,"mt-2","text-sm","text-gray-500"],["type","button",1,"inline-flex","justify-center","text-indigo-600","hover:text-white","border","border-indigo-600","hover:bg-indigo-600","focus:ring-4","focus:outline-none","focus:ring-indigo-300","font-medium","rounded-lg","text-sm","px-2","py-2.5","text-center","mr-2","mb-6",3,"click"],[1,"mt-4","grid","grid-cols-1","gap-x-4","gap-y-8","sm:grid-cols-2"],[1,"sm:col-span-1"],[1,"text-sm","font-medium","text-gray-500"],[1,"mt-1","text-sm","text-gray-900"],[1,"mt-1","flex","flex-col"],[1,"-my-2","-mx-4","overflow-x-auto","sm:-mx-6","lg:-mx-8"],[1,"inline-block","min-w-full","py-2","align-middle","md:px-6","lg:px-8"],[1,"overflow-hidden","shadow","ring-1","ring-black","ring-opacity-5","md:rounded-lg"],["mat-table","","multiTemplateDataRows","","matSort","",1,"min-w-full","divide-y","divide-gray-300",3,"dataSource"],["matColumnDef","editedBy"],["mat-header-cell","","mat-sort-header","","class","bg-gray-50 px-3 py-3.5 text-left text-sm font-semibold text-gray-900",4,"matHeaderCellDef"],["mat-cell","","class","whitespace-nowrap px-3 py-4 text-sm text-gray-500",4,"matCellDef"],["matColumnDef","date"],["matColumnDef","editType"],["matColumnDef","expandedDetail"],["mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","hover:bg-hover trans-ease-out cursor-pointer","mat-row","",3,"expanded-row","click",4,"matRowDef","matRowDefColumns"],["mat-row","","class","detail-row",4,"matRowDef","matRowDefColumns"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header","",1,"bg-gray-50","px-3","py-3.5","text-left","text-sm","font-semibold","text-gray-900"],["mat-cell","",1,"whitespace-nowrap","px-3","py-4","text-sm","text-gray-500"],["mat-cell",""],[1,"element-detail"],[3,"addedOne"],["mat-header-row",""],["mat-row","","mat-row","",1,"hover:bg-hover","trans-ease-out","cursor-pointer",3,"click"],["mat-row","",1,"detail-row"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2",5),t._uU(6,"SDDC Activity Details"),t.qZA(),t.TgZ(7,"p",6),t._uU(8," The following results are fetched based on search criteria provided below."),t.qZA()(),t.TgZ(9,"button",7),t.NdJ("click",function(){return n.modifySearch()}),t._uU(10,"Modify Search"),t.qZA()()(),t.TgZ(11,"dl",8)(12,"div",9)(13,"dt",10),t._uU(14,"SDDC Name"),t.qZA(),t.TgZ(15,"dd",11),t._uU(16,"SDDC-02-***124-**3233"),t.qZA()(),t.TgZ(17,"div",9)(18,"dt",10),t._uU(19,"Date Range"),t.qZA(),t.TgZ(20,"dd",11),t._uU(21,"01/21/2022 - 03/22/2022 "),t.qZA()()()(),t.TgZ(22,"div",12)(23,"div",13)(24,"div",14)(25,"div",15)(26,"table",16),t.ynx(27,17),t.YNc(28,N,2,0,"th",18),t.YNc(29,O,2,1,"td",19),t.BQk(),t.ynx(30,20),t.YNc(31,J,2,0,"th",18),t.YNc(32,E,3,4,"td",19),t.BQk(),t.ynx(33,21),t.YNc(34,Q,2,0,"th",18),t.YNc(35,I,2,1,"td",19),t.BQk(),t.ynx(36,22),t.YNc(37,M,3,3,"td",23),t.BQk(),t.YNc(38,Y,1,0,"tr",24),t.YNc(39,$,1,3,"tr",25),t.YNc(40,F,1,0,"tr",26),t.qZA(),t._UZ(41,"mat-paginator",27),t.qZA()()()()()),2&i&&(t.xp6(26),t.Q6J("dataSource",n.dataSource),t.xp6(12),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",t.DdM(5,B)),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(6,j)))},directives:[l.BZ,l.w1,l.fO,l.ge,l.Dz,l.ev,R,l.as,l.XQ,l.nj,l.Gk,g.NW],pipes:[s.uU],styles:["p[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:1rem}tr.detail-row[_ngcontent-%COMP%]{height:0;background-color:#ebebee}tr.element-row[_ngcontent-%COMP%]:not(.expanded-row):hover{background:whitesmoke}tr.element-row[_ngcontent-%COMP%]:not(.expanded-row):active{background:#efefef}.element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom-width:0}.element-detail[_ngcontent-%COMP%]{overflow:hidden}"],data:{animation:[r.$_,r.fd,r.Um,r.Ut]}}),e})();function P(e,d){if(1&e){const i=t.EpF();t.TgZ(0,"app-sddc-activity-search",10),t.NdJ("showResultsEvent",function(){return t.CHM(i),t.oxw().displaySearch=!1}),t.qZA()}}function L(e,d){if(1&e){const i=t.EpF();t.TgZ(0,"app-sddc-activity-results",11),t.NdJ("modifySearchEvent",function(){return t.CHM(i),t.oxw().displaySearch=!0}),t.qZA()}}let z=(()=>{class e{constructor(){this.displaySearch=!0}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sddc-activity-landing"]],decls:11,vars:2,consts:[[1,"min-h-full"],[1,"bg-gradient-to-r","from-blue-800","to-indigo-600","pb-32"],[1,"py-10"],[1,"max-w-7xl","mx-auto","px-4","sm:px-6","lg:px-8"],[1,"text-3xl","font-medium","text-white"],[1,"-mt-32"],[1,"max-w-7xl","mx-auto","pb-12","px-4","sm:px-6","lg:px-8"],[1,"bg-white","rounded-lg","shadow","px-5","py-6","sm:px-6"],[3,"showResultsEvent",4,"ngIf"],[3,"modifySearchEvent",4,"ngIf"],[3,"showResultsEvent"],[3,"modifySearchEvent"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"header",2)(3,"div",3)(4,"h1",4),t._uU(5,"Activity"),t.qZA()()()(),t.TgZ(6,"main",5)(7,"div",6)(8,"div",7),t.YNc(9,P,1,0,"app-sddc-activity-search",8),t.YNc(10,L,1,0,"app-sddc-activity-results",9),t.qZA()()()()),2&i&&(t.xp6(9),t.Q6J("ngIf",n.displaySearch),t.xp6(1),t.Q6J("ngIf",!n.displaySearch))},directives:[s.O5,h,H],styles:[""]}),e})();var V=o(1245);const G=[{path:"",component:z}];let X=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[V.qX,f.Bz.forChild(G)]]}),e})()}}]);