(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},146:function(e,t){},163:function(e,t,a){},164:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},181:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(13),c=a.n(i),o=(a(108),a(3)),r=(a(109),a(1)),l=Object(n.createContext)(),u=function(e){var t=e.initialState,a=e.reducer,s=e.children;return Object(r.jsx)(l.Provider,{value:Object(n.useReducer)(a,t),children:s})},d=function(){return Object(n.useContext)(l)},m=a(8),f=a.n(m),j=a(46),b=a.n(j),p=(a(163),a(18)),v=(a(164),a(75)),_=a.n(v);var g=function(e){var t=e.title,a=e.playlist,n=e.Icon,s=e.choosePlaylist,i=e.Favorite,c=e.cName,l=e.onClick,u=d(),m=Object(o.a)(u,2),f=m[0],j=f.playingPlaylist,b=f.favorites,v=m[1],g=j===a;return Object(r.jsxs)("div",{className:"sidebarItem ".concat(g?"sidebarItem-active":""),tabIndex:0,children:[g&&Object(r.jsx)(_.a,{}),n&&Object(r.jsx)(n,{className:"sidebarItem__icon"}),n?Object(r.jsx)("h4",{className:"sidebarItem__title sidebarItem__text",onClick:l,children:t}):Object(r.jsx)("p",{className:"sidebarItem__text",onClick:function(){s&&s(a)},children:a.name}),i&&Object(r.jsx)(i,{className:"sidebarItem__favorite ".concat(c||""),onClick:function(){var e=b?Object(p.a)(b):[];-1===e.indexOf(a.id)?e=e?[].concat(Object(p.a)(e),[a.id]):[a.id]:e.splice(e.indexOf(a.id),1),v({type:"SET_FAVORITES",favorites:e}),localStorage.setItem("favorites",e)},tabIndex:0})]})},O=a.p+"static/media/spotifyLogo.4f8bc335.svg",h=a(57),y=a.n(h),x=a(81),S=a.n(x),I=a(80),N=a.n(I);var T=function(){var e=d(),t=Object(o.a)(e,2),a=t[0],s=a.playlists,i=a.favorites,c=a.festival,l=t[1],u=Object(n.useState)(!1),m=Object(o.a)(u,2),f=m[0],j=m[1],b=Object(n.useState)({height:window.innerHeight,width:window.innerWidth}),p=Object(o.a)(b,2),v=p[0],_=p[1];function h(e){l({type:"SET_PLAYLIST",playingPlaylist:e}),l({type:"SET_PLAYING_TRACK",playingTrack:e.tracks.items[0].track})}return Object(n.useEffect)((function(){function e(){_({height:window.innerHeight,width:window.innerWidth})}return window.addEventListener("resize",e),function(t){window.removeEventListener("resize",e)}})),Object(r.jsx)("aside",{className:"sidebar ".concat(f?"mobile":""),onClick:function(e){return window.innerWidth<=768?j(!0):j(!1),void(f&&j(!1))},children:v.width<=768&&!f?Object(r.jsx)(N.a,{fontSize:"large",className:"sidebar__burger",tabIndex:0}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("header",{className:"sidebar__header",children:[Object(r.jsxs)("div",{className:"sidebar__logos",children:[Object(r.jsx)("img",{className:"sidebar__logo",src:O,alt:"Spotify logo"}),Object(r.jsx)("img",{className:"sidebar__logo",src:c.logo_url,alt:"Festival logo"})]}),Object(r.jsx)(g,{title:"Home",Icon:S.a,onClick:function(){l({type:"SET_FESTIVAL",festival:null}),sessionStorage.removeItem("selectedFestival")}})]}),Object(r.jsx)("h3",{className:"sidebar__title",children:"FAVORITE"}),null===s||void 0===s?void 0:s.map((function(e){return-1!==i.indexOf(e.id)&&Object(r.jsx)(g,{playlist:e,choosePlaylist:h,Favorite:y.a,cName:"sidebarItem-favorite"},e.id)})),Object(r.jsx)("h3",{className:"sidebar__title",children:"PLAYLISTS"}),null===s||void 0===s?void 0:s.map((function(e){return-1===i.indexOf(e.id)&&Object(r.jsx)(g,{playlist:e,choosePlaylist:h,Favorite:y.a},e.id)}))]})})},E=(a(170),a(171),a(83)),k=a.n(E),w=a(82),C=a.n(w);var P=function(e){var t,a,n=e.track,s=e.playSong,i=d(),c=Object(o.a)(i,1)[0],l=c.playingPlaylist,u=c.playingTrack,m=c.playingNow,f=c.premium;return n?Object(r.jsxs)("article",{className:"songRow ".concat(u===n?"songRow-active":""),onClick:function(){return s(n)},tabIndex:0,children:[u===n&&f&&(m?Object(r.jsx)(C.a,{className:"songRow__icon"}):Object(r.jsx)(k.a,{className:"songRow__icon"})),Object(r.jsx)("img",{className:"songRow__img",src:(null===(t=n.album)||void 0===t||null===(a=t.images[0])||void 0===a?void 0:a.url)||(null===l||void 0===l?void 0:l.image),alt:""}),Object(r.jsxs)("div",{className:"songRow__info",children:[Object(r.jsx)("h3",{className:"songRow__name",children:n.name}),Object(r.jsx)("p",{className:"songRow__artist",children:n.artists.map((function(e){return e.name})).join(", ")})]})]}):Object(r.jsx)(r.Fragment,{})};var A=function(){var e,t=d(),a=Object(o.a)(t,2),n=a[0],s=n.playingPlaylist,i=n.playingNow,c=n.playingTrack,l=a[1],u=function(e){l(e===c?{type:"SET_PLAYING_NOW",playingNow:!i}:{type:"SET_PLAYING_TRACK",playingTrack:e})};return Object(r.jsxs)("main",{className:"main",children:[Object(r.jsxs)("header",{className:"main__info",children:[Object(r.jsx)("img",{className:"main__logo",src:null===s||void 0===s?void 0:s.image,alt:"Playlist logo"}),Object(r.jsxs)("div",{className:"main__infoText",children:[Object(r.jsx)("h2",{className:"main__name",children:null===s||void 0===s?void 0:s.name}),Object(r.jsx)("p",{className:"main__description",children:null===s||void 0===s?void 0:s.description})]})]}),Object(r.jsx)("section",{className:"main__songs",children:null===s||void 0===s||null===(e=s.tracks)||void 0===e?void 0:e.items.map((function(e,t){return Object(r.jsx)(P,{track:e.track,playSong:u},t)}))})]})},L=(a(172),a(84));a(173);var F=function(e){var t=e.playlist,a=d(),n=Object(o.a)(a,2);Object(L.a)(n[0]);var s=n[1];return Object(r.jsxs)("div",{className:"galleryItem",onClick:function(){s({type:"SET_PLAYLIST",playingPlaylist:t}),s({type:"SET_PLAYING_TRACK",playingTrack:t.tracks.items[0].track})},tabIndex:0,children:[Object(r.jsx)("img",{src:t.image,alt:"Playlist cover",className:"galleryItem__img"}),Object(r.jsx)("p",{className:"galleryItem__name",children:t.name}),Object(r.jsx)("p",{className:"galleryItem__description",children:t.description})]})};var R=function(e){var t=d(),a=Object(o.a)(t,1)[0].playlists;return Object(r.jsx)("div",{className:"gallery",children:Object(r.jsx)("div",{className:"gallery__items",children:null===a||void 0===a?void 0:a.map((function(e){return Object(r.jsx)(F,{playlist:e},e.id)}))})})},B=(a(174),a(216)),H=a(85),M=a.n(H);var Y=function(e){var t,a=e.handleClick,n=d(),s=Object(o.a)(n,1)[0].user;return Object(r.jsx)("header",{className:"header",children:Object(r.jsxs)("div",{className:"header__wrapper",tabIndex:0,children:[Object(r.jsx)(B.a,{src:null===s||void 0===s||null===(t=s.images[0])||void 0===t?void 0:t.url,alt:null===s||void 0===s?void 0:s.display_name}),Object(r.jsx)("p",{className:"header__text",children:null===s||void 0===s?void 0:s.display_name}),Object(r.jsx)(M.a,{className:"header__logout",onClick:a})]})})},K=(a(175),a(97)),D=new b.a({clientId:"afa5c44e65bc40928f489b6bff9d91fe"});var z=function(){var e=d(),t=Object(o.a)(e,2),a=t[0],s=a.accessToken,i=a.playingPlaylist,c=a.playingTrack,l=a.playingNow,u=t[1];if(Object(n.useEffect)((function(){return u({type:"SET_PLAYING_NOW",playingNow:!0})}),[u,i]),!s)return null;var m=null===i||void 0===i?void 0:i.tracks.items.map((function(e){return e.track.uri}));return D.setAccessToken(s),Object(r.jsx)("footer",{className:"footer",children:Object(r.jsx)(K.a,{token:s,callback:function(e){var t;if(l!==e.isPlaying&&u({type:"SET_PLAYING_NOW",playingNow:e.isPlaying}),(null===e||void 0===e||null===(t=e.track)||void 0===t?void 0:t.id)!==(null===c||void 0===c?void 0:c.id)){var a=null===i||void 0===i?void 0:i.tracks.items.filter((function(t){var a;return(null===t||void 0===t?void 0:t.track.id)===(null===e||void 0===e||null===(a=e.track)||void 0===a?void 0:a.id)}))[0];a&&a.track!==c&&u({type:"SET_PLAYING_TRACK",playingTrack:a.track})}},play:l,uris:i?m:[],offset:c?m.indexOf(c.uri):0,styles:{bgColor:"#282828",color:"#fff",trackNameColor:"#fff",sliderColor:"#1ed760"}})})},G=new b.a({clientId:"afa5c44e65bc40928f489b6bff9d91fe"});var V=function(){var e=d(),t=Object(o.a)(e,2),a=t[0],s=a.accessToken,i=a.playingPlaylist,c=a.festival,l=a.playlists,u=t[1];return Object(n.useEffect)((function(){function e(){u({type:"SET_ACCESS_TOKEN",user:null}),u({type:"SET_REFRESH_TOKEN",user:null}),u({type:"SET_EXPIRES_IN",user:null}),u({type:"SET_FESTIVAL",user:null}),sessionStorage.setItem("loggedIn",!1),sessionStorage.removeItem("token"),sessionStorage.removeItem("selectedFestival")}s&&(G.setAccessToken(s),G.getMe().then((function(e){u({type:"SET_USER",user:e.body}),"open"!==e.body.product&&u({type:"SET_PREMIUM",premium:!0})})).catch((function(t){console.log(t),e()})),f.a.get("http://ec2-52-51-232-161.eu-west-1.compute.amazonaws.com/api/playlist/").then((function(t){t.data.filter((function(e){return e.festival_id===c.id})).map((function(e){return e.playlist_id})).map((function(t){return G.getPlaylist(t).then((function(e){-1===l.map((function(e){return e.id})).indexOf(t)&&u({type:"SET_PLAYLISTS",playlist:{description:e.body.description,name:e.body.name,id:e.body.id,href:e.body.href,tracks:e.body.tracks,image:e.body.images[0].url}})})).catch((function(t){console.log(t),e()}))}))})))}),[s,u,c.id]),Object(r.jsxs)("div",{children:[Object(r.jsxs)("section",{className:"dashboard",children:[Object(r.jsx)(T,{}),Object(r.jsxs)("main",{className:"main__wrapper",children:[Object(r.jsx)(Y,{handleClick:function(){u({type:"SET_ACCESS_TOKEN",user:null}),u({type:"SET_REFRESH_TOKEN",user:null}),u({type:"SET_EXPIRES_IN",user:null}),u({type:"SET_FESTIVAL",user:null}),sessionStorage.setItem("loggedIn",!1),sessionStorage.removeItem("state"),sessionStorage.removeItem("token"),sessionStorage.removeItem("refreshToken"),sessionStorage.removeItem("expiresIn"),sessionStorage.removeItem("selectedFestival")}}),i?Object(r.jsx)(A,{}):Object(r.jsx)(R,{})]})]}),Object(r.jsx)(z,{})]})},W=(a(177),a(178),a(94)),U=a.n(W);var X=function(e){var t=e.title,a=e.selectedData,s=e.data,i=e.onClick,c=e.openForm,l=Object(n.useState)([]),u=Object(o.a)(l,2),d=u[0],m=u[1],f=Object(n.useState)(!1),j=Object(o.a)(f,2),b=j[0],v=j[1];return Object(n.useEffect)((function(){if(b)m(Object(p.a)(s));else{for(var e=[],t=s.length>10?10:s.length,a=0;a<t;a++)e.push(s[a]);m([].concat(e))}}),[s,b]),Object(r.jsxs)("section",{className:"printData",children:[Object(r.jsx)("header",{className:"printData__header",children:t}),s.length>10&&Object(r.jsx)("button",{className:"printData__button",onClick:function(){v(!b)},children:b?"Show first 10":"Show all"}),Object(r.jsxs)("div",{className:"printData__body",children:[null===d||void 0===d?void 0:d.map((function(e){return Object(r.jsx)("p",{className:(t=null===e||void 0===e?void 0:e.id,a&&"number"===typeof a&&a===t||a&&"object"===typeof a&&a.indexOf(t)>-1?"printData__element selected":"printData__element"),onClick:function(){return i(e)},tabIndex:0,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.id);var t})),Object(r.jsx)(U.a,{fontSize:"large",className:"printData__add",onClick:function(){return c(t)},tabIndex:0})]})]})},J=a(5);a(179);var q=function(e){var t=Object(n.useState)({name:"",logo_url:""}),a=Object(o.a)(t,2),s=a[0],i=a[1];function c(e){var t=Object(J.a)({},s);t[e.target.id]=e.target.value,i(t)}return Object(r.jsxs)("form",{className:"form",onSubmit:function(t){return t.preventDefault(),void e.onSubmit(s)},children:[Object(r.jsx)("input",{className:"form__input",id:"name",type:"text",placeholder:e.placeholder,onChange:function(e){return c(e)}}),e.logo_placeholder&&Object(r.jsx)("input",{className:"form__input",id:"logo_url",type:"text",placeholder:e.logo_placeholder,onChange:function(e){return c(e)}}),Object(r.jsx)("button",{className:"form__button",children:"Add"}),Object(r.jsx)("p",{className:"form__error",children:e.errorMessage})]})},Q="http://ec2-52-51-232-161.eu-west-1.compute.amazonaws.com/api/festival/",Z="http://ec2-52-51-232-161.eu-west-1.compute.amazonaws.com/api/artist/",$="http://ec2-52-51-232-161.eu-west-1.compute.amazonaws.com/api/playlist/",ee="Festivals",te="Artists",ae="Playlists";var ne=function(e){var t=d(),a=Object(o.a)(t,2),s=a[0].accessToken,i=a[1],c=Object(n.useState)([]),l=Object(o.a)(c,2),u=l[0],m=l[1],j=Object(n.useState)([]),b=Object(o.a)(j,2),v=b[0],_=b[1],g=Object(n.useState)([]),O=Object(o.a)(g,2),h=O[0],y=O[1],x=Object(n.useState)([{title:ee,visible:!1},{title:te,visible:!1},{title:ae,visible:!1}]),S=Object(o.a)(x,2),I=S[0],N=S[1],T=Object(n.useState)({festivalId:null,artists:[],playlistId:null}),E=Object(o.a)(T,2),k=E[0],w=E[1];function C(){sessionStorage.removeItem("state"),i({type:"SET_FESTIVAL",user:null})}function P(e){var t=Object(p.a)(I),a=t.find((function(t){return t.title===e}));a.visible=!a.visible,N(t)}return Object(n.useEffect)((function(){f.a.get(Q).then((function(e){m(e.data)})),f.a.get(Z).then((function(e){_(e.data)})),f.a.get($).then((function(e){y(e.data)}))}),[]),Object(r.jsxs)("main",{className:"admin",children:[Object(r.jsxs)("header",{className:"admin__header",children:[Object(r.jsx)("button",{className:"admin__button",onClick:C,children:"Back to music"}),Object(r.jsxs)("div",{className:"admin__instructions",children:[Object(r.jsx)("p",{className:"admin__help",onClick:C,children:"Select festival..."}),Object(r.jsx)("p",{className:"admin__help",onClick:C,children:"Select artists..."}),Object(r.jsx)("p",{className:"admin__help",onClick:C,children:"Finally press '+' to create a new playlist with selected artists!"}),Object(r.jsx)("p",{className:"admin__help",onClick:C,children:"Forgot what playlist contains? No problems, just click on it!"})]})]}),Object(r.jsx)(X,{title:ee,selectedData:k.festivalId,data:u,onClick:function(e){var t=null;e.id!==k.festivalId&&(t=e.id),w({festivalId:t,artists:Object(p.a)(k.artists),playlistId:null})},openForm:P}),I.find((function(e){return e.title===ee})).visible&&Object(r.jsx)(q,{onSubmit:function(e){var t="",a=0;!e.name&&(t+="Please enter name <br>"),e.logo_url?(["http",".jpg",".png","svg"].forEach((function(t){!e.logo_url.includes(t)&&(a+=1)})),2!==a&&(t+="Please enter valid url, file format should be jpg, svg or png.")):t+="Please enter url for logo",""===t?(f.a.post(Q,{name:e.name,logo_url:e.logo_url}).then((function(e){return f.a.get(Q).then((function(e){m(e.data)}))})).catch((function(){document.getElementsByClassName("form__error")[0].innerHTML="Ooops something went wrong"})),P(ee)):(console.log("im here",document.getElementsByClassName("form__error")[0].innerHTML),document.getElementsByClassName("form__error")[0].innerHTML=t,console.log("and now after",document.getElementsByClassName("form__error")[0].innerHTML))},placeholder:"Festival name",logo_placeholder:"Logo url"}),Object(r.jsx)(X,{title:te,selectedData:k.artists,data:v,onClick:function(e){var t=Object(p.a)(k.artists);-1===k.artists.indexOf(e.id)?t.push(e.id):t.splice(k.artists.indexOf(e.id),1),w({festivalId:k.festivalId,artists:t,playlistId:null})},openForm:P}),I.find((function(e){return e.title===te})).visible&&Object(r.jsx)(q,{onSubmit:function(e){var t="",a=0;document.getElementsByClassName("form__error").length>1&&(a=1),!e.name&&(t+="Please enter name"),""===t?(f.a.post(Z,{name:e.name}).then((function(e){return f.a.get(Z).then((function(e){_(e.data)}))})).catch((function(){document.getElementsByClassName("form__error")[a].innerHTML="Ooops something went wrong"})),P(te)):document.getElementsByClassName("form__error")[a].innerHTML=t},placeholder:"Artist name"}),Object(r.jsx)(X,{title:ae,selectedData:k.playlistId,data:h,onClick:function(e){var t=null;e.id!==k.playlistId&&(t=e.id),w({festivalId:e.festival_id,artists:e.artists.split(",").map((function(e){return+e})),playlistId:t})},openForm:P}),I.find((function(e){return e.title===ae})).visible&&Object(r.jsx)(q,{onSubmit:function(e){var t="",a=document.getElementsByClassName("form__error").length-1;!e.name&&(t+="Please enter name <br>"),(!k.festivalId||0===k.artists.length)&&(t+="Please select Festival and Artists"),""===t?(f.a.post($,{festival_id:k.festivalId,artists:k.artists.join(","),name:e.name,spotify_token:s}).then((function(e){f.a.get($).then((function(e){y(e.data)})),P(ae)})).catch((function(){document.getElementsByClassName("form__error")[a].innerHTML="Ooops something went wrong"})),w({festivalId:null,artists:[]})):document.getElementsByClassName("form__error")[a].innerHTML=t},placeholder:"Playlist name"})]})},se=a(59),ie=a.n(se),ce=a(95),oe=(a(181),a(96)),re=a.n(oe);a(194);var le=function(e){var t=e.festival,a=e.chooseFestival;return Object(r.jsx)("div",{className:"festivalBlock",onClick:function(){a&&a(t)},tabIndex:1,children:Object(r.jsx)("img",{className:"festivalBlock__logo",src:t.logo_url,alt:"".concat(t.name," logo")})})},ue=["streaming","user-read-email","user-read-private","user-library-read","user-library-modify","user-read-playback-state","user-modify-playback-state","playlist-modify-private","playlist-read-private"];var de=function(e){sessionStorage.setItem("state",e);var t="https://accounts.spotify.com/authorize?client_id=".concat("afa5c44e65bc40928f489b6bff9d91fe","&response_type=code&show_dialog=").concat("true"!==sessionStorage.getItem("loggedIn"),"&redirect_uri=").concat("http://52.51.232.161:3000/","&scope=").concat(ue.join("%20"));window.location.href=t};var me=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],s=t[1],i=d(),c=Object(o.a)(i,2),l=c[0].accessToken,u=c[1];function m(e){u({type:"SET_FESTIVAL",festival:e}),sessionStorage.setItem("selectedFestival",JSON.stringify(e)),l||de("play")}return Object(n.useEffect)((function(){(function(){var e=Object(ce.a)(ie.a.mark((function e(){var t;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()("http://ec2-52-51-232-161.eu-west-1.compute.amazonaws.com/api/festival/");case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.jsxs)("div",{className:"festivals",children:[Object(r.jsx)("h4",{className:"festivals__login",onClick:function(){l?(sessionStorage.setItem("state","admin"),u({type:"SET_FESTIVAL",festival:null})):de("admin")},tabIndex:1,children:"Create new playlist"}),Object(r.jsx)(re.a,{className:"carousel",autoPlay:!0,timer:500,animation:"fade",indicators:!0,timeout:500,navButtonsProps:{style:{backgroundColor:"white",color:"black",borderRadius:"10px"}},indicatorIconButtonProps:{style:{color:"white",margin:"0 10px"}},activeIndicatorIconButtonProps:{style:{backgroundColor:"white"}},indicatorContainerProps:{style:{marginTop:"-40px"}},children:a.map((function(e){return Object(r.jsxs)("article",{className:"carousel__block",onClick:function(){return m(e)},children:[Object(r.jsx)("img",{src:e.logo_url,alt:"logo",className:"carousel__image"}),Object(r.jsxs)("button",{className:"carousel__button",tabIndex:0,children:["Get ",Object(r.jsx)("span",{className:"carousel__text",children:e.name})," boost!"]})]},e.id)}))}),Object(r.jsx)("section",{className:"festivals__list",children:a.map((function(e){return Object(r.jsx)(le,{festival:e,chooseFestival:m},e.id)}))})]})};var fe=function(e){var t=d(),a=Object(o.a)(t,2),s=a[0],i=s.accessToken,c=s.refreshToken,r=s.expiresIn,l=a[1];return Object(n.useEffect)((function(){f.a.post("http://52.51.232.161:3001/login",{code:e}).then((function(e){l({type:"SET_ACCESS_TOKEN",accessToken:e.data.accessToken}),l({type:"SET_REFRESH_TOKEN",refreshToken:e.data.refreshToken}),l({type:"SET_EXPIRES_IN",expiresIn:e.data.expiresIn}),window.history.pushState({},null,"/"),sessionStorage.setItem("loggedIn",!0),sessionStorage.setItem("token",e.data.accessToken),sessionStorage.setItem("refreshToken",e.data.refreshToken),sessionStorage.setItem("expiresIn",e.data.expiresIn)})).catch((function(){window.location="/"}))}),[e,l]),Object(n.useEffect)((function(){if(c&&r){var e=setInterval((function(){f.a.post("http://52.51.232.161:3001/refresh",{refreshToken:c}).then((function(e){console.log("here is response",e),l({type:"SET_ACCESS_TOKEN",accessToken:e.data.accessToken}),l({type:"SET_EXPIRES_IN",expiresIn:e.data.expiresIn}),console.log("new token"),sessionStorage.setItem("token",e.data.accessToken)})).catch((function(e){sessionStorage.removeItem("token"),sessionStorage.removeItem("refreshToken"),sessionStorage.removeItem("expiresIn"),console.log(e)}))}),1e3*(r-60));return function(){return clearInterval(e)}}}),[c,r,l]),i},je=new URLSearchParams(window.location.search).get("code");var be,pe=function(){var e=d(),t=Object(o.a)(e,1)[0].festival;return fe(je),"admin"===sessionStorage.getItem("state")?Object(r.jsx)(ne,{}):t?Object(r.jsx)(V,{}):Object(r.jsx)(me,{})},ve={user:null,playlists:[],favorites:(null===(be=localStorage.getItem("favorites"))||void 0===be?void 0:be.split(","))||[],playingPlaylist:null,accessToken:sessionStorage.getItem("token")||null,refreshToken:sessionStorage.getItem("refreshToken")||null,expiresIn:sessionStorage.getItem("expiresIn")||null,premium:!1,playingTrack:null,playingNow:!1,festival:JSON.parse(sessionStorage.getItem("selectedFestival"))||null},_e=function(e,t){switch(t.type){case"SET_USER":return Object(J.a)(Object(J.a)({},e),{},{user:t.user});case"SET_PLAYLISTS":return Object(J.a)(Object(J.a)({},e),{},{playlists:[].concat(Object(p.a)(e.playlists),[t.playlist])});case"SET_PLAYLIST":return Object(J.a)(Object(J.a)({},e),{},{playingPlaylist:t.playingPlaylist});case"SET_ACCESS_TOKEN":return Object(J.a)(Object(J.a)({},e),{},{accessToken:t.accessToken});case"SET_REFRESH_TOKEN":return Object(J.a)(Object(J.a)({},e),{},{refreshToken:t.refreshToken});case"SET_EXPIRES_IN":return Object(J.a)(Object(J.a)({},e),{},{expiresIn:t.expiresIn});case"SET_PREMIUM":return Object(J.a)(Object(J.a)({},e),{},{premium:t.premium});case"SET_PLAYING_TRACK":return Object(J.a)(Object(J.a)({},e),{},{playingTrack:t.playingTrack});case"SET_FAVORITES":return Object(J.a)(Object(J.a)({},e),{},{favorites:t.favorites});case"SET_PLAYING_NOW":return Object(J.a)(Object(J.a)({},e),{},{playingNow:t.playingNow});case"SET_FESTIVAL":return Object(J.a)(Object(J.a)({},e),{},{festival:t.festival,playlists:[],playingPlaylist:null,playingTrack:null});default:return e}};c.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(u,{initialState:ve,reducer:_e,children:Object(r.jsx)(pe,{})})}),document.getElementById("root"))}},[[195,1,2]]]);
//# sourceMappingURL=main.3fc1239a.chunk.js.map