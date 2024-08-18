import{a as u,i as p,A as g,S as v,N as f,K as w,b as L,Z as b}from"./assets/vendor-BlyLG-Xi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();u.defaults.baseURL="https://portfolio-js.b.goit.study/api/requests";document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("modal-window"),o=document.querySelector(".modal-overlay"),i=document.querySelector(".close-btn"),n=document.querySelector(".footer-form");n.addEventListener("submit",function(t){t.preventDefault(),o.classList.remove("visually-hidden"),e.classList.remove("visually-hidden"),o.classList.add("active"),e.classList.add("active"),n.reset(),p.success({title:"Success",message:"Your message has been sent successfully!",position:"topRight"})}),i.addEventListener("click",function(){o.classList.remove("active"),e.classList.remove("active"),o.classList.add("visually-hidden"),e.classList.add("visually-hidden")}),o.addEventListener("click",function(){i.click()}),document.addEventListener("keydown",function(t){t.key==="Escape"&&i.click()})});new g(".accordion-container",{openOnInit:[0],elementClass:"accordion-item",triggerClass:"accordion-trigger",panelClass:"accordion-panel",showMultiple:!0});new v(".about-me-swiper",{modules:[f,w],navigation:{nextEl:".custom-nav-btn"},slidesPerView:2,spaceBetween:0,loop:!0,keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".covers"),o=document.querySelectorAll(".list-covers");function i(s){const r=s.getBoundingClientRect();return r.top<window.innerHeight&&r.bottom>0}function n(){const s=i(e);o.forEach(r=>{r.classList.toggle("in-view",s),console.log(`Animation ${s?"started":"stopped"}`)})}const t=y(n,150);window.addEventListener("scroll",t),n()});function y(e,o){let i;return function(...n){clearTimeout(i),i=setTimeout(()=>e.apply(this,n),o)}}const h=document.querySelector(".mob-menu-open-btn"),a=document.querySelector(".mob-menu"),E=document.querySelector(".mob-menu-close-btn"),c=document.querySelector(".drop-menu-nav"),S=document.querySelector(".header-menu"),k=document.querySelector(".mob-menu-nav"),M=document.querySelector(".order-btn"),q=document.querySelector(".mob-order-btn");function C(){a.classList.add("is-open")}function V(){a.classList.remove("is-open")}function O(){c.classList.contains("drop-menu-show")?c.classList.remove("drop-menu-show"):c.classList.add("drop-menu-show")}function P(e){e.key==="Escape"&&c.classList.remove("drop-menu-show")}function d(e){e.preventDefault(),a.classList.contains("is-open")&&a.classList.remove("is-open");const o=e.target.getAttribute("href").substring(1),i=document.getElementById(o);window.scrollTo({top:i.offsetTop,behavior:"smooth"})}h.addEventListener("click",C);E.addEventListener("click",V);S.addEventListener("click",O);c.addEventListener("click",d);k.addEventListener("click",d);window.addEventListener("keydown",P);M.addEventListener("click",d);q.addEventListener("click",d);window.onclick=function(e){!e.target.matches(".header-menu")&&!e.target.matches(".drop-menu-nav")&&c.classList.remove("drop-menu-show")};document.addEventListener("DOMContentLoaded",()=>{L({targets:".glass-effect",translateX:52,duration:1e3,loop:!0,easing:"linear"})});u.defaults.baseURL="https://portfolio-js.b.goit.study/api/reviews";const l=document.querySelector(".review-list");new v(".review-container",{modules:[f,w,b],speed:500,loop:!1,spaceBetween:16,navigation:{nextEl:".review-btn-next",prevEl:".review-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0},zoom:!0,zoom:{toggle:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}}});async function A(){try{const e=await u.get("");if(e.data.length===0)l.insertAdjacentHTML("beforeend",'<div class="err-container"><p class="error-mes">Not Found</p></div>');else{const o=e.data.map(n=>`<li class="review-item swiper-slide card-zoom">
            <img src="${n.avatar_url}" alt="" class="review-item-img" />
            <h3 class="review-item-name">${n.author}</h3>
            <p class="review-item-text">
              ${n.review}
            </p>
          </li>`).join("");l.insertAdjacentHTML("beforeend",o),document.querySelectorAll(".review-item").forEach(n=>{n.addEventListener("click",()=>{n.classList.toggle("expanded")})})}}catch(e){console.log(e),l.insertAdjacentHTML("beforeend",'<div class="err-container"><p class="error-mes">Not Found</p></div>'),window.addEventListener("scroll",()=>{T(I)&&!m&&(p.error({message:"Serever error 404",backgroundColor:"red",position:"bottomRight",timeout:3e3}),m=!0)})}}A();const I=document.querySelector(".review-section");let m=!1;function T(e){const o=e.getBoundingClientRect();return o.top<=window.innerHeight&&o.bottom>=0}
//# sourceMappingURL=commonHelpers.js.map
