"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5377],{15377:function(t,e,n){n.d(e,{W$:function(){return tc},Q0:function(){return g.Z},LP:function(){return d.Z},FF:function(){return Y},fw:function(){return K},vc:function(){return U},$h:function(){return z},M5:function(){return tu},ik:function(){return tt},PM:function(){return ta},Jn:function(){return tn},XD:function(){return F},qL:function(){return c},Ok:function(){return T},Gh:function(){return b},GF:function(){return y},Jm:function(){return f},RU:function(){return tl},YA:function(){return l},Ak:function(){return G},xM:function(){return ts},Pr:function(){return k},mC:function(){return _},Zr:function(){return I},SA:function(){return j},x_:function(){return Z},er:function(){return X},IQ:function(){return N},_8:function(){return w},c7:function(){return B},Bl:function(){return a},q:function(){return L},I2:function(){return P.Z},gw:function(){return M.Z},qQ:function(){return J}});var i=n(88767),u=n(6154);let r=t=>(0,i.useMutation)(e=>u.Z.post("".concat("https://api.oneapp.ly","/auth/signup/").concat(t),e));var a=r;let o=()=>{let t=(0,i.useMutation)(t=>u.Z.post("".concat("https://api.oneapp.ly","/auth/login"),t));return t};var l=o;let s=()=>{let t=(0,i.useMutation)(t=>u.Z.post("".concat("https://api.oneapp.ly","/auth/login/google"),t));return t};var c=s;n(52215);var d=n(20154),p=n(33542);let v=t=>{let e=(0,i.useMutation)(async t=>{let e=t.jobId;delete t.jobId,await p.WY.patch("/jobs/".concat(e,"/").concat(null==t?void 0:t.status))},{onSettled:()=>{p.Eh.invalidateQueries("organization-jobs"),p.Eh.invalidateQueries(["jobApplyings",t])}});return e};var f=v;let h=t=>{let e=(0,i.useMutation)(async e=>(e.jobId,delete e.jobId,await p.WY.put("/jobs/".concat(t),e).then(t=>{var e,n;return null==t?void 0:null===(e=t.data)||void 0===e?void 0:null===(n=e.data)||void 0===n?void 0:n.job})),{onSettled:()=>{p.Eh.invalidateQueries("organization-jobs"),p.Eh.invalidateQueries("job-by-slug"),p.Eh.invalidateQueries(["jobApplyings",t])}});return e};var y=h;let Q=()=>{let t=(0,i.useMutation)(t=>p.WY.delete("/jobs/".concat(null==t?void 0:t.jobId)));return t};var b=Q;n(89709);var M=n(53943),g=n(58305),E=n(86501),m=n(44037);let W=()=>{let{t}=(0,m.Z)(),e=(0,i.useMutation)(e=>{let{data:n,id:i}=e;if((null==n?void 0:n.state)==="applied"){E.ZP.error(t("cant_move_applied"));return}return p.WY.put("/apply/".concat(i),n)},{onMutate:async t=>{let{data:{state:e},id:n,slug:i,postType:u}=t;await p.Eh.cancelQueries(["".concat(u,"Applyings"),i]);let r=p.Eh.getQueryData(["".concat(u,"Applyings"),i]);return p.Eh.setQueryData(["".concat(u,"Applyings"),i],t=>null==t?void 0:t.map(t=>(t._id==n&&(t.state=e),t))),{previousData:r}}});return e};var Y=W;function j(){let t=(0,i.useMutation)(t=>u.Z.post("".concat("https://api.oneapp.ly","/auth/password/sendResetToken"),t));return t}let S=()=>{let t=(0,i.useMutation)(t=>u.Z.post("".concat("https://api.oneapp.ly","/auth/password/reset"),t));return t};var Z=S;let D=()=>{let t=(0,i.useMutation)(t=>u.Z.post("".concat("https://api.oneapp.ly","/auth/email/sendVerificationCode"),t),{retry:!1});return t};var w=D;function I(){return(0,i.useMutation)(()=>p.WY.put("/notifications/seen"))}function _(){return(0,i.useMutation)(t=>p.WY.delete("/notifications/".concat(t.notificationId)),{onSettled:()=>{p.Eh.refetchQueries("notifications")}})}function k(){return(0,i.useMutation)(t=>p.WY.delete("profile/notifications"),{onSettled:()=>{p.Eh.refetchQueries("notifications")}})}let A=()=>{let t=(0,i.useMutation)(t=>p.WY.put("/profile/password",t));return t};var z=A;let C=()=>{let t=(0,i.useMutation)(t=>p.WY.put("/profile/email",t),{onSettled:()=>{p.Eh.invalidateQueries(["profile"])}});return t};var J=C;let q=()=>{let t=(0,i.useQueryClient)(),e=(0,i.useMutation)(()=>p.WY.delete("/profile"),{onSettled:()=>{t.removeQueries(["profile"])}});return e};var F=q;function N(){let t=(0,i.useMutation)(t=>{if(null==t?void 0:t.jobId)return p.WY.post("/profile/savejob/".concat(t.jobId))},{onMutate:async t=>{await p.Eh.cancelQueries("saveds");let e=p.Eh.getQueryData("saveds");return p.Eh.setQueryData("saveds",function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{savedJobs:[]};if(null==t?void 0:t.jobId)return{savedJobs:[...null==e?void 0:e.savedJobs,{_id:null==t?void 0:t.jobId}],_id:null==e?void 0:e._id}}),{previousData:e}},onError:(t,e,n)=>{p.Eh.setQueryData("saveds",null==n?void 0:n.previousData)},onSettled:()=>{p.Eh.invalidateQueries("saveds")}});return t}var P=n(39706);let x=()=>{let t=(0,i.useMutation)(t=>u.Z.post("".concat("https://api.oneapp.ly","/auth/signup/organization"),t));return t};var L=x;function G(){let t=(0,i.useQueryClient)();return(0,i.useMutation)(t=>p.WY.put("/profile/member",t),{onMutate:async e=>{await t.cancelQueries("profile");let n=t.getQueryData("profile");return t.setQueryData("profile",t=>({...t,newProfileData:e})),{oldData:n}},onError:(e,n,i)=>{let{oldData:u}=i;t.setQueryData("profile",u)},onSettled:()=>{t.invalidateQueries(["profile"])}})}n(30299);let R=()=>{let t=(0,i.useMutation)(t=>p.WY.post("/organizations/invite",t),{onSettled:()=>{p.Eh.invalidateQueries("my-invitations")}});return t};var T=R;let $=()=>(0,i.useMutation)(t=>u.Z.post("".concat("https://api.oneapp.ly","/auth/signup/member"),t));var B=$;let O=()=>{let t=(0,i.useMutation)(t=>p.WY.put("/organizations/changerole",t),{onSettled:()=>{p.Eh.invalidateQueries("my-organization")}});return t};var U=O;let V=()=>{let t=(0,i.useMutation)(t=>p.WY.put("/organizations/removemember",t),{onSettled:()=>{p.Eh.invalidateQueries("my-organization")}});return t};var X=V;let H=t=>{let e=(0,i.useMutation)(()=>p.WY.delete("/invitations/".concat(t)),{onSettled:()=>{p.Eh.invalidateQueries("my-invitations")}});return e};var K=H;function tt(t){return(0,i.useMutation)(()=>p.WY.put("/chats/".concat(t,"/messages/see")),{onSettled:()=>{p.Eh.invalidateQueries("chats"),p.Eh.invalidateQueries("messagesCount")}})}n(45981);let te=t=>{let e=(0,i.useMutation)(()=>p.WY.delete("/chats/".concat(t)),{onSettled:()=>{p.Eh.refetchQueries(["chats"])}});return e};var tn=te;let ti=()=>{let t=(0,i.useMutation)(t=>p.WY.post("/chats",t),{onSettled:()=>{p.Eh.refetchQueries("chats"),p.Eh.invalidateQueries("chat")}});return t};var tu=ti;let tr=()=>{let t=(0,i.useMutation)(t=>p.WY.post("/chats/check",t));return t};var ta=tr;let to=()=>(0,i.useMutation)(()=>p.WY.delete("/organizations/leave"));var tl=to;function ts(){return(0,i.useMutation)(t=>p.WY.delete("profile/notifications/jobAlert"),{onSettled:()=>{p.Eh.refetchQueries("notificationsAlert")}})}function tc(){return(0,i.useMutation)(()=>p.WY.put("/notifications/seen/jobAlert"))}n(79127)},79127:function(t,e,n){n.d(e,{Z:function(){return r}});var i=n(88767),u=n(33542);function r(){let t=(0,i.useQueryClient)(),e=(0,i.useMutation)(e=>{var n;let i=t.getQueryData("profile");return(null==i?void 0:null===(n=i.fcmDeviceTokens)||void 0===n?void 0:n.includes(e))?null:u.WY.put("/profile/fcm-tokens",{fcmToken:e})});return e}},58305:function(t,e,n){n.d(e,{Z:function(){return r}});var i=n(88767),u=n(33542);function r(){let t=(0,i.useQueryClient)(),e=(0,i.useMutation)(t=>u.WY.put("/profile/applicant",t),{onMutate:async e=>{await t.cancelQueries("profile");let n=t.getQueryData("profile");return t.setQueryData("profile",t=>({...t,newProfileData:e})),{oldData:n}},onError:(e,n,i)=>{let{oldData:u}=i;t.setQueryData("profile",u)},onSettled:()=>{t.invalidateQueries(["profile"]),t.invalidateQueries(["myApplication"])}});return e}},20154:function(t,e,n){n.d(e,{Z:function(){return r}});var i=n(88767),u=n(33542);function r(t,e){let n=(0,i.useQueryClient)(),r=(0,i.useMutation)(n=>u.WY.request({url:t,method:e,data:n}),{onSettled:()=>{n.invalidateQueries("myApplication")}});return r}},52215:function(t,e,n){var i=n(88767),u=n(33542);let r=t=>{let e=(0,i.useMutation)(e=>u.WY.post("/apply/".concat(t),e),{onSettled:()=>{u.Eh.invalidateQueries("applying")}});return e};e.Z=r},89709:function(t,e,n){var i=n(88767),u=n(33542);let r=()=>{let t=(0,i.useMutation)(t=>u.WY.post("/jobs",t).then(t=>{var e,n;return null==t?void 0:null===(e=t.data)||void 0===e?void 0:null===(n=e.data)||void 0===n?void 0:n.job}),{onSettled:()=>{u.Eh.refetchQueries("jobs"),u.Eh.refetchQueries("job-by-slug")}});return t};e.Z=r},45981:function(t,e,n){var i=n(88767),u=n(33542);let r=t=>{let e=(0,i.useMutation)(async()=>{try{let e=await u.WY.post("/jobs/".concat(t,"/view"));return e}catch(t){}});return e};e.Z=r},30299:function(t,e,n){n.d(e,{Z:function(){return o}});var i=n(25030),u=n.n(i),r=n(88767),a=n(33542);function o(t,e){let n=(0,r.useMutation)(e=>{let n=u()(e,["name","email","image","backgroundImage","description","locationCountry","locationCity","locationState","website","phoneNumber","industry","size","shortName","linkedIn","facebook","github","instagram","telegram","youtube","foundedAt","programs","facultyMembers","students","about","scholarships","admission","studentLife","facilities","campus","intro","passingScore"]);return a.WY.put("/organizations/".concat(t),n)},{onSettled:()=>{a.Eh.invalidateQueries(["my-organization"]),a.Eh.invalidateQueries(["organizations",e])}});return n}},39706:function(t,e,n){n.d(e,{Z:function(){return r}});var i=n(88767),u=n(33542);function r(){let t=(0,i.useMutation)(t=>{if(null==t?void 0:t.jobId)return u.WY.delete("/profile/unsavejob/".concat(t.jobId))},{onMutate:async t=>{await u.Eh.cancelQueries("saveds");let e=u.Eh.getQueryData("saveds");return u.Eh.setQueryData("saveds",e=>{if(null==t?void 0:t.jobId){var n;let i=null==e?void 0:null===(n=e.savedJobs)||void 0===n?void 0:n.filter(e=>(null==e?void 0:e._id)!==(null==t?void 0:t.jobId));return{savedJobs:i,_id:null==e?void 0:e._id}}}),{previousData:e}},onError:(t,e,n)=>{u.Eh.setQueryData("saveds",null==n?void 0:n.previousData)},onSettled:()=>{u.Eh.invalidateQueries("saveds")}});return t}},53943:function(t,e,n){var i=n(88767),u=n(33542);let r=t=>{let e=(0,i.useMutation)(async t=>{let e=new FormData,{file:n}=t;e.append("file",n);let i=await u.WY.post("/media/upload",e,t.axiosConfig);return i},{...t});return e};e.Z=r}}]);