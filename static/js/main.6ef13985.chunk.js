(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),s=a.n(r),i=a(1),l=a(2),o=a(4),b=a(3),u=(a(12),function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.tabs,a=e.selectedTabId,n=e.onTabSelected;return c.a.createElement("div",{className:"tabs"},c.a.createElement("ul",{className:"tabs__list"},t.map((function(e){return c.a.createElement("li",{key:e.id,className:"tabs__list-item",onClick:function(){return n(e)}},e.title)}))),c.a.createElement("div",{className:"tabs__list-content"},t.find((function(e){return e.id===a})).content))}}]),a}(c.a.Component)),d=(a(13),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),m=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={selectedTab:d[0]},e.onTabSelected=function(t){e.setState({selectedTab:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.selectedTab;return c.a.createElement("div",{className:"app"},c.a.createElement("h1",{className:"app__title"},"Selected tab is\xa0",e.title),c.a.createElement(u,{tabs:d,selectedTabId:e.id,onTabSelected:this.onTabSelected}))}}]),a}(c.a.Component);s.a.render(c.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.6ef13985.chunk.js.map