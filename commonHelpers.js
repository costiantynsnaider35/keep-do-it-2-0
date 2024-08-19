import{a as v,i as p,A as h,S as f,N as w,K as b,b as k,c as q,Z as M}from"./assets/vendor-CQEbdGCw.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();v.defaults.baseURL="https://portfolio-js.b.goit.study/api/requests";const d=document.getElementById("modal-window"),l=document.querySelector(".modal-overlay"),g=document.querySelector(".close-btn"),a=document.querySelector(".footer-form");a.addEventListener("submit",async function(n){n.preventDefault();const r=a.elements.email.value,s=a.elements.comment.value,t={email:r,comment:s};try{const o=await v.post("",t);console.log(o),l.classList.remove("visually-hidden"),d.classList.remove("visually-hidden"),l.classList.add("active"),d.classList.add("active"),a.reset(),p.success({title:"Success",message:"Your message has been sent successfully!",position:"topRight"})}catch{p.error({title:"Error",message:"Something went wrong. Please correct your input and try again.",position:"topRight"})}});g.addEventListener("click",function(){l.classList.remove("active"),d.classList.remove("active"),l.classList.add("visually-hidden"),d.classList.add("visually-hidden")});l.addEventListener("click",function(){g.click()});document.addEventListener("keydown",function(e){e.key==="Escape"&&g.click()});new h(".accordion-container",{openOnInit:[0],elementClass:"accordion-item",triggerClass:"accordion-trigger",panelClass:"accordion-panel",showMultiple:!0});new f(".about-me-swiper",{modules:[w,b],speed:500,navigation:{nextEl:".custom-nav-btn"},slidesPerView:2,spaceBetween:0,loop:!0,keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});function C(){const e=document.querySelector(".scroll-up");this.scrollY>=2250?e.classList.add("show-scroll"):e.classList.remove("show-scroll")}window.addEventListener("scroll",C);document.querySelector(".scroll-up").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});document.addEventListener("DOMContentLoaded",()=>{const e=k({origin:"bottom",distance:"50px",duration:2300,delay:0,reset:!0});e.reveal(".about-me-text-box,.about-me-img"),e.reveal(".about-me-text",{delay:200}),e.reveal(".about-me-swiper")});const V=document.querySelector(".custom-nav-btn"),O=document.querySelectorAll(".accordion-trigger");function E(){this.blur()}V.addEventListener("click",E);O.forEach(e=>{e.addEventListener("click",E)});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".covers"),n=document.querySelectorAll(".list-covers");function r(o){const i=o.getBoundingClientRect();return i.top<window.innerHeight&&i.bottom>0}function s(){const o=r(e);n.forEach(i=>{i.classList.toggle("in-view",o),console.log(`Animation ${o?"started":"stopped"}`)})}const t=P(s,150);window.addEventListener("scroll",t),s()});function P(e,n){let r;return function(...s){clearTimeout(r),r=setTimeout(()=>e.apply(this,s),n)}}new h(".accordion-container-faq",{openOnInit:[],elementClass:"faq-accordion-item",triggerClass:"faq-accordion-trigger",panelClass:"faq-accordion-panel",showMultiple:!1});const B=document.querySelector(".mob-menu-open-btn"),y=document.querySelector(".mob-menu"),I=document.querySelector(".mob-menu-close-btn"),c=document.querySelector(".drop-menu-nav"),x=document.querySelector(".header-menu"),A=document.querySelector(".mob-menu-nav"),j=document.querySelector(".order-btn"),T=document.querySelector(".mob-order-btn");function R(){y.classList.add("is-open"),document.body.classList.add("no-scroll")}function S(){y.classList.remove("is-open"),document.body.classList.remove("no-scroll")}function D(){c.classList.contains("drop-menu-show")?c.classList.remove("drop-menu-show"):c.classList.add("drop-menu-show")}function N(e){e.key==="Escape"&&c.classList.remove("drop-menu-show")}function u(e){e.preventDefault(),y.classList.contains("is-open")&&S();const n=e.target.getAttribute("href").substring(1),r=document.getElementById(n);window.scrollTo({top:r.offsetTop,behavior:"smooth"})}B.addEventListener("click",R);I.addEventListener("click",S);x.addEventListener("click",D);c.addEventListener("click",u);A.addEventListener("click",u);window.addEventListener("keydown",N);j.addEventListener("click",u);T.addEventListener("click",u);window.onclick=function(e){!e.target.matches(".header-menu")&&!e.target.matches(".drop-menu-nav")&&c.classList.remove("drop-menu-show")};document.addEventListener("DOMContentLoaded",()=>{q({targets:".glass-effect",translateX:52,duration:1e3,loop:!0,easing:"linear"})});new f(".projects-swiper",{modules:[w,b],speed:500,loop:!1,spaceBetween:99,slidesPerView:1,direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!1},navigation:{nextEl:".projects-swiper-button-right",prevEl:".projects-swiper-button-left",disabledClass:"swiper-button-disabled"}});const m=document.querySelector(".review-list");new f(".review-container",{modules:[w,b,M],speed:500,loop:!1,spaceBetween:16,navigation:{nextEl:".review-btn-next",prevEl:".review-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0},zoom:!0,zoom:{toggle:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}}});async function H(){try{const e=await v.get("https://portfolio-js.b.goit.study/api/reviews");if(e.data.length===0)m.insertAdjacentHTML("beforeend",'<div class="err-container"><p class="error-mes">Not Found</p></div>');else{const n=e.data.map(s=>`<li class="review-item swiper-slide card-zoom">
            <img src="${s.avatar_url}" alt="" class="review-item-img" />
            <h3 class="review-item-name">${s.author}</h3>
            <p class="review-item-text">
              ${s.review}
            </p>
          </li>`).join("");m.insertAdjacentHTML("beforeend",n),document.querySelectorAll(".review-item").forEach(s=>{s.addEventListener("click",()=>{s.classList.toggle("expanded")})})}}catch(e){console.log(e),m.insertAdjacentHTML("beforeend",'<div class="err-container"><p class="error-mes">Not Found</p></div>'),window.addEventListener("scroll",()=>{F(z)&&!L&&(p.error({message:"Serever error 404",backgroundColor:"red",position:"bottomRight",timeout:3e3}),L=!0)})}}H();const z=document.querySelector(".review-section");let L=!1;function F(e){const n=e.getBoundingClientRect();return n.top<=window.innerHeight&&n.bottom>=0}
//# sourceMappingURL=commonHelpers.js.map
