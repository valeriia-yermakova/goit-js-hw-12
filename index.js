import{S as p,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function y(i,s){const o="https://pixabay.com/api/",t="45506482-0746cd613ccb32219c9653431";try{const e=await fetch(`${o}?key=${t}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=15`);if(!e.ok)throw new Error(`Error ${e.status}: ${e.statusText}`);const r=await e.json();if(r.hits.length===0)throw new Error("No images found.");return r}catch(e){throw new Error(e.message)}}let d;function v(i){const s=document.querySelector(".gallery-list"),o=i.hits.map(t=>`
        <div class="image-frame">
          <a href="${t.largeImageURL}">
            <img class="image" src="${t.webformatURL}" alt="${t.tags}" />
          </a>
          <div class="text-wrapper">
            <div class="text-block">
              <h5>Likes</h5><p>${t.likes}</p>
            </div>
            <div class="text-block">
              <h5>Views</h5><p>${t.views}</p>
            </div>
            <div class="text-block">
              <h5>Comments</h5><p>${t.comments}</p>
            </div>
            <div class="text-block">
              <h5>Downloads</h5><p>${t.downloads}</p>
            </div>
          </div>
        </div>`).join("");s.insertAdjacentHTML("beforeend",o),d.refresh()}function L(){const i=document.querySelector(".gallery-list");i.innerHTML=""}function g(){return d=new p(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250}),d}const w=document.querySelector(".gallery-form"),b=document.querySelector(".input-for-gallery"),f=document.querySelector(".loader"),$=document.querySelector(".gallery-list"),u=document.querySelector(".load-more");let m=1,n="",c;w.addEventListener("submit",S);u.addEventListener("click",x);function S(i){if(i.preventDefault(),L(),m=1,n=b.value.trim(),n===""){a.error({position:"topRight",message:"Please fill the input"});return}h(n,m)}function x(){h(n,++m)}async function h(i,s){try{f.classList.add("active");const o=await y(i,s);if(o.totalHits===0){a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}if(v(o),c?c.refresh():c=g(),s>1){const{height:t}=$.firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}o.hits.length<15||s*15>=o.totalHits?(u.classList.add("hidden"),a.info({position:"topRight",message:"No more images to load."})):u.classList.remove("hidden")}catch(o){a.error({position:"topRight",message:`An error occurred: ${o.message}`})}finally{f.classList.remove("active")}}c=g();
//# sourceMappingURL=index.js.map
