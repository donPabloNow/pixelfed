(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"+GUX":function(t,e,n){Vue.component("remote-profile",n("9Y9R").default)},"0od1":function(t,e,n){"use strict";var o=n("Bs5P");n.n(o).a},21:function(t,e,n){t.exports=n("+GUX")},"9Y9R":function(t,e,n){"use strict";n.r(e);function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i={props:["profile-id"],data:function(){return{id:[],user:!1,profile:{},feed:[],min_id:null,max_id:null,loading:!0,owner:!1,layoutType:!1,relationship:null,warning:!1}},beforeMount:function(){this.fetchRelationships(),this.fetchProfile()},methods:{fetchProfile:function(){var t=this;axios.get("/api/pixelfed/v1/accounts/verify_credentials").then((function(e){t.user=e.data})),axios.get("/api/pixelfed/v1/accounts/"+this.profileId).then((function(e){t.profile=e.data,t.fetchPosts()}))},fetchPosts:function(){var t=this,e="/api/pixelfed/v1/accounts/"+this.profileId+"/statuses";axios.get(e,{params:{only_media:!0,min_id:1}}).then((function(e){var n=e.data.filter((function(t){return t.media_attachments.length>0})).map((function(t){return{id:t.id,caption:{text:t.content_text,html:t.content},count:{likes:t.favourites_count,shares:t.reblogs_count,comments:t.reply_count},thumb:t.media_attachments[0].preview_url,media:t.media_attachments,timestamp:t.created_at,type:t.pf_type,url:t.url}})),i=n.map((function(t){return t.id}));t.ids=i,t.min_id=Math.max.apply(Math,o(i)),t.max_id=Math.min.apply(Math,o(i)),t.feed=n,t.loading=!1})).catch((function(t){swal("Oops, something went wrong","Please release the page.","error")}))},fetchRelationships:function(){var t=this;0!=document.querySelectorAll("body")[0].classList.contains("loggedIn")&&axios.get("/api/pixelfed/v1/accounts/relationships",{params:{"id[]":this.profileId}}).then((function(e){e.data.length&&(t.relationship=e.data[0],1==e.data[0].blocking&&(t.loading=!1,t.warning=!0))}))},postPreviewUrl:function(t){return'background: url("'+t.thumb+'");background-size:cover'},timestampFormat:function(t){var e=new Date(t);return e.toDateString()+" "+e.toLocaleTimeString()},remoteProfileUrl:function(t){return"/i/web/profile/_/"+t.id},remotePostUrl:function(t){return"/i/web/post/_/"+this.profile.id+"/"+t.id},followProfile:function(){var t=this;axios.post("/i/follow",{item:this.profileId}).then((function(e){swal("Followed","You are now following "+t.profile.username+"!","success"),t.relationship.following=!0})).catch((function(t){swal("Oops!","Something went wrong, please try again later.","error")}))},unfollowProfile:function(){var t=this;axios.post("/i/follow",{item:this.profileId}).then((function(e){swal("Unfollowed","You are no longer following "+t.profile.username+".","warning"),t.relationship.following=!1})).catch((function(t){swal("Oops!","Something went wrong, please try again later.","error")}))},showCtxMenu:function(){this.$refs.visitorContextMenu.show()},copyProfileLink:function(){navigator.clipboard.writeText(window.location.href),this.$refs.visitorContextMenu.hide()},muteProfile:function(){var t=this,e=this.profileId;axios.post("/i/mute",{type:"user",item:e}).then((function(e){t.fetchRelationships(),t.$refs.visitorContextMenu.hide(),swal("Success","You have successfully muted "+t.profile.acct,"success")})).catch((function(t){swal("Error","Something went wrong. Please try again later.","error")})),this.$refs.visitorContextMenu.hide()},unmuteProfile:function(){var t=this,e=this.profileId;axios.post("/i/unmute",{type:"user",item:e}).then((function(e){t.fetchRelationships(),t.$refs.visitorContextMenu.hide(),swal("Success","You have successfully unmuted "+t.profile.acct,"success")})).catch((function(t){swal("Error","Something went wrong. Please try again later.","error")})),this.$refs.visitorContextMenu.hide()},blockProfile:function(){var t=this,e=this.profileId;axios.post("/i/block",{type:"user",item:e}).then((function(e){t.warning=!0,t.fetchRelationships(),t.$refs.visitorContextMenu.hide(),swal("Success","You have successfully blocked "+t.profile.acct,"success")})).catch((function(t){swal("Error","Something went wrong. Please try again later.","error")})),this.$refs.visitorContextMenu.hide()},unblockProfile:function(){var t=this,e=this.profileId;axios.post("/i/unblock",{type:"user",item:e}).then((function(e){t.warning=!1,t.fetchRelationships(),t.$refs.visitorContextMenu.hide(),swal("Success","You have successfully unblocked "+t.profile.acct,"success")})).catch((function(t){swal("Error","Something went wrong. Please try again later.","error")})),this.$refs.visitorContextMenu.hide()},reportProfile:function(){window.location.href="/l/i/report?type=profile&id="+this.profileId,this.$refs.visitorContextMenu.hide()}}},r=(n("0od1"),n("KHd+")),s=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.relationship&&t.relationship.blocking&&t.warning?n("div",{staticClass:"bg-white pt-3 border-bottom"},[n("div",{staticClass:"container"},[n("p",{staticClass:"text-center font-weight-bold"},[t._v("You are blocking this account")]),t._v(" "),n("p",{staticClass:"text-center font-weight-bold"},[t._v("Click "),n("a",{staticClass:"cursor-pointer",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.warning=!1}}},[t._v("here")]),t._v(" to view profile")])])]):t._e(),t._v(" "),t.loading?n("div",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{height:"80vh"}},[n("img",{attrs:{src:"/img/pixelfed-icon-grey.svg"}})]):t._e(),t._v(" "),t.loading||t.warning?t._e():n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-4 pt-5",staticStyle:{"margin-top":"40px"}},[n("div",{staticClass:"card shadow-none border"},[n("div",{staticClass:"card-header p-0 m-0"},[t.profile.header_bg?n("img",{staticStyle:{width:"100%",height:"140px","object-fit":"cover"},attrs:{src:t.profile.header_bg}}):n("div",{staticClass:"bg-primary",staticStyle:{width:"100%",height:"140px"}})]),t._v(" "),n("div",{staticClass:"card-body pb-0"},[n("div",{staticClass:"mt-n5 mb-3"},[n("img",{staticClass:"rounded-circle p-1 border mt-n4 bg-white shadow",attrs:{src:t.profile.avatar,width:"90px",height:"90px;"}}),t._v(" "),n("span",{staticClass:"float-right mt-n1"},[n("span",[t.relationship&&0==t.relationship.following?n("button",{staticClass:"btn btn-outline-light py-0 px-3 mt-n1",staticStyle:{"font-size":"13px","font-weight":"500"},on:{click:function(e){return t.followProfile()}}},[t._v("Follow")]):t._e(),t._v(" "),t.relationship&&1==t.relationship.following?n("button",{staticClass:"btn btn-outline-light py-0 px-3 mt-n1",staticStyle:{"font-size":"13px","font-weight":"500"},on:{click:function(e){return t.unfollowProfile()}}},[t._v("Unfollow")]):t._e()]),t._v(" "),n("span",{staticClass:"ml-3"},[n("button",{staticClass:"btn btn-outline-light btn-sm mt-n1",staticStyle:{"padding-top":"2px","padding-bottom":"1px"},on:{click:function(e){return t.showCtxMenu()}}},[n("i",{staticClass:"fas fa-cog cursor-pointer",staticStyle:{"font-size":"13px"}})])])])]),t._v(" "),n("p",{staticClass:"pl-2 h4 font-weight-bold mb-1"},[t._v(t._s(t.profile.display_name))]),t._v(" "),n("p",{staticClass:"pl-2 font-weight-bold mb-1 text-muted"},[t._v(t._s(t.profile.acct))]),t._v(" "),n("p",{staticClass:"pl-2 text-muted small",domProps:{innerHTML:t._s(t.profile.note)}}),t._v(" "),n("p",{staticClass:"pl-2 text-muted small d-flex justify-content-between"},[n("span",[n("span",{staticClass:"font-weight-bold text-dark"},[t._v(t._s(t.profile.statuses_count))]),t._v(" "),n("span",[t._v("Posts")])]),t._v(" "),n("span",[n("span",{staticClass:"font-weight-bold text-dark"},[t._v(t._s(t.profile.following_count))]),t._v(" "),n("span",[t._v("Following")])]),t._v(" "),n("span",[n("span",{staticClass:"font-weight-bold text-dark"},[t._v(t._s(t.profile.followers_count))]),t._v(" "),n("span",[t._v("Followers")])])])])])]),t._v(" "),n("div",{staticClass:"col-12 col-md-8 pt-5"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 text-center mb-2"},[n("div",{staticClass:"custom-control custom-switch"},[n("label",{class:t.layoutType?" pr-5 font-weight-bold text-lighter":"pr-5 font-weight-bold text-dark",on:{click:function(e){t.layoutType=!t.layoutType}}},[t._v("Grid")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.layoutType,expression:"layoutType"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customSwitch1"},domProps:{checked:Array.isArray(t.layoutType)?t._i(t.layoutType,null)>-1:t.layoutType},on:{change:function(e){var n=t.layoutType,o=e.target,i=!!o.checked;if(Array.isArray(n)){var r=t._i(n,null);o.checked?r<0&&(t.layoutType=n.concat([null])):r>-1&&(t.layoutType=n.slice(0,r).concat(n.slice(r+1)))}else t.layoutType=i}}}),t._v(" "),n("label",{class:t.layoutType?"pl-2 custom-control-label font-weight-bold text-dark":"pl-2 custom-control-label font-weight-bold text-lighter",attrs:{for:"customSwitch1"}},[t._v("Feed")])])]),t._v(" "),t._l(t.feed,(function(e,o){return 0==t.layoutType?n("div",{key:"remprop"+o,staticClass:"col-12 col-md-4 mb-3 d-flex justify-content-center align-items-center"},[n("a",{attrs:{href:t.remotePostUrl(e)}},[n("img",{staticClass:"img-fluid rounded border",attrs:{src:e.thumb}})])]):t._e()})),t._v(" "),t._l(t.feed,(function(e,o){return 1==t.layoutType?n("div",{key:"remprop"+o,staticClass:"col-12 mb-2"},[n("div",{staticClass:"card mb-sm-4 status-card card-md-rounded-0 shadow-none border cursor-pointer"},[n("div",{staticClass:"card-header d-inline-flex align-items-center bg-white"},[n("img",{staticStyle:{"border-radius":"38px"},attrs:{src:t.profile.avatar,width:"38px",height:"38px",onerror:"this.onerror=null;this.src='/storage/avatars/default.png?v=2'"}}),t._v(" "),n("div",{staticClass:"pl-2"},[n("span",{staticClass:"username font-weight-bold text-dark"},[t._v(t._s(t.profile.username)+"\n\t\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),n("div",{staticClass:"card-body p-0"},[n("a",{attrs:{href:e.url}},[t._o(n("img",{staticClass:"w-100 h-100",attrs:{src:e.thumb}}),0,"remprop"+o)])]),t._v(" "),n("div",{staticClass:"card-body"},[n("div",{staticClass:"caption"},[n("p",{staticClass:"mb-2 read-more",staticStyle:{overflow:"hidden"}},[n("span",{staticClass:"username font-weight-bold"},[n("bdi",[n("span",{staticClass:"text-dark"},[t._v(t._s(t.profile.username))])])]),t._v(" "),n("span",{staticClass:"status-content",domProps:{innerHTML:t._s(e.caption.html)}})])]),t._v(" "),n("div",{staticClass:"timestamp mt-2"},[n("p",{staticClass:"small text-uppercase mb-0"},[n("a",{staticClass:"text-muted",attrs:{href:t.remotePostUrl(e)}},[n("timeago",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",modifiers:{hover:!0,bottom:!0}}],attrs:{datetime:e.timestamp,"auto-update":90,"converter-options":{includeSeconds:!0},title:t.timestampFormat(e.timestamp)}})],1)])])])])]):t._e()}))],2)])]),t._v(" "),n("b-modal",{ref:"visitorContextMenu",attrs:{id:"visitor-context-menu","hide-footer":"","hide-header":"",centered:"",size:"sm","body-class":"list-group-flush p-0"}},[t.relationship?n("div",{staticClass:"list-group"},[n("div",{staticClass:"list-group-item cursor-pointer text-center rounded text-dark",on:{click:t.copyProfileLink}},[t._v("\n\t\t\t\t\tCopy Link\n\t\t\t\t")]),t._v(" "),!t.user||t.owner||t.relationship.muting?t._e():n("div",{staticClass:"list-group-item cursor-pointer text-center rounded",on:{click:t.muteProfile}},[t._v("\n\t\t\t\t\tMute\n\t\t\t\t")]),t._v(" "),t.user&&!t.owner&&t.relationship.muting?n("div",{staticClass:"list-group-item cursor-pointer text-center rounded",on:{click:t.unmuteProfile}},[t._v("\n\t\t\t\t\tUnmute\n\t\t\t\t")]):t._e(),t._v(" "),t.user&&!t.owner?n("div",{staticClass:"list-group-item cursor-pointer text-center rounded text-dark",on:{click:t.reportProfile}},[t._v("\n\t\t\t\t\tReport User\n\t\t\t\t")]):t._e(),t._v(" "),!t.user||t.owner||t.relationship.blocking?t._e():n("div",{staticClass:"list-group-item cursor-pointer text-center rounded text-dark",on:{click:t.blockProfile}},[t._v("\n\t\t\t\t\tBlock\n\t\t\t\t")]),t._v(" "),t.user&&!t.owner&&t.relationship.blocking?n("div",{staticClass:"list-group-item cursor-pointer text-center rounded text-dark",on:{click:t.unblockProfile}},[t._v("\n\t\t\t\t\tUnblock\n\t\t\t\t")]):t._e(),t._v(" "),n("div",{staticClass:"list-group-item cursor-pointer text-center rounded text-muted",on:{click:function(e){return t.$refs.visitorContextMenu.hide()}}},[t._v("\n\t\t\t\t\tClose\n\t\t\t\t")])]):t._e()])],1)])}),[],!1,null,"2e07ebc8",null);e.default=s.exports},"9tPo":function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var i,r=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},Bs5P:function(t,e,n){var o=n("Gcqh");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(o,i);o.locals&&(t.exports=o.locals)},Gcqh:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\n@media (min-width: 1200px) {\n.container[data-v-2e07ebc8] {\n\t\tmax-width: 1050px;\n}\n}\n",""])},I1BE:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=(s=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r=o.sources.map((function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"}));return[n].concat(r).concat([i]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},"KHd+":function(t,e,n){"use strict";function o(t,e,n,o,i,r,s,a){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):i&&(l=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,l):[l]}return{exports:t,options:c}}n.d(e,"a",(function(){return o}))},"aET+":function(t,e,n){var o,i,r={},s=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),a=function(t,e){return e?e.querySelector(t):document.querySelector(t)},l=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var o=a.call(this,t,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}}(),c=null,u=0,f=[],p=n("9tPo");function d(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](o.parts[s]);for(;s<o.parts.length;s++)i.parts.push(w(o.parts[s],e))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(w(o.parts[s],e));r[o.id]={id:o.id,refs:1,parts:a}}}}function h(t,e){for(var n=[],o={},i=0;i<t.length;i++){var r=t[i],s=e.base?r[0]+e.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};o[s]?o[s].parts.push(a):n.push(o[s]={id:s,parts:[a]})}return n}function v(t,e){var n=l(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=f[f.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=l(t.insertAt.before,n);n.insertBefore(e,i)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return n.nc}();o&&(t.attrs.nonce=o)}return b(e,t.attrs),v(t,e),e}function b(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function w(t,e){var n,o,i,r;if(e.transform&&t.css){if(!(r="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=r}if(e.singleton){var s=u++;n=c||(c=g(e)),o=x.bind(null,n,s,!1),i=x.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),v(t,e),e}(e),o=k.bind(null,n,e),i=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),o=C.bind(null,n),i=function(){m(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return d(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var s=n[i];(a=r[s.id]).refs--,o.push(a)}t&&d(h(t,e),e);for(i=0;i<o.length;i++){var a;if(0===(a=o[i]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete r[a.id]}}}};var y,_=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function x(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=_(e,i);else{var r=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function C(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function k(t,e,n){var o=n.css,i=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(o=p(o)),i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([o],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}}},[[21,0]]]);