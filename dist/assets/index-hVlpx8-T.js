(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();const y=[{id:0,title:"Glass Flow Style",styleName:"Glassmorphic Waves",icon:"💎",templateText:`Create a high-end, premium, kids-friendly, and visually engaging poster design for a kids weekly assembly.

Use a glassmorphism + colorful flowing gradient style with smooth abstract waves and soft glow.

Show different groups of young boys visually performing different activities in separate areas, naturally blended into the background flow. Activities must be understood visually only, not written.

Use dynamic composition with soft blur depth and layered visuals.

Design text using premium glass-style text boxes:
- frosted glass effect
- soft blur background
- light borders
- rounded corners
- layered placement

Gujarati text to include:
બાળસભા
[[mandal] બાળમંડળ]

તારીખ: [date]
વાર: [day]
સમય: [time]
સ્થળ: [venue]

ખાસ આકર્ષણ:
• [attr1]
• [attr2]
• [attr3]

આયોજક:
સ્વામિનારાયણ બાળપ્રવૃત્તિ

Important rules:
1. Gujarati text only
2. No icons
3. No activity text labels
4. Clean, premium, balanced layout
5. Vertical format
6. Soft 3D / premium finish`},{id:1,title:"Gradient Layer Style",styleName:"Layered Curves",icon:"🌈",templateText:`Create a premium, modern, and visually rich poster design for a kids weekly assembly.

Use a layered gradient depth style with multiple smooth curved layers in saffron, cream, and sky blue tones.

Place boys naturally within different layers performing different activities visually. Activities must be shown only through visuals, not written in text.

Design text using layered gradient text boxes:
- soft gradient fills
- rounded edges
- subtle shadows
- depth feel

Gujarati text to include:
બાળસભા
[[mandal] બાળમંડળ]

તારીખ: [date]
વાર: [day]
સમય: [time]
સ્થળ: [venue]

ખાસ આકર્ષણ:
• [attr1]
• [attr2]
• [attr3]

આયોજક:
સ્વામિનારાયણ બાળપ્રવૃત્તિ

Important rules:
1. Gujarati text only
2. No icons
3. No activity text labels
4. Premium layered look
5. Vertical format
6. Clean and balanced composition`},{id:2,title:"Soft 3D Style",styleName:"Rounded Platform",icon:"🧸",templateText:`Create a premium, modern, kids-friendly poster design for a kids weekly assembly using a soft 3D environment style.

Use rounded shapes, floating platforms, and soft lighting to create depth.

Place boys in different areas performing different activities visually. Activities must be shown only through visuals and should not be written anywhere.

Design text using 3D-style floating text boxes:
- rounded shapes
- soft shadows
- floating effect
- smooth gradients

Gujarati text to include:
બાળસભા
[[mandal] બાળમંડળ]

તારીખ: [date]
વાર: [day]
સમય: [time]
સ્થળ: [venue]

ખાસ આકર્ષણ:
• [attr1]
• [attr2]
• [attr3]

આયોજક:
સ્વામિનારાયણ બાળપ્રવૃત્તિ

Important rules:
1. Gujarati text only
2. No icons
3. No activity text labels
4. Soft 3D premium finish
5. Vertical format
6. Clean and professional layout`},{id:3,title:"Ribbon Flow Style",styleName:"Flowing Ribbons",icon:"🎀",templateText:`Create a high-end, premium, kids-friendly, and visually engaging poster design for a kids weekly assembly using a flowing ribbon concept.

Design smooth colorful ribbons moving across the poster in dynamic curves.

Place boys along the ribbon paths performing different activities visually. Activities must be understood through visuals only and should not be labeled in text.

Use soft gradients, glow effects, and decorative elements while keeping the layout clean.

Design text using ribbon-matching creative text boxes:
- curved shapes
- gradient fills
- soft shadows
- balanced spacing

Gujarati text to include:
બાળસભા
[[mandal] બાળમંડળ]

તારીખ: [date]
વાર: [day]
સમય: [time]
સ્થળ: [venue]

ખાસ આકર્ષણ:
• [attr1]
• [attr2]
• [attr3]

આયોજક:
સ્વામિનારાયણ બાળપ્રવૃત્તિ

Important rules:
1. Gujarati text only
2. No icons
3. No activity text labels
4. Decorative but premium
5. Vertical format
6. Clean, flowing composition`}],h=[{key:"mandal",label:"બાળમંડળનું નામ (Mandal Name) *",placeholder:"દા.ત. અક્ષરધામ",maxlength:30,suggestions:["અક્ષરધામ","શાહીબાગ","Robbinsville","Sarangpur"]},{key:"date",label:"તારીખ (Sabha Date) *",placeholder:"દા.ત. ૩૧ મે, ૨૦૨૬",maxlength:30,suggestions:["૩૧ મે, ૨૦૨૬","૭ જૂન, ૨૦૨૬","૧૪ જૂન, ૨૦૨૬"]},{key:"day",label:"વાર (Sabha Day) *",placeholder:"દા.ત. રવિવાર",maxlength:15,suggestions:["રવિવાર","શનિવાર"]},{key:"time",label:"સમય (Sabha Time) *",placeholder:"દા.ત. સાંજે ૪:૩૦ થી ૬:૦૦",maxlength:40,suggestions:["સાંજે ૪:૩૦ થી ૬:૦૦","સવારે ૯:૦૦ થી ૧૦:૩૦"]},{key:"venue",label:"સ્થળ (Sabha Venue) *",placeholder:"દા.ત. બી.એ.પી.એસ. સ્વામિનારાયણ મંદિર",maxlength:80,suggestions:["બી.એ.પી.એસ. સ્વામિનારાયણ મંદિર સભા હોલ","બાળ સભા રૂમ"]},{key:"attr1",label:"આકર્ષણ ૧ (Attraction 1)",placeholder:"દા.ત. ધમાકેદાર ગેમ્સ અને એક્ટિવિટી",maxlength:60,suggestions:["ધમાકેદાર ગેમ્સ અને એક્ટિવિટી","રસપ્રદ રમત ગમત","બાળ વાર્તા"]},{key:"attr2",label:"આકર્ષણ ૨ (Attraction 2)",placeholder:"દા.ત. આનંદદાયક ઓડિયો-વિઝ્યુઅલ શો",maxlength:60,suggestions:["આનંદદાયક ઓડિયો-વિઝ્યુઅલ શો","પ્રેરણાત્મક વિડીયો શો","કિર્તન આરાધના"]},{key:"attr3",label:"આકર્ષણ ૩ (Attraction 3)",placeholder:"દા.ત. રસપ્રદ ક્વિઝ અને ઇનામો",maxlength:60,suggestions:["રસપ્રદ ક્વિઝ અને આકર્ષક ઇનામો","બાળ શિબિર માહિતી","પ્રસાદ વિતરણ"]}],I=["http","https","www",".com",".net",".org","casino","poker","free cash","earn money","crypto","buy now","discount","promo","sex","vulgar","abuse","damn","hell","stupid","hate","kill","die","fight","bad","spam","click here","subscribe","hack","virus","fuck","ass","bitch","bastard"],P=["૦","૧","૨","૩","૪","૫","૬","૭","૮","૯"],A=["જાન્યુઆરી","ફેબ્રુઆરી","માર્ચ","એપ્રિલ","મે","જૂન","જુલાઈ","ઓગસ્ટ","સપ્ટેમ્બર","ઓક્ટોબર","નવેમ્બર","ડિસેમ્બર"];function L(t){return t.toString().split("").map(e=>{const a=parseInt(e,10);return isNaN(a)?e:P[a]}).join("")}function M(t){if(!t)return"";const e=t.split("-");if(e.length!==3)return"";const a=parseInt(e[0],10),s=parseInt(e[1],10)-1,n=parseInt(e[2],10),o=L(n),r=A[s],c=L(a);return`${o} ${r}, ${c}`}let u=0,p="",T="",w=!1,b=null;const G=5,l=document.getElementById("creator-name"),S=document.getElementById("style-selector");document.getElementById("placeholder-form");const f=document.getElementById("btn-generate"),g=document.getElementById("prompt-output-box"),C=document.getElementById("btn-copy-prompt"),B=document.getElementById("btn-gemini"),N=document.getElementById("btn-share");document.getElementById("btn-download");document.getElementById("preview-placeholder-state");document.getElementById("preview-loading-state");document.getElementById("preview-error-state");document.getElementById("preview-result-state");document.getElementById("preview-image");document.getElementById("error-message");const j=document.getElementById("btn-retry-preview"),E=document.getElementById("history-container"),_=document.getElementById("btn-clear-history");document.addEventListener("DOMContentLoaded",()=>{v(),H(),z(),J(),l.addEventListener("input",d),f.addEventListener("click",k),C.addEventListener("click",()=>$(p,"પ્રોમ્પ્ટ કોપી થઈ ગયો છે!")),B.addEventListener("click",R),N.addEventListener("click",V),_.addEventListener("click",W),j.addEventListener("click",k);const t=document.getElementById("btn-calendar"),e=document.getElementById("date-picker-helper"),a=document.getElementById("input-date");t&&e&&a&&(t.addEventListener("click",()=>{e.showPicker()}),e.addEventListener("change",s=>{const n=M(s.target.value);n&&(a.value=n,m(),d(),a.classList.add("input-filled"),setTimeout(()=>a.classList.remove("input-filled"),500))}))});function v(){S.innerHTML="",y.forEach((t,e)=>{const a=e===u,s=a?"border-orange-500 bg-orange-950/20 text-orange-400 glow-saffron":"border-slate-800 hover:border-slate-700 bg-slate-950/60 text-slate-300",n=document.createElement("button");n.className=`flex items-center gap-3 p-3 rounded-xl border text-left transition-all hover:-translate-y-0.5 cursor-pointer ${s}`,n.setAttribute("data-template-id",t.id),n.innerHTML=`
      <span class="text-2xl transition-transform duration-300 ${a?"scale-110 rotate-3":""}">${t.icon}</span>
      <div>
        <h3 class="font-bold text-xs md:text-sm text-slate-100">${t.title}</h3>
        <p class="text-[10px] text-slate-400">${t.styleName}</p>
      </div>
    `,n.addEventListener("click",()=>{u=t.id,v(),m(),d()}),S.appendChild(n)})}function H(){h.forEach(t=>{const e=document.getElementById(`input-${t.key}`),a=document.getElementById(`suggestions-${t.key}`);if(e&&(e.value||(t.key==="mandal"&&(e.value="અક્ષરધામ"),t.key==="date"&&(e.value="૩૧ મે, ૨૦૨૬"),t.key==="day"&&(e.value="રવિવાર"),t.key==="time"&&(e.value="સાંજે ૪:૩૦ થી ૬:૦૦"),t.key==="venue"&&(e.value="સ્વામિનારાયણ મંદિર, વાડાજ"),t.key==="attr1"&&(e.value="રસપ્રદ રમત ગમત"),t.key==="attr2"&&(e.value=""),t.key==="attr3"&&(e.value="")),e.addEventListener("input",()=>{m(),d()}),e.addEventListener("change",()=>{m(),d()}),a)){a.innerHTML="";const s=document.createElement("span");s.innerText="ટ્રાય: ",s.className="text-[9px] text-slate-500 font-bold self-center mr-1 flex-shrink-0",a.appendChild(s),t.suggestions.forEach(n=>{const o=document.createElement("span");o.innerText=n,o.className="bg-slate-950/80 border border-slate-850 hover:border-slate-700 text-[10px] text-slate-400 px-2 py-0.5 rounded cursor-pointer transition-all hover:bg-slate-900 flex-shrink-0",o.addEventListener("click",()=>{e.value=n,m(),d(),e.classList.add("input-filled"),setTimeout(()=>e.classList.remove("input-filled"),500)}),a.appendChild(o)})}}),m()}function m(){let e=y[u].templateText,a=!0;h.forEach(s=>{const n=document.getElementById(`input-${s.key}`),o=n?n.value.trim():"",r=["mandal","date","day","time","venue"].includes(s.key);o?e=e.replaceAll(`[${s.key}]`,o):(r&&(a=!1),e=e.replaceAll(`[${s.key}]`,""))}),a&&l.value.trim().length>=3?(p=e,g.innerText=e,g.classList.remove("text-slate-600"),g.classList.add("text-slate-300")):(p="",g.innerText="ડાબી બાજુ તમારું નામ અને વિગતો ભરો એટલે પ્રોમ્પ્ટ અહીં આપોઆપ જનરેટ થશે!",g.classList.remove("text-slate-300"),g.classList.add("text-slate-600"))}function d(){const t=l.value.trim(),e=t.replace(/[^a-zA-Z\s]/g,"");t!==e&&(l.value=e,i("નામમાં માત્ર અક્ષરો અને સ્પેસ જ આવી શકે!","error"));let a=!0;e.length<3&&(a=!1),h.forEach(o=>{const r=document.getElementById(`input-${o.key}`),c=r?r.value.trim():"";["mandal","date","day","time","venue"].includes(o.key)&&c.length<2&&(a=!1);const D=c.toLowerCase();I.some(O=>D.includes(O))?(a=!1,r&&(r.style.borderColor="#ef4444"),i("મહેરબાની કરી યોગ્ય શબ્દો લખો. સ્પેમ માન્ય નથી!","error")):r&&(r.style.borderColor="")});const s=e.toLowerCase();I.some(o=>s.includes(o))?(a=!1,l.style.borderColor="#ef4444",i("અમાન્ય નામ!","error")):l.style.borderColor="";const n=b!==null;return f.disabled=!a||n,C.disabled=!a,B.disabled=!a,N.disabled=!a,a}function k(){if(!d()||w)return;w=!0;const t=Math.floor(Math.random()*999999);if(T=`https://image.pollinations.ai/prompt/${encodeURIComponent(p)}?width=800&height=800&nologo=true&seed=${t}`,w=!1,F(),i("પ્રોમ્પ્ટ સફળતાપૂર્વક તૈયાર થઈ ગયો છે! ✨","success"),window.innerWidth<1024){const a=document.getElementById("output-section");a&&a.scrollIntoView({behavior:"smooth",block:"start"})}l.value.trim(),y[u].title,U()}function U(){let t=G;f.disabled=!0,b=setInterval(()=>{t--,f.querySelector(".btn-text").innerText=`થોડીવાર થોભો (${t}s)`,t<=0&&(clearInterval(b),b=null,f.querySelector(".btn-text").innerText="પ્રોમ્પ્ટ જનરેટ અને સેવ કરો",d())},1e3)}function R(){p&&navigator.clipboard.writeText(p).then(()=>{i("પ્રોમ્પ્ટ કોપી થઈ ગયો છે! જેમિની ઓપન થઈ રહ્યું છે...","success"),setTimeout(()=>{window.open("https://gemini.google.com/app","_blank")},800)}).catch(t=>{console.error("Failed to copy: ",t),i("કોપી કરવામાં મુશ્કેલી પડી.","error")})}function $(t,e){navigator.clipboard.writeText(t).then(()=>{i(e,"success")}).catch(()=>{i("ક્લિપબોર્ડ એક્સેસ રિજેક્ટ થયો.","error")})}function V(){const t=l.value.trim();y[u];const e={};h.forEach(r=>{const c=document.getElementById(`input-${r.key}`).value.trim();e[r.key]=c});const a=window.location.origin,s=window.location.pathname,n=new URLSearchParams;n.set("creator",t),n.set("template",u),n.set("inputs",JSON.stringify(e));const o=`${a}${s}?${n.toString()}`;$(o,"લિંક કોપી થઈ ગઈ છે! તમારા બાળ મિત્રો સાથે શેર કરો.")}function J(){const t=new URLSearchParams(window.location.search),e=t.get("creator"),a=t.get("template"),s=t.get("inputs");if(e&&a!==null&&s)try{const n=JSON.parse(s);l.value=e,u=parseInt(a,10),v(),Object.keys(n).forEach(r=>{const c=document.getElementById(`input-${r}`);c&&(c.value=n[r])}),m();const o=d();i(`${e} દ્વારા મોકલાયેલો પ્રોમ્પ્ટ લોડ થઈ રહ્યો છે...`,"info"),o&&setTimeout(k,600)}catch(n){console.error("Error parsing shared link inputs",n)}}function i(t,e="success"){const a=document.getElementById("toast-container"),s=document.createElement("div");s.className="flex items-center gap-3 bg-slate-900 border rounded-xl px-5 py-3 shadow-2xl transition-all duration-300 pointer-events-auto transform translate-y-0 opacity-100";let n="bg-orange-500/10 text-orange-400",o="border-orange-500/50",r=`
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
    </svg>`;e==="error"?(n="bg-red-500/10 text-red-400",o="border-red-500/50",r=`
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>`):e==="info"&&(n="bg-sky-500/10 text-sky-400",o="border-sky-500/50",r=`
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
      </svg>`),s.classList.add(o),s.innerHTML=`
    <span class="h-8 w-8 rounded-full flex items-center justify-center ${n}">
      ${r}
    </span>
    <div>
      <p class="text-xs font-bold text-slate-100">${t}</p>
      <p class="text-[9px] text-slate-400">બી.એ.પી.એસ. બાળસભા એપ</p>
    </div>
  `,a.appendChild(s),setTimeout(()=>{s.classList.remove("translate-y-0","opacity-100"),s.classList.add("translate-y-12","opacity-0"),s.addEventListener("transitionend",()=>{s.remove()})},3500)}function F(){const t=l.value.trim(),e={};h.forEach(o=>{e[o.key]=document.getElementById(`input-${o.key}`).value.trim()});const a={id:Date.now(),creator:t,templateId:u,prompt:p,imageUrl:T,inputs:e,timeString:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};let s=JSON.parse(localStorage.getItem("baps_mandal_history"))||[];s.length>0&&s[0].prompt===p||(s.unshift(a),s.length>10&&s.pop(),localStorage.setItem("baps_mandal_history",JSON.stringify(s)),x())}function z(){x()}function x(){const t=JSON.parse(localStorage.getItem("baps_mandal_history"))||[];if(E.innerHTML="",t.length===0){E.innerHTML=`
      <div class="flex flex-col items-center justify-center py-6 text-center text-slate-600 gap-1.5">
        <i class="fa-solid fa-seedling text-xl opacity-60"></i>
        <p class="text-[10px] font-bold">બનાવેલા પ્રોમ્પ્ટ્સની વિગત અહીં સંગ્રહ થશે!</p>
      </div>
    `;return}t.forEach(e=>{const a=y[e.templateId],s=document.createElement("div");s.className="flex items-center justify-between gap-3 p-3 bg-slate-950/60 border border-slate-900 rounded-xl hover:border-slate-800 transition-all",s.innerHTML=`
      <div class="flex flex-col min-w-0 flex-grow gap-0.5">
        <div class="flex items-center gap-2 text-[10px]">
          <span class="font-extrabold text-orange-400">${e.creator}</span>
          <span class="text-slate-600 font-medium">${e.timeString}</span>
        </div>
        <div class="text-[11px] text-slate-300 font-semibold truncate">${a.icon} ${e.prompt}</div>
      </div>
      <div class="flex items-center gap-1.5 flex-shrink-0">
        <button class="btn-use p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 transition-all hover:bg-slate-850" title="પ્રોમ્પ્ટ લોડ કરો">
          <i class="fa-solid fa-arrows-rotate text-xs"></i>
        </button>
        <button class="btn-delete p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 hover:text-red-400 transition-all hover:bg-slate-850" title="કાર્ડ કાઢી નાખો">
          <i class="fa-solid fa-trash-can text-xs"></i>
        </button>
      </div>
    `,s.querySelector(".btn-use").addEventListener("click",()=>{l.value=e.creator,u=e.templateId,v(),Object.keys(e.inputs).forEach(n=>{const o=document.getElementById(`input-${n}`);o&&(o.value=e.inputs[n])}),m(),d(),i("પ્રોમ્પ્ટ લોડ થઈ ગયો છે!","info")}),s.querySelector(".btn-delete").addEventListener("click",()=>{q(e.id)}),E.appendChild(s)})}function q(t){let e=JSON.parse(localStorage.getItem("baps_mandal_history"))||[];e=e.filter(a=>a.id!==t),localStorage.setItem("baps_mandal_history",JSON.stringify(e)),x(),i("યાદીમાંથી કાઢી નાખવામાં આવ્યું.","info")}function W(){confirm("શું તમે આ ઇતિહાસ કાઢી નાખવા માંગો છો?")&&(localStorage.removeItem("baps_mandal_history"),x(),i("ઇતિહાસ સાફ કરવામાં આવ્યો છે!","info"))}
