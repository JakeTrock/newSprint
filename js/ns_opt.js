function y(b){return b.raw=b}var C=y([" "]),E=y([" "]),F="function"==typeof Object.defineProperties?Object.defineProperty:function(b,c,d){if(b==Array.prototype||b==Object.prototype)return b;b[c]=d.value;return b};function G(b){b=["object"==typeof globalThis&&globalThis,b,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object");}var H=G(this);
function I(b,c){if(c)a:{var d=H;b=b.split(".");for(var f=0;f<b.length-1;f++){var k=b[f];if(!(k in d))break a;d=d[k]}b=b[b.length-1];f=d[b];c=c(f);c!=f&&null!=c&&F(d,b,{configurable:!0,writable:!0,value:c})}}I("Object.is",function(b){return b?b:function(c,d){return c===d?0!==c||1/c===1/d:c!==c&&d!==d}});
I("Array.prototype.includes",function(b){return b?b:function(c,d){var f=this;f instanceof String&&(f=String(f));var k=f.length;d=d||0;for(0>d&&(d=Math.max(d+k,0));d<k;d++){var p=f[d];if(p===c||Object.is(p,c))return!0}return!1}});
I("String.prototype.includes",function(b){return b?b:function(c,d){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(c,d||0)}});
window.nsprint=function(b,c,d){function f(a){a=~~Number(g.value)+a;k();switch(a){case 0>a:g.value=0;break;case a>l.length:g.value=l.length;break;default:g.value=a}k()}function k(){r=!r;t.innerHTML=(r?"&#9208;":"&#9654;")+"&#xFE0E;";g.disabled=!1;r&&p(g.value)}function p(a){if(r&&l.length){var e=l[a++];if(e){g.value=a;3>e.length&&(e+=" "+l[a++]);m.innerHTML=e;v.innerHTML=z(w-A(a))+"/"+z(w);var x=setTimeout(function(){x===B&&p(a)},1E3/(h/60)*(.5*(e.length/5-1)+1));B=x}else clearTimeout(B),m.innerHTML=
"&#8635;&#xFE0E;",m.addEventListener("click",function(){return p(0)})}}function z(a){var e=(a%6E4/1E3).toFixed(0);return~~(a/6E4)+":"+(10>e?"0":"")+e}function u(a){0<=+h+a&&(localStorage.setItem("nsp+",h=+h+a),w=A());n.value=h}function A(a){return l.slice(void 0===a?0:a).reduce(function(e,x){return e+1E3/(h/60)*(.5*(x.length/5-1)+1)},0)}c=void 0===c?document.body.appendChild(document.createElement("div")):c;d=void 0===d?"https://cdn.jsdelivr.net/gh/jaketrock/newSprint/css/ns_prod.css":d;var D=
document.head.appendChild(document.createElement("link"));D.rel="stylesheet";D.href=d;var h=localStorage.getItem("nsp+")||200,B=0,m,q,g,t,n,v,r=!1,l="string"==typeof b?b.split(C).filter(function(a){return a}).map(function(a){return a.includes("](")?"<a href="+a.split(/[()]/)[1]+">"+a.split(/\[(.*?)\]/)[1]+"</a>":a}):[].concat.apply([],Array.prototype.slice.call(b).map(function(a){return a.href?a.innerHTML.link(a.href):(a.innerHTML||a.value).split(E)})).filter(function(a){return a}),w=A();document.body.onkeydown=
function(a){switch(a.key){case " ":k();break;case "Escape":c.innerHTML="";break;case "ArrowRight":f(l.length/h);break;case "ArrowLeft":f(-l.length/h);break;case "ArrowUp":u(10);break;case "ArrowDown":u(-10)}};document.body.addEventListener("wheel",function(a){return f(a.deltaY)});(function(){c.innerHTML="";q=c.appendChild(document.createElement("div"));m=q.appendChild(document.createElement("div"));q.className="nsp_out";g=q.appendChild(document.createElement("input"));g.type="range";g.value=g.min=
0;g.step=1;g.max=l.length;g.className="nsp_sli";g.disabled=!0;g.addEventListener("change",function(){p(g.value);m.innerHTML=l[g.value]});var a=q.appendChild(document.createElement("div"));a.className="nsp_wdu";var e=a.appendChild(document.createElement("button"));e.className="nsp_btn";e.innerHTML="-";e.addEventListener("click",function(){return u(-10)});n=a.appendChild(document.createElement("input"));n.type="text";n.size="2";n.className="nsp_wad";n.value=h;n.addEventListener("blur",function(){return u(n.value-
h)});e=a.appendChild(document.createElement("button"));e.className="nsp_btn";e.innerHTML="+";e.addEventListener("click",function(){return u(10)});a=q.appendChild(document.createElement("div"));a.className="nsp_mcl";t=a.appendChild(document.createElement("button"));t.className="nsp_btn";t.innerHTML="&#9654;&#xFE0E;";t.addEventListener("click",function(){return k()});e=a.appendChild(document.createElement("button"));e.className="nsp_btn nsp_bl";e.innerHTML="&#9194;&#xFE0E;";e.addEventListener("click",
function(){return f(-h/4)});v=q.appendChild(document.createElement("div"));v.className="nsp_tmr";v.innerHTML="0:00/"+z(w);e=a.appendChild(document.createElement("button"));e.className="nsp_btn nsp_bl";e.innerHTML="&#9193;&#xFE0E;";e.addEventListener("click",function(){return f(h/4)});e=a.appendChild(document.createElement("button"));e.className="nsp_btn nsp_bl";e.innerHTML="&times;&#xFE0E;";e.addEventListener("click",function(){c.innerHTML=""});m.className="nsp_inr";m.innerHTML="&#9654;&#xFE0E;";
m.addEventListener("click",function(){return k()})})()};
