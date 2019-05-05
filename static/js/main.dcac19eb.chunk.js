(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/anemometer.aa33c466.jpg"},function(e,t,a){e.exports=a.p+"static/media/thunderstorm.fb95fb97.jpg"},function(e,t,a){e.exports=a.p+"static/media/drizzle.a2f6f647.jpg"},function(e,t,a){e.exports=a.p+"static/media/rain.9d6a80dd.jpg"},function(e,t,a){e.exports=a.p+"static/media/snow.3a70ab55.jpg"},function(e,t,a){e.exports=a.p+"static/media/clearSky.e5604527.jpg"},function(e,t,a){e.exports=a.p+"static/media/clouds.80f03ece.jpg"},function(e,t,a){e.exports=a.p+"static/media/mist.2982b52d.jpg"},function(e,t,a){e.exports=a.p+"static/media/smoke.63c25cea.jpg"},function(e,t,a){e.exports=a.p+"static/media/haze.30c44849.jpg"},function(e,t,a){e.exports=a.p+"static/media/dust.3d7b267f.jpg"},function(e,t,a){e.exports=a.p+"static/media/fog.afd4c23b.jpg"},function(e,t,a){e.exports=a.p+"static/media/squall.d0e1fd36.jpg"},function(e,t,a){e.exports=a.p+"static/media/tornado.d012d229.jpg"},,,function(e,t,a){e.exports=a(30)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c),l=(a(28),a(3)),i=a(4),u=a(20),s=a(5),m=a(21),d=(a(29),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Welcome to Weather App"),r.a.createElement("h2",null,"Check current weather conditions for your location")))}),p=function(e){return r.a.createElement("div",{className:"form"},r.a.createElement("form",null,r.a.createElement("input",{value:e.value,onChange:e.change,type:"text",placeholder:"Enter city name "})))},g=function(e){var t=e.state,a=t.date,n=t.conditions,c=t.detailedConditions,o=t.sunrise,l=t.sunset,i=t.temperature,u=t.pressure,s=t.humidity,m=t.wind,d=t.clouds,p=t.city,g=new Date(1e3*o).toLocaleTimeString(),h=new Date(1e3*l).toLocaleTimeString();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"results"},r.a.createElement("h2",null," Current weather conditions for ",r.a.createElement("span",null," ",p," ")),r.a.createElement("h2",null,"Date: ",r.a.createElement("span",null,a," ")," "),r.a.createElement("ul",null,r.a.createElement("li",null,"Weather conditions:"," ",r.a.createElement("span",null,n," - ",c)," "),r.a.createElement("li",null,"Sunrise: ",r.a.createElement("span",null,g," ")),r.a.createElement("li",null,"Sunset: ",r.a.createElement("span",null,h)," "),r.a.createElement("li",null,"Temperature: ",r.a.createElement("span",null,i," \xb0C")),r.a.createElement("li",null,"Pressure: ",r.a.createElement("span",null,u," hPa")),r.a.createElement("li",null,"Humidity: ",r.a.createElement("span",null,s," %")),r.a.createElement("li",null,"Wind speed: ",r.a.createElement("span",null,m," m/s")),r.a.createElement("li",null,"Clouds: ",r.a.createElement("span",null,d," %")),r.a.createElement("li",null))))},h=a(6),f=a.n(h),E=a(7),v=a.n(E),b=a(8),w=a.n(b),k=a(9),y=a.n(k),j=a(10),I=a.n(j),x=a(11),C=a.n(x),S=a(12),D=a.n(S),z=a(13),W=a.n(z),F=a(14),O=a.n(F),T=a(15),A=a.n(T),N=a(16),P=a.n(N),q=a(17),L=a.n(q),B=a(18),H=a.n(B),J=a(19),M=a.n(J),R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",city:"",conditions:"",detailedConditions:"",sunrise:"",sunset:"",temperature:"",pressure:"",humidity:"",wind:"",clouds:"",error:!1},a.handleInputForm=function(e){console.log(e.target.value),a.setState({value:e.target.value})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this;if(0!==this.state.value.length&&t.value!==this.state.value){var n="http://api.openweathermap.org/data/2.5/weather?q=".concat(this.state.value,"&APPID=").concat("d3334eb120bec7fa718c730d966bf414","&units=metric");fetch(n).then(function(e){if(e.ok)return e;throw Error("City not found")}).then(function(e){return e.json()}).then(function(e){var t=(new Date).toLocaleString();a.setState(function(a){return{error:!1,date:t,conditions:e.weather[0].main,detailedConditions:e.weather[0].description,sunrise:e.sys.sunrise,sunset:e.sys.sunset,temperature:e.main.temp,pressure:e.main.pressure,humidity:e.main.humidity,wind:e.wind.speed,clouds:e.clouds.all,city:a.value}})}).catch(function(){a.setState(function(e){return{error:!0,city:e.value}})})}}},{key:"render",value:function(){var e=this.state.conditions,t={backgroundImage:"url(".concat(f.a,")")};return"Thunderstorm"===e?t.backgroundImage="url(".concat(v.a,")"):"Drizzle"===e?t.backgroundImage="url(".concat(w.a,")"):"Rain"===e?t.backgroundImage="url(".concat(y.a,")"):"Snow"===e?t.backgroundImage="url(".concat(I.a,")"):"Clear"===e?t.backgroundImage="url(".concat(C.a,")"):"Clouds"===e?t.backgroundImage="url(".concat(D.a,")"):"Mist"===e?t.backgroundImage="url(".concat(W.a,")"):"Smoke"===e?t.backgroundImage="url(".concat(O.a,")"):"Haze"===e?t.backgroundImage="url(".concat(A.a,")"):"Dust"===e?t.backgroundImage="url(".concat(P.a,")"):"Fog"===e?t.backgroundImage="url(".concat(L.a,")"):"Squall"===e?t.backgroundImage="url(".concat(H.a,")"):"Tornado"===e&&(t.backgroundImage="url(".concat(M.a,")")),r.a.createElement("div",{className:"App",style:t},r.a.createElement(d,null),r.a.createElement(p,{value:this.state.value,change:this.handleInputForm}),r.a.createElement(g,{state:this.state}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[22,1,2]]]);
//# sourceMappingURL=main.dcac19eb.chunk.js.map