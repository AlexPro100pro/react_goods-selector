(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),a=c(4),o=c(5),l=c(8),r=c(7),d=c(1),i=c.n(d),j=(c(13),c(14),c(6)),b=c.n(j),u=c(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(a.a)(this,c);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"Jam"},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(u.jsxs)("main",{className:"section container",children:[t?Object(u.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(u.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){e.setState({selectedGood:""})}})]}):Object(u.jsx)("h1",{className:"title",children:"No goods selected"}),Object(u.jsx)("table",{className:"table",children:Object(u.jsx)("tbody",{children:h.map((function(c){var s=t===c;return Object(u.jsx)("tr",{"data-cy":"Good",className:b()({"has-background-success-light":s}),children:s?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("td",{children:Object(u.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){e.setState({selectedGood:c})},children:"-"})}),Object(u.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("td",{children:Object(u.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){e.setState({selectedGood:c})},children:"+"})}),Object(u.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]})},c)}))})})]})}}]),c}(i.a.Component);n.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4a546ad1.chunk.js.map