// ==UserScript==
// @author          Gamyou
// @version         1.5.7
// @note            23-07-13 1.5.7 实现天选时刻无人值守参与、关闭功能
// @note            23-05-07 1.5.6 开始按钮背景色动态适配直播间主题颜色，新增一些模块隐藏功能
// ==/UserScript==

!function(){window.autoSendDanmuModuleLoaded=!1;const e=URL.createObjectURL(new Blob(["(",function(){const e={};self.onmessage=(t=>{switch(t.data.command){case"interval:start":const a=setInterval(()=>postMessage({message:"interval:tick",id:t.data.id}),t.data.interval);e[t.data.id]=a;break;case"interval:clear":clearInterval(e[t.data.id]),postMessage({message:"interval:cleared",id:t.data.id}),delete e[t.data.id];break;case"timeout:start":const l=setTimeout(()=>postMessage({message:"timeout:tick",id:t.data.id}),t.data.timeout);e[t.data.id]=l;break;case"timeout:clear":clearTimeout(e[t.data.id]),postMessage({message:"timeout:cleared",id:t.data.id}),delete e[t.data.id]}})}.toString(),")()"],{type:"application/javascript"})),t=new Worker(e);URL.revokeObjectURL(e);const a={id:0,callbacks:{},setInterval:(e,l,d)=>{const n=++a.id;return a.callbacks[n]={fn:e,context:d},t.postMessage({command:"interval:start",interval:l,id:n}),n},setTimeout:(e,l,d)=>{const n=++a.id;return a.callbacks[n]={fn:e,context:d},t.postMessage({command:"timeout:start",timeout:l,id:n}),n},onMessage:e=>{switch(e.data.message){case"interval:tick":case"timeout:tick":const t=a.callbacks[e.data.id];t&&t.fn&&t.fn.apply(t.context);break;case"interval:cleared":case"timeout:cleared":delete a.callbacks[e.data.id]}},clearInterval:e=>t.postMessage({command:"interval:clear",id:e}),clearTimeout:e=>t.postMessage({command:"timeout:clear",id:e})};t.onmessage=a.onMessage.bind(a);let l,d,n,c,i,o,s,r,u,m,p,h,b,g,k,v,x,y,w,C,E,f,L,B,I,T,A,S,M,N,D,P,_,F,z,G,R,j={version:3,random:!0,data1:{available:!0,values:["弹幕①","弹幕②"]},data2:{available:!0,values:["弹幕③","弹幕④"]},data3:{available:!0,values:["弹幕⑤","弹幕⑥"]},data4:{available:!0,values:["弹幕⑦","弹幕⑧"]},data5:{available:!0,values:["弹幕⑨","弹幕Ⅹ"]}},H={},V={},K=[],U=[],O=null,W=null,$=200,q=0,J=e=>{alert("请更新油猴脚本"),window.location.href=Z},Q=(e,t)=>null,X=(e,t)=>{console.warn('===> No implementation "setGmValue" method.')},Y=e=>{console.warn('===> No implementation "delGmValue" method.')};const Z="https://greasyfork.org/scripts/446725-b%E7%AB%99%E7%9B%B4%E6%92%AD%E9%97%B4%E5%AE%9A%E6%97%B6%E5%8F%91%E9%9A%8F%E6%9C%BA%E5%BC%B9%E5%B9%95/code/B%E7%AB%99%E7%9B%B4%E6%92%AD%E9%97%B4%E5%AE%9A%E6%97%B6%E5%8F%91%E9%9A%8F%E6%9C%BA%E5%BC%B9%E5%B9%95.user.js",ee=window.location.pathname.replace(/^\/(\S+\/)*/g,""),te=()=>(new Date).getTime(),ae=(e,t)=>{let a=document.getElementById("aside-area-vm").getElementsByClassName("chat-input border-box")[0];if(!a)return void alert("找不到输入弹幕文本框，请尝试刷新页面");let l=document.getElementsByClassName("bl-button bl-button--primary")[0];l?(a.value=e,a.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),l.click(),lastSent=te()):alert("找不到发送按钮，请尝试刷新页面")},le=e=>{if(!e||""==e)return!0;return new RegExp("^[ ]+$").test(e)},de=()=>{for(let e=0;e<K.length;e++)a.clearInterval(K[e]),K[e]=null;K=[]},ne=()=>{if(l.checked){if(!W){let e=le(H.signText)?H.signText:"打卡",t=new Date(new Date((new Date).setDate((new Date).getDate()+1)).toDateString()).getTime()-te();console.log("===> 设置凌晨打卡定时器【"+t+"】"),S.value=le(V.signInText)?e:V.signInText,W=a.setTimeout(()=>{ae(le(S.value)?e:S.value),console.log("===> 设置下一次打卡"),a.clearTimeout(W),W=null,ne()},t)}}else W&&(console.log("===> 关闭自动打卡功能"),a.clearTimeout(W),W=null)},ce=()=>{k.checked=j.random,v.checked=j.data1.available,x.checked=j.data2.available,y.checked=j.data3.available,w.checked=j.data4.available,C.checked=j.data5.available,l.checked=V.autoSignIn,i.checked=V.noSleep,d.checked=V.hideLoginGuide,n.checked=V.hideHaruna,c.checked=V.hideShop,o.checked=V.hideGift,s.checked=V.hideRoomFeed,r.checked=V.hideRoomInfo,u.checked=V.hideNotice,m.checked=V.hideFooter,p.checked=V.lottery,window.localStorage.setItem("lottery_checked",V.lottery),h.checked=V.closeLottery,window.localStorage.setItem("close_lottery_checked",V.closeLottery),b.checked=V.noPrivacy,g.checked=V.hideWatermark,(()=>{Ce(),ve(),be(),ge(),ke(),Ie(),ne(),Ee(),fe(),xe(),ye(),we();let e=a.setTimeout(()=>{a.clearTimeout(e),xe(),ye(),we()},1e3)})()},ie=()=>f.style.display="block",oe=()=>{ce(),f.style.display="none"},se=()=>{if(j.data1.values.length<=0&&j.data2.values.length<=0&&j.data3.values.length<=0&&j.data4.values.length<=0&&j.data5.values.length<=0)return U||[];let e=[];e=j.data1.available?e.concat(j.data1.values):e,e=j.data2.available?e.concat(j.data2.values):e,e=j.data3.available?e.concat(j.data3.values):e,e=j.data4.available?e.concat(j.data4.values):e,e=j.data5.available?e.concat(j.data5.values):e,U=e,k.checked?U=(e=>{for(let t=0;t<e.length;t++){const a=Math.floor(Math.random()*e.length),l=e[t];e[t]=e[a],e[a]=l}return e})(e):q=0},re=()=>{j.data1.values=le(L.value)?[]:L.value.split("|"),j.data2.values=le(B.value)?[]:B.value.split("|"),j.data3.values=le(I.value)?[]:I.value.split("|"),j.data4.values=le(T.value)?[]:T.value.split("|"),j.data5.values=le(A.value)?[]:A.value.split("|"),j.random=k.checked,j.data1.available=v.checked,j.data2.available=x.checked,j.data3.available=y.checked,j.data4.available=w.checked,j.data5.available=C.checked,se(),X(ee,j),H.configKey&&(V.autoSignIn=l.checked,V.signInText=S.value,V.noSleep=i.checked,V.hideLoginGuide=d.checked,V.hideHaruna=n.checked,V.hideShop=c.checked,V.hideGift=o.checked,V.hideRoomFeed=s.checked,V.hideRoomInfo=r.checked,V.hideNotice=u.checked,V.hideFooter=m.checked,V.lottery=p.checked,window.localStorage.setItem("lottery_checked",p.checked),V.closeLottery=h.checked,window.localStorage.setItem("close_lottery_checked",V.closeLottery),V.noPrivacy=b.checked,V.hideWatermark=g.checked,X(H.configKey,V)),_.style.display="block";let e=a.setTimeout(()=>{a.clearTimeout(e),_.style.display="none",f.style.display="none"},1500)},ue=()=>U.length<1?(alert("请先设置弹幕"),!1):(k.checked&&(q=Math.floor(Math.random()*U.length)),ae(U[q]),++q>=U.length&&(q=0),!0),me=()=>{let e=0;if(O)a.clearInterval(O),O=null,M.style.background=le(P)?"rgba(217,157,27,1)":P,M.style.setProperty("--color",P.replace(")",", 0.8)")),M.textContent="开始",E.removeAttribute("disabled");else{if(e=1e3*(le(E.value)?600:E.value),!ue())return;O=a.setInterval(ue,e),M.style.background="rgba(255,0,0,1)",M.style.setProperty("--color","rgba(255,0,0,0.8)"),M.textContent="停止",E.setAttribute("disabled","disabled")}},pe=(e,t,a,l,d)=>{let n=document.createElement("input");n.type="checkbox",n.id=e,n.checked=!1,n.addEventListener("click",l);let c=document.createElement("label");c.setAttribute("for",e),c.classList.add("switch-check-label");let i=document.createElement("span");i.textContent=t,i.title=a,i.classList.add("danmu-random-switch-button-title");let o=document.createElement("div");return o.classList.add("switch-check"),o.classList.add("switch-check-group"),o.appendChild(n),o.appendChild(c),o.appendChild(i),d.appendChild(o),n},he=(e,t)=>{t?e.style.removeProperty("display"):e.style.setProperty("display","none","important")},be=()=>{let e=document.getElementById("switch-login-guide-vm");e&&he(e,!d.checked)},ge=()=>{let e=document.getElementById("my-dear-haruna-vm");e&&he(e,!n.checked)},ke=()=>{let e=document.getElementById("shop-popover-vm");e&&he(e,!c.checked)},ve=()=>{let e=document.getElementsByClassName("gift-control-section")[0];e&&he(e,!o.checked),(e=document.getElementById("web-player__bottom-bar__container"))&&he(e,!o.checked),e=document.getElementsByTagName("video");for(let t=0;t<e.length;t++){if(!e[t])return;o.checked?e[t].style.setProperty("height","100%"):(document.body.classList.contains("player-full-win")||document.body.classList.contains("fullscreen-fix"))&&e[t].style.setProperty("height","calc(100% - 114px)")}},xe=()=>{let e=document.getElementsByClassName("room-feed")[0];e&&he(e,!s.checked),(e=document.getElementsByClassName("flip-view p-relative")[0])&&he(e,!s.checked)},ye=()=>{let e=document.getElementsByClassName("room-info-ctnr")[0];e&&he(e,!r.checked)},we=()=>{let e=document.getElementsByClassName("right-container")[0];e&&(e.style.setProperty("min-height","auto"),he(e,!u.checked))},Ce=()=>{let e=document.getElementById("link-footer-vm");e&&he(e,!m.checked)},Ee=()=>{if(b.checked){let e=document.createElement("style");e.id="hidePrivacyDialog",e.setAttribute("type","text/css"),e.innerHTML=".privacy-dialog{display:none !important;}",document.head.appendChild(e)}else{let e=document.getElementById("hidePrivacyDialog");e&&e.remove()}},fe=()=>{let e=document.getElementsByClassName("web-player-icon-roomStatus")[0];e&&he(e,!g.checked)},Le=e=>{let t=document.getElementById("danmu-setting-panel");if(e&&!t){let t=document.getElementsByClassName("bl-button bl-button--primary")[0];if(!t)return console.warn("===> 发送按钮丢失"),!1;(e=>{let t=document.createElement("div");t.textContent="弹幕设置",t.classList.add("danmu-random-setting-title");let a=document.createElement("div");a.textContent="1.5.7",a.classList.add("danmu-random-setting-title-sub"),t.appendChild(a);let P=document.createElement("div");P.classList.add("danmu-random-setting-tips"),P.innerHTML='任一分组内输入弹幕即可，多条用<span style="color:#dc6b07;margin:0 2px 0 4px;font-weight:700;font-style:normal;">竖线</span>分隔';let F=document.createElement("div");F.classList.add("danmu-random-update-tips"),F.innerHTML='<span style="color:#f00">更新提示：</span>实现自动参与、关闭天选时刻';let z=document.createElement("div");z.textContent="分组 1 ：",z.classList.add("danmu-group-title"),(v=document.createElement("input")).type="checkbox",v.id="group1Checkbox",v.checked=!0;let G=document.createElement("label");G.setAttribute("for","group1Checkbox"),G.classList.add("switch-check-label");let R=document.createElement("div");R.classList.add("switch-check"),R.appendChild(v),R.appendChild(G),(L=document.createElement("textarea")).classList.add("danmu-group-textarea"),L.setAttribute("placeholder","请输入弹幕，多条弹幕请用“|”分隔");let j=document.createElement("div");j.textContent="分组 2 ：",j.classList.add("danmu-group-title"),(x=document.createElement("input")).type="checkbox",x.id="group2Checkbox",x.checked=!0;let H=document.createElement("label");H.setAttribute("for","group2Checkbox"),H.classList.add("switch-check-label");let V=document.createElement("div");V.classList.add("switch-check"),V.appendChild(x),V.appendChild(H),(B=document.createElement("textarea")).classList.add("danmu-group-textarea"),B.setAttribute("placeholder","请输入弹幕，多条弹幕请用“|”分隔");let K=document.createElement("div");K.textContent="分组 3 ：",K.classList.add("danmu-group-title"),(y=document.createElement("input")).type="checkbox",y.id="group3Checkbox",y.checked=!0;let U=document.createElement("label");U.setAttribute("for","group3Checkbox"),U.classList.add("switch-check-label");let O=document.createElement("div");O.classList.add("switch-check"),O.appendChild(y),O.appendChild(U),(I=document.createElement("textarea")).classList.add("danmu-group-textarea"),I.setAttribute("placeholder","请输入弹幕，多条弹幕请用“|”分隔");let W=document.createElement("div");W.textContent="分组 4 ：",W.classList.add("danmu-group-title"),(w=document.createElement("input")).type="checkbox",w.id="group4Checkbox",w.checked=!0;let $=document.createElement("label");$.setAttribute("for","group4Checkbox"),$.classList.add("switch-check-label");let q=document.createElement("div");q.classList.add("switch-check"),q.appendChild(w),q.appendChild($),(T=document.createElement("textarea")).classList.add("danmu-group-textarea"),T.setAttribute("placeholder","请输入弹幕，多条弹幕请用“|”分隔");let J=document.createElement("div");J.textContent="分组 5 ：",J.classList.add("danmu-group-title"),(C=document.createElement("input")).type="checkbox",C.id="group5Checkbox",C.checked=!0;let Q=document.createElement("label");Q.setAttribute("for","group5Checkbox"),Q.classList.add("switch-check-label");let X=document.createElement("div");X.classList.add("switch-check"),X.appendChild(C),X.appendChild(Q),(A=document.createElement("textarea")).classList.add("danmu-group-textarea"),A.setAttribute("placeholder","请输入弹幕，多条弹幕请用“|”分隔");let Y=document.createElement("div");Y.style.margin="20px 0 10px";let Z=document.createElement("div");Z.textContent="以下设置保存之后将适用所有直播间",Z.title="其它直播间请刷新应用设置",Z.classList.add("global-setting-tip"),Z.classList.add("switch-check-group"),Y.appendChild(Z),(l=document.createElement("input")).type="checkbox",l.id="signInCheckbox",l.checked=!0,l.addEventListener("click",ne);let ee=document.createElement("label");ee.setAttribute("for","signInCheckbox"),ee.classList.add("switch-check-label");let te=document.createElement("span");te.textContent="打卡弹幕：",te.title="每日零点发送一条打卡弹幕",te.classList.add("danmu-random-switch-button-title"),(S=document.createElement("input")).style.border="0",S.style.width="145px",S.setAttribute("placeholder","输入零点打卡发送的文字");let ae=document.createElement("div");ae.classList.add("switch-check"),ae.classList.add("switch-check-group"),ae.appendChild(l),ae.appendChild(ee),ae.appendChild(te),ae.appendChild(S),Y.appendChild(ae),p=pe("lotteryCheckbox","自动参与天选时刻抽奖（需登录）","自动点击参与按钮，但不是天选时刻开始时就立刻处理，会留有一小段犹豫时间，可以手动处理",Se,Y),h=pe("closeLotteryCheckbox","关闭天选时刻","关闭天选时刻弹窗",Me,Y),i=pe("noSleepCheckbox","防止直播间休眠","防止直播间页面一段时间没操作之后进入休眠",Ie,Y),d=pe("hideLoginGuideCheckbox","隐藏播放器底部登录提示","隐藏未登录时播放器底部显示的登录提示",be,Y),n=pe("hideHarunaCheckbox","隐藏看板娘立绘","隐藏直播间Haruna立绘",ge,Y),c=pe("hideShopCheckbox","隐藏购物提示","隐藏播放器左上角的商店购物提示",ke,Y),o=pe("hideGiftControlCheckbox","隐藏礼物栏","隐藏播放器底部的礼物栏",ve,Y),s=pe("hideRoomFeedCheckbox","隐藏主播动态","隐藏播放器底下主播的动态栏",xe,Y),r=pe("hideRoomInfoCheckbox","隐藏主播荣耀、简介","隐藏播放器底下主播的荣耀勋章和简介",ye,Y),u=pe("hideNoticeCheckbox","隐藏主播公告","隐藏弹幕列表底下主播的公告",we,Y),m=pe("hideFooterCheckbox","隐藏直播间页脚","隐藏直播间底部的网页页脚",Ce,Y),b=pe("hidePrivacyCheckbox","隐藏隐私提示对话框","隐藏隐私提示登录的对话框，被打码的昵称不保证变回正常",Ee,Y),g=pe("hideRoomStatusCheckbox","隐藏直播水印","隐藏播放器左上角的直播水印",fe,Y),(_=document.createElement("span")).textContent="设置成功",_.classList.add("danmu-random-setting-success-text");let le=document.createElement("div");le.classList.add("danmu-random-setting-success-tips"),le.appendChild(_);let de=document.createElement("i");de.setAttribute("title","保存"),de.style.padding="5px",de.classList.add("el-button"),de.classList.add("el-icon-check"),de.classList.add("is-circle"),de.addEventListener("click",re);let ce=document.createElement("i");ce.setAttribute("title","关闭"),ce.style.padding="5px",ce.classList.add("el-button"),ce.classList.add("el-icon-close"),ce.classList.add("is-circle"),ce.addEventListener("click",oe);let se=document.createElement("div");se.classList.add("danmu-random-set-button-container"),se.appendChild(de),se.appendChild(ce),(k=document.createElement("input")).type="checkbox",k.id="rdCheckbox",k.checked=!0,(ee=document.createElement("label")).setAttribute("for","rdCheckbox"),ee.classList.add("switch-check-label"),(te=document.createElement("span")).textContent="随机从上面的弹幕中选出一条发送",te.title="将合并所有分组数据，从中随机选出一条发送",te.classList.add("danmu-random-switch-button-title"),(ae=document.createElement("div")).classList.add("switch-check"),ae.appendChild(k),ae.appendChild(ee),ae.appendChild(te);let ue=document.createElement("div");ue.classList.add("danmu-random-setting-bottom"),ue.appendChild(le),ue.appendChild(se);let he=document.createElement("div");he.style.height="calc(98% - 30px - 25px)",he.appendChild(z),he.appendChild(R),he.appendChild(L),he.appendChild(j),he.appendChild(V),he.appendChild(B),he.appendChild(K),he.appendChild(O),he.appendChild(I),he.appendChild(W),he.appendChild(q),he.appendChild(T),he.appendChild(J),he.appendChild(X),he.appendChild(A),he.appendChild(ae),he.appendChild(Y),he.appendChild(ue),(f=document.createElement("div")).id="danmu-setting-panel",f.classList.add("danmu-random-setting-panel"),f.appendChild(t),f.appendChild(F),f.appendChild(P),f.appendChild(he),document.getElementById("aside-area-vm").appendChild(f),(M=document.createElement("button")).textContent="开始",M.classList.add("danmu-btn"),M.style.setProperty("--color","rgba(217,157,27,0.8)"),M.addEventListener("click",me),(N=document.createElement("span")).textContent="每",N.classList.add("danmu-text-span"),N.style.marginLeft="4px",(E=document.createElement("input")).value=600,E.classList.add("danmu-second-input"),E.setAttribute("oninput","this.value = this.value.replace(/[^0-9]/g, '')"),(D=document.createElement("span")).textContent="秒发送",D.classList.add("danmu-text-span"),D.style.marginRight="4px";let Le=document.createElement("i");Le.classList.add("el-icon-setting");let Be=document.createElement("button");Be.title="设置",Be.classList.add("el-button"),Be.classList.add("el-button--mini"),Be.classList.add("is-circle"),Be.addEventListener("click",ie),Be.appendChild(Le);let Te=document.createElement("div");Te.style.position="absolute",Te.appendChild(M),Te.appendChild(N),Te.appendChild(E),Te.appendChild(D),Te.appendChild(Be),e.appendChild(Te)})(e),P=window.getComputedStyle(t).getPropertyValue("background-color"),D.style.setProperty("background",P),N.style.setProperty("background",P),M.style.setProperty("background",P),M.style.setProperty("--color",P.replace(")",", 0.8)")),(()=>{let e=Q(ee,null);e&&(j.version===e.version?j=e:2===e.version?(j.data1=e.data1,j.data2=e.data2,j.data3=e.data3,j.data4=e.data4,j.data5=e.data5,X(ee,j)):(j.data1.values=e.data1?e.data1:j.data1.values,j.data2.values=e.data2?e.data2:j.data2.values,j.data3.values=e.data3?e.data3:j.data3.values,j.data4.values=e.data4?e.data4:j.data4.values,j.data5.values=e.data5?e.data5:j.data5.values,X(ee,j))),H.configKey&&(V=Q(H.configKey,{}),S.value=le(V.signInText)?"":V.signInText,le(V.lottery)&&(V.lottery=!1),le(V.closeLottery)&&(V.closeLottery=!1)),ce(),L.value=j.data1.values.join("|"),B.value=j.data2.values.join("|"),I.value=j.data3.values.join("|"),T.value=j.data4.values.join("|"),A.value=j.data5.values.join("|"),se()})()}return!0},Be=e=>{K[K.length]=a.setInterval(()=>{Le(e)?de():0>=--$&&(de(),console.log("===> 创建面板失败，停止初始化"))},1500)},Ie=()=>{i.checked?F||(console.log("===> 开启防休眠功能"),F=a.setInterval(()=>{z=a.setTimeout(()=>{a.clearTimeout(z),document.body.dispatchEvent(new MouseEvent("mousemove",{bubbles:!0}))},3e3*Math.random())},17e3)):(console.log("===> 关闭防休眠功能"),F&&(a.clearInterval(F),F=null),z&&(a.clearTimeout(z),z=null))},Te=e=>{if(!e)return void console.warn("===> 没有抽奖按钮DOM");if("false"===window.localStorage.getItem("lottery_checked"))return void("true"===window.localStorage.getItem("close_lottery_checked")&&(console.log("===> 不参与天选时刻抽奖，关闭弹窗"),Ae()));let t=a.setTimeout(()=>{a.clearTimeout(t),console.log("===> 自动参加抽奖"),e.click(),"true"===window.localStorage.getItem("close_lottery_checked")&&(console.log("===> 参加成功，延迟关闭弹窗"),t=a.setTimeout(()=>{a.clearTimeout(t),Ae()},1e3))},1e4)},Ae=()=>{let e=document.getElementsByClassName("close-btn bg-contain")[0];e&&e.click()},Se=()=>{window.localStorage.setItem("lottery_checked",p.checked)},Me=()=>{window.localStorage.setItem("close_lottery_checked",h.checked)};(()=>{let e=document.createElement("link");e.rel="stylesheet",e.href="https://unpkg.com/element-ui@2.15.9/lib/theme-chalk/index.css",document.head.appendChild(e);let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML='.danmu-group-title{font-size:14px;padding-left:2px;color:rgb(18,56,141);display:inline;margin-right:60%;vertical-align:middle;}.danmu-group-textarea{width:98%;min-height:100px;height:16%;margin:1px 0px 4px;border:0px;resize:none;}.el-button{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#FFF;border:1px solid #DCDFE6;color:#606266;-webkit-appearance:none;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;outline:0;margin:0;-webkit-transition:.1s;transition:.1s;font-weight:500;padding:12px 20px;font-size:14px;border-radius:4px}.el-button.is-circle{border-radius:50%;padding:12px}.el-button--mini.is-circle{padding:3px;}.el-button:focus,.el-button:hover{color:#409EFF;border-color:#c6e2ff;background-color:#ecf5ff}.el-icon-close.is-circle{padding:5px;color:#ff0000;border:1px solid #ff0000;margin-left:20px;}.el-icon-check.is-circle{padding:5px;color:#0000ff;border:1px solid #0000ff;margin-left:20px;}input[type="checkbox"]{display:none;}.switch-check{display:inline-block;margin:0 5px;vertical-align:middle;}.switch-check-label{display:inline-block;vertical-align:middle;border:1px solid #bdc3c7;border-radius:60px;width:40px;height:18px;position:relative;transition:all .3s;cursor:pointer;}.switch-check-label:before{width:14px;height:14px;content:"";display:inline-block;background-color:#bdc3c7;border-radius:100%;position:absolute;top:2px;left:4px;transition:all .3s;}.switch-check :checked ~ label{background-color:#26b22b;border-color:#26b22b;}.switch-check :checked ~ label:before{left:22px;background-color:#fff;}.switch-check-group{margin-top:5px;width:95%;}.danmu-random-setting-panel{background-color:#d4f2e0;border-radius:2px;width:100%;height:100%;overflow-y:auto;position:absolute;left:0px;top:0px;z-index:999;display:none;}.danmu-random-setting-panel::-webkit-scrollbar{width:4px;height:4px;}.danmu-random-setting-panel::-webkit-scrollbar-thumb{border-radius:5px;-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2);background:rgba(0,0,0,0.2);}.danmu-random-setting-panel::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2);border-radius:0;background:rgba(0,0,0,0.1);}.danmu-random-setting-title{text-align:center;font-size:16px;font-weight:700;color:#1c5adc;line-height:30px;}.danmu-random-setting-title-sub{display:inline-block;color:#ee8b8b;height:24px;vertical-align:sub;-webkit-transform:scale(0.7);}.danmu-random-setting-tips{color:#0b81cc;text-align:center;font-style:italic;}.danmu-random-update-tips{color:#0b81cc;text-align:center;font-size:13px;font-weight:700;margin:10px 0px;}.danmu-random-setting-bottom{width:100%;line-height:35px;}.danmu-random-switch-button-title{font-size:14px;vertical-align:middle;margin-left:5px;color:#095ca2;cursor:help;}.danmu-random-setting-success-tips{text-align:center;display:inline-block;vertical-align:middle;width:60%;}.danmu-random-setting-success-text{font-size:16px;color:#128712;display:none;}.danmu-random-set-button-container{display:inline-block;vertical-align:middle;}.global-setting-tip{text-align:center;color:#0b81cc;font-size:12px;font-weight:700;cursor:help;}.disabled{color:#aaaaaa;cursor:not-allowed;}.danmu-btn{min-width:65px;height:24px;font-size:12px;border-radius:4px;color:rgb(255,255,255);background:rgb(217,157,27);border:0px;cursor:pointer;}.danmu-btn:hover{background:var(--color)!important;}.danmu-text-span{color:rgb(255, 255, 255);font-size:12px;background:rgb(236,108,27);}.danmu-second-input{width:25px;height:15px;margin:0px 3px;border:0px;border-radius:3px;}.not-display{display:none !important;}',document.head.appendChild(t)})(),window.runStart=(()=>{if((()=>{if(!H.version)return!0;if("2.4.2"===H.version)return!1;{let e=H.version.split("."),t="2.4.2".split(".");if(e.length!=t.length)return!0;for(let a=0;a<e.length;a++)if(t[a]>e[a])return!0;return!1}})())return void(window.location.href=Z);let e=document.getElementsByClassName("particitation-btn")[0];e?Te(e):G=a.setTimeout(()=>{a.clearTimeout(G),(e=document.getElementsByClassName("particitation-btn")[0])&&Te(e)},2e3);let t=document.getElementsByClassName("bottom-actions p-relative")[0];if(t)Be(t);else{let e=0;R=a.setInterval(()=>{(t=document.getElementsByClassName("bottom-actions p-relative")[0])?(a.clearInterval(R),Be(t)):e++>=10&&(a.clearInterval(R),console.log(`===> 页面【${window.location.href}】没有定位位置`))},1e3)}}),window.arrayInfo=(()=>console.info(U)),window.setGmNotice=(e=>e),window.setGmGetValue=(e=>Q=e),window.setGmSetValue=(e=>X=e),window.setGmDelValue=(e=>e),window.setParentData=(e=>H=e),window.autoSendDanmuModuleLoaded=!0}();