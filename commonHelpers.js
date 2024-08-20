import{a as L,i as v,A as E,S as f,N as w,K as g,b,c as C,Z as q}from"./assets/vendor-CQEbdGCw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const u=document.getElementById("modal-window"),l=document.querySelector(".modal-overlay"),h=document.querySelector(".close-btn"),a=document.querySelector(".footer-form");a.addEventListener("submit",async function(t){t.preventDefault();const r=a.elements.email.value,s=a.elements.comment.value,o={email:r,comment:s};try{const n=await L.post("https://portfolio-js.b.goit.study/api/requests",o);console.log(n),l.classList.remove("visually-hidden"),u.classList.remove("visually-hidden"),l.classList.add("active"),u.classList.add("active"),a.reset(),v.success({title:"Success",message:"Your message has been sent successfully!",position:"topRight"})}catch{v.error({title:"Error",message:"Something went wrong. Please correct your input and try again.",position:"topRight"})}});h.addEventListener("click",function(){l.classList.remove("active"),u.classList.remove("active"),l.classList.add("visually-hidden"),u.classList.add("visually-hidden")});l.addEventListener("click",function(){h.click()});document.addEventListener("keydown",function(e){e.key==="Escape"&&h.click()});new E(".accordion-container",{openOnInit:[0],elementClass:"accordion-item",triggerClass:"accordion-trigger",panelClass:"accordion-panel",showMultiple:!0});new f(".about-me-swiper",{modules:[w,g],speed:500,navigation:{nextEl:".custom-nav-btn"},slidesPerView:2,spaceBetween:0,loop:!0,keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});function V(){const e=document.querySelector(".scroll-up");this.scrollY>=2250?e.classList.add("show-scroll"):e.classList.remove("show-scroll")}window.addEventListener("scroll",V);document.querySelector(".scroll-up").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});document.addEventListener("DOMContentLoaded",()=>{const e=b({origin:"bottom",distance:"50px",duration:2300,delay:0,reset:!0});e.reveal(".about-me-text-box,.about-me-img"),e.reveal(".about-me-text",{delay:200}),e.reveal(".about-me-swiper")});const B=document.querySelector(".custom-nav-btn"),O=document.querySelectorAll(".accordion-trigger");function S(){this.blur()}B.addEventListener("click",S);O.forEach(e=>{e.addEventListener("click",S)});document.addEventListener("DOMContentLoaded",()=>{b({origin:"bottom",distance:"50px",duration:2300,delay:0,reset:!0}).reveal(".benefits-cards")});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".covers"),t=document.querySelectorAll(".list-covers");function r(n){const i=n.getBoundingClientRect();return i.top<window.innerHeight&&i.bottom>0}function s(){const n=r(e);t.forEach(i=>{i.classList.toggle("in-view",n),console.log(`Animation ${n?"started":"stopped"}`)})}const o=x(s,150);window.addEventListener("scroll",o),s()});function x(e,t){let r;return function(...s){clearTimeout(r),r=setTimeout(()=>e.apply(this,s),t)}}new E(".faq-accordion-container",{elementClass:"faq-accordion-item",triggerClass:"faq-accordion-trigger",panelClass:"faq-accordion-panel",showMultiple:!1});const P=document.querySelectorAll(".accordion-trigger");function A(){this.blur()}P.forEach(e=>{e.addEventListener("click",A)});const c=e=>document.querySelector(e),I=c(".mob-menu-open-btn"),M=c(".mob-menu"),j=c(".mob-menu-close-btn"),m=c(".drop-menu-nav"),T=c(".header-menu"),D=c(".mob-menu-nav"),N=c(".order-btn"),R=c(".mob-order-btn"),H=(e,t)=>e.classList.toggle(t),z=()=>{M.classList.add("is-open"),document.body.classList.add("no-scroll")},k=()=>{M.classList.remove("is-open"),document.body.classList.remove("no-scroll")},$=()=>H(m,"drop-menu-show"),F=({key:e})=>{e==="Escape"&&m.classList.remove("drop-menu-show")},d=e=>{e.preventDefault(),k();const t=document.getElementById(e.target.getAttribute("href").substring(1));window.scrollTo({top:t.offsetTop,behavior:"smooth"})};[{element:I,action:z},{element:j,action:k},{element:T,action:$},{element:m,action:d},{element:D,action:d},{element:N,action:d},{element:R,action:d}].forEach(({element:e,action:t})=>e.addEventListener("click",t));window.addEventListener("keydown",F);window.onclick=({target:e})=>{e.closest(".header-menu, .drop-menu-nav")||m.classList.remove("drop-menu-show")};document.addEventListener("DOMContentLoaded",()=>{C({targets:".background-effect",translateX:52,duration:1e3,loop:!0,easing:"linear"})});document.addEventListener("DOMContentLoaded",()=>{b({origin:"bottom",distance:"50px",duration:2300,delay:0,reset:!0}).reveal(".hero-title")});new f(".projects-swiper",{modules:[w,g],speed:500,loop:!1,spaceBetween:99,slidesPerView:1,direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!1},navigation:{nextEl:".projects-swiper-button-right",prevEl:".projects-swiper-button-left",disabledClass:"swiper-button-disabled"}});const p=document.querySelector(".review-list");new f(".review-container",{modules:[w,g,q],speed:500,loop:!1,spaceBetween:16,navigation:{nextEl:".review-btn-next",prevEl:".review-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0},zoom:!0,zoom:{toggle:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}}});async function K(){try{const e=await L.get("https://portfolio-js.b.goit.study/api/reviews");if(e.data.length===0)p.insertAdjacentHTML("beforeend",'<div class="err-container"><p class="error-mes">Not Found</p></div>');else{const t=e.data.map((s,o)=>`<li class="review-item swiper-slide card-zoom">
            <img src="${s.avatar_url}" alt="" class="review-item-img" />
            <h3 class="review-item-name">${s.author}</h3>
            <p class="review-item-text">
              ${s.review}
            </p>
          </li>`).join("");p.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".review-item").forEach(s=>{s.addEventListener("click",()=>{s.classList.toggle("expanded")})})}}catch(e){console.log(e),p.insertAdjacentHTML("beforeend",'<div class="err-container"><p class="error-mes">Not Found</p></div>'),window.addEventListener("scroll",()=>{Y(U)&&!y&&(v.error({message:"Serever error 404",backgroundColor:"red",position:"bottomRight",timeout:3e3}),y=!0)})}}K();const U=document.querySelector(".review-section");let y=!1;function Y(e){const t=e.getBoundingClientRect();return t.top<=window.innerHeight&&t.bottom>=0}
//# sourceMappingURL=commonHelpers.js.map
