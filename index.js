import{S as h,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function y(s,i){const r="https://pixabay.com/api/",o="45506482-0746cd613ccb32219c9653431";try{const e=await fetch(`${r}?key=${o}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${i}&per_page=15`);if(!e.ok)throw new Error(`Error ${e.status}: ${e.statusText}`);const t=await e.json();if(t.hits.length===0)throw new Error("No images found.");return t}catch(e){throw new Error(e.message)}}let d;function v(s){const i=document.querySelector(".gallery-list"),r=s.hits.map(o=>`
        <div class="image-frame">
          <a href="${o.largeImageURL}">
            <img class="image" src="${o.webformatURL}" alt="${o.tags}" />
          </a>
          <div class="text-wrapper">
            <div class="text-block">
              <h5>Likes</h5><p>${o.likes}</p>
            </div>
            <div class="text-block">
              <h5>Views</h5><p>${o.views}</p>
            </div>
            <div class="text-block">
              <h5>Comments</h5><p>${o.comments}</p>
            </div>
            <div class="text-block">
              <h5>Downloads</h5><p>${o.downloads}</p>
            </div>
          </div>
        </div>`).join("");i.insertAdjacentHTML("beforeend",r),d.refresh()}function L(){const s=document.querySelector(".gallery-list");s.innerHTML=""}function p(){return d=new h(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250}),d}const b=document.querySelector(".gallery-form"),w=document.querySelector(".input-for-gallery"),f=document.querySelector(".loader");document.querySelector(".gallery-list");const u=document.querySelector(".load-more");let m=1,n="",c;b.addEventListener("submit",$);u.addEventListener("click",S);function $(s){if(s.preventDefault(),L(),m=1,n=w.value.trim(),n===""){a.error({position:"topRight",message:"Please fill the input"});return}g(n,m)}function S(){g(n,++m)}async function g(s,i){try{f.classList.add("active");const r=await y(s,i);if(r.totalHits===0){a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}v(r),c?c.refresh():c=p(),r.hits.length<15||i*15>=r.totalHits?(u.classList.add("hidden"),a.info({position:"topRight",message:"No more images to load."})):u.classList.remove("hidden")}catch(r){a.error({position:"topRight",message:`An error occurred: ${r.message}`})}finally{f.classList.remove("active")}}c=p();
//# sourceMappingURL=index.js.map
