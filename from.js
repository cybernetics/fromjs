(function(){function D(a,c,b){if(a.length==c)return b;a=a.substr(c);return/^[0-9]+$/.exec(a)?b+"["+a+"]":b+"."+a}function u(a,c,b){var d,e=Q.exec(a);e?(d=[e[1]],a=e[2],c=Array(1)):(e=R.exec(a))?(d=e[1].split(/\s*,\s*/),a=e[2],c=Array(d.length)):c=Array(c);for(var e=0,h=c.length;e<h;++e)c[e]=0;var h=0,g="";if(d)for(;e=I.exec(a);)for(var r=e[0],k=0,l=d.length;k<l;++k){if(r==d[k]){++c[k];b&&(b.push(a.substring(h,e.index)),b.push(k),h=e.index+r.length);break}}else for(d="";e=I.exec(a);)r=e[0],l=r.charAt(0),
k=null,"$"==l?(l=r.length,2<=l&&"$"==r[1]?(++c[1],b&&(k=1,d=D(r,2,""))):(++c[0],b&&(k=0,d=D(r,1,"")))):"@"==l?(l=c.length-1,++c[l],b&&(k=l,d=D(r,1,""))):"#"==l&&(l=parseInt(r.substr(1)),++c[l],b&&(k=l,d="")),b&&null!==k&&(b.push(g+a.substring(h,e.index)),b.push(k),h=e.index+r.length,g=d,d="");b&&b.push(g+a.substring(h,a.length));return c}function m(a,c,b){var d,e=Q.exec(a);if(e)d=[e[1]],a=e[2];else if(e=R.exec(a))d=e[1].split(/\s*,\s*/),a=e[2];var h=arguments,g=0<h.length?h[h.length-1]:"";return d?
a.replace(I,function(a){for(var b=0,c=d.length;b<c;++b)if(a==d[b])return h[b+1];return a}):a.replace(I,function(a){var d=a.charAt(0);return"$"==d?2<=a.length&&"$"==a[1]?D(a,2,b):D(a,1,c):"@"==d?D(a,1,g):"#"==d?h[parseInt(a.substr(1))+1]:a})}function t(a,c,b){for(var d=1,e=a.length;d<e;d+=2){var h=a[d];"number"==typeof h&&(a[d]=arguments[h+1])}return a.join("")}function F(a,c){if(!a)return null;if("function"==typeof a)return a;var b,d=/^\s*(\w+)\s*=>(.+)$/.exec(a);if(d)b=[d[1]],a=d[2];else if(d=/^\s*\(\s*([\w\s,]*)\s*\)\s*=>(.+)$/.exec(a))b=
d[1].split(/\s*,\s*/),a=d[2];if(!b){b=[];for(d=0;d<c;++d)b.push("$"+d);d=[a].concat(b);a=m.apply(null,d)}b.push("return "+a+";");return Function.apply(null,b)}function y(a){var c=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,b={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return c.test(a)?'"'+a.replace(c,function(a){var c=b[a];return c?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+
'"':'"'+a+'"'}function z(a,c){var b=function(){};b.prototype=a.prototype;c.prototype=new b;c.prototype.constructor=c}function S(a,c){var b=a?a+"=":"";if("boolean"==typeof c)return b+(c?"1":"0");if("string"==typeof c)return b+encodeURIComponent(c);if("number"==typeof c)return b+c.toString();if("object"==typeof c){var d=[];s(c).each(function(b,c){c=encodeURIComponent(c);d.push(S(a?a+"["+c+"]":c,b))});return d.join("&")}return""}function T(a,c,b){var d,e;!a||a instanceof Array?(d=!a?J:a,a=U):a instanceof
f?(d=J,a=V):"string"==typeof a&&(a=m(a,"$","$$","@.a"));!c||c instanceof Array?(e=!c?J:c,c=U):c instanceof f?(e=J,c=V):"string"==typeof c&&(c=m(c,"$","$$","@.a"));return{left:a,leftArg:{t:d,a:b},right:c,rightArg:{t:e,a:b}}}function G(a,c,b,d){for(var e={},h=[],g=0,f=a.length;g<f;++g){var k=2*g+1;if(c=arguments[k])if(b=arguments[k+1],b instanceof Array){if(0==a[g])for(var k=0,l=b.length;k<l;++k)b[k]="";e[c]=b}else 1>=a[g]?e[c]=b:(h.push("var "+c+"="+b+";"),e[c]=c)}e.decl=h.join("");return e}function H(a,
c){this.$o=s(this.o=[]);this.c=a;this.a=c}function W(a){var c=N[a];c||(c=N[a]={});return c}function f(a){this.each=a}function p(a){this.data=a;this.rev=!1}function B(a){p.call(this,a)}function A(a){p.call(this,a)}function w(a){this.data=a}function K(a){this.data=a}function x(a){this.it=a}function L(a){this.it=a}function E(a,c){this._r=a;this._str=c}function s(a,c){return a?a instanceof f?a:a instanceof RegExp?c?new E(a,c):{match:function(b){return new E(a,b)}}:a.$iterable?s(a.$iterable()):a.$each?
new f(function(b,c){this.broken=!1===a.$each(b,c);return this}):"string"==typeof a?new B(a):a instanceof Array?new A(a):new w(a):new f(function(){return this})}var O,X={nodejs:function(){return"undefined"!==typeof module&&module.exports},web:function(){return!0}},P;for(P in X)if(X[P]()){O=P;break}var C="from",J=[void 0,null,!1,0," ","\n","\t"],U="@t.indexOf($)>=0",V="@t.contains($)",Q=/^\s*(\w+)\s*=>(.+)$/,R=/^\s*\(\s*([\w\s,]*)\s*\)\s*=>(.+)$/,I=/"(?:[^"]|\\")*"|'(?:[^']|\\')*'|[\$@\w_#]+/g;H.prototype._getPrimitiveList=
function(a,c){var b=this[a];b||(this[a]=b={});c=c.toString();var d=b[c];d||(b[c]=d=[],this.o.push({k:c,l:d}));return d};H.prototype._getList=function(a){var c=this.c,b;if(c)b="string"==typeof c?m(c,"$k","@k","@a"):"@c($k,@k,@a)";else{switch(typeof a){case "string":return this._getPrimitiveList("s",a);case "number":return this._getPrimitiveList("n",a);case "boolean":return this._getPrimitiveList("b",a)}b="$k==@k"}if(c=this.$o.first(b,{k:a,c:c,a:this.a}))return c.l;c=[];this.o.push({k:a,l:c});return c};
H.prototype.add=function(a,c){this._getList(a).push(c)};H.prototype.$each=function(a,c){return!this.$o.selectPair("from($l)","$k").each(a,c).broken};var N={},v=[],n={get:function(a,c){var b=W(a)[c];if(b&&2<v.length)for(var d=0,e=v.length;d<e;d+=2)if(v[d]==a&&v[d+1]==c){v.splice(d,2);v.push(a,c);break}return b},set:function(a,c,b){var d=W(a);d[c]=b;if(!(c in d))for(v.push(a,c);32<v.length;)d=N[v[0]],delete d[v[1]],v.splice(0,2)}};f.prototype.broken=!1;f.prototype.where=function(a,c){var b;"string"==
typeof a?(b=n.get("($_$$_a0)",a),b||(b="("+m(a,"$","$$","@a0")+")",n.set("($_$$_a0)",a,b))):b="@pr($,$$,@a0)";var d=this;return new f(function(e,h){var g;"string"==typeof e?(g=n.get("($_$$_a)",e),g||(g="("+m(e,"$","$$","@a")+")",n.set("($_$$_a)",e,g))):g="@p($,$$,@a)";this.broken=d.each(b+"?"+g+":0",{p:e,pr:a,a0:c,a:h}).broken;return this})};f.prototype.aggregate=function(a,c,b){var d;"string"==typeof c?(d=n.get("(c_$_$$_a)",c),d||(d="("+m(c,"@c","$","$$","@a")+")",n.set("(c_$_$$_a)",c,d))):d="@p(@c,$,$$,@a)";
null===a?(a={p:c,f:!0,a:b},this.each("@f?(@f=false,@c=$,0):(@c="+d+",0)",a)):(a={c:a,a:b,p:c},this.each("(@c="+d+"),0",a));return a.c};f.prototype.all=function(a,c){var b;"string"==typeof a?(b=n.get("($_$$_a)",a),b||(b="("+m(a,"$","$$","@a")+")",n.set("($_$$_a)",a,b))):b="@p($,$$,@a)";return!this.each("!"+b+"?false:0",{a:c,p:a}).broken};f.prototype.any=function(a,c){var b;a?("string"==typeof a?(b=n.get("($_$$_a)",a),b||(b="("+m(a,"$","$$","@a")+")",n.set("($_$$_a)",a,b))):b="@p($,$$,@a)",b+="?false:0"):
b="false";return this.each(b,{a:c,p:a}).broken};f.prototype.at=function(a){return this.skip(a).first()};f.prototype.atOrDefault=function(a,c){var b=this.at(a);return void 0===b?c:b};f.prototype.average=function(){var a={f:!0};this.each("@f?(@f=false,@s=$,@c=1,0):(@s+=$,++@c)",a);return a.s/a.c};f.prototype.concat=function(a){var c=this;return new f(function(b,d){if(c.each(b,d).broken)return this.broken=!0,this;this.broken=s(a).each(b,d).broken;return this})};f.prototype.contains=function(a,c,b){var d;
c?"string"==typeof c?(d=n.get("(v_$_a)",c),d||(d="("+m(c,"@v","$","@a")+")",n.set("(v_$_a)",c,d))):d="@c(@v,$,@a)":d="$==@v";a={v:a,a:b,c:c,r:!1};this.each(d+"?((@r=true),false):0",a);return a.r};f.prototype.count=function(a,c){var b;a?("string"==typeof a?(b=n.get("($_$$_a)",a),b||(b="("+m(a,"$","$$","@a")+")",n.set("($_$$_a)",a,b))):b="@p($,$$,@a)",b+="?++@c:0"):b="++@c,0";var d={a:c,p:a,c:0};this.each(b,d);return d.c};f.prototype.defaultIfEmpty=function(a){var c=this;return new f(function(b,d){c.each("false").broken?
this.broken=c.each(b,d).broken:("string"==typeof b&&(b=F(b,3)),this.broken=!1===b(a,0,d));return this})};f.prototype.distinct=function(a,c){var b=a?",@c,@a":"",d=[],e=this;return new f(function(c,g){var f;"string"==typeof c?(f=n.get("($_$$_a0)",c),f||(f="("+m(c,"$","$$","@a0")+")",n.set("($_$$_a0)",c,f))):f="@p($,$$,@a0)";this.broken=e.each("!from(@l).contains($"+b+")?(@l.push($),"+f+"):0",{c:a,l:d,p:c,a0:g}).broken;return this})};f.prototype.dump=function(){"nodejs"==O?this.each('console.log("key = " + $$ + ", value = " + $)'):
this.each('document.writeln("key = " + $$ + ", value = " + $ + "<br/>")');return this};f.prototype.except=function(a,c,b){var d;d=c?",@c,@a0":"";var e=this;return new f(function(h,g){this.broken="string"==typeof h?e.each("@s.contains($"+d+")?0:("+m(h,"$","$$","@a")+")",{c:c,a0:b,s:s(a),a:g}).broken:e.each("@s.contains($"+d+")?0:@p($,$$,@a)",{c:c,a0:b,p:h,s:s(a),a:g}).broken;return this})};f.prototype.first=function(a,c){if(a)"string"==typeof a?(b={a:c},this.each("("+m(a,"$","$$","@a")+")?(@r=$,false):0",
b)):(b={a:c,p:a},this.each("@p($,$$,@a)?(@r=$,false):0",b));else{var b={};this.each("(@r=$),false",b)}return b.r};f.prototype.firstOrDefault=function(a,c,b){if(1>=arguments.length){var d=this.first();return void 0===d?a:d}d=this.first(a,b);return void 0===d?c:d};f.prototype.groupBy=function(a,c,b){var d,e,h;a&&(d=a.value,e=a.key,h=a.result);d=d||"$";e=e||"$$";return h?(a="string"==typeof h?m(h,"$","$$","@a"):"@rs($,$$,@a)",this._getGroupIterable(d,e,c,b).selectPair(a,"$$",{rs:h,a:b})):this._getGroupIterable(d,
e,c,b)};f.prototype._getGroupIterable=function(a,c,b,d){b=new H(b,d);var e=s(b),h;h="string"==typeof c?"("+m(c,"$","$$","@a")+")":"@ks($,$$,@a)";var g;g="string"==typeof a?"("+m(a,"$","$$","@a")+")":"@vs($,$$,@a)";this.each("(@k="+h+"),(@v="+g+"),@g.add(@k,@v),0",{ks:c,vs:a,g:b,a:d});return e};f.prototype.groupJoin=function(a,c,b,d,e,h){a=s(a);c="string"==typeof c?"("+m(c,"$","$$","@a")+")":"@oks($,$$,@a)";b="string"==typeof b?"("+m(b,"$","$$","@a")+")":"@iks($,$$,@a)";b=e?"string"==typeof e?m(e,
"@ok",b):"@c(@ok,"+b+")":"@ok=="+b;b=y(b);c="@i.where("+b+",{a:@a,ok:"+c+",c:@c})";if("string"==typeof d)switch(b=[],u(d,3,b)[1]){case 0:case 1:c=t(b,"$",c,"@a");break;default:c="(@w="+c+"),("+t(b,"$","@w","@a")+")"}else c="@rs($,"+c+",@a)";return this.select(c,{rs:d,i:a,a:h,c:e})};f.prototype.intersect=function(a,c,b){var d;d=c?"string"==typeof c?y(c):"@c":"null";return this.where("@t.contains($,"+d+",@a)",{t:s(a),a:b,c:c})};f.prototype.join=function(a,c,b,d,e,h){a=s(a);var g;g="string"==typeof c?
"("+m(c,"$","$$","@a")+")":"@oks($,$$,@a)";var r;r="string"==typeof b?"("+m(b,"$","$$","@a")+")":"@iks($,$$,@a)";var k;k=e?"string"==typeof e?m(e,"@ok",r):"@c(@ok,"+r+")":"@ok=="+r;k=y(k);var l;l="string"==typeof d?"("+m(d,"@ov","$","@a")+")":"@rs(@ov,$,@a)";var n=this;return new f(function(e,f){var r;if("string"==typeof e){r=[];var m=u(e,3,r),M=[],s;switch(m[0]){case 0:case 1:s=l;break;default:M.push("(@RS="+l+")"),s="@RS"}switch(m[1]){case 0:case 1:m="(@c++)";break;default:M.push("(@cc=@c++)"),
m="@cc"}M.push("("+t(r,s,m,"@a0")+")");r=M.join(",")}else r="@p("+l+",@c++,@a0)";this.broken=n.each("(@ok="+g+"),(@ov=$),@i.where("+k+",@).each("+y(r)+",@)",{i:a,oks:c,iks:b,rs:d,p:e,a:h,a0:f,c:0}).broken;return this})};f.prototype.last=function(a,c){if(a)"string"==typeof a?(b={a:c},this.each("("+m(a,"$","$$","@a")+")?@r=$:0",b)):(b={a:c,p:a},this.each("@p($,$$,@a)?@r=$:0",b));else{var b={};this.each("@r=$",b)}return b.r};f.prototype.lastOrDefault=function(a,c,b){if(1>=arguments.length){var d=this.last();
return void 0===d?a:d}d=this.last(a,b);return void 0===d?c:d};f.prototype.max=function(a,c){if(!a)return this.aggregate(null,"#0>#1?#0:#1");var b;b="string"==typeof a?"("+m(a,"$","$$","@a")+")":"@s($,$$,@a)";var d={f:!0,s:a,a:c};this.each("@f?((@f=false),(@r=$),(@m="+b+"),0):((@v="+b+"),(@v>@m?((@m=@v),(@r=$)):0),0)",d);return d.r};f.prototype.min=function(a,c){if(!a)return this.aggregate(null,"#0<#1?#0:#1");var b;b="string"==typeof a?"("+m(a,"$","$$","@a")+")":"@s($,$$,@a)";var d={f:!0,s:a,a:c};
this.each("@f?((@f=false),(@r=$),(@m="+b+"),0):((@v="+b+"),(@v<@m?((@m=@v),(@r=$)):0),0)",d);return d.r};f.prototype.orderBy=function(a,c,b){return(new x(this))._addContext(a||"$",c,1,b)};f.prototype.orderByDesc=function(a,c,b){return(new x(this))._addContext(a||"$",c,-1,b)};f.prototype.reverse=function(){var a=this;return new f(function(c,b){var d=[];a.each("@push($$),@push($),0",d);if("string"==typeof c){var e=[],h=u(c,3,e),g,f,k;switch(h[0]){case 0:case 1:g="";f="l[(i-1)*2+1]";break;default:g=
"var v=l[(i-1)*2+1];",f="v"}switch(h[1]){case 0:case 1:h="";k="l[(i-1)*2]";break;default:h="var k=l[(i-1)*2];",k="k"}this.broken=(new Function("l","a","for(var i=l.length/2;i>0;--i){"+h+g+"if(("+t(e,f,k,"a")+")===false){return true;}}return false;"))(d,b)}else{this.broken=!1;for(e=d.length/2;0<e;--e)if(!1===c(d[2*(e-1)+1],d[2*(e-1)],b)){this.broken=!0;break}}return this})};f.prototype.select=function(a,c){var b=this,d;"string"==typeof a?(d=n.get("($_$$_a0)",a),d||(d="("+m(a,"$","$$","@a0")+")",n.set("($_$$_a0)",
a,d))):d="@s($,$$,@a0)";return new f(function(e,h){if("string"==typeof e){var g=[],f=u(e,3,g),k=[],l;switch(f[0]){case 0:l="";break;case 1:l=d;break;default:k.push("(@v="+d+")"),l="@v"}switch(f[1]){case 0:f="";break;case 1:f="(@i++)";break;default:k.push("(@j=@i++)"),f="@j"}k.push(t(g,l,f,"@a"));this.broken=b.each(k.join(","),{s:a,a0:c,a:h,i:0}).broken}else this.broken=b.each("@p("+d+",@i++,@a)",{s:a,a0:c,a:h,i:0,p:e}).broken;return this})};f.prototype.selectMany=function(a,c){var b;b="string"==typeof a?
m(a,"$","$$","@a"):"@s($,$$,@a)";var d=this;return new f(function(e,h){var g;if("string"==typeof e)switch(g=[],u(e,3,g)[1]){case 0:case 1:g=t(g,"$","(@i++)","@a0");break;default:g="(@j=@i++),("+t(g,"$","@j","@a0")+")"}else g="@p($,@i++,@a0)";this.broken=d.each("from("+b+").each("+y(g)+",@)",{s:a,a:c,a0:h,i:0,p:e});return this})};f.prototype.selectPair=function(a,c,b){var d=this,e,h;"string"==typeof a?(e=n.get("($_$$_a0)",a),e||(e="("+m(a,"$","$$","@a0")+")",n.set("($_$$_a0)",a,e))):e="@vs($,$$,@a0)";
"string"==typeof c?(h=n.get("($_$$_a0)",c),h||(h="("+m(c,"$","$$","@a0")+")",n.set("($_$$_a0)",c,h))):h="@ks($,$$,@a0)";return new f(function(g,f){var k;if("string"==typeof g){k=[];var l=u(g,3,k),n,q=[];switch(l[0]){case 0:case 1:n=e;break;default:q.push("(@VS="+e+")"),n="@VS"}switch(l[1]){case 0:case 1:l=h;break;default:q.push("(@KS="+h+")"),l="@KS"}q.push(t(k,n,l,"@a"));k=q.join(",")}else k="@p("+e+","+h+",@a)";this.broken=d.each(k,{a0:b,a:f,p:g,vs:a,ks:c}).broken;return this})};f.prototype.sequenceEqual=
function(a,c,b){var d;d=c?"string"==typeof c?m(c,"#0","#1","@a"):"@c(#0,#1,@a)":"#0==#1";return this.zip(a,d,{a:b,c:c}).all("$==true")};f.prototype.single=function(a,c){var b=!a?this.take(2):this.where(a).take(2);if(1==b.count())return b.first()};f.prototype.singleOrDefault=function(a,c,b){var d;1>=arguments.length?(d=this.take(2),c=a):d=this.where(a).take(2);var e=d.count();if(0==e)return c;if(1==e)return d.first();throw Error("The sequence has more than one element satisfying the condition.");};
f.prototype.skip=function(a){if(0==a)return this;if(0>a)return this.reverse().skip(-a).reverse();var c=this;return new f(function(b,d){var e;"string"==typeof b?(e=n.get("($_$$_a)",b),e||(e="("+m(b,"$","$$","@a")+")",n.set("($_$$_a)",b,e))):e="@p($,$$,@a)";this.broken=c.each("@c==0?"+e+":--@c",{p:b,a:d,c:a}).broken;return this})};f.prototype.skipWhile=function(a,c){var b;"string"==typeof a?(b=n.get("($_$$_a)",a),b||(b="("+m(a,"$","$$","@a")+")",n.set("($_$$_a)",a,b))):b="@pr($,$$,@a)";var d=this;return new f(function(e,
h){var g;"string"==typeof e?(g=n.get("($_$$_a0)",e),g||(g="("+m(e,"$","$$","@a0")+")",n.set("($_$$_a0)",e,g))):g="@p($,$$,@a0)";this.broken=d.each("@f||(@f=!"+b+")?"+g+":0",{pr:a,f:!1,a:c,a0:h}).broken;return this})};f.prototype.sum=function(){return this.aggregate(null,"#0+#1")};f.prototype.take=function(a){if(0==a)return s();if(0>a)return this.reverse().take(-a).reverse();var c=this;return new f(function(b,d){var e;"string"==typeof b?(e=n.get("($_$$_a)",b),e||(e="("+m(b,"$","$$","@a")+")",n.set("($_$$_a)",
b,e))):e="@p($,$$,@a)";var h={i:0,p:b,a:d,b:!1};this.broken=c.each("(@i++<"+a+")?"+e+":(@b=true,false)",h).broken&&!h.b;return this})};f.prototype.takeWhile=function(a,c){var b;"string"==typeof a?(b=n.get("($_$$_a)",a),b||(b="("+m(a,"$","$$","@a")+")",n.set("($_$$_a)",a,b))):b="@pr($,$$,@a)";var d=this;return new f(function(e,h){var g;"string"==typeof e?(g=n.get("($_$$_a0)",e),g||(g="("+m(e,"$","$$","@a0")+")",n.set("($_$$_a0)",e,g))):g="@p($,$$,@a0)";var f={p:e,pr:a,a:c,a0:h,b:!1};this.broken=d.each(b+
"?"+g+":(@b=true,false)",f).broken&&!f.b;return this})};f.prototype.toArray=function(){var a=[];this.each("@push($)",a);return a};f.prototype.toDictionary=function(){var a={};this.each("@[$$]=$",a);return a};f.prototype.toJSON=function(a){function c(d){var e=typeof d;return"string"==e?y(d):"number"==e||"boolean"==e?d.toString():"function"==e?c(d()):b.contains(d)||(d instanceof A||d instanceof w)&&b.contains(d.data)?"null":s(d).toJSON(a)}a||(a=[]);var b=s(a),d="number"==typeof this.select("$$").first();
a.push(this);if(d){var e=[];this.each(function(a){e.push(c(a))});d="["+e.join(", ")+"]"}else e=[],this.each(function(a,b){e.push(y(b.toString())+": "+c(a))}),d="{"+e.join(", ")+"}";a.pop(this);return d};f.prototype.toString=function(a){return this.toArray().join(a||"")};f.prototype.toURLEncoded=function(){return S(null,this)};f.prototype.trim=function(a,c,b){a=T(a,c,b);return this.skipWhile(a.left,a.leftArg).reverse().skipWhile(a.right,a.rightArg).reverse()};f.prototype.union=function(a,c,b){var d=
[],e=this;return new f(function(h,g){var f;if("string"==typeof h)switch(f=[],u(h,3,f)[1]){case 0:case 1:f=t(f,"$","(@b.length-1)","@a0");break;default:f="(@bb=@b.length-1),("+t(f,"$","@bb","@a0")+")"}else f="@p($,@b.length-1,@a0)";f="from(@b).contains($,@c,@a)?0:(@b.push($),"+f+",0)";var k={c:c,b:d,p:h,a0:g,a:b};if(e.each(f,k).broken)return this.broken=!0,this;s(a).each(f,k).broken&&(this.broken=!0);return this})};f.prototype.zip=function(a,c,b){var d;if("string"==typeof c){var e=[],h=u(c,5,e),g,
n=[];switch(h[0]){case 0:case 1:g="@d[@i*2+1]";break;default:n.push("(@V=@d[@i*2+1])"),g="@V"}switch(h[2]){case 0:case 1:h="@d[@i*2]";break;default:n.push("(@K=@d[@i*2])"),h="@K"}n.push(t(e,g,"$",h,"$$","@a"));d="("+n.join(",")+")"}else d="@rs(@d[@i*2+1],$,@d[@i*2],$$,@a)";var k=this;return new f(function(e,h){var g=[];k.each("@push($$),@push($),0",g);var f;if("string"==typeof e){f=[];var n=u(e,3,f),r,m=[];switch(n[0]){case 0:case 1:r=d;break;default:m.push("(@RS="+d+")"),r="@RS"}switch(n[1]){case 0:case 1:n=
"(@k++)";break;default:m.push("(@kk=@k++)"),n="@kk"}m.push(t(f,r,n,"@a0"));f="("+m.join(",")+")"}else f="@p("+d+",@k++,@a0)";this.broken=s(a).each("@i>="+g.length/2+"?false:@r="+f+",++@i,@r",{a:b,a0:h,k:0,i:0,d:g,p:e,rs:c}).broken;return this})};z(f,p);p.prototype.initRegion=function(){var a=this.region;a||(this.region=a={queries:null,measured:!1,start:null,end:null,take:null,takeArg:null});return a};p.prototype.addRegionQuery=function(a,c,b){var d=this.initRegion(),e=d.queries;e||(d.queries=e=[]);
e.push(a);e.push(c);e.push(b);d.start=d.end=null;d.measured=!1;return this};p.prototype.clone=function(){var a=new this.constructor(this.data),c=this.region;if(c){var b=a.region={measured:c.measured,start:c.start,end:c.end,take:c.take,takeArg:c.takeArg};if(c=c.queries)for(var b=b.queries=[],d=0,e=c.length;d<e;++d)b.push(c[d])}a.rev=this.rev;return a};p.prototype.reverseRegion=function(){var a=this.initRegion();a&&(a.take&&(a.measured=!1),a.take=a.takeArg=null);this.rev=!this.rev;return this};p.prototype.measureRegion=
function(){var a=this.initRegion();if(!a.measured){var c=this.data,b=a.start,d=a.end;null==b&&(b=0);null===d&&(d=c.length);a.take=a.takeArg=null;var e=a.queries;if(e){for(var h=[],f=0,n=e.length;f<n;f+=3){var k=e[f],l=e[f+1],m=e[f+2];if("skipLeft"==k)if("number"==typeof l)b=Math.min(d,b+l);else if("string"==typeof l){var k=[],q=u(l,3,k),q=G(q,"v",this.lambdaGetItem("d","s"),null,null,"a","q["+(f+2)+"]");h.push("for(;s<e;++s){",q.decl,"if(!(",t(k,q.v,"s",q.a),")){break;}}")}else h.push("for(;s<e&&q[",
f+1,"](",this.lambdaGetItem("d","s"),",s,q[",f+2,"]);++s);");else"skipRight"==k?"number"==typeof l?d=Math.max(b,d-l):"string"==typeof l?(k=[],q=u(l,3,k),0==q[1]?(l="",m="e-1"):(l="var _i=e-1;",m="_i"),q=G(q,"v",this.lambdaGetItem("d",m),null,null,"a","q["+(f+2)+"]"),h.push("for(;s<e;--e){",l,q.decl,"if(!(",t(k,q.v,m,q.a),")){break;}}")):h.push("for(;s<e;--e){var _i=e-1;","if(!q[",f+1,"](",this.lambdaGetItem("d","_i"),",_i,q[",f+2,"])){break;}}"):"takeLeft"==k?"number"==typeof l?d=Math.min(d,b+l):
f==n-3&&!this.rev?(a.take=l,a.takeArg=m):"string"==typeof l?(k=[],q=u(l,3,k),q=G(q,"_v",this.lambdaGetItem("d","e"),null,null,"_a","q["+(f+2)+"]"),h.push("for(var _e2=e,e=s;e<_e2;++e){",q.decl,"if(!(",t(k,q._v,"e",q._a),")){break;}}")):h.push("for(var _e2=e,e=s;e<_e2;++e){","if(!q[",f+1,"](",this.lambdaGetItem("d","e"),",e,q[",f+2,"])){break;}}"):"takeRight"==k&&("number"==typeof l?b=Math.max(b,d-l):f==n-3&&this.rev?(a.take=l,a.takeArg=m):"string"==typeof l?(k=[],q=u(l,3,k),0==q[1]?(l="",m="s-1"):
(l="var _i=s-1;",m="_i"),q=G(q,"_v",this.lambdaGetItem("d",m),null,null,"_a","q["+(f+2)+"]"),h.push("for(var _s2=s,s=e;s>_s2;--s){",l,q.decl,"if(!(",t(k,q._v,m,q._a),")){break;}}")):h.push("for(var _s2=s,s=e;s>_s2;--s){var _i=s-1;","if(!q[",f+1,"](",this.lambdaGetItem("d","_i"),",_i,q[",f+2,"])){break;}}"))}0<h.length?(h.push("r.start=s;r.end=e;"),(new Function("d","r","q","s","e",h.join("")))(c,a,e,b,d)):(a.start=b,a.end=d)}else a.start=b,a.end=d;a.measured=!0}return a};p.prototype.each=function(a,
c){var b=this.measureRegion(),d=b.start,e=b.end;if(d>=e)return this.broken=!1,this;var f=this.data,g=b.take,r=b.takeArg,k,d=typeof a,e=typeof g;if("function"==d&&(!g||"function"==e)){this.broken=!1;k=this.rev;d=b.start;for(e=b.end;d<e;!k?++d:--e){var b=!k?d:e-1,l=f[b];if(g&&!g(l,b,r))break;else if(!1===a(l,b,c)){this.broken=!0;break}}}else{"function"==d&&(k=a,a="_p($,$$,@)");g&&(a="string"==e?"!("+m(g,"$","$$","_tla")+")?_b=false:"+a:"!_tl($,$$,_tla)?_b=false:"+a);d=this.dataType+(this.rev?"_reversed":
"");e=n.get("each_"+d,a);if(!e){var e=[],p=u(a,3,e),q;this.rev?0==p[1]?(l="",q="_e-1"):(l="var _i=_e-1;",q="_i"):(l="",q="_s");var Y;Y=this.rev?"--_e":"++_s";p=G(p,"_v",this.lambdaGetItem("s",q,"_l"));e=new Function(C,"s","_l","_s","_e","a","_tl","_tla","_p",["var _b=true;for(;_s<_e;",Y,"){",l,p.decl,"if((",t(e,p._v,q,"a"),")===false){return _b;}}return false;"].join(""));n.set("each_"+d,a,e)}this.broken=e(s,f,f.length,b.start,b.end,c,g,r,k)}return this};p.prototype.at=function(a){var c=this.measureRegion();
return this.rev?this.getItem(this.data,c.end-a):this.getItem(this.data,c.start+a)};p.prototype.count=function(a,c){if(!a){var b=this.measureRegion();if(!b.take)return b.end-b.start}return f.prototype.count.call(this,a,c)};p.prototype.any=function(a,c){if(!a){var b=this.measureRegion();if(!b.take)return b.start<b.end}return f.prototype.any.call(this,a,c)};p.prototype.first=function(a,c){if(!a){var b=this.measureRegion();if(!b.take){var d=b.start,b=b.end;if(d<b)return this.rev?this.getItem(this.data,
b-1):this.getItem(this.data,d);return}}return f.prototype.first.call(this,a,c)};p.prototype.last=function(a,c){if(!a){var b=this.measureRegion();if(!b.take){var d=b.start,b=b.end;if(d<b)return this.rev?this.getItem(this.data,d):this.getItem(this.data,b-1);return}}return f.prototype.last.call(this,a,c)};p.prototype.orderBy=function(a,c,b){return(new L(this))._addContext(a||"$",c,1,b)};p.prototype.orderByDesc=function(a,c,b){return(new L(this))._addContext(a||"$",c,-1,b)};p.prototype.reverse=function(){return this.clone().reverseRegion()};
p.prototype.skip=function(a){return 0>a?this.clone().addRegionQuery(!this.rev?"skipRight":"skipLeft",-a,null):0<a?this.clone().addRegionQuery(!this.rev?"skipLeft":"skipRight",a,null):this};p.prototype.skipWhile=function(a,c){return this.clone().addRegionQuery(!this.rev?"skipLeft":"skipRight",a,c)};p.prototype.take=function(a){return 0>a?this.clone().addRegionQuery(!this.rev?"takeRight":"takeLeft",-a,null):0<a?this.clone().addRegionQuery(!this.rev?"takeLeft":"takeRight",a,null):s()};p.prototype.takeWhile=
function(a,c){return this.clone().addRegionQuery(!this.rev?"takeLeft":"takeRight",a,c)};p.prototype.toArray=function(){var a=this.measureRegion();if(!a.take){var c=this.getItem,b=this.data,d=a.start,a=a.end,e=Array(a-d);if(this.rev)for(h=a;h>d;--h)e[a-h]=c(b,h-1);else for(var h=d;h<a;++h)e[h-d]=c(b,h);return e}return f.prototype.toArray.call(this)};p.prototype.trim=function(a,c,b){a=T(a,c,b);c=this.clone();c.addRegionQuery(!this.rev?"skipLeft":"skipRight",a.left,a.leftArg);c.addRegionQuery(!this.rev?
"skipRight":"skipLeft",a.right,a.rightArg);return c};p.prototype.zip=function(a,c,b){var d=this.rev,e,h=!d?"@i":"@l-@i-1";if("string"==typeof c){var g=[],n=u(c,5,g),k=[];d&&0<n[1]&&(k.push("(@.ii="+h+")"),h="@.ii");var l=this.lambdaGetItem("@d",h);1<n[0]&&(k.push("(@V="+l+")"),l="@V");k.push("("+t(g,l,"$",h,"$$","@a")+")");e="("+k.join(",")+")"}else e="@rs("+l+",$,"+h+",$$,@a)";var m=this;return new f(function(d,f){var h=m.data,g=h.length,k;if("string"==typeof d){k=[];var l=u(d,3,k),n,r=[];switch(l[0]){case 0:case 1:n=
e;break;default:r.push("(@RS="+e+")"),n="@RS"}switch(l[1]){case 0:case 1:l="(@k++)";break;default:r.push("(@kk=@k++)"),l="@kk"}r.push(t(k,n,l,"@a0"));k="("+r.join(",")+")"}else k="@p("+e+",@k++,@a0)";h={a:b,a0:f,k:0,i:0,d:h,l:g,p:d,rs:c,b:!0};this.broken=s(a).each("@.i>=@.l?@.b=false:@.r="+k+",++@.i,@.r",h).broken&&!h.nb;return this})};z(p,B);B.prototype.dataType="string";B.prototype.lambdaGetItem=function(a,c){return a+".charAt("+c+")"};B.prototype.getItem=function(a,c){return a.charAt(c)};B.prototype.toString=
function(a){if(!a&&!this.rev){var c=this.data,b=this.measureRegion();if(!b.take)return a=b.start,b=b.end,0==a&&b==c.length?c:c.substring(a,b)}return f.prototype.toString.call(this,a)};B.prototype.toJSON=function(){return y(this.data)};z(p,A);A.prototype.dataType="array";A.prototype.lambdaGetItem=function(a,c){return a+"["+c+"]"};A.prototype.getItem=function(a,c){return a[c]};A.prototype.toJSON=function(a){a?a.push(this.data):a=[this.data];var c=f.prototype.toJSON.call(this,a);a.pop();return c};z(f,
w);w.prototype.each=function(a,c){var b=this.data;if("function"==typeof a){this.broken=!1;for(var d in b)if(!1===a(b[d],d,c)){this.broken=!0;break}}else{d=n.get("each_o",a);if(!d){d=[];var e,f;switch(u(a,3,d)[0]){case 0:case 1:e="";f="d[k]";break;default:e="var v=d[k];",f="v"}d=new Function(C,"d","a","for(var k in d){"+e+"if(("+t(d,f,"k","a")+")===false){return true;}}return false;");n.set("each_o",a,d)}this.broken=d(s,b,c)}return this};w.prototype.at=function(a){return this.skip(a).first()};w.prototype.reverse=
function(){return new K(this.data)};w.prototype.toJSON=A.prototype.toJSON;z(w,K);K.prototype.each=function(a,c){var b=this.data,d=[],e;for(e in b)d.push(e),d.push(b[e]);if("string"==typeof a){b=n.get("each_or",a);if(!b){var b=[],f=u(a,3,b),g,m;switch(f[0]){case 0:case 1:e="";g="r[ii+1]";break;default:e="var v=r[ii+1];",g="v"}switch(f[1]){case 0:case 1:f="";m="r[ii]";break;default:f="var k=r[ii];",m="k"}b=new Function(C,"r","a","for(var i=r.length/2;i>0;--i){var ii=(i-1)*2;"+e+f+"if(("+t(b,g,m,"a")+
")===false){return true;}}return false;");n.set("each_or",a,b)}this.broken=b(s,d,c)}else{this.broken=!1;for(b=d.length/2;0<b;--b)if(e=2*(b-1),!1===a(d[e+1],d[e],c)){this.broken=!0;break}}return this};K.prototype.reverse=function(){return new w(this.data)};z(w,x);x.prototype.clone=function(){var a=new this.constructor(this.it),c=this.context;c&&(a.context=s(c).toArray());return a};x.prototype._addContext=function(a,c,b,d){var e=this.context;e||(this.context=e=[]);e.push({keySelector:F(a,3),comparer:F(c,
3),asc:b,arg:d});return this};x.prototype.each=function(a,c){function b(a,b){if(f)for(var c=0,e=f.length;c<e;++c){var g=f[c],k=g.keySelector(d[2*a+1],d[2*a],g.arg),l=g.keySelector(d[2*b+1],d[2*b],g.arg),g=g.comparer?g.asc*g.comparer(k,l,g.arg):k==l?0:k<l?-g.asc:g.asc;if(0!=g)return g}return a==b?0:a<b?-1:1}var d=[];this.it.each("@push($$),@push($),0",d);var e=s.range(d.length/2).toArray(),f=this.context;e.sort(b);if("string"==typeof a){b=n.get("each_ord",a);if(!b){var g=[],m=u(a,3,g),k,l,p;switch(m[0]){case 0:case 1:k=
"";l="r[n+1]";break;default:k="var v=r[n+1];",l="v"}switch(m[1]){case 0:case 1:m="";p="r[n]";break;default:m="var k=r[n];",p="k"}b=new Function(C,"l","r","a","for(var i=0,c=l.length;i<c;++i){var n=l[i]*2;"+k+m+"if(("+t(g,l,p,"a")+")===false)return true;}return false;");n.set("each_ord",a,b)}this.broken=b(s,e,d,c)}else{this.broken=!1;g=0;for(k=e.length;g<k;++g)if(l=2*e[g],!1===a(d[l+1],d[l],c)){this.broken=!0;break}}return this};x.prototype.thenBy=function(a,c,b){return this.clone()._addContext(a,
c,1,b)};x.prototype.thenByDesc=function(a,c,b){return this.clone()._addContext(a,c,-1,b)};z(x,L);L.prototype.each=function(a,c){function b(a,b){if(f)for(var c=0,d=f.length;c<d;++c){var g=f[c],k=g.keySelector(e[a],a,g.arg),l=g.keySelector(e[b],b,g.arg),g=g.comparer?g.asc*g.comparer(k,l,g.arg):k==l?0:k<l?-g.asc:g.asc;if(0!=g)return g}return a==b?0:a<b?-1:1}var d=this.it.select("$$").toArray(),e=this.it.data,f=this.context;d.sort(b);if("string"==typeof a){b=n.get("each_ordered_random_access",a);if(!b){var g=
[],m=u(a,3,g),k,l,p;switch(m[1]){case 0:k="";p="l[i]";break;default:k="var k=l[i];",p="k"}switch(m[0]){case 0:case 1:m="";l="r["+p+"]";break;default:m="var v=r["+p+"];",l="v"}b=new Function(C,"l","r","a","for(var i=0,c=l.length;i<c;++i){"+k+m+"if(("+t(g,l,p,"a")+")===false)return true;}return false;");n.set("each_ordered_random_access",a,b)}this.broken=b(s,d,e,c)}else{this.broken=!1;g=0;for(k=d.length;g<k;++g)if(p=d[g],!1===a(e[p],p,c)){this.broken=!0;break}}return this};z(f,E);E.prototype.each=function(a,
c){var b=this._r;b.lastIndex=0;if(b.global){var d;"function"==typeof a&&(d=a,a="_p($,$$,@)");b=n.get("each_regexp",a);if(!b){var b=[],e,f;0==u(a,3,b)[1]?f=e="":(e="var _i=0",f="++_i");b=new Function(C,"_r","_s","_a","_p",["var _m;for(",e,";_m=_r.exec(_s);",f,"){if((",t(b,"_m","_i","_a"),")===false){return true;}}return false;"].join(""));n.set("each_regexp",a,b)}this.broken=b(s,this._r,this._str,c,d)}else"string"==typeof a&&(a=F(a,3)),this.broken=(d=b.exec(this._str))?!1===a(d,0,c):!1;return this};
E.prototype.any=function(a,c){if(a)return f.prototype.any.call(this,a,c);var b=this._r;b.lastIndex=0;return b.test(this._str)};E.prototype.first=function(a,c){if(a)return f.prototype.first.call(this,a,c);var b=this._r;b.lastIndex=0;return b.exec(this._str)};s.range=function(a,c,b){switch(arguments.length){case 1:c=a;a=0;b=1;break;case 2:b=c>a?1:-1}return new f(function(d,e){if("string"==typeof d){var f=0<b?"each_ru":"each_rd",g=n.get(f,d);g||(g=new Function("s","e","st","a","for(var i=s;i"+(0<b?"<":
">")+"e;i+=st){if(("+m(d,"i","i","a")+")===false)return true;}return false;"),n.set(f,d,g));this.broken=g(a,c,b,e)}else if(this.broken=!1,0<b)for(f=a;f<c;f+=b){if(!1===d(f,f,e)){this.broken=!0;break}}else for(f=a;f>c;f+=b)if(!1===d(f,f,e)){this.broken=!0;break}return this})};s.repeat=function(a,c){return new f(function(b,d){if("string"==typeof b){var e=n.get("each_rpt",b);e||(e=new Function("c","e","a","for(var i=0;i<c;++i){if(("+m(b,"e","i","a")+")===false)return true;}return false;"),n.set("each_rpt",
b,e));this.broken=e(c,a,d)}else{this.broken=!1;for(e=0;e<c;++e)if(!1===b(a,e,d)){this.broken=!0;break}}return this})};s.setAlias=function(a){C=a};s.lambda={replace:m,parse:F,getUseCount:u,join:t};"nodejs"==O?module.exports=s:window.from=s})();
