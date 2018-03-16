webpackJsonp([1],{CAtQ:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),n=a("mtWM"),r=a.n(n),i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("Loading...")]),this._v(" "),t("div",{staticClass:"sk-double-bounce"},[t("div",{staticClass:"sk-child sk-double-bounce1"}),this._v(" "),t("div",{staticClass:"sk-child sk-double-bounce2"})])])}]};var c=a("VU/8")({name:"DoubleBounce"},i,!1,function(e){a("NnNo")},"data-v-514420ec",null).exports,o={name:"DNDWelcome",components:{"load-spinner":c}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"dnd-welcome"},[t("p",[t("router-link",{attrs:{to:{name:"DNDWelcome"}}},[this._v("Welcome")]),this._v("\n    •\n    "),t("router-link",{attrs:{to:{name:"RaceSelector"}}},[this._v("Race Informer")])],1),this._v(" "),t("p",[this._v("Dungeons & Dragons (abbreviated as D&D or DnD) is a fantasy tabletop role-playing game (RPG) originally designed by Gary Gygax and Dave Arneson. It was first published in 1974 by Tactical Studies Rules, Inc. (TSR). The game has been published by Wizards of the Coast (now a subsidiary of Hasbro) since 1997. It was derived from miniature wargames with a variation of Chainmail serving as the initial rule system. D&D's publication is commonly recognized as the beginning of modern role-playing games and the role-playing game industry.")]),this._v(" "),t("p",[this._v("D&D departs from traditional wargaming and assigns each player a specific character to play instead of a military formation. These characters embark upon imaginary adventures within a fantasy setting. A Dungeon Master serves as the game's referee and storyteller while maintaining the setting in which the adventures occur, and playing the role of the inhabitants. The characters form a party that interacts with the setting's inhabitants, and each other. Together they solve dilemmas, engage in battles, and gather treasure and knowledge. In the process the characters earn experience points in order to rise in levels, and become increasingly powerful over a series of sessions.")])])},staticRenderFns:[]};var d=a("VU/8")(o,l,!1,function(e){a("CAtQ")},"data-v-55a0785a",null).exports,h={name:"RaceSelector",components:{"load-spinner":c},data:function(){return{results:null,showLoading:!1,checkedRaces:[],errors:[],result1:[],result2:[]}},computed:{totalSelected:function(){return this.checkedRaces.length}},created:function(){var e=this,t=this;r.a.get("http://www.dnd5eapi.co/api/races").then(function(a){e.showSpinner=!1,t.results=a.data.results}).catch(function(t){e.showSpinner=!1,e.errors.push(t)})},methods:{compareRaces:function(){var e=this;this.checkedRaces.length<2&&this.errors.push("Please choose at least 2 races.");var t=this.checkedRaces[0],a=this.checkedRaces[1];console.log(t,a),r.a.all([r.a.get(t),r.a.get(a)]).then(r.a.spread(function(t,a){e.result1=t.data,e.result2=a.data,e.checkedRaces=[],console.log(t,a)})).catch(function(e){console.log(e)})}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"race-selector"},[e._m(0),e._v(" "),a("div",{staticClass:"link-container"},[a("p",[a("router-link",{attrs:{to:{name:"DNDWelcome"}}},[e._v("Welcome")]),e._v("\n    •\n    "),a("router-link",{attrs:{to:{name:"RaceSelector"}}},[e._v("Race Informer")])],1)]),e._v(" "),a("div",{staticClass:"form-container"},[a("h2",[e._v(" Select 2 races below to compare.")]),e._v(" "),a("form",{on:{submit:function(t){return t.preventDefault(),e.compareRaces(t)}}},[e._l(e.results,function(t,s){return a("div",{key:s,staticClass:"races"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedRaces,expression:"checkedRaces"}],attrs:{type:"checkbox",id:t.name,disabled:2==e.totalSelected},domProps:{value:t.url,checked:Array.isArray(e.checkedRaces)?e._i(e.checkedRaces,t.url)>-1:e.checkedRaces},on:{change:function(a){var s=e.checkedRaces,n=a.target,r=!!n.checked;if(Array.isArray(s)){var i=t.url,c=e._i(s,i);n.checked?c<0&&(e.checkedRaces=s.concat([i])):c>-1&&(e.checkedRaces=s.slice(0,c).concat(s.slice(c+1)))}else e.checkedRaces=r}}}),e._v(" "),a("label",{attrs:{for:t.name}},[e._v(e._s(t.name))])])}),e._v(" "),a("input",{staticClass:"button",attrs:{type:"submit",disabled:e.totalSelected<2,value:"Compare"}})],2),e._v(" "),e.showLoading?a("load-spinner"):e._e(),e._v(" "),a("div",{staticClass:"results-table"},[a("table",{staticStyle:{width:"100%"}},[a("tr",[a("th",[e._v(" Name ")]),e._v(" "),a("th",[e._v(" "+e._s(e.result1.name)+" ")]),e._v(" "),a("th",[e._v(" "+e._s(e.result2.name)+" ")])]),e._v(" "),a("tr",[a("td",[e._v("Speed")]),e._v(" "),a("td",[e._v(" "+e._s(e.result1.speed)+" ")]),e._v(" "),a("td",[e._v(" "+e._s(e.result2.speed))])]),e._v(" "),a("tr",[a("td",[e._v("Alignment")]),e._v(" "),a("td",[e._v(e._s(e.result1.alignment))]),e._v(" "),a("td",[e._v(e._s(e.result2.alignment))])]),e._v(" "),a("tr",[a("td",[e._v("Age")]),e._v(" "),a("td",[e._v(e._s(e.result1.age))]),e._v(" "),a("td",[e._v(e._s(e.result2.age))])]),e._v(" "),a("tr",[a("td",[e._v("Size")]),e._v(" "),a("td",[e._v(e._s(e.result1.size))]),e._v(" "),a("td",[e._v(e._s(e.result2.size))])])])])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"Title"},[t("h1",[this._v("Dungeons and Dragons 5th Edition Race Informer")])])}]};var v=a("VU/8")(h,u,!1,function(e){a("tOd9")},"data-v-55b7e99a",null).exports,m={name:"App",components:{DNDWelcome:d}},_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("img",{attrs:{src:a("s+0r")}}),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var p=a("VU/8")(m,_,!1,function(e){a("wlnM")},null,null).exports,f=a("/ocq");s.a.use(f.a);var g=new f.a({routes:[{path:"/",name:"DNDWelcome",component:d},{path:"/race-selector",name:"RaceSelector",component:v}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:g,components:{App:p},template:"<App/>"})},NnNo:function(e,t){},"s+0r":function(e,t,a){e.exports=a.p+"static/img/Twenty_sided_dice.feea83d.png"},tOd9:function(e,t){},wlnM:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.db2815db95e7e26c1085.js.map