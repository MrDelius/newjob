(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9782],{82329:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/companies",function(){return a(95496)}])},13726:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var o=a(85893);a(67294);var n=a(9008),l=a.n(n),i=a(82647);function r(e){var t;let{title:a="OneApply",description:n="Get matched with 1000s of jobs, autofill your job applications with AI, generate cover letters and more",image:r="https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/previewImages/pr_oneapp.png",keywords:s="autofill job applications, autofill jobs, apply to jobs with AI, one click apply, apply to jobs with one click, generate cover letters, job application autofill chrome extension, job application autofill, extension for job application, autofill with resume, autofill resume, resume autofill, application autofill, autofill application, ai job applications, ai jobs, ai resume builder, application auto filler, chatgpt cover letter, cover letter generator, find a job fast, remote jobs, find jobs, free resume builder, OneApply, oneapply, one apply, oneapp",companyName:u="OneApply",imageSize:p="summary_large_image",noIndex:c}=e,d=null===(t=(0,i.convert)(n))||void 0===t?void 0:t.replace(/\s/g," "),m="".concat(a," | ").concat(u);return(0,o.jsxs)(l(),{children:[(0,o.jsx)("title",{children:m}),(0,o.jsx)("meta",{name:"description",content:null!=d?d:"Autofill any job application in one click"}),c&&(0,o.jsx)("meta",{name:"robots",content:"noindex"}),(0,o.jsx)("meta",{name:"facebook-domain-verification",content:"j38avqf7rm0igxhi1uqaw4730c5rrt"}),(0,o.jsx)("meta",{name:"author",content:"OneApply"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("meta",{charSet:"utf-8"}),(0,o.jsx)("meta",{name:"keywords",content:s&&"autofill job applications, autofill jobs, apply to jobs with AI, one click apply, apply to jobs with one click, generate cover letters, job application autofill chrome extension, job application autofill, extension for job application, autofill with resume, autofill resume, resume autofill, application autofill, autofill application, ai job applications, ai jobs, ai resume builder, application auto filler, chatgpt cover letter, cover letter generator, find a job fast, remote jobs, find jobs, free resume builder, OneApply, oneapply, one apply, oneapp"}),(0,o.jsx)("meta",{property:"og:type",content:a||"website"}),(0,o.jsx)("meta",{property:"og:title",content:"".concat(a?"".concat(a," "):"OneApply"," | ").concat(u?"".concat(u):"OneApply")},"ogtitle"),(0,o.jsx)("meta",{property:"og:description",content:null!=d?d:"Autofill any job application in one click"},"ogdesc"),(0,o.jsx)("meta",{property:"og:site_name",content:"oneapp.ly"},"ogsitename"),(0,o.jsx)("meta",{property:"og:image",content:null!=r?r:"https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/previewImages/pr_oneapp.png"},"ogimage"),(0,o.jsx)("link",{rel:"alternate",type:"application/rss+xml",title:a,href:"/rss"}),(0,o.jsx)("meta",{name:"theme-color",content:"#10272f"}),(0,o.jsx)("meta",{name:"twitter:card",content:p?"summary_large_image":"summary_image"}),(0,o.jsx)("meta",{name:"twitter:title",content:"".concat(a?"".concat(a," "):"OneApply"," | ").concat(u?"".concat(u):"OneApply")}),(0,o.jsx)("meta",{name:"twitter:description",content:null!=d?d:"Autofill any job application in one click"}),(0,o.jsx)("meta",{name:"twitter:site",content:"OneApply"}),(0,o.jsx)("meta",{name:"twitter:creator",content:"OneApply"}),(0,o.jsx)("meta",{name:"twitter:image",content:null!=r?r:"https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/previewImages/pr_oneapp.png"})]})}},20134:function(e,t,a){"use strict";var o=a(12166);t.Z=o.k},95677:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let a=l.default,n={loading:e=>{let{error:t,isLoading:a,pastDelay:o}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n=o({},n,e)),n=o({},n,t);let s=n.loader,u=()=>null!=s?s().then(i):Promise.resolve(i(()=>null));return(n.loadableGenerated&&(n=o({},n,n.loadableGenerated),delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?a(o({},n,{loader:u})):(delete n.webpack,delete n.modules,r(a,n))},t.noSSR=r;var o=a(6495).Z,n=a(92648).Z,l=(n(a(67294)),n(a(8976)));function i(e){return{default:(null==e?void 0:e.default)||e}}function r(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},92254:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=(0,a(92648).Z)(a(67294));let n=o.default.createContext(null);t.LoadableContext=n},8976:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(6495).Z,n=(0,a(92648).Z)(a(67294)),l=a(92254);let i=[],r=[],s=!1;function u(e){let t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then(e=>(a.loading=!1,a.loaded=e,e)).catch(e=>{throw a.loading=!1,a.error=e,e}),a}class p{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),o=null;function i(){if(!o){let t=new p(e,a);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!s){let e=a.webpack?a.webpack():a.modules;e&&r.push(t=>{for(let a of e)if(-1!==t.indexOf(a))return i()})}function u(e,t){!function(){i();let e=n.default.useContext(l.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach(t=>{e(t)})}();let r=n.default.useSyncExternalStore(o.subscribe,o.getCurrentValue,o.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:o.retry}),[]),n.default.useMemo(()=>{var t;return r.loading||r.error?n.default.createElement(a.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:o.retry}):r.loaded?n.default.createElement((t=r.loaded)&&t.default?t.default:t,e):null},[e,r])}return u.preload=()=>i(),u.displayName="LoadableComponent",n.default.forwardRef(u)}(u,e)}function d(e,t){let a=[];for(;e.length;){let o=e.pop();a.push(o(t))}return Promise.all(a).then(()=>{if(e.length)return d(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{d(i).then(e,t)}),c.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let a=()=>(s=!0,t());d(r,e).then(a,a)})},window.__NEXT_PRELOADREADY=c.preloadReady,t.default=c},95496:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var o=a(85893),n=a(67294),l=a(5152),i=a.n(l),r=a(13726),s=a(20134),u=a(57383),p=a(44037);let c=i()(()=>a.e(5320).then(a.bind(a,75320)),{loadableGenerated:{webpack:()=>[75320]}}),d=[];function m(){var e,t;let{t:a}=(0,p.Z)(),[l,i]=(0,n.useState)([]),[m,f]=(0,n.useState)(0),{searchCompany:{searchData:h,page:y,size:b,setPage:_,setSearchData:g}}=(0,n.useContext)(s.Z),{data:{data:j=d,total:w}={},isLoading:v,isFetching:x,refetch:k}=(0,u.ch)({params:{size:b,page:y,name:null===(e=h.query)||void 0===e?void 0:e.toLowerCase(),location:null===(t=h.location)||void 0===t?void 0:t.toLowerCase(),role:"employer"}},"company");(0,n.useEffect)(()=>{1===y&&(v?f(0):f(w))},[w]),(0,n.useEffect)(()=>{j&&i(e=>[...e,...j])},[j]),(0,n.useEffect)(()=>(i([]),_(1),k(),j&&i(j),()=>{_(1)}),[h]),(0,n.useEffect)(()=>{k()},[y]);let O=e=>{g({...h,query:e.query,location:e.location})};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Z,{title:a("companies"),description:a("companies_description"),keywords:"OneApp, companies, OneApp company, OneApply",image:"https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/previewImages/pr_companies.png",imageSize:!0}),(0,o.jsx)(c,{title:"find_great_places",description:"view_all_companies",total:m,data:l,isLoading:(null==l?void 0:l.length)===0&&v,isFetching:x,searchData:h,setSearchData:O,page:y,setPage:_})]})}},5152:function(e,t,a){e.exports=a(95677)}},function(e){e.O(0,[4699,9774,2888,179],function(){return e(e.s=82329)}),_N_E=e.O()}]);