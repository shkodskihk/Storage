if(typeof JSON!=="object"){JSON={}}!function(){"use strict";function f(e){return e<10?"0"+e:e}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(e){escapable.lastIndex=0;return escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t==="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,o,f=gap,u,a=t[e];if(a&&typeof a==="object"&&typeof a.toJSON==="function"){a=a.toJSON(e)}if(typeof rep==="function"){a=rep.call(t,e,a)}switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a){return"null"}gap+=indent;u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){o=a.length;for(n=0;n<o;n+=1){u[n]=str(n,a)||"null"}i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+f+"]":"["+u.join(",")+"]";gap=f;return i}if(rep&&typeof rep==="object"){o=rep.length;for(n=0;n<o;n+=1){if(typeof rep[n]==="string"){r=rep[n];i=str(r,a);if(i){u.push(quote(r)+(gap?": ":":")+i)}}}}else{for(r in a){if(Object.prototype.hasOwnProperty.call(a,r)){i=str(r,a);if(i){u.push(quote(r)+(gap?": ":":")+i)}}}}i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+f+"}":"{"+u.join(",")+"}";gap=f;return i}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(e,t,n){var r;gap="";indent="";if(typeof n==="number"){for(r=0;r<n;r+=1){indent+=" "}}else if(typeof n==="string"){indent=n}rep=t;if(t&&typeof t!=="function"&&(typeof t!=="object"||typeof t.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":e})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(e,t){var n,r,i=e[t];if(i&&typeof i==="object"){for(n in i){if(Object.prototype.hasOwnProperty.call(i,n)){r=walk(i,n);if(r!==undefined){i[n]=r}else{delete i[n]}}}}return reviver.call(e,t,i)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}();/**
* Data Storage - UserData(IE),Cookie,LocalStorage 
* The MIT License - Copyright (c) 2013 Hongbo Yang <abcrun@gmail.com>
* Repository - https://github.com/abcrun/Storage.git
* Version - 0.3.0
*/
!function(e,t){if(typeof define==="function"&&define.amd)define(t);else if(typeof module==="object"&&module.exports)module.exports=t();else this[e]=t()}("Storage",function(){var e=window.JSON&&window.JSON.stringify&&window.JSON.parse?window.JSON:{stringify:function(e){return e},parse:function(e){return e}};var t=function(){var t;try{var n=new ActiveXObject("htmlfile"),r,t;n.open();n.write('<iframe src="/favicon.ico"></iframe>');n.close();r=n.frames[0].document;t=r.createElement("div");r.appendChild(t);t.addBehavior("#default#userData")}catch(i){}return{get:function(e){t.load(e);return t.getAttribute(e)},set:function(n,r,i){if(i){var o=new Date;o.setTime(o.getTime()+i*1e3);t.expires=o.toUTCString()}t.setAttribute(n,e.stringify(r));t.save(n)},remove:function(e,n){t.removeAttribute(e);t.save(e)}}};var n={get:function(t){var n=localStorage.getItem(t);if(!n)return null;n=e.parse(n);if(typeof n=="string")return n;var r=n[0].expires;if(r&&/^\d{13,}$/.test(r)){var i=(new Date).getTime();if(r<=i){localStorage.removeItem(t);return null}n.shift()}return n[0]},set:function(t,n,r){var i=[];if(r){var o=(new Date).getTime();i.push({expires:o+r*1e3})}i.push(n);localStorage.setItem(t,e.stringify(i))},remove:function(e){localStorage.removeItem(e)}};var r={get:function(t){var n=document.cookie;var r=n.indexOf(t+"="),i=n.indexOf(";",r);if(i==-1)i=n.length;if(r>-1){return e.parse(n.substring(r+t.length+1,i))}else{return null}},set:function(t,n,r,i,o){var i=i||document.domain,o=o||"/",f="",u;if(r){if(window.ActiveXObject){var a=new Date;a.setTime(a.getTime()+r*1e3);f="expires="+a.toGMTString()}else{f="max-age="+r}}document.cookie=t+"="+e.stringify(n)+";path="+o+";domain="+i+";"+f},remove:function(e,t,n){var t=t||document.domain,n=n||"/";this.set(e,"",0,t,n)}};var i=n;if(!window.localStorage){i=t()}return{get:i.get,set:i.set,remove:i.remove,cookie:r}});