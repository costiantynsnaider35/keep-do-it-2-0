import{a,S as l,N as c,A as d,b as u}from"./assets/vendor-Bx7O_HbC.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();a.defaults.baseURL="https://portfolio-js.b.goit.study/api/reviews";const p=document.querySelector(".review-list");function f(){new l(".swiper",{modules:[c],slidesPerView:1,spaceBetween:16,loop:!1,speed:500,navigation:{nextEl:".review-nav-btn.swiper-button-next",prevEl:".review-nav-btn.swiper-button-prev"},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}}})}f();async function w(){try{const r=await a.get("");console.log(r.data);const i=r.data.map(s=>`<li class="review-item swiper-slide">
            <img src="${s.avatar_url}" alt="" class="review-item-img" />
            <h3 class="review-item-name">${s.author}</h3>
            <p class="review-item-text">
              ${s.review}
            </p>
          </li>`).join("");p.insertAdjacentHTML("beforeend",i)}catch(r){console.log(r)}}w();new d(".accordion-container",{openOnInit:[0],elementClass:"accordion-item",triggerClass:"accordion-trigger",panelClass:"accordion-panel",showMultiple:!1});new l(".swiper",{navigation:{nextEl:".custom-nav-btn"},spaceBetween:0,loop:!0,keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});document.addEventListener("DOMContentLoaded",()=>{u({targets:".glass-effect",translateX:52,duration:1e3,loop:!0,easing:"linear"})});
//# sourceMappingURL=commonHelpers.js.map
