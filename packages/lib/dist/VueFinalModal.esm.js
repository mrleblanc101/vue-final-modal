import{ref as e,watch as t,nextTick as n,onBeforeUnmount as o,reactive as a,computed as i,onMounted as l,withDirectives as s,openBlock as r,createElementBlock as d,normalizeStyle as u,normalizeClass as c,withKeys as f,createVNode as m,Transition as v,mergeProps as p,toHandlers as h,withCtx as y,createCommentVNode as b,createElementVNode as g,withModifiers as w,renderSlot as x,Fragment as S,renderList as T,vShow as k,createBlock as E,resolveDynamicComponent as M,createSlots as z,markRaw as C,shallowReactive as O,resolveComponent as _}from"vue";import{useSwipe as L}from"@vueuse/core";const I="enter",D="entering",V="leave",R="leavng",B=()=>{const t=e(null),n={beforeEnter(){t.value=D},afterEnter(){t.value=I},beforeLeave(){t.value=R},afterLeave(){t.value=V}};return{state:t,listeners:n}},A=e=>e==document.activeElement;class N{constructor(){this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this)}get lastElement(){return this.elements[this.elements.length-1]||null}get firstElement(){return this.elements[0]||null}get isEnabled(){return!!this.root}onKeyDown(e){if((e=>"Tab"===e.key||9===e.keyCode)(e)){if(!e.shiftKey)return!document.activeElement||A(this.lastElement)?(this.firstElement.focus(),void e.preventDefault()):void 0;A(this.firstElement)&&(this.lastElement.focus(),e.preventDefault())}}enable(e){e&&(this.root=e,this.elements=((e,t)=>[...e.querySelectorAll(t)||[]])(this.root,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])'),this.root.addEventListener("keydown",this.onKeyDown))}disable(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}let P=null;function $({props:e,vfmContainer:n,modalTransitionState:o}){return null==P&&(P=new N),t(o,(t=>{switch(t){case I:(e.focusRetain||e.focusTrap)&&n.value.focus(),e.focusTrap&&P.enable(n.value);break;case R:P.enabled&&P.disable()}})),{focusTrap:P}}const H={t:"ns-resize",tr:"nesw-resize",r:"ew-resize",br:"nwse-resize",b:"ns-resize",bl:"nesw-resize",l:"ew-resize",tl:"nwse-resize"},j=e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;return{x:t,y:n}},F=(e,t,n)=>("number"!=typeof e&&(e=Math.min(t,n)||t),"number"!=typeof n&&(n=Math.max(t,e)),Math.min(Math.max(t,e),n)),W=e=>e&&Number(e.replace(/px$/,""))||0,Y={down:{pc:"mousedown",m:"touchstart"},move:{pc:"mousemove",m:"touchmove"},up:{pc:"mouseup",m:"touchend"}},K=(e,t,n)=>{t&&t.addEventListener(Y[e].pc,n),t&&t.addEventListener(Y[e].m,n,{passive:!1})},G=(e,t,n)=>{t&&t.removeEventListener(Y[e].pc,n),t&&t.removeEventListener(Y[e].m,n)};function U({props:o,visible:a,vfmContainer:i,vfmContent:l,vfmResize:s,modalTransitionState:r,onEvent:d=(()=>{})}){const u=e(!1),c=e(null),f=e({});function m(e){e.stopPropagation();const t="resize",n="drag",a=e.target.getAttribute("direction");let s;if(a)s=t;else{if(!((e,t,n)=>""===n||[...t.querySelectorAll(n)].includes(e.target))(e,l.value,o.dragSelector))return;s=n}c.value=`${s}:start`,d?.(e);const r=j(e),u=i.value.getBoundingClientRect(),m=l.value.getBoundingClientRect(),v="absolute"===window.getComputedStyle(l.value).position,p=W(f.value.top),h=W(f.value.left),y=(()=>{if(o.fitParent){const e={absolute:()=>({minTop:0,minLeft:0,maxTop:u.height-m.height,maxLeft:u.width-m.width}),relative:()=>({minTop:p+u.top-m.top,minLeft:h+u.left-m.left,maxTop:p+u.bottom-m.bottom,maxLeft:h+u.right-m.right})};return v?e.absolute():e.relative()}return{}})(),b=s===t&&((e,t,n)=>{const o=e.style[t];return e.style[t]=n,()=>{e.style[t]=o}})(document.body,"cursor",H[a]),g=e=>{e.stopPropagation(),c.value=`${s}:move`,d?.(e);const i=j(e);let l,b,g={x:i.x-r.x,y:i.y-r.y};s===t&&(g=function(e,t,n,a,i){const l=e=>{let n=t[e.axis];n=o.fitParent?F(e.min,n,e.max):n;let a=F(e.minEdge,e.getEdge(n),e.maxEdge);return n=e.getOffsetAxis(a,i),{[e.edgeName]:a,[e.axis]:n}},s=(e,t,i,l)=>{const s=a[t],r=n[e]-a[e],d=(u=t).charAt(0).toUpperCase()+u.slice(1);var u;return{axis:i,edgeName:t,min:l?r:-s,max:l?s:r,minEdge:o[`min${d}`],maxEdge:o[`max${d}`],getEdge:e=>a[t]-e*(l?1:-1),getOffsetAxis:(e,n)=>{const o=a[t]-e;return n?l?o:0:(l?1:-1)*o/2}}},r={t:["top","height","y",!0],b:["bottom","height","y",!1],l:["left","width","x",!0],r:["right","width","x",!1]};let d={x:0,y:0};return e.split("").forEach((e=>{const t=s(...r[e]);d={...d,...l(t)}})),d}(a,g,u,m,v)),v?(l=m.top-u.top+g.y,b=m.left-u.left+g.x):(l=p+g.y,b=h+g.x),s===n&&o.fitParent&&(l=F(y.minTop,l,y.maxTop),b=F(y.minLeft,b,y.maxLeft));const w={position:"relative",top:l+"px",left:b+"px",margin:"unset",touchAction:"none",...v&&{position:"absolute",transform:"unset",width:m.width+"px",height:m.height+"px"},...g.width&&{width:g.width+"px"},...g.height&&{height:g.height+"px"}};f.value={...f.value,...w}},w=e=>{e.stopPropagation(),s===t&&b&&b(),setTimeout((()=>{c.value=`${s}:end`,d?.(e)})),G("move",document,g),G("up",document,w)};K("move",document,g),K("up",document,w)}function v(){K("down",l.value,m),f.value.touchAction="none"}function p(){G("down",l.value,m)}function h(){u.value=!0,n((()=>{K("down",s.value,m)}))}function y(){G("down",s.value,m),u.value=!1}return t(r,(e=>{switch(e){case I:o.drag&&v(),o.resize&&h();break;case V:o.keepChangedStyle||(f.value={})}})),t((()=>o.drag),(e=>{a.value&&(e?v():p())})),t((()=>o.resize),(e=>{a.value&&(e?h():y())})),t((()=>o.keepChangedStyle),(e=>{e||(f.value={})})),{resizeVisible:u,state:c,dragResizeStyle:f,removeDragDown:p,removeResizeDown:y}}let X=!1;if("undefined"!=typeof window){const e={get passive(){X=!0}};window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}const q="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1);let Z,J,Q=[],ee=!1,te=0,ne=-1;const oe=(e,t)=>{let n=!1;return(e=>{const t=[];for(;e;){if(t.push(e),e.classList.contains("vfm"))return t;e=e.parentElement}return t})(e).forEach((e=>{(e=>{if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight})(e)&&((e,t)=>!(0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight+t>=e.scrollHeight&&t>0))(e,t)&&(n=!0)})),n},ae=e=>Q.some((()=>oe(e,-te))),ie=e=>{const t=e||window.event;return!!ae(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},le=(e,t)=>{if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(Q.some((t=>t.targetElement===e)))return;const n={targetElement:e,options:t||{}};Q=[...Q,n],q?(e.ontouchstart=e=>{1===e.targetTouches.length&&(ne=e.targetTouches[0].clientY)},e.ontouchmove=t=>{1===t.targetTouches.length&&((e,t)=>{te=e.targetTouches[0].clientY-ne,!ae(e.target)&&(t&&0===t.scrollTop&&te>0||(e=>!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight)(t)&&te<0?ie(e):e.stopPropagation())})(t,e)},ee||(document.addEventListener("touchmove",ie,X?{passive:!1}:void 0),ee=!0)):(e=>{if(void 0===J){const t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){const e=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);J=document.body.style.paddingRight,document.body.style.paddingRight=`${e+n}px`}}void 0===Z&&(Z=document.body.style.overflow,document.body.style.overflow="hidden")})(t)},se=e=>{e?(Q=Q.filter((t=>t.targetElement!==e)),q?(e.ontouchstart=null,e.ontouchmove=null,ee&&0===Q.length&&(document.removeEventListener("touchmove",ie,X?{passive:!1}:void 0),ee=!1)):Q.length||(void 0!==J&&(document.body.style.paddingRight=J,J=void 0),void 0!==Z&&(document.body.style.overflow=Z,Z=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")};function re({props:e,vfmContainer:a,modalTransitionState:i}){function l(){e.modelValue&&n((()=>{e.lockScroll?a.value&&le(a.value,{reserveScrollBarGap:!0}):s()}))}function s(){e.lockScroll&&a.value&&se(a.value)}return t((()=>e.lockScroll),l),t(i,(e=>{e===V&&s()})),o((()=>{s()})),{handleLockScroll:l}}const de=()=>{};var ue={props:{name:{type:String,default:null},modelValue:{type:Boolean,default:!1},displayDirective:{type:String,default:"show",validator:e=>-1!==["if","show"].indexOf(e)},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},styles:{type:[Object,Array],default:()=>({})},overlayStyle:{type:[Object,Array],default:()=>({})},contentStyle:{type:[Object,Array],default:()=>({})},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},nonModal:{type:Boolean,default:!1},attach:{type:null,default:!1,validator(e){const t=typeof e;return"boolean"===t||"string"===t||e.nodeType===Node.ELEMENT_NODE}},transition:{type:[String,Object],default:"vfm"},overlayTransition:{type:[String,Object],default:"vfm"},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1},fitParent:{type:Boolean,default:!0},drag:{type:Boolean,default:!1},dragSelector:{type:String,default:""},keepChangedStyle:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},resizeDirections:{type:Array,default:()=>["t","tr","r","br","b","bl","l","tl"],validator:e=>["t","tr","r","br","b","bl","l","tl"].filter((t=>-1!==e.indexOf(t))).length===e.length},minWidth:{type:[Number,String],default:0},minHeight:{type:[Number,String],default:0},maxWidth:{type:[Number,String],default:1/0},maxHeight:{type:[Number,String],default:1/0}},emits:["update:modelValue","click-outside","before-open","opened","_before-close","before-close","closed","_before-open","_opened","_closed","drag:start","drag:move","drag:end","resize:start","resize:move","resize:end"],setup(s,{emit:r}){const d=Symbol("vfm"),u=e(null),c=e(null),f=e(null),m=e(null),v=e(null),p=e(null),h=e(null),y=e(!1),b=a({modal:!1,overlay:!1}),{state:g,listeners:w}=B(),{state:x,listeners:S}=B(),T=e(!1),{focusTrap:k}=$({props:s,vfmContainer:c,modalTransitionState:x}),{resizeVisible:E,state:M,dragResizeStyle:z,removeDragDown:C,removeResizeDown:O}=U({props:s,visible:y,vfmContainer:c,vfmContent:f,vfmResize:m,modalTransitionState:x,onEvent(e){r(M.value,e)}}),{handleLockScroll:_}=re({props:s,vfmContainer:c,modalTransitionState:x}),L=e(null);let D=de,R=de;const A=i((()=>"string"==typeof s.overlayTransition?{name:s.overlayTransition}:{...s.overlayTransition})),N=i((()=>"string"==typeof s.transition?{name:s.transition}:{...s.transition})),P=i((()=>(s.hideOverlay||g.value===V)&&x.value===V)),H=i((()=>!1===s.zIndex?!!s.zIndexAuto&&+s.zIndexBase+2*(h.value||0):s.zIndex)),j=i((()=>({...!1!==H.value&&{zIndex:H.value}}))),F=i((()=>{let e=[z.value];return Array.isArray(s.contentStyle)?e.push(...s.contentStyle):e.push(s.contentStyle),e}));function W(){return{uid:d,props:s,emit:r,vfmContainer:c,vfmContent:f,vfmResize:m,vfmOverlayTransition:v,vfmTransition:p,getAttachElement:G,modalStackIndex:h,visibility:b,handleLockScroll:_,toggle:Z}}function Y(){if(s.modelValue){if(r("_before-open",X({type:"_before-open"})),q("before-open",!1))return void R("show");let e=G();if(e||!1===s.attach){!1!==s.attach&&e.appendChild(u.value);let t=s.api.openedModals.findIndex((e=>e.uid===d));-1!==t&&s.api.openedModals.splice(t,1),s.api.openedModals.push(W()),h.value=s.api.openedModals.length-1,_(),s.api.openedModals.filter((e=>e.uid!==d)).forEach(((t,n)=>{t.getAttachElement()===e&&(t.modalStackIndex.value=n,t.visibility.overlay=!1)})),y.value=!0,b.overlay=!0,b.modal=!0}else!1!==e&&console.warn("Unable to locate target ".concat(s.attach))}}function K(){let e=s.api.openedModals.findIndex((e=>e.uid===d));if(-1!==e&&s.api.openedModals.splice(e,1),s.api.openedModals.length>0){const e=s.api.openedModals[s.api.openedModals.length-1];e.props.focusTrap&&n((()=>{k.enable(e.vfmContainer.value),k.firstElement.focus()})),(e.props.focusRetain||e.props.focusTrap)&&e.vfmContainer.value.focus(),!e.props.hideOverlay&&(e.visibility.overlay=!0)}s.drag&&C(),s.resize&&O(),M.value=null,b.overlay=!1,b.modal=!1}function G(){let e;return e=!1!==s.attach&&("string"==typeof s.attach?!!window&&window.document.querySelector(s.attach):s.attach),e}function X(e={}){return{ref:W(),...e}}function q(e,t){let o=!1;const a=X({type:e,stop(){o=!0}});return r(e,a),!!o&&(T.value=!0,n((()=>{r("update:modelValue",t)})),!0)}function Z(e){return new Promise(((t,n)=>{D=e=>{t(e),D=de},R=e=>{n(e),R=de};const o="boolean"==typeof e?e:!s.modelValue;r("update:modelValue",o)}))}return t((()=>s.modelValue),(e=>{if(T.value)T.value=!1;else if(Y(),!e){if(r("_before-close",X({type:"_before-close"})),q("before-close",!0))return void R("hide");K()}})),t((()=>s.hideOverlay),(e=>{s.modelValue&&!e&&(b.overlay=!0)})),t((()=>s.attach),Y),t(P,(e=>{e&&(y.value=!1,c.value.style.display="none")}),{flush:"post"}),t(x,(e=>{switch(e){case I:r("_opened"),r("opened",X({type:"opened"})),D("show");break;case V:h.value=null,r("_closed"),r("closed",X({type:"closed"})),D("hide")}})),s.api.modals.push(W()),l((()=>{Y()})),o((()=>{K(),u?.value?.remove();let e=s.api.modals.findIndex((e=>e.uid===d));s.api.modals.splice(e,1)})),{root:u,vfmContainer:c,vfmContent:f,vfmResize:m,vfmOverlayTransition:v,vfmTransition:p,computedOverlayTransition:A,computedTransition:N,overlayListeners:w,modalListeners:S,visible:y,visibility:b,resizeVisible:E,calculateZIndex:H,bindStyle:j,bindContentStyle:F,onMousedown:function(e){L.value=e?.target},onMouseupContainer:function(){L.value===c.value&&"resize:move"!==M.value&&(r("click-outside",X({type:"click-outside"})),s.clickToClose&&r("update:modelValue",!1))},onEsc:function(){y.value&&s.escToClose&&r("update:modelValue",!1)}}}};const ce=["aria-expanded"],fe={key:0,ref:"vfmResize",class:"vfm__resize vfm--absolute vfm--inset vfm--prevent-none vfm--select-none vfm--touch-none"},me=["direction"];function ve(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}ve("\n.vfm--fixed[data-v-72c09f54] {\n  position: fixed;\n}\n.vfm--absolute[data-v-72c09f54] {\n  position: absolute;\n}\n.vfm--inset[data-v-72c09f54] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vfm--overlay[data-v-72c09f54] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vfm--prevent-none[data-v-72c09f54] {\n  pointer-events: none;\n}\n.vfm--prevent-auto[data-v-72c09f54] {\n  pointer-events: auto;\n}\n.vfm--outline-none[data-v-72c09f54]:focus {\n  outline: none;\n}\n.vfm-enter-active[data-v-72c09f54],\n.vfm-leave-active[data-v-72c09f54] {\n  transition: opacity 0.2s;\n}\n.vfm-enter-from[data-v-72c09f54],\n.vfm-leave-to[data-v-72c09f54] {\n  opacity: 0;\n}\n.vfm--touch-none[data-v-72c09f54] {\n  touch-action: none;\n}\n.vfm--select-none[data-v-72c09f54] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vfm--resize-tr[data-v-72c09f54],\n.vfm--resize-br[data-v-72c09f54],\n.vfm--resize-bl[data-v-72c09f54],\n.vfm--resize-tl[data-v-72c09f54] {\n  width: 12px;\n  height: 12px;\n  z-index: 10;\n}\n.vfm--resize-t[data-v-72c09f54] {\n  top: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-tr[data-v-72c09f54] {\n  top: -6px;\n  right: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-r[data-v-72c09f54] {\n  top: 0;\n  right: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-br[data-v-72c09f54] {\n  bottom: -6px;\n  right: -6px;\n  cursor: nwse-resize;\n}\n.vfm--resize-b[data-v-72c09f54] {\n  bottom: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-bl[data-v-72c09f54] {\n  bottom: -6px;\n  left: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-l[data-v-72c09f54] {\n  top: 0;\n  left: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-tl[data-v-72c09f54] {\n  top: -6px;\n  left: -6px;\n  cursor: nwse-resize;\n}\n"),ue.render=function(e,t,n,o,a,i){return"if"!==n.displayDirective||o.visible?s((r(),d("div",{key:0,ref:"root",style:u(o.bindStyle),class:c(["vfm vfm--inset",[!1===n.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":n.nonModal}]]),onKeydown:t[3]||(t[3]=f(((...e)=>o.onEsc&&o.onEsc(...e)),["esc"]))},[m(v,p(o.computedOverlayTransition,h(o.overlayListeners)),{default:y((()=>[!n.hideOverlay&&o.visibility.overlay?(r(),d("div",{key:0,class:c(["vfm__overlay vfm--overlay vfm--absolute vfm--inset",n.overlayClass]),style:u(n.overlayStyle)},null,6)):b("v-if",!0)])),_:1},16),m(v,p(o.computedTransition,h(o.modalListeners)),{default:y((()=>[s(g("div",{ref:"vfmContainer",class:c(["vfm__container vfm--absolute vfm--inset vfm--outline-none",n.classes]),style:u(n.styles),"aria-expanded":o.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1",onMouseup:t[1]||(t[1]=w(((...e)=>o.onMouseupContainer&&o.onMouseupContainer(...e)),["self"])),onMousedown:t[2]||(t[2]=w(((...e)=>o.onMousedown&&o.onMousedown(...e)),["self"]))},[g("div",{ref:"vfmContent",class:c(["vfm__content",[n.contentClass,{"vfm--prevent-auto":n.nonModal}]]),style:u(o.bindContentStyle),onMousedown:t[0]||(t[0]=e=>o.onMousedown(null))},[x(e.$slots,"default",{close:()=>e.$emit("update:modelValue",!1)}),o.resizeVisible&&o.visibility.modal?(r(),d("div",fe,[(r(!0),d(S,null,T(n.resizeDirections,(e=>(r(),d("div",{key:e,direction:e,class:c([`vfm--resize-${e}`,"vfm--absolute vfm--prevent-auto"])},null,10,me)))),128))],512)):b("v-if",!0)],38)],46,ce),[[k,o.visibility.modal]])])),_:3},16)],38)),[[k,"show"!==n.displayDirective||o.visible]]):b("v-if",!0)},ue.__scopeId="data-v-72c09f54",ue.__file="src/VueFinalModal.vue";var pe={methods:{slice(e){this.api.dynamicModals.splice(e,1)},closed(e,t){this.slice(e),t.closed&&t.closed()},beforeClose(e){e.value&&e?.rejectClose("hide")},async beforeOpen(e,t,n){await this.$nextTick(),await this.$nextTick(),t.value||(this.slice(n),t?.reject("show"))},isString:e=>"string"==typeof e}};const he={class:"modals-container"},ye=["innerHTML"];pe.render=function(e,t,n,o,a,i){return r(),d("div",he,[(r(!0),d(S,null,T(e.api.dynamicModals,((e,t)=>(r(),E(M(e.component),p({key:e.id},e.bind,{modelValue:e.value,"onUpdate:modelValue":t=>e.value=t},h(e.on),{on_beforeClose:t=>i.beforeClose(e),on_closed:n=>i.closed(t,e),on_beforeOpen:n=>i.beforeOpen(n,e,t),on_opened:e.opened}),z({_:2},[T(e.slots,((e,t)=>({name:t,fn:y((()=>[b(" eslint-disable vue/no-v-html "),i.isString(e)?(r(),d("div",{key:0,innerHTML:e},null,8,ye)):(r(),E(M(e.component),p({key:1},e.bind,h(e.on||{})),null,16))]))})))]),1040,["modelValue","onUpdate:modelValue","on_beforeClose","on_closed","on_beforeOpen","on_opened"])))),128))])},pe.__file="src/ModalsContainer.vue";class be{constructor(){const e=e=>{const t={...e,props:{...e.props}};return Object.assign(t.props,{api:{type:Object,default:()=>this}}),C(t)};this.modals=[],this.openedModals=[],this.VueFinalModal=e(ue),this.dynamicModals=O([]),this.ModalsContainer=e(pe)}show(e,...t){switch(typeof e){case"string":return this.toggle(e,!0,...t);case"object":{const{show:n}=this.useModal(e,t[0]);return n()}}}hide(...e){return this.toggle(e,!1)}hideAll(){return this.hide(...this.openedModals.map((e=>e.props.name)))}toggle(e,...t){const n=Array.isArray(e)?this.get(...e):this.get(e);return Promise.allSettled(n.map((e=>e.toggle(...t))))}get(...e){return this.modals.filter((t=>e.includes(t.props.name)))}existModal(e){return-1!==this.dynamicModals.indexOf(e)}useModal(e){let t=a({value:!1,component:this.VueFinalModal,id:Symbol("useModal"),bind:{},slots:{},on:{},...e});return{show:()=>this.existModal(t)?Promise.resolve("[Vue Final Modal] modal is already opened"):new Promise(((e,n)=>{t.value=!0,t.reject=n,t.opened=()=>{e("show")},this.dynamicModals.push(t)})),hide:()=>this.existModal(t)?new Promise(((e,n)=>{t.value=!1,t.rejectClose=n,t.closed=()=>{e("hide")}})):Promise.resolve("[Vue Final Modal] modal is already closed"),options:t}}}const ge=()=>{let e=new be;return{$vfm:e,VueFinalModal:e.VueFinalModal,ModalsContainer:e.ModalsContainer,useModal:e.useModal.bind(e)}},we=ge(),{$vfm:xe,VueFinalModal:Se,ModalsContainer:Te,useModal:ke}=we;var Ee={components:{VueFinalModal:Se},setup(n,{emit:o,attrs:a}){const i=e(null),l=e(0);let s=null,r=!1;const{lengthY:d,direction:u,isSwiping:c}=L(i,{threshold:0,onSwipeStart(e){s=(new Date).getTime(),r=f(e.target)},onSwipe(){var e,t,n;r&&("DOWN"===u.value&&(l.value=(e=Math.abs(d.value),t=0,n=i.value.offsetHeight,-(e>n?n:e<t?t:e))))},onSwipeEnd(e,t){const n=(new Date).getTime(),a="DOWN"===t,u=Math.abs(d.value)>.1*i.value.offsetHeight;r&&a&&(u||n-s<=300)?o("update:modelValue",!1):l.value=0}});function f(e){const t=0===e.scrollTop;return e===i.value?t:t&&f(e.parentElement)}return t((()=>a.modelValue),(e=>{e&&(l.value=0)})),{bottomSheetEl:i,offsetY:l,isSwiping:c}}};ve("\n.vfm-bottom-sheet[data-v-730a320a] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  max-height: 90%;\n  overflow-y: auto;\n  background-color: #fff;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n.vfm-transition[data-v-730a320a] {\n  transition-property: transform;\n  transition-duration: 150ms;\n}\n@-webkit-keyframes slideInDown-730a320a {\nfrom {\n    transform: translate3d(0, 100%, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n@keyframes slideInDown-730a320a {\nfrom {\n    transform: translate3d(0, 100%, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n[data-v-730a320a] .slideInDown {\n  -webkit-animation-name: slideInDown-730a320a;\n          animation-name: slideInDown-730a320a;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes slideOutDown-730a320a {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(0, 100%, 0);\n}\n}\n@keyframes slideOutDown-730a320a {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(0, 100%, 0);\n}\n}\n[data-v-730a320a] .slideOutDown {\n  -webkit-animation-name: slideOutDown-730a320a;\n          animation-name: slideOutDown-730a320a;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n"),Ee.render=function(e,t,n,o,a,i){const l=_("vue-final-modal");return r(),E(l,{transition:{"enter-active-class":"slideInDown","leave-active-class":"slideOutDown"}},{default:y((()=>[g("div",{ref:"bottomSheetEl",class:c(["vfm-bottom-sheet",{"vfm-transition":!o.isSwiping}]),style:u({transform:`translateY(${-o.offsetY}px)`})},[x(e.$slots,"default")],6)])),_:3})},Ee.__scopeId="data-v-730a320a",Ee.__file="src/hoc/VBottomSheet.vue";var Me={components:{VueFinalModal:Se},props:{direction:{type:String,default:"LEFT",validator:e=>-1!==["RIGHT","LEFT"].includes(e)}},setup(n,{emit:o,attrs:a}){const l=e(null),s=e(0);let r=null,d=!1;const u=i((()=>({"enter-active-class":"RIGHT"===n.direction?"slideInRight":"slideInLeft","leave-active-class":"RIGHT"===n.direction?"slideOutRight":"slideOutLeft"}))),{lengthX:c,direction:f,isSwiping:m}=L(l,{threshold:0,onSwipeStart(e){r=(new Date).getTime(),d=v(e.target)},onSwipe(){var e,t,o;if(d&&f.value===n.direction){const a=(e=Math.abs(c.value),t=0,o=l.value.offsetWidth,e>o?o:e<t?t:e);s.value="RIGHT"===n.direction?-a:a}},onSwipeEnd(e,t){const a=(new Date).getTime(),i=t===n.direction,u=Math.abs(c.value)>.1*l.value.offsetWidth;d&&i&&(u||a-r<=300)?o("update:modelValue",!1):s.value=0}});function v(e){const t=0===e.scrollLeft;return e===l.value?t:t&&v(e.parentElement)}return t((()=>a.modelValue),(e=>{e&&(s.value=0)})),{modalContent:l,offsetX:s,transition:u,isSwiping:m}}};ve("\n.vfm-full-screen[data-v-1a4bac96] {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  background-color: #fff;\n}\n.vfm-transition[data-v-1a4bac96] {\n  transition-property: transform;\n  transition-duration: 150ms;\n}\n@-webkit-keyframes slideInLeft-1a4bac96 {\nfrom {\n    transform: translate3d(-100%, 0, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n@keyframes slideInLeft-1a4bac96 {\nfrom {\n    transform: translate3d(-100%, 0, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n[data-v-1a4bac96] .slideInLeft {\n  -webkit-animation-name: slideInLeft-1a4bac96;\n          animation-name: slideInLeft-1a4bac96;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes slideInRight-1a4bac96 {\nfrom {\n    transform: translate3d(100%, 0, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n@keyframes slideInRight-1a4bac96 {\nfrom {\n    transform: translate3d(100%, 0, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n[data-v-1a4bac96] .slideInRight {\n  -webkit-animation-name: slideInRight-1a4bac96;\n          animation-name: slideInRight-1a4bac96;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes slideOutLeft-1a4bac96 {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(-100%, 0, 0);\n}\n}\n@keyframes slideOutLeft-1a4bac96 {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(-100%, 0, 0);\n}\n}\n[data-v-1a4bac96] .slideOutLeft {\n  -webkit-animation-name: slideOutLeft-1a4bac96;\n          animation-name: slideOutLeft-1a4bac96;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes slideOutRight-1a4bac96 {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(100%, 0, 0);\n}\n}\n@keyframes slideOutRight-1a4bac96 {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(100%, 0, 0);\n}\n}\n[data-v-1a4bac96] .slideOutRight {\n  -webkit-animation-name: slideOutRight-1a4bac96;\n          animation-name: slideOutRight-1a4bac96;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n"),Me.render=function(e,t,n,o,a,i){const l=_("vue-final-modal");return r(),E(l,p(e.$attrs,{"hide-overlay":"","content-class":"w-full h-full",transition:o.transition}),{default:y((()=>[g("div",{ref:"modalContent",class:c(["vfm-full-screen",{"vfm-transition":!o.isSwiping}]),style:u({transform:`translateX(${-o.offsetX}px)`})},[x(e.$slots,"default")],6)])),_:3},16,["transition"])},Me.__scopeId="data-v-1a4bac96",Me.__file="src/hoc/VFullScreen.vue";export{xe as $vfm,be as ModalInstance,Te as ModalsContainer,Ee as VBottomSheet,Me as VFullScreen,Se as VueFinalModal,ge as createModalInstance,ke as useModal};
//# sourceMappingURL=VueFinalModal.esm.js.map
