(this.webpackJsonpTodosApp=this.webpackJsonpTodosApp||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n.n(o),c=n(8),s=n.n(c),r=(n(14),n(2)),i=n(3),u=n(5),d=n(4),l=(n(15),n(9)),j=n(6),b=n(0),p=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={item:{}},t.getItem=function(e){t.setState({item:{value:e.target.value,done:!1}})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{className:"form",children:[Object(b.jsx)("input",{className:"item-input",type:"text",onChange:function(e){return t.getItem(e)}}),Object(b.jsx)("button",{className:"btn btn__add",onClick:function(){return t.props.addItem(t.state.item)}})]})}}]),n}(o.Component),h=function(t){return Object(b.jsxs)("div",{className:"item-div",children:[Object(b.jsx)("li",{onClick:function(){return t.toggleTodo(t.index)},className:t.done?"done":"",children:t.value}),Object(b.jsx)("button",{className:"btn btn__delete",onClick:function(){return t.deleteItem(t.index)}})]})},m=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.props.todosItems.map((function(e,n){return Object(b.jsx)(h,{index:n,deleteItem:t.props.deleteItem,toggleTodo:t.props.toggleTodo,done:e.done,value:e.value},n)}));return Object(b.jsx)("ul",{children:e})}}]),n}(o.Component),O=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var o;return Object(r.a)(this,n),(o=e.call(this,t)).addItem=function(t){var e=Object(j.a)(o.state.todos);e.push(Object(l.a)({},t)),o.setState({todos:e})},o.deleteItem=function(t){var e=Object(j.a)(o.state.todos);e.splice(t,1),o.setState({todos:e})},o.toggleTodo=function(t){var e=Object(j.a)(o.state.todos);e[t].done=!e[t].done,o.setState({todos:e})},o.state={todos:[]},o}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"title",children:"Todo App"}),Object(b.jsx)(p,{addItem:this.addItem}),Object(b.jsx)("hr",{}),Object(b.jsx)(m,{toggleTodo:this.toggleTodo,deleteItem:this.deleteItem,todosItems:this.state.todos})]})}}]),n}(o.Component),g=function(t){return Object(b.jsxs)("div",{className:"about",children:["This is a simple Todo App made by ",t.name]})},f=function(t){return Object(b.jsxs)("div",{className:"nav",children:[Object(b.jsx)("button",{className:"btn nav-btn",onClick:function(){return t.changePage("todoApp")},children:"App"}),Object(b.jsx)("button",{className:"btn nav-btn",onClick:function(){return t.changePage("about")},children:"About"})]})},v=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={page:"todoApp"},t.changePage=function(e){t.setState({page:e})},t}return Object(i.a)(n,[{key:"render",value:function(){var t="todoApp"===this.state.page?Object(b.jsx)(O,{}):Object(b.jsx)(g,{name:"Author"});return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(f,{changePage:this.changePage}),t]})}}]),n}(o.Component),x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),o(t),a(t),c(t),s(t)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.67dcbf6b.chunk.js.map