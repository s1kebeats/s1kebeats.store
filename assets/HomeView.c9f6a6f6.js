import{d as r,f as c,g as p,o as l,c as u,m as e,h as m,v as h,a as x,j as f,i as o,y as v,A as w,B as g}from"./index.89e3cd62.js";import{a as b,L as y,_ as d,B as k}from"./BeatstoreUsage.56bec9b7.js";const B={class:"flex flex-col items-center py-[50px] 600:py-[10px]"},U=e("h1",{class:"text-xl my-5 text-black font-semibold select-none"}," Latest on Youtube ",-1),$={class:"h-[300px] w-[640px] bg-base-300 rounded-lg 700:w-[90%] 700:h-[25vh]"},I=["src"],L=r({__name:"YoutubeLatest",setup(_){const s="https://www.googleapis.com/    youtube/v3/playlistItems?part=snippet    &playlistId=UUwiS4Xhzg6LH_tmIMsfQRcA    &maxResults=1    &key=AIzaSyDK5cSuQLy3-Q2rYXDSEa4K4PJU5mGLV_0".split(" ").join(""),i=c(""),a=c(!0);return p(async()=>{a.value=!0;const{data:n}=await b.get(s);i.value=`https://www.youtube.com/embed/${n.items[0].snippet.resourceId.videoId}`,a.value=!1}),(n,C)=>(l(),u("section",B,[U,e("div",$,[m(e("iframe",{"data-test":"iframe",src:i.value,alt:"youtube player",title:"YouTube video player",class:"shadow-lg w-full h-full rounded-lg",frameborder:"0",allowfullscreen:""},`
      `,8,I),[[h,!a.value]]),a.value?(l(),x(y,{key:0,class:"rounded-lg"})):f("",!0)])]))}}),V=e("h1",{class:"text-center text-xl font-semibold my-5 select-none text-black"}," Hot 10 ",-1),Y={class:"flex justify-center"},E={class:"w-full text-center mb-[100px] mt-3 select-none"},S=g(" View all beats "),A=r({__name:"BestBeats",setup(_){const t=c(!0),s=c([]);return p(async()=>{t.value=!0,s.value=(await b.get("https://s1kebeatstore-rest.herokuapp.com/api/beats/?ordering=-id")).data.results.slice(0,10),setTimeout(()=>t.value=!1,250)}),(i,a)=>{const n=w("router-link");return l(),u("section",null,[V,e("div",Y,[m(o(d,{list:s.value,"data-test":"beatlist"},null,8,["list"]),[[h,!t.value]]),t.value?(l(),x(d,{key:0,list:[{},{},{},{},{},{},{},{},{},{}],"data-test":"placeholder"})):f("",!0)]),e("div",E,[o(n,{to:"/beats?ordering=-id",title:"View all beats",class:"btn bg-black text-white hover:bg-black btn-xs w-[1648px] shadow-lg hover:brightness-95 transition-all responsive"},{default:v(()=>[S]),_:1})])])}}}),T={class:"flex flex-col min-h-[calc(100vh-90px)]"},j=r({__name:"HomeView",setup(_){return(t,s)=>(l(),u("div",null,[e("section",T,[o(L),o(A,{class:"flex-1"})]),o(k)]))}});export{j as default};
