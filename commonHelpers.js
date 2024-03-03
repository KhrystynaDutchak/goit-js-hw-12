import{i as p,S as h,a as f}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d=o=>{p.error({title:"Error",message:o,position:"topRight"})},m=o=>{const t=new h(".gallery a",{disableScroll:!1,overlayOpacity:.8,captions:!0,captionsData:"alt",captionDelay:250}),n=document.querySelector(".gallery");let s="";o.forEach(e=>{s+=`
        <li>
                <a href="${e.largeImageURL}">
                    <img src="${e.webformatURL}" alt="${e.tags}">
                    <div class="image-info">
                        <p>Likes: ${e.likes}</p>
                        <p>Views: ${e.views}</p>
                        <p>Comments: ${e.comments}</p>
                        <p>Downloads: ${e.downloads}</p>
                    </div>
                </a>
            </li>
        `}),n.innerHTML+=s,t.refresh()},u=async(o,t,n)=>{const s="42557635-c58ce0ef5400f7d3e989a162c",e=document.querySelector(".loader"),r=document.getElementById("load-more");e.style.display="block";try{const l=(await f.get(`https://pixabay.com/api/?key=${s}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${n}&per_page=${t}`)).data;r.classList.add("hidden"),l.hits.length===0?d("Sorry, there are no images matching your search query. Please try again!"):(m(l.hits),(n-1)*t+l.hits.length<l.totalHits?r.classList.remove("hidden"):d("We're sorry, but you've reached the end of search results."))}catch(a){console.log(a)}finally{e.style.display="none"}},g=document.getElementById("search-form"),L=document.getElementById("search-input"),y=document.getElementById("load-more");let i,c;g.addEventListener("submit",async o=>{o.preventDefault();const t=L.value.trim(),n=document.querySelector(".gallery");if(n.innerHTML="",c=t,i=1,c===""){d("Please enter a search query"),y.classList.add("hidden");return}try{await u(c,15,i)}catch(s){console.log(s)}});y.addEventListener("click",async o=>{o.preventDefault(),i++;try{await u(c,15,i);const t=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:(t+60)*2,behavior:"smooth"})}catch(t){console.log(t)}});
//# sourceMappingURL=commonHelpers.js.map