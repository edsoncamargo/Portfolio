(()=>{"use strict";window.initSkillsEffect=function initSkillsEffect(){var e=document.getElementById("aboutTop"),t=document.getElementById("aboutBottom");window.addEventListener("scroll",(function(){var n=window.scrollY;window.screen.width>767?(e.style.transform="translateX(".concat(-.8*n,"px)"),t.style.transform="translateX(".concat(.8*n,"px)")):(e.style.transform="translateX(".concat(-.2*n,"px)"),t.style.transform="translateX(".concat(.2*n,"px)"))}))}})(),(()=>{"use strict";var e=document.querySelector(".cursor"),t=document.querySelector(".cursor-click");document.addEventListener("mousemove",(function(t){var n=document.getElementById("hello"),o=n.getBoundingClientRect().y,s=n.getBoundingClientRect().x;t.pageY>o&&t.pageY<o+n.clientHeight&&t.pageX>s&&t.pageX<s+n.clientWidth&&!e.classList.contains("none-cursor")?(document.querySelector("body").setAttribute("style","cursor: none"),e.setAttribute("style","top: "+(t.pageY-40)+"px; left: "+(t.pageX-40)+"px; display: inline-block;")):(document.querySelector("body").setAttribute("style","cursor: auto"),e.setAttribute("style","top: auto; left: auto; display: none;"))})),window.initCustomCursorClickHandler=function initCustomCursorClickHandler(){document.addEventListener("mousemove",(function(e){var n=document.querySelectorAll(".clickable"),o=!1;if(n.forEach((function(n){var s=n.getBoundingClientRect().y,c=n.getBoundingClientRect().x;e.clientY>s&&e.clientY<s+n.clientHeight&&e.clientX>c&&e.clientX<c+n.clientWidth&&(document.querySelector("body").setAttribute("style","cursor: none;"),t.setAttribute("style","top: "+(e.pageY-10)+"px; left: "+(e.pageX-10)+"px; display: inline-block;"),o=!0)})),!1===o){if(isDayTime()){var s=!0;s&&document.querySelector("body").setAttribute("style","cursor: auto;"),setTimeout((function(){s=!1,document.querySelector("body").setAttribute("style","cursor: auto;")}),2e3)}else document.querySelector("body").setAttribute("style","cursor: auto;");t.setAttribute("style","top: auto; left: auto; display: none;")}}))}})(),window.includeHTML=function includeHTML(){var e,t,n,o,s;for(e=document.getElementsByTagName("*"),t=0;t<e.length;t++)if(o=(n=e[t]).getAttribute("w3-include-html"))return(s=new XMLHttpRequest).onreadystatechange=function(){4==this.readyState&&(200==this.status&&(n.innerHTML=this.responseText),404==this.status&&(n.innerHTML="Page not found."),n.removeAttribute("w3-include-html"),includeHTML())},s.open("GET",o,!0),void s.send()},(()=>{"use strict";window.isDayTime=function isDayTime(){var e=(new Date).getHours();return e>6&&e<18}})(),(()=>{"use strict";function initParallaxEffect(){var e=document.getElementById("navbarBrand"),t=document.getElementById("stars"),n=document.getElementById("moon"),o=document.getElementById("name"),s=document.getElementById("am"),c=document.getElementById("title"),i=document.getElementById("montainsLeft"),l=document.getElementById("stoneLeft1"),a=document.getElementById("stoneLeft2"),d=document.getElementById("montainsRight"),r=document.getElementById("stoneRight1"),u=document.getElementById("stoneRight2");window.addEventListener("scroll",(function(){var m=window.scrollY;t.style.left=.2*m+"px",e.style.transform="translateY(".concat(-.2*m,"px)"),n.style.transform="translateY(".concat(1.05*m,"px)"),window.screen.availWidth>=1180&&(i.style.transform="translateX(".concat(-.1*m,"px)")),l.style.top="".concat(-.35*m,"px"),l.style.left="".concat(-.35*m,"px"),a.style.top="".concat(-.25*m,"px"),a.style.left="".concat(-.25*m,"px"),window.screen.availWidth>=1180&&(d.style.transform="translateX(".concat(.1*m,"px)")),r.style.top="".concat(-.1*m,"px"),r.style.right="".concat(-.25*m,"px"),u.style.top="".concat(-.15*m,"px"),u.style.right="".concat(-.35*m,"px"),o.style.transform="translateY(".concat(1.3*m,"px)"),s.style.transform="translateX(".concat(-1.3*m,"px)"),c.style.transform="translateX(".concat(1.3*m,"px)")}))}function initMouseParallaxEffect(){window.onscroll=function(e){}}window.openHomeDoors=function openHomeDoors(){var e=document.querySelector(".cursor");e.setAttribute("style","top: auto; left: auto; display: none;"),e.classList.add("none-cursor"),isDayTime()?document.querySelector(".container").classList.add("day"):document.querySelector(".container").classList.add("night"),setTimeout((function(){document.querySelector(".left").classList.add("open"),document.querySelector(".right").classList.add("open")}),100),setTimeout((function(){document.getElementById("hello").classList.add("open"),isDayTime()?document.getElementById("hello").classList.add("day"):document.getElementById("hello").classList.add("night"),setTimeout((function(){setTimeout((function(){isDayTime()?document.querySelector("body").classList.add("day"):document.querySelector("body").classList.add("night"),document.getElementById("home").classList.add("d-none"),document.getElementById("hello").classList.remove("opening"),document.getElementById("hello").classList.remove("open"),document.getElementById("main").classList.remove("d-none"),document.getElementById("header").classList.remove("d-none"),document.getElementById("about").classList.remove("d-none"),document.getElementById("projects").classList.remove("d-none"),document.getElementById("works").classList.remove("d-none"),document.getElementById("footer").classList.remove("d-none"),setTimeout((function(){document.getElementById("header").classList.add("header-opened")}),200),changeThemeByHour(),initCustomCursorClickHandler(),initParallaxEffect(),initMouseParallaxEffect(),initSkillsEffect(),setTimeout((function(){document.getElementById("main").classList.add("open")}),200)}),600)}),600)}),600)},window.initParallaxEffect=initParallaxEffect,window.initMouseParallaxEffect=initMouseParallaxEffect})(),(()=>{"use strict";window.changeThemeByHour=function changeThemeByHour(){var e=document.getElementById("stars"),t=[document.getElementById("moon"),document.getElementById("montainsLeft"),document.getElementById("stoneLeft1"),document.getElementById("stoneLeft2"),document.getElementById("montainsRight"),document.getElementById("stoneRight1"),document.getElementById("stoneRight2")];isDayTime()&&(e.style.opacity="0",t.forEach((function(e){var t=e.src.indexOf("/assets/images/home/night/"),n=e.src.substring(t).replace("night","day");e.src="..".concat(n)})))}})();