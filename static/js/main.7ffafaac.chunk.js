(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{18:function(e,t,o){e.exports=o(33)},23:function(e,t,o){},24:function(e,t,o){},33:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),c=o(5),r=o.n(c),l=(o(23),o(24),o(3)),i=o(15),d=o(1),u=o(2),s=o(34),m=o(10),p=o(13),O={key:"root",storage:o.n(p).a},E={todos:[{id:Object(s.a)(),name:"Read a bit",complete:!0},{id:Object(s.a)(),name:"Do laundry",complete:!1}]},b=Object(m.a)(O,(function(e,t){switch(t.type){case"ADD_TODO":return Object(d.a)(Object(d.a)({},e),{},{todos:[].concat(Object(i.a)(e.todos),[t.payload])});case"TOGGLE_TODO":return Object(d.a)(Object(d.a)({},e),{},{todos:e.todos.map((function(e){return e.id===t.payload?Object(d.a)(Object(d.a)({},e),{},{complete:!e.complete}):e}))});case"DELETE_TODO":return Object(d.a)(Object(d.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.payload}))});default:return e}}));var f=Object(u.c)(b,E,"object"===typeof window&&"undefined"!==typeof window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}),T=Object(m.b)(f),j=o(14),y=o(16),D=Object(l.b)((function(e){return{todos:e.todos}}),{addTodoAction:function(e){return{type:"ADD_TODO",payload:e}}})((function(e){var t=Object(n.useState)(""),o=Object(y.a)(t,2),c=o[0],r=o[1];return a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.addTodoAction({id:Object(s.a)(),name:c,complete:!1}),r("")}},a.a.createElement("div",{className:"form-div"},a.a.createElement("input",{type:"text",name:"todo",placeholder:"Add a todo",value:c,onChange:function(e){r(e.target.value)}}),a.a.createElement("button",{type:"submit"},"Add")))})),_=Object(l.b)((function(e){return{todos:e.todos}}),{toggleTodoComplete:function(e){return{type:"TOGGLE_TODO",payload:e}},deleteTodoAction:function(e){return{type:"DELETE_TODO",payload:e}}})((function(e){var t=e.todos,o=function(t){e.toggleTodoComplete(t)},n=function(t){e.deleteTodoAction(t)};return a.a.createElement("ul",{className:"todo-list"},t.map((function(e){return a.a.createElement("li",{key:e.id},a.a.createElement("input",{type:"checkbox",checked:e.complete,onChange:o.bind(null,e.id)}),a.a.createElement("span",{className:e.complete?"complete":null},e.name),a.a.createElement("span",{className:"delete-button",onClick:n.bind(null,e.id)},"X"))})))})),h=function(){return a.a.createElement(l.a,{store:f},a.a.createElement("div",{className:"main"},a.a.createElement("header",{className:"main"},"To Do List"),a.a.createElement(j.a,{persistor:T},a.a.createElement(D,null),a.a.createElement(_,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.7ffafaac.chunk.js.map