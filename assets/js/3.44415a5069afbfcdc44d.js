webpackJsonp([3],{"+66z":function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},"0ghZ":function(e,t,n){var r=n("PfJA"),o=n("iYj9"),a=n("KGqH");e.exports=function(e){return o(e)?a(e):r(e)}},"10ho":function(e,t){},"1fka":function(e,t){},"6MiT":function(e,t,n){var r=n("aCM0"),o=n("UnEC"),a="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||o(e)&&r(e)==a}},Hxdr:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},KGqH:function(e,t){var n="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",o="\\ud83c[\\udffb-\\udfff]",a="[^\\ud800-\\udfff]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",c="(?:"+r+"|"+o+")"+"?",u="[\\ufe0e\\ufe0f]?"+c+("(?:\\u200d(?:"+[a,i,s].join("|")+")[\\ufe0e\\ufe0f]?"+c+")*"),l="(?:"+[a+r+"?",r,i,s,n].join("|")+")",f=RegExp(o+"(?="+o+")|"+l+u,"g");e.exports=function(e){return e.match(f)||[]}},M1c9:function(e,t){e.exports=function(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(n=n>o?o:n)<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++r<o;)a[r]=e[r+t];return a}},NGEn:function(e,t){var n=Array.isArray;e.exports=n},NkRn:function(e,t,n){var r=n("TQ3y").Symbol;e.exports=r},PfJA:function(e,t){e.exports=function(e){return e.split("")}},TQ3y:function(e,t,n){var r=n("blYT"),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},UnEC:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},Wh6c:function(e,t,n){var r=n("M1c9");e.exports=function(e,t,n){var o=e.length;return n=void 0===n?o:n,!t&&n>=o?e:r(e,t,n)}},ZT2e:function(e,t,n){var r=n("o2mx");e.exports=function(e){return null==e?"":r(e)}},aCM0:function(e,t,n){var r=n("NkRn"),o=n("uLhX"),a=n("+66z"),i="[object Null]",s="[object Undefined]",c=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?s:i:c&&c in Object(e)?o(e):a(e)}},azDj:function(e,t,n){"use strict";var r={name:"tag",props:{label:String},computed:{color:function(){return"#"+this.intToRGB(this.hashCode(this.label))},textColor:function(){var e=this.color;if(0===e.indexOf("#")&&(e=e.slice(1)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),6!==e.length)throw new Error("Invalid HEX color.");return.299*parseInt(e.slice(0,2),16)+.587*parseInt(e.slice(2,4),16)+.114*parseInt(e.slice(4,6),16)>186?"#000000":"#FFFFFF"}},methods:{hashCode:function(e){for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);return t},intToRGB:function(e){var t=(16777215&e).toString(16).toUpperCase();return"00000".substring(0,6-t.length)+t}}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-button",{staticClass:"tag",style:{"background-color":this.color,"border-color":this.color}},[t("div",{style:{color:this.textColor}},[this._v(" "+this._s(this.label)+" ")])])},staticRenderFns:[]};var a=n("VU/8")(r,o,!1,function(e){n("1fka")},"data-v-16d7c994",null);t.a=a.exports},blYT:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,n("DuR2"))},iYj9:function(e,t){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return n.test(e)}},lO7g:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Xxa5"),o=n.n(r),a=n("exGp"),i=n.n(a),s=n("89kZ"),c=n("azDj"),u={name:"anime-tiles",props:{animes:Array},methods:{showLink:function(e){return{name:"content",params:{content_id:e}}}},components:{Tag:c.a}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tiles"},e._l(e.animes,function(t){return n("el-card",{key:t.mal_id,staticClass:"tile"},[n("h4",{staticClass:"title"},[e._v("\n      "+e._s(t.title)+"\n    ")]),e._v(" "),n("router-link",{attrs:{to:e.showLink(t.mal_id)}},[n("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{selector: 'img'}"}],staticClass:"body"},[n("img",{attrs:{slot:"reference","data-src":t.image_url},slot:"reference"})])]),e._v(" "),n("div",{staticClass:"footer"},[n("div",{staticClass:"genres"},e._l(t.genres,function(e){return n("tag",{key:e.mal_id,attrs:{label:e.name}})}))])],1)}))},staticRenderFns:[]};var f=n("VU/8")(u,l,!1,function(e){n("10ho")},"data-v-eb1a27c4",null).exports,d=n("xdPp"),v=n.n(d),p={name:"Home",metaInfo:{titleTemplate:"%s | Home"},created:function(){var e=this;return i()(o.a.mark(function t(){var n,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=new Date,e.year=n.getFullYear(),e.season=e.getAnimeSeason(n.getMonth()),t.prev=3,t.next=6,s.a.getSeasonAnime(e.year,e.season);case 6:r=t.sent,e.animes=r.data.anime.filter(function(e){return-1===e.genres.findIndex(function(e){return"Hentai"===e.name||"Kids"===e.name})}),e.loading=!1,t.next=15;break;case 11:t.prev=11,t.t0=t.catch(3),e.loading=!1,console.log("error getting current seasons anime",t.t0);case 15:case"end":return t.stop()}},t,e,[[3,11]])}))()},data:function(){return{animes:void 0,year:void 0,season:void 0,loading:!0}},methods:{pascalCase:function(e){return v()(e)},getAnimeSeason:function(e){switch(e){case 0:case 1:case 2:return"winter";case 3:case 4:case 5:return"spring";case 6:case 7:case 8:return"summer";case 9:case 10:case 11:return"fall"}}},components:{AnimeTiles:f}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"home",attrs:{"element-loading-text":"Loading...","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[n("div",{staticClass:"container"},[n("h1",[e._v(" "+e._s(e.pascalCase(e.season))+" "+e._s(e.year)+" Anime ")]),e._v(" "),e.animes?n("anime-tiles",{attrs:{animes:e.animes}}):e._e()],1)])},staticRenderFns:[]},g=n("VU/8")(p,m,!1,null,null,null);t.default=g.exports},o2mx:function(e,t,n){var r=n("NkRn"),o=n("Hxdr"),a=n("NGEn"),i=n("6MiT"),s=1/0,c=r?r.prototype:void 0,u=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return o(t,e)+"";if(i(t))return u?u.call(t):"";var n=t+"";return"0"==n&&1/t==-s?"-0":n}},rU0D:function(e,t,n){var r=n("Wh6c"),o=n("iYj9"),a=n("0ghZ"),i=n("ZT2e");e.exports=function(e){return function(t){t=i(t);var n=o(t)?a(t):void 0,s=n?n[0]:t.charAt(0),c=n?r(n,1).join(""):t.slice(1);return s[e]()+c}}},uLhX:function(e,t,n){var r=n("NkRn"),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(e){}var o=i.call(e);return r&&(t?e[s]=n:delete e[s]),o}},xdPp:function(e,t,n){var r=n("rU0D")("toUpperCase");e.exports=r}});
//# sourceMappingURL=3.44415a5069afbfcdc44d.js.map