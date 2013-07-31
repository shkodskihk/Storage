if(typeof JSON!=="object"){JSON={}}!function(){"use strict";function f(e){return e<10?"0"+e:e}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(e){escapable.lastIndex=0;return escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t==="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var r,n,i,o,f=gap,a,u=t[e];if(u&&typeof u==="object"&&typeof u.toJSON==="function"){u=u.toJSON(e)}if(typeof rep==="function"){u=rep.call(t,e,u)}switch(typeof u){case"string":return quote(u);case"number":return isFinite(u)?String(u):"null";case"boolean":case"null":return String(u);case"object":if(!u){return"null"}gap+=indent;a=[];if(Object.prototype.toString.apply(u)==="[object Array]"){o=u.length;for(r=0;r<o;r+=1){a[r]=str(r,u)||"null"}i=a.length===0?"[]":gap?"[\n"+gap+a.join(",\n"+gap)+"\n"+f+"]":"["+a.join(",")+"]";gap=f;return i}if(rep&&typeof rep==="object"){o=rep.length;for(r=0;r<o;r+=1){if(typeof rep[r]==="string"){n=rep[r];i=str(n,u);if(i){a.push(quote(n)+(gap?": ":":")+i)}}}}else{for(n in u){if(Object.prototype.hasOwnProperty.call(u,n)){i=str(n,u);if(i){a.push(quote(n)+(gap?": ":":")+i)}}}}i=a.length===0?"{}":gap?"{\n"+gap+a.join(",\n"+gap)+"\n"+f+"}":"{"+a.join(",")+"}";gap=f;return i}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(e,t,r){var n;gap="";indent="";if(typeof r==="number"){for(n=0;n<r;n+=1){indent+=" "}}else if(typeof r==="string"){indent=r}rep=t;if(t&&typeof t!=="function"&&(typeof t!=="object"||typeof t.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":e})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(e,t){var r,n,i=e[t];if(i&&typeof i==="object"){for(r in i){if(Object.prototype.hasOwnProperty.call(i,r)){n=walk(i,r);if(n!==undefined){i[r]=n}else{delete i[r]}}}}return reviver.call(e,t,i)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}();!function(e,t){if(typeof define==="function"&&define.amd)define(t);else if(typeof module==="object"&&module.exports)module.exports=t();else this[e]=t()}("Storage",function(){var e=window.JSON&&window.JSON.stringify&&window.JSON.parse?window.JSON:{stringify:function(e){return e},parse:function(e){return e}};var t=function(){var t;try{var r=new ActiveXObject("htmlfile"),n,t;r.open();r.write('<iframe src="/favicon.ico"></iframe>');r.close();n=r.frames[0].document;t=n.createElement("div");n.appendChild(t);t.addBehavior("#default#userData")}catch(i){}return{get:function(r){t.load(r);return e.parse(t.getAttribute(r))},set:function(r,n,i){if(i){var o=new Date;o.setTime(o.getTime()+i*1e3);t.expires=o.toUTCString()}t.setAttribute(r,e.stringify(n));t.save(r)},remove:function(e,r){t.removeAttribute(e);t.save(e)}}};var r=function(){var t=(new Date).getTime();for(key in localStorage){var r=localStorage.getItem(key);try{r=e.parse(r)}catch(n){}if(toString.call(r).toLowerCase().indexOf("array")>0){var i=r[0].expires;if(i&&/^\d{13,}$/.test(i)&&i<=t)localStorage.removeItem(key)}}return{get:function(t){var r=localStorage.getItem(t);if(!r)return null;try{r=e.parse(r)}catch(n){}if(typeof r=="string")return r;var i=r[0].expires;if(i&&/^\d{13,}$/.test(i)){var o=(new Date).getTime();if(i<=o){localStorage.removeItem(t);return null}r.shift()}return r[0]},set:function(t,r,n){var i=[];if(n){var o=(new Date).getTime();i.push({expires:o+n*1e3})}i.push(r);localStorage.setItem(t,e.stringify(i))},remove:function(e){localStorage.removeItem(e)}}};var n={get:function(t){var r=document.cookie;var n=r.indexOf(t+"="),i=r.indexOf(";",n);if(i==-1)i=r.length;if(n>-1){return e.parse(r.substring(n+t.length+1,i))}else{return null}},set:function(t,r,n,i,o){var i=i||document.domain,o=o||"/",f="",a;if(n){if(window.ActiveXObject){var u=new Date;u.setTime(u.getTime()+n*1e3);f="expires="+u.toGMTString()}else{f="max-age="+n}}document.cookie=t+"="+e.stringify(r)+";path="+o+";domain="+i+";"+f},remove:function(e,t,r){var t=t||document.domain,r=r||"/";this.set(e,"",0,t,r)}};var i;if(!window.localStorage){i=t()}else{i=r()}return{get:i.get,set:i.set,remove:i.remove,cookie:n}});