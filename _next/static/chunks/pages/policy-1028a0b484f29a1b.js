(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[747],{487:function(n){var r={utf8:{stringToBytes:function(n){return r.bin.stringToBytes(unescape(encodeURIComponent(n)))},bytesToString:function(n){return decodeURIComponent(escape(r.bin.bytesToString(n)))}},bin:{stringToBytes:function(n){for(var r=[],t=0;t<n.length;t++)r.push(255&n.charCodeAt(t));return r},bytesToString:function(n){for(var r=[],t=0;t<n.length;t++)r.push(String.fromCharCode(n[t]));return r.join("")}}};n.exports=r},1012:function(n){!function(){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t={rotl:function(n,r){return n<<r|n>>>32-r},rotr:function(n,r){return n<<32-r|n>>>r},endian:function(n){if(n.constructor==Number)return 16711935&t.rotl(n,8)|4278255360&t.rotl(n,24);for(var r=0;r<n.length;r++)n[r]=t.endian(n[r]);return n},randomBytes:function(n){for(var r=[];n>0;n--)r.push(Math.floor(256*Math.random()));return r},bytesToWords:function(n){for(var r=[],t=0,o=0;t<n.length;t++,o+=8)r[o>>>5]|=n[t]<<24-o%32;return r},wordsToBytes:function(n){for(var r=[],t=0;t<32*n.length;t+=8)r.push(n[t>>>5]>>>24-t%32&255);return r},bytesToHex:function(n){for(var r=[],t=0;t<n.length;t++)r.push((n[t]>>>4).toString(16)),r.push((15&n[t]).toString(16));return r.join("")},hexToBytes:function(n){for(var r=[],t=0;t<n.length;t+=2)r.push(parseInt(n.substr(t,2),16));return r},bytesToBase64:function(n){for(var t=[],o=0;o<n.length;o+=3)for(var e=n[o]<<16|n[o+1]<<8|n[o+2],i=0;i<4;i++)8*o+6*i<=8*n.length?t.push(r.charAt(e>>>6*(3-i)&63)):t.push("=");return t.join("")},base64ToBytes:function(n){n=n.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],o=0,e=0;o<n.length;e=++o%4)0!=e&&t.push((r.indexOf(n.charAt(o-1))&Math.pow(2,-2*e+8)-1)<<2*e|r.indexOf(n.charAt(o))>>>6-2*e);return t}};n.exports=t}()},8738:function(n){function r(n){return!!n.constructor&&"function"===typeof n.constructor.isBuffer&&n.constructor.isBuffer(n)}n.exports=function(n){return null!=n&&(r(n)||function(n){return"function"===typeof n.readFloatLE&&"function"===typeof n.slice&&r(n.slice(0,0))}(n)||!!n._isBuffer)}},2568:function(n,r,t){!function(){var r=t(1012),o=t(487).utf8,e=t(8738),i=t(487).bin,u=function(n,t){n.constructor==String?n=t&&"binary"===t.encoding?i.stringToBytes(n):o.stringToBytes(n):e(n)?n=Array.prototype.slice.call(n,0):Array.isArray(n)||n.constructor===Uint8Array||(n=n.toString());for(var s=r.bytesToWords(n),c=8*n.length,f=1732584193,a=-271733879,h=-1732584194,l=271733878,g=0;g<s.length;g++)s[g]=16711935&(s[g]<<8|s[g]>>>24)|4278255360&(s[g]<<24|s[g]>>>8);s[c>>>5]|=128<<c%32,s[14+(c+64>>>9<<4)]=c;var p=u._ff,d=u._gg,y=u._hh,v=u._ii;for(g=0;g<s.length;g+=16){var _=f,b=a,T=h,x=l;f=p(f,a,h,l,s[g+0],7,-680876936),l=p(l,f,a,h,s[g+1],12,-389564586),h=p(h,l,f,a,s[g+2],17,606105819),a=p(a,h,l,f,s[g+3],22,-1044525330),f=p(f,a,h,l,s[g+4],7,-176418897),l=p(l,f,a,h,s[g+5],12,1200080426),h=p(h,l,f,a,s[g+6],17,-1473231341),a=p(a,h,l,f,s[g+7],22,-45705983),f=p(f,a,h,l,s[g+8],7,1770035416),l=p(l,f,a,h,s[g+9],12,-1958414417),h=p(h,l,f,a,s[g+10],17,-42063),a=p(a,h,l,f,s[g+11],22,-1990404162),f=p(f,a,h,l,s[g+12],7,1804603682),l=p(l,f,a,h,s[g+13],12,-40341101),h=p(h,l,f,a,s[g+14],17,-1502002290),f=d(f,a=p(a,h,l,f,s[g+15],22,1236535329),h,l,s[g+1],5,-165796510),l=d(l,f,a,h,s[g+6],9,-1069501632),h=d(h,l,f,a,s[g+11],14,643717713),a=d(a,h,l,f,s[g+0],20,-373897302),f=d(f,a,h,l,s[g+5],5,-701558691),l=d(l,f,a,h,s[g+10],9,38016083),h=d(h,l,f,a,s[g+15],14,-660478335),a=d(a,h,l,f,s[g+4],20,-405537848),f=d(f,a,h,l,s[g+9],5,568446438),l=d(l,f,a,h,s[g+14],9,-1019803690),h=d(h,l,f,a,s[g+3],14,-187363961),a=d(a,h,l,f,s[g+8],20,1163531501),f=d(f,a,h,l,s[g+13],5,-1444681467),l=d(l,f,a,h,s[g+2],9,-51403784),h=d(h,l,f,a,s[g+7],14,1735328473),f=y(f,a=d(a,h,l,f,s[g+12],20,-1926607734),h,l,s[g+5],4,-378558),l=y(l,f,a,h,s[g+8],11,-2022574463),h=y(h,l,f,a,s[g+11],16,1839030562),a=y(a,h,l,f,s[g+14],23,-35309556),f=y(f,a,h,l,s[g+1],4,-1530992060),l=y(l,f,a,h,s[g+4],11,1272893353),h=y(h,l,f,a,s[g+7],16,-155497632),a=y(a,h,l,f,s[g+10],23,-1094730640),f=y(f,a,h,l,s[g+13],4,681279174),l=y(l,f,a,h,s[g+0],11,-358537222),h=y(h,l,f,a,s[g+3],16,-722521979),a=y(a,h,l,f,s[g+6],23,76029189),f=y(f,a,h,l,s[g+9],4,-640364487),l=y(l,f,a,h,s[g+12],11,-421815835),h=y(h,l,f,a,s[g+15],16,530742520),f=v(f,a=y(a,h,l,f,s[g+2],23,-995338651),h,l,s[g+0],6,-198630844),l=v(l,f,a,h,s[g+7],10,1126891415),h=v(h,l,f,a,s[g+14],15,-1416354905),a=v(a,h,l,f,s[g+5],21,-57434055),f=v(f,a,h,l,s[g+12],6,1700485571),l=v(l,f,a,h,s[g+3],10,-1894986606),h=v(h,l,f,a,s[g+10],15,-1051523),a=v(a,h,l,f,s[g+1],21,-2054922799),f=v(f,a,h,l,s[g+8],6,1873313359),l=v(l,f,a,h,s[g+15],10,-30611744),h=v(h,l,f,a,s[g+6],15,-1560198380),a=v(a,h,l,f,s[g+13],21,1309151649),f=v(f,a,h,l,s[g+4],6,-145523070),l=v(l,f,a,h,s[g+11],10,-1120210379),h=v(h,l,f,a,s[g+2],15,718787259),a=v(a,h,l,f,s[g+9],21,-343485551),f=f+_>>>0,a=a+b>>>0,h=h+T>>>0,l=l+x>>>0}return r.endian([f,a,h,l])};u._ff=function(n,r,t,o,e,i,u){var s=n+(r&t|~r&o)+(e>>>0)+u;return(s<<i|s>>>32-i)+r},u._gg=function(n,r,t,o,e,i,u){var s=n+(r&o|t&~o)+(e>>>0)+u;return(s<<i|s>>>32-i)+r},u._hh=function(n,r,t,o,e,i,u){var s=n+(r^t^o)+(e>>>0)+u;return(s<<i|s>>>32-i)+r},u._ii=function(n,r,t,o,e,i,u){var s=n+(t^(r|~o))+(e>>>0)+u;return(s<<i|s>>>32-i)+r},u._blocksize=16,u._digestsize=16,n.exports=function(n,t){if(void 0===n||null===n)throw new Error("Illegal argument "+n);var o=r.wordsToBytes(u(n,t));return t&&t.asBytes?o:t&&t.asString?i.bytesToString(o):r.bytesToHex(o)}}()},189:function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/policy",function(){return t(3787)}])},3787:function(n,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return s},default:function(){return c}});var o=t(5893),e=t(2568),i=t.n(e),u=(t(7294),t(7956)),s=!0;function c(n){var r=n.data;return(0,o.jsxs)(u.Ar,{page:"/policy",title:"Policy",children:[(0,o.jsx)(u.jL,{path:"5Q0A8733.jpg",children:(0,o.jsx)("h1",{children:"policy"})}),(0,o.jsx)("div",{className:"content",children:(0,o.jsx)("div",{className:"container",children:r.map((function(n){return(0,o.jsx)("p",{children:n},i()(n))}))})})]})}}},function(n){n.O(0,[441,956,774,888,179],(function(){return r=189,n(n.s=r);var r}));var r=n.O();_N_E=r}]);