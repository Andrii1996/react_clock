(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),c=n.n(i),o=n(1),l=n(2),u=n(4),s=n(3),m=n(7),d=n.n(m),p=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={date:(new Date).toLocaleTimeString()},e.componentDidMount=function(){e.timerId=setInterval((function(){e.setState({date:(new Date).toLocaleTimeString()})}),1e3)},e}return Object(l.a)(n,[{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("p",null,"Current time:"," ",this.state.date))}}]),n}(a.Component);p.propType={name:d.a.number.isRequired};n(15);var b=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={name:0,isClockVisible:!0},e.randomNum=function(){e.setState({name:Math.round(1+99*Math.random())})},e.clear=function(){clearInterval(e.timerId)},e.toggleVisibility=function(){e.setState((function(e){return{isClockVisible:!e.isClockVisible}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.isClockVisible;return r.a.createElement("div",{className:"App"},n?r.a.createElement(p,null):r.a.createElement("div",null,"hidden"),r.a.createElement("button",{type:"button",onClick:this.toggleVisibility},n?"Hide":"Show"),r.a.createElement("button",{type:"button",onClick:this.randomNum},"Get random number"),r.a.createElement("p",null,"Random number"," : ",t))}}]),n}(a.Component);c.a.render(r.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.dd769a7e.chunk.js.map