!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue"),require("@vueuse/core")):"function"==typeof define&&define.amd?define(["exports","vue","@vueuse/core"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VueFinalModal={},e.Vue,e.VueUse)}(this,(function(e,t,n){"use strict";const o="enter",a="entering",i="leave",l="leavng",r=()=>{const e=t.ref(null),n={beforeEnter(){e.value=a},afterEnter(){e.value=o},beforeLeave(){e.value=l},afterLeave(){e.value=i}};return{state:e,listeners:n}},s=e=>e==document.activeElement;class d{constructor(){this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this)}get lastElement(){return this.elements[this.elements.length-1]||null}get firstElement(){return this.elements[0]||null}get isEnabled(){return!!this.root}onKeyDown(e){if((e=>"Tab"===e.key||9===e.keyCode)(e)){if(!e.shiftKey)return!document.activeElement||s(this.lastElement)?(this.firstElement.focus(),void e.preventDefault()):void 0;s(this.firstElement)&&(this.lastElement.focus(),e.preventDefault())}}enable(e){e&&(this.root=e,this.elements=((e,t)=>[...e.querySelectorAll(t)||[]])(this.root,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])'),this.root.addEventListener("keydown",this.onKeyDown))}disable(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}let c=null;function u({props:e,vfmContainer:n,modalTransitionState:a}){return null==c&&(c=new d),t.watch(a,(t=>{switch(t){case o:(e.focusRetain||e.focusTrap)&&n.value.focus(),e.focusTrap&&c.enable(n.value);break;case l:c.enabled&&c.disable()}})),{focusTrap:c}}const m={t:"ns-resize",tr:"nesw-resize",r:"ew-resize",br:"nwse-resize",b:"ns-resize",bl:"nesw-resize",l:"ew-resize",tl:"nwse-resize"},f=e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;return{x:t,y:n}},v=(e,t,n)=>("number"!=typeof e&&(e=Math.min(t,n)||t),"number"!=typeof n&&(n=Math.max(t,e)),Math.min(Math.max(t,e),n)),p=e=>e&&Number(e.replace(/px$/,""))||0,h={down:{pc:"mousedown",m:"touchstart"},move:{pc:"mousemove",m:"touchmove"},up:{pc:"mouseup",m:"touchend"}},y=(e,t,n)=>{t&&t.addEventListener(h[e].pc,n),t&&t.addEventListener(h[e].m,n,{passive:!1})},b=(e,t,n)=>{t&&t.removeEventListener(h[e].pc,n),t&&t.removeEventListener(h[e].m,n)};function g({props:e,visible:n,vfmContainer:a,vfmContent:l,vfmResize:r,modalTransitionState:s,onEvent:d=(()=>{})}){const c=t.ref(!1),u=t.ref(null),h=t.ref({});function g(t){t.stopPropagation();const n="resize",o="drag",i=t.target.getAttribute("direction");let r;if(i)r=n;else{if(!((e,t,n)=>""===n||[...t.querySelectorAll(n)].includes(e.target))(t,l.value,e.dragSelector))return;r=o}u.value=`${r}:start`,d?.(t);const s=f(t),c=a.value.getBoundingClientRect(),g=l.value.getBoundingClientRect(),w="absolute"===window.getComputedStyle(l.value).position,x=p(h.value.top),S=p(h.value.left),k=(()=>{if(e.fitParent){const e={absolute:()=>({minTop:0,minLeft:0,maxTop:c.height-g.height,maxLeft:c.width-g.width}),relative:()=>({minTop:x+c.top-g.top,minLeft:S+c.left-g.left,maxTop:x+c.bottom-g.bottom,maxLeft:S+c.right-g.right})};return w?e.absolute():e.relative()}return{}})(),E=r===n&&((e,t,n)=>{const o=e.style[t];return e.style[t]=n,()=>{e.style[t]=o}})(document.body,"cursor",m[i]),T=t=>{t.stopPropagation(),u.value=`${r}:move`,d?.(t);const a=f(t);let l,m,p={x:a.x-s.x,y:a.y-s.y};r===n&&(p=function(t,n,o,a,i){const l=t=>{let o=n[t.axis];o=e.fitParent?v(t.min,o,t.max):o;let a=v(t.minEdge,t.getEdge(o),t.maxEdge);return o=t.getOffsetAxis(a,i),{[t.edgeName]:a,[t.axis]:o}},r=(t,n,i,l)=>{const r=a[n],s=o[t]-a[t],d=(c=n).charAt(0).toUpperCase()+c.slice(1);var c;return{axis:i,edgeName:n,min:l?s:-r,max:l?r:s,minEdge:e[`min${d}`],maxEdge:e[`max${d}`],getEdge:e=>a[n]-e*(l?1:-1),getOffsetAxis:(e,t)=>{const o=a[n]-e;return t?l?o:0:(l?1:-1)*o/2}}},s={t:["top","height","y",!0],b:["bottom","height","y",!1],l:["left","width","x",!0],r:["right","width","x",!1]};let d={x:0,y:0};return t.split("").forEach((e=>{const t=r(...s[e]);d={...d,...l(t)}})),d}(i,p,c,g,w)),w?(l=g.top-c.top+p.y,m=g.left-c.left+p.x):(l=x+p.y,m=S+p.x),r===o&&e.fitParent&&(l=v(k.minTop,l,k.maxTop),m=v(k.minLeft,m,k.maxLeft));const y={position:"relative",top:l+"px",left:m+"px",margin:"unset",touchAction:"none",...w&&{position:"absolute",transform:"unset",width:g.width+"px",height:g.height+"px"},...p.width&&{width:p.width+"px"},...p.height&&{height:p.height+"px"}};h.value={...h.value,...y}},C=e=>{e.stopPropagation(),r===n&&E&&E(),setTimeout((()=>{u.value=`${r}:end`,d?.(e)})),b("move",document,T),b("up",document,C)};y("move",document,T),y("up",document,C)}function w(){y("down",l.value,g),h.value.touchAction="none"}function x(){b("down",l.value,g)}function S(){c.value=!0,t.nextTick((()=>{y("down",r.value,g)}))}function k(){b("down",r.value,g),c.value=!1}return t.watch(s,(t=>{switch(t){case o:e.drag&&w(),e.resize&&S();break;case i:e.keepChangedStyle||(h.value={})}})),t.watch((()=>e.drag),(e=>{n.value&&(e?w():x())})),t.watch((()=>e.resize),(e=>{n.value&&(e?S():k())})),t.watch((()=>e.keepChangedStyle),(e=>{e||(h.value={})})),{resizeVisible:c,state:u,dragResizeStyle:h,removeDragDown:x,removeResizeDown:k}}let w=!1;if("undefined"!=typeof window){const e={get passive(){w=!0}};window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}const x="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1);let S,k,E=[],T=!1,C=0,z=-1;const M=(e,t)=>{let n=!1;return(e=>{const t=[];for(;e;){if(t.push(e),e.classList.contains("vfm"))return t;e=e.parentElement}return t})(e).forEach((e=>{(e=>{if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight})(e)&&((e,t)=>!(0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight+t>=e.scrollHeight&&t>0))(e,t)&&(n=!0)})),n},B=e=>E.some((()=>M(e,-C))),V=e=>{const t=e||window.event;return!!B(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},O=(e,t)=>{if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(E.some((t=>t.targetElement===e)))return;const n={targetElement:e,options:t||{}};E=[...E,n],x?(e.ontouchstart=e=>{1===e.targetTouches.length&&(z=e.targetTouches[0].clientY)},e.ontouchmove=t=>{1===t.targetTouches.length&&((e,t)=>{C=e.targetTouches[0].clientY-z,!B(e.target)&&(t&&0===t.scrollTop&&C>0||(e=>!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight)(t)&&C<0?V(e):e.stopPropagation())})(t,e)},T||(document.addEventListener("touchmove",V,w?{passive:!1}:void 0),T=!0)):(e=>{if(void 0===k){const t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){const e=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);k=document.body.style.paddingRight,document.body.style.paddingRight=`${e+n}px`}}void 0===S&&(S=document.body.style.overflow,document.body.style.overflow="hidden")})(t)},_=e=>{e?(E=E.filter((t=>t.targetElement!==e)),x?(e.ontouchstart=null,e.ontouchmove=null,T&&0===E.length&&(document.removeEventListener("touchmove",V,w?{passive:!1}:void 0),T=!1)):E.length||(void 0!==k&&(document.body.style.paddingRight=k,k=void 0),void 0!==S&&(document.body.style.overflow=S,S=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")};function L({props:e,vfmContainer:n,modalTransitionState:o}){function a(){e.modelValue&&t.nextTick((()=>{e.lockScroll?n.value&&O(n.value,{reserveScrollBarGap:!0}):l()}))}function l(){e.lockScroll&&n.value&&_(n.value)}return t.watch((()=>e.lockScroll),a),t.watch(o,(e=>{e===i&&l()})),t.onBeforeUnmount((()=>{l()})),{handleLockScroll:a}}const I=()=>{};var D={props:{name:{type:String,default:null},modelValue:{type:Boolean,default:!1},displayDirective:{type:String,default:"show",validator:e=>-1!==["if","show"].indexOf(e)},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},styles:{type:[Object,Array],default:()=>({})},overlayStyle:{type:[Object,Array],default:()=>({})},contentStyle:{type:[Object,Array],default:()=>({})},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},nonModal:{type:Boolean,default:!1},attach:{type:null,default:!1,validator(e){const t=typeof e;return"boolean"===t||"string"===t||e.nodeType===Node.ELEMENT_NODE}},transition:{type:[String,Object],default:"vfm"},overlayTransition:{type:[String,Object],default:"vfm"},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1},fitParent:{type:Boolean,default:!0},drag:{type:Boolean,default:!1},dragSelector:{type:String,default:""},keepChangedStyle:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},resizeDirections:{type:Array,default:()=>["t","tr","r","br","b","bl","l","tl"],validator:e=>["t","tr","r","br","b","bl","l","tl"].filter((t=>-1!==e.indexOf(t))).length===e.length},minWidth:{type:[Number,String],default:0},minHeight:{type:[Number,String],default:0},maxWidth:{type:[Number,String],default:1/0},maxHeight:{type:[Number,String],default:1/0}},emits:["update:modelValue","click-outside","before-open","opened","_before-close","before-close","closed","_before-open","_opened","_closed","drag:start","drag:move","drag:end","resize:start","resize:move","resize:end"],setup(e,{emit:n}){const a=Symbol("vfm"),l=t.ref(null),s=t.ref(null),d=t.ref(null),c=t.ref(null),m=t.ref(null),f=t.ref(null),v=t.ref(null),p=t.ref(!1),h=t.reactive({modal:!1,overlay:!1}),{state:y,listeners:b}=r(),{state:w,listeners:x}=r(),S=t.ref(!1),{focusTrap:k}=u({props:e,vfmContainer:s,modalTransitionState:w}),{resizeVisible:E,state:T,dragResizeStyle:C,removeDragDown:z,removeResizeDown:M}=g({props:e,visible:p,vfmContainer:s,vfmContent:d,vfmResize:c,modalTransitionState:w,onEvent(e){n(T.value,e)}}),{handleLockScroll:B}=L({props:e,vfmContainer:s,modalTransitionState:w}),V=t.ref(null);let O=I,_=I;const D=t.computed((()=>"string"==typeof e.overlayTransition?{name:e.overlayTransition}:{...e.overlayTransition})),R=t.computed((()=>"string"==typeof e.transition?{name:e.transition}:{...e.transition})),N=t.computed((()=>(e.hideOverlay||y.value===i)&&w.value===i)),A=t.computed((()=>!1===e.zIndex?!!e.zIndexAuto&&+e.zIndexBase+2*(v.value||0):e.zIndex)),P=t.computed((()=>({...!1!==A.value&&{zIndex:A.value}}))),H=t.computed((()=>{let t=[C.value];return Array.isArray(e.contentStyle)?t.push(...e.contentStyle):t.push(e.contentStyle),t}));function $(){return{uid:a,props:e,emit:n,vfmContainer:s,vfmContent:d,vfmResize:c,vfmOverlayTransition:m,vfmTransition:f,getAttachElement:K,modalStackIndex:v,visibility:h,handleLockScroll:B,toggle:W}}function F(){if(e.modelValue){if(n("_before-open",U({type:"_before-open"})),Y("before-open",!1))return void _("show");let t=K();if(t||!1===e.attach){!1!==e.attach&&t.appendChild(l.value);let n=e.api.openedModals.findIndex((e=>e.uid===a));-1!==n&&e.api.openedModals.splice(n,1),e.api.openedModals.push($()),v.value=e.api.openedModals.length-1,B(),e.api.openedModals.filter((e=>e.uid!==a)).forEach(((e,n)=>{e.getAttachElement()===t&&(e.modalStackIndex.value=n,e.visibility.overlay=!1)})),p.value=!0,h.overlay=!0,h.modal=!0}else!1!==t&&console.warn("Unable to locate target ".concat(e.attach))}}function j(){let n=e.api.openedModals.findIndex((e=>e.uid===a));if(-1!==n&&e.api.openedModals.splice(n,1),e.api.openedModals.length>0){const n=e.api.openedModals[e.api.openedModals.length-1];n.props.focusTrap&&t.nextTick((()=>{k.enable(n.vfmContainer.value),k.firstElement.focus()})),(n.props.focusRetain||n.props.focusTrap)&&n.vfmContainer.value.focus(),!n.props.hideOverlay&&(n.visibility.overlay=!0)}e.drag&&z(),e.resize&&M(),T.value=null,h.overlay=!1,h.modal=!1}function K(){let t;return t=!1!==e.attach&&("string"==typeof e.attach?!!window&&window.document.querySelector(e.attach):e.attach),t}function U(e={}){return{ref:$(),...e}}function Y(e,o){let a=!1;const i=U({type:e,stop(){a=!0}});return n(e,i),!!a&&(S.value=!0,t.nextTick((()=>{n("update:modelValue",o)})),!0)}function W(t){return new Promise(((o,a)=>{O=e=>{o(e),O=I},_=e=>{a(e),_=I};const i="boolean"==typeof t?t:!e.modelValue;n("update:modelValue",i)}))}return t.watch((()=>e.modelValue),(e=>{if(S.value)S.value=!1;else if(F(),!e){if(n("_before-close",U({type:"_before-close"})),Y("before-close",!0))return void _("hide");j()}})),t.watch((()=>e.hideOverlay),(t=>{e.modelValue&&!t&&(h.overlay=!0)})),t.watch((()=>e.attach),F),t.watch(N,(e=>{e&&(p.value=!1,s.value.style.display="none")}),{flush:"post"}),t.watch(w,(e=>{switch(e){case o:n("_opened"),n("opened",U({type:"opened"})),O("show");break;case i:v.value=null,n("_closed"),n("closed",U({type:"closed"})),O("hide")}})),e.api.modals.push($()),t.onMounted((()=>{F()})),t.onBeforeUnmount((()=>{j(),l?.value?.remove();let t=e.api.modals.findIndex((e=>e.uid===a));e.api.modals.splice(t,1)})),{root:l,vfmContainer:s,vfmContent:d,vfmResize:c,vfmOverlayTransition:m,vfmTransition:f,computedOverlayTransition:D,computedTransition:R,overlayListeners:b,modalListeners:x,visible:p,visibility:h,resizeVisible:E,calculateZIndex:A,bindStyle:P,bindContentStyle:H,onMousedown:function(e){V.value=e?.target},onMouseupContainer:function(){V.value===s.value&&"resize:move"!==T.value&&(n("click-outside",U({type:"click-outside"})),e.clickToClose&&n("update:modelValue",!1))},onEsc:function(){p.value&&e.escToClose&&n("update:modelValue",!1)}}}};const R=["aria-expanded"],N={key:0,ref:"vfmResize",class:"vfm__resize vfm--absolute vfm--inset vfm--prevent-none vfm--select-none vfm--touch-none"},A=["direction"];function P(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}P("\n.vfm--fixed[data-v-72c09f54] {\n  position: fixed;\n}\n.vfm--absolute[data-v-72c09f54] {\n  position: absolute;\n}\n.vfm--inset[data-v-72c09f54] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vfm--overlay[data-v-72c09f54] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vfm--prevent-none[data-v-72c09f54] {\n  pointer-events: none;\n}\n.vfm--prevent-auto[data-v-72c09f54] {\n  pointer-events: auto;\n}\n.vfm--outline-none[data-v-72c09f54]:focus {\n  outline: none;\n}\n.vfm-enter-active[data-v-72c09f54],\n.vfm-leave-active[data-v-72c09f54] {\n  transition: opacity 0.2s;\n}\n.vfm-enter-from[data-v-72c09f54],\n.vfm-leave-to[data-v-72c09f54] {\n  opacity: 0;\n}\n.vfm--touch-none[data-v-72c09f54] {\n  touch-action: none;\n}\n.vfm--select-none[data-v-72c09f54] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vfm--resize-tr[data-v-72c09f54],\n.vfm--resize-br[data-v-72c09f54],\n.vfm--resize-bl[data-v-72c09f54],\n.vfm--resize-tl[data-v-72c09f54] {\n  width: 12px;\n  height: 12px;\n  z-index: 10;\n}\n.vfm--resize-t[data-v-72c09f54] {\n  top: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-tr[data-v-72c09f54] {\n  top: -6px;\n  right: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-r[data-v-72c09f54] {\n  top: 0;\n  right: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-br[data-v-72c09f54] {\n  bottom: -6px;\n  right: -6px;\n  cursor: nwse-resize;\n}\n.vfm--resize-b[data-v-72c09f54] {\n  bottom: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-bl[data-v-72c09f54] {\n  bottom: -6px;\n  left: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-l[data-v-72c09f54] {\n  top: 0;\n  left: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-tl[data-v-72c09f54] {\n  top: -6px;\n  left: -6px;\n  cursor: nwse-resize;\n}\n"),D.render=function(e,n,o,a,i,l){return"if"!==o.displayDirective||a.visible?t.withDirectives((t.openBlock(),t.createElementBlock("div",{key:0,ref:"root",style:t.normalizeStyle(a.bindStyle),class:t.normalizeClass(["vfm vfm--inset",[!1===o.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":o.nonModal}]]),onKeydown:n[3]||(n[3]=t.withKeys(((...e)=>a.onEsc&&a.onEsc(...e)),["esc"]))},[t.createVNode(t.Transition,t.mergeProps(a.computedOverlayTransition,t.toHandlers(a.overlayListeners)),{default:t.withCtx((()=>[!o.hideOverlay&&a.visibility.overlay?(t.openBlock(),t.createElementBlock("div",{key:0,class:t.normalizeClass(["vfm__overlay vfm--overlay vfm--absolute vfm--inset",o.overlayClass]),style:t.normalizeStyle(o.overlayStyle)},null,6)):t.createCommentVNode("v-if",!0)])),_:1},16),t.createVNode(t.Transition,t.mergeProps(a.computedTransition,t.toHandlers(a.modalListeners)),{default:t.withCtx((()=>[t.withDirectives(t.createElementVNode("div",{ref:"vfmContainer",class:t.normalizeClass(["vfm__container vfm--absolute vfm--inset vfm--outline-none",o.classes]),style:t.normalizeStyle(o.styles),"aria-expanded":a.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1",onMouseup:n[1]||(n[1]=t.withModifiers(((...e)=>a.onMouseupContainer&&a.onMouseupContainer(...e)),["self"])),onMousedown:n[2]||(n[2]=t.withModifiers(((...e)=>a.onMousedown&&a.onMousedown(...e)),["self"]))},[t.createElementVNode("div",{ref:"vfmContent",class:t.normalizeClass(["vfm__content",[o.contentClass,{"vfm--prevent-auto":o.nonModal}]]),style:t.normalizeStyle(a.bindContentStyle),onMousedown:n[0]||(n[0]=e=>a.onMousedown(null))},[t.renderSlot(e.$slots,"default",{close:()=>e.$emit("update:modelValue",!1)}),a.resizeVisible&&a.visibility.modal?(t.openBlock(),t.createElementBlock("div",N,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(o.resizeDirections,(e=>(t.openBlock(),t.createElementBlock("div",{key:e,direction:e,class:t.normalizeClass([`vfm--resize-${e}`,"vfm--absolute vfm--prevent-auto"])},null,10,A)))),128))],512)):t.createCommentVNode("v-if",!0)],38)],46,R),[[t.vShow,a.visibility.modal]])])),_:3},16)],38)),[[t.vShow,"show"!==o.displayDirective||a.visible]]):t.createCommentVNode("v-if",!0)},D.__scopeId="data-v-72c09f54",D.__file="src/VueFinalModal.vue";var H={methods:{slice(e){this.api.dynamicModals.splice(e,1)},closed(e,t){this.slice(e),t.closed&&t.closed()},beforeClose(e){e.value&&e?.rejectClose("hide")},async beforeOpen(e,t,n){await this.$nextTick(),await this.$nextTick(),t.value||(this.slice(n),t?.reject("show"))},isString:e=>"string"==typeof e}};const $={class:"modals-container"},F=["innerHTML"];H.render=function(e,n,o,a,i,l){return t.openBlock(),t.createElementBlock("div",$,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.api.dynamicModals,((e,n)=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.component),t.mergeProps({key:e.id},e.bind,{modelValue:e.value,"onUpdate:modelValue":t=>e.value=t},t.toHandlers(e.on),{on_beforeClose:t=>l.beforeClose(e),on_closed:t=>l.closed(n,e),on_beforeOpen:t=>l.beforeOpen(t,e,n),on_opened:e.opened}),t.createSlots({_:2},[t.renderList(e.slots,((e,n)=>({name:n,fn:t.withCtx((()=>[t.createCommentVNode(" eslint-disable vue/no-v-html "),l.isString(e)?(t.openBlock(),t.createElementBlock("div",{key:0,innerHTML:e},null,8,F)):(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.component),t.mergeProps({key:1},e.bind,t.toHandlers(e.on||{})),null,16))]))})))]),1040,["modelValue","onUpdate:modelValue","on_beforeClose","on_closed","on_beforeOpen","on_opened"])))),128))])},H.__file="src/ModalsContainer.vue";class j{constructor(){const e=e=>{const n={...e,props:{...e.props}};return Object.assign(n.props,{api:{type:Object,default:()=>this}}),t.markRaw(n)};this.modals=[],this.openedModals=[],this.VueFinalModal=e(D),this.dynamicModals=t.shallowReactive([]),this.ModalsContainer=e(H)}show(e,...t){switch(typeof e){case"string":return this.toggle(e,!0,...t);case"object":{const{show:n}=this.useModal(e,t[0]);return n()}}}hide(...e){return this.toggle(e,!1)}hideAll(){return this.hide(...this.openedModals.map((e=>e.props.name)))}toggle(e,...t){const n=Array.isArray(e)?this.get(...e):this.get(e);return Promise.allSettled(n.map((e=>e.toggle(...t))))}get(...e){return this.modals.filter((t=>e.includes(t.props.name)))}existModal(e){return-1!==this.dynamicModals.indexOf(e)}useModal(e){let n=t.reactive({value:!1,component:this.VueFinalModal,id:Symbol("useModal"),bind:{},slots:{},on:{},...e});return{show:()=>this.existModal(n)?Promise.resolve("[Vue Final Modal] modal is already opened"):new Promise(((e,t)=>{n.value=!0,n.reject=t,n.opened=()=>{e("show")},this.dynamicModals.push(n)})),hide:()=>this.existModal(n)?new Promise(((e,t)=>{n.value=!1,n.rejectClose=t,n.closed=()=>{e("hide")}})):Promise.resolve("[Vue Final Modal] modal is already closed"),options:n}}}const K=()=>{let e=new j;return{$vfm:e,VueFinalModal:e.VueFinalModal,ModalsContainer:e.ModalsContainer,useModal:e.useModal.bind(e)}},U=K(),{$vfm:Y,VueFinalModal:W,ModalsContainer:G,useModal:q}=U;const X="DOWN";var Z={components:{VueFinalModal:W},setup(e,{emit:o,attrs:a}){const i=t.ref(null),l=t.ref(0);let r=null,s=!1;const{lengthY:d,direction:c,isSwiping:u}=n.useSwipe(i,{threshold:0,onSwipeStart(e){r=(new Date).getTime(),s=m(e.target)},onSwipe(){var e,t,n;s&&(c.value===X&&(l.value=(e=Math.abs(d.value),t=0,n=i.value.offsetHeight,-(e>n?n:e<t?t:e))))},onSwipeEnd(e,t){const n=(new Date).getTime(),a=t===X,c=Math.abs(d.value)>.1*i.value.offsetHeight;s&&a&&(c||n-r<=300)?o("update:modelValue",!1):l.value=0}});function m(e){const t=0===e.scrollTop;return e===i.value?t:t&&m(e.parentElement)}return t.watch((()=>a.modelValue),(e=>{e&&(l.value=0)})),{bottomSheetEl:i,offsetY:l,isSwiping:u}}};P("\n.vfm-bottom-sheet[data-v-730a320a] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  max-height: 90%;\n  overflow-y: auto;\n  background-color: #fff;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n.vfm-transition[data-v-730a320a] {\n  transition-property: transform;\n  transition-duration: 150ms;\n}\n@-webkit-keyframes slideInDown-730a320a {\nfrom {\n    transform: translate3d(0, 100%, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n@keyframes slideInDown-730a320a {\nfrom {\n    transform: translate3d(0, 100%, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n[data-v-730a320a] .slideInDown {\n  -webkit-animation-name: slideInDown-730a320a;\n          animation-name: slideInDown-730a320a;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes slideOutDown-730a320a {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(0, 100%, 0);\n}\n}\n@keyframes slideOutDown-730a320a {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(0, 100%, 0);\n}\n}\n[data-v-730a320a] .slideOutDown {\n  -webkit-animation-name: slideOutDown-730a320a;\n          animation-name: slideOutDown-730a320a;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n"),Z.render=function(e,n,o,a,i,l){const r=t.resolveComponent("vue-final-modal");return t.openBlock(),t.createBlock(r,{transition:{"enter-active-class":"slideInDown","leave-active-class":"slideOutDown"}},{default:t.withCtx((()=>[t.createElementVNode("div",{ref:"bottomSheetEl",class:t.normalizeClass(["vfm-bottom-sheet",{"vfm-transition":!a.isSwiping}]),style:t.normalizeStyle({transform:`translateY(${-a.offsetY}px)`})},[t.renderSlot(e.$slots,"default")],6)])),_:3})},Z.__scopeId="data-v-730a320a",Z.__file="src/hoc/VBottomSheet.vue";var J={components:{VueFinalModal:W},props:{direction:{type:String,default:"LEFT",validator:e=>-1!==["RIGHT","LEFT"].includes(e)}},setup(e,{emit:o,attrs:a}){const i=t.ref(null),l=t.ref(0);let r=null,s=!1;const d=t.computed((()=>({"enter-active-class":"RIGHT"===e.direction?"slideInRight":"slideInLeft","leave-active-class":"RIGHT"===e.direction?"slideOutRight":"slideOutLeft"}))),{lengthX:c,direction:u,isSwiping:m}=n.useSwipe(i,{threshold:0,onSwipeStart(e){r=(new Date).getTime(),s=f(e.target)},onSwipe(){var t,n,o;if(s&&u.value===e.direction){const a=(t=Math.abs(c.value),n=0,o=i.value.offsetWidth,t>o?o:t<n?n:t);l.value="RIGHT"===e.direction?-a:a}},onSwipeEnd(t,n){const a=(new Date).getTime(),d=n===e.direction,u=Math.abs(c.value)>.1*i.value.offsetWidth;s&&d&&(u||a-r<=300)?o("update:modelValue",!1):l.value=0}});function f(e){const t=0===e.scrollLeft;return e===i.value?t:t&&f(e.parentElement)}return t.watch((()=>a.modelValue),(e=>{e&&(l.value=0)})),{modalContent:i,offsetX:l,transition:d,isSwiping:m}}};P("\n.vfm-full-screen[data-v-1a4bac96] {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  background-color: #fff;\n}\n.vfm-transition[data-v-1a4bac96] {\n  transition-property: transform;\n  transition-duration: 150ms;\n}\n@-webkit-keyframes slideInLeft-1a4bac96 {\nfrom {\n    transform: translate3d(-100%, 0, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n@keyframes slideInLeft-1a4bac96 {\nfrom {\n    transform: translate3d(-100%, 0, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n[data-v-1a4bac96] .slideInLeft {\n  -webkit-animation-name: slideInLeft-1a4bac96;\n          animation-name: slideInLeft-1a4bac96;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes slideInRight-1a4bac96 {\nfrom {\n    transform: translate3d(100%, 0, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n@keyframes slideInRight-1a4bac96 {\nfrom {\n    transform: translate3d(100%, 0, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n[data-v-1a4bac96] .slideInRight {\n  -webkit-animation-name: slideInRight-1a4bac96;\n          animation-name: slideInRight-1a4bac96;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes slideOutLeft-1a4bac96 {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(-100%, 0, 0);\n}\n}\n@keyframes slideOutLeft-1a4bac96 {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(-100%, 0, 0);\n}\n}\n[data-v-1a4bac96] .slideOutLeft {\n  -webkit-animation-name: slideOutLeft-1a4bac96;\n          animation-name: slideOutLeft-1a4bac96;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes slideOutRight-1a4bac96 {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(100%, 0, 0);\n}\n}\n@keyframes slideOutRight-1a4bac96 {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(100%, 0, 0);\n}\n}\n[data-v-1a4bac96] .slideOutRight {\n  -webkit-animation-name: slideOutRight-1a4bac96;\n          animation-name: slideOutRight-1a4bac96;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n"),J.render=function(e,n,o,a,i,l){const r=t.resolveComponent("vue-final-modal");return t.openBlock(),t.createBlock(r,t.mergeProps(e.$attrs,{"hide-overlay":"","content-class":"w-full h-full",transition:a.transition}),{default:t.withCtx((()=>[t.createElementVNode("div",{ref:"modalContent",class:t.normalizeClass(["vfm-full-screen",{"vfm-transition":!a.isSwiping}]),style:t.normalizeStyle({transform:`translateX(${-a.offsetX}px)`})},[t.renderSlot(e.$slots,"default")],6)])),_:3},16,["transition"])},J.__scopeId="data-v-1a4bac96",J.__file="src/hoc/VFullScreen.vue",e.$vfm=Y,e.ModalInstance=j,e.ModalsContainer=G,e.VBottomSheet=Z,e.VFullScreen=J,e.VueFinalModal=W,e.createModalInstance=K,e.useModal=q,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=VueFinalModal.umd.js.map
