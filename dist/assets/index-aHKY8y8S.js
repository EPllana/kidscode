import O,{useState as h,useEffect as b,useMemo as N}from"https://aistudiocdn.com/react@^19.1.1";import J from"https://aistudiocdn.com/react-dom@^19.1.1/client";import{GoogleGenAI as R}from"https://aistudiocdn.com/@google/genai@^1.21.0";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();var w={exports:{}},j={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P;function K(){if(P)return j;P=1;var t=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(n,s,a){var l=null;if(a!==void 0&&(l=""+a),s.key!==void 0&&(l=""+s.key),"key"in s){a={};for(var d in s)d!=="key"&&(a[d]=s[d])}else a=s;return s=a.ref,{$$typeof:t,type:n,key:l,ref:s!==void 0?s:null,props:a}}return j.Fragment=r,j.jsx=i,j.jsxs=i,j}var T;function F(){return T||(T=1,w.exports=K()),w.exports}var e=F();const E=[{id:1,username:"alberisa",password:"alberisa001",role:"student"},{id:2,username:"ronela",password:"ronela002",role:"student"},{id:3,username:"enes",password:"enes003",role:"student"},{id:4,username:"almir",password:"almir004",role:"student"},{id:5,username:"donat",password:"donat005",role:"student"},{id:6,username:"rreze",password:"rreze006",role:"student"},{id:7,username:"klea",password:"klea007",role:"student"},{id:8,username:"sara",password:"sara008",role:"student"},{id:9,username:"elsa",password:"elsa009",role:"student"},{id:10,username:"riola",password:"riola010",role:"student"},{id:11,username:"muharrem",password:"muharrem011",role:"student"},{id:12,username:"ibrahim",password:"ibrahim012",role:"student"},{id:13,username:"eltion",password:"eltion013",role:"student"},{id:14,username:"olt",password:"olt014",role:"student"},{id:15,username:"amar",password:"amar015",role:"student"},{id:16,username:"eldi",password:"eldi016",role:"student"},{id:100,username:"ernis",password:"password",role:"teacher"}],U=[{id:"html-basics",title:"Bazat e HTML: Faqja Jote e Parë",category:"HTML",difficulty:"Lehtë",locked:!1,learn:{title:"Njiheni me Blloqet Ndërtuese",content:'HTML do të thotë HyperText Markup Language. Është skeleti i të gjitha faqeve të internetit. Ne përdorim "etiketa" (tags) për t\'i treguar shfletuesit se çfarë të shfaqë. Etiketat e zakonshme janë `<h1>` për titujt kryesorë, `<p>` për paragrafët, dhe `<img>` për të shfaqur imazhe.',exampleCode:`<!DOCTYPE html>
<html>
<head>
  <title>Faqja Ime e Parë</title>
</head>
<body>

  <h1>Përshëndetje Botë!</h1>
  <p>Ky është paragrafi im i parë në faqen time të internetit.</p>
  <img src="https://picsum.photos/200" alt="Një imazh i rastësishëm">

</body>
</html>`},homework:{prompt:"Krijo një faqe të thjeshtë për kafshën tënde të preferuar. Ajo duhet të përfshijë një titull kryesor (<h1>), të paktën një paragraf (<p>), dhe një imazh (<img>).",starterCode:`<!DOCTYPE html>
<html>
<head>
  <title>Kafsha Ime e Preferuar</title>
</head>
<body>

  <!-- Kodi yt shkon këtu! -->

</body>
</html>`,solutionCheck:t=>{const r=/<h1>.*<\/h1>/i.test(t),i=!/<h1>\s*Përshëndetje Botë!\s*<\/h1>/i.test(t),n=/<p>.*<\/p>/i.test(t),s=/<img/i.test(t);if(r&&i&&n&&s)return{success:!0,message:"Punë e shkëlqyer! I përdore të gjitha etiketat e kërkuara dhe e bëre faqen tënde unike."};let a="Gati aty! ";const l=[];return r||l.push("sigurohu që ke një etiketë <h1>"),r&&!i&&l.push('ndrysho tekstin brenda <h1> që të mos jetë "Përshëndetje Botë!"'),n||l.push("sigurohu që ke një etiketë <p>"),s||l.push("sigurohu që ke një etiketë <img>"),a+=l.join(", ")+".",{success:!1,message:a}}}},{id:"html-text-links",title:"HTML: Teksti dhe Lidhjet",category:"HTML",difficulty:"Lehtë",locked:!0,learn:{title:"Titujt, Paragrafët dhe Lidhjet",content:"Faqet e internetit përbëhen nga teksti. Ne përdorim etiketat e titujve `<h1>` deri në `<h6>` për tituj, `<p>` për paragrafë, dhe `<a>` (spirancë) për të krijuar lidhje të klikueshme drejt faqeve të tjera.",exampleCode:`<!DOCTYPE html>
<html>
<head><title>Teksti & Lidhjet</title></head>
<body>
  <h1>Titulli Kryesor</h1>
  <h2>Nëntitulli</h2>
  <p>Ky është një paragraf teksti. Mund të përmbajë shumë fjali.</p>
  <a href="https://www.google.com">Kjo është një lidhje për në Google!</a>
</body>
</html>`},homework:{prompt:"Krijo një faqe për hobin tënd të preferuar. Ajo duhet të ketë një titull `<h2>`, një paragraf `<p>` që e përshkruan atë, dhe një lidhje `<a>` drejt një faqe interneti për atë hobi.",starterCode:`<!DOCTYPE html>
<html>
<head><title>Hobi Im</title></head>
<body>
  <h1>Hobi Im i Preferuar</h1>
  <!-- Kodi yt shkon këtu -->
</body>
</html>`,solutionCheck:t=>{const r=/<h2>.*<\/h2>/i.test(t),i=/<p>.*<\/p>/i.test(t),n=/<a href=".+">.*<\/a>/i.test(t);return r&&i&&n?{success:!0,message:"Mrekulli! Struktura e faqes tënde është perfekte."}:{success:!1,message:"Gati aty! Ende duhet të shtosh: "+[!r&&"një <h2>",!i&&"një <p>",!n&&"një etiketë <a> me një href"].filter(Boolean).join(", ")+"."}}}},{id:"html-all-headings",title:"HTML: Gjithçka rreth Tekstit",category:"HTML",difficulty:"Lehtë",locked:!0,learn:{title:"Strukturimi i Tekstit me Tituj",content:"HTML ofron gjashtë nivele titujsh, nga `<h1>` (më i rëndësishmi) te `<h6>` (më pak i rëndësishmi). Duhet t'i përdorësh me radhë për të krijuar një strukturë dokumenti. Gjithashtu përdorim `<p>` për paragrafë teksti dhe `<a>` për të krijuar lidhje drejt faqeve të tjera.",exampleCode:`<!DOCTYPE html>
<html>
<head><title>Demo e Titujve</title></head>
<body>
  <h1>Titulli 1</h1>
  <h2>Titulli 2</h2>
  <h3>Titulli 3</h3>
  <h4>Titulli 4</h4>
  <h5>Titulli 5</h5>
  <h6>Titulli 6</h6>
  <p>Ky është një paragraf standard. Dhe këtu është një <a href="https://example.com">lidhje</a>.</p>
</body>
</html>`},homework:{prompt:"Krijo një strukturë për një postim blogu. Përdor një `<h1>` për titullin kryesor, një `<h2>` për një titull seksioni, një `<h3>` për një nën-seksion, një `<p>` për pak tekst, dhe një etiketë `<a>` për të lidhur një burim.",starterCode:`<!DOCTYPE html>
<html>
<head><title>Postimi Im i Blogut</title></head>
<body>
  <!-- Struktura e postimit tënd të blogut shkon këtu -->
</body>
</html>`,solutionCheck:t=>{const r=/<h1>.*<\/h1>/i.test(t),i=/<h2>.*<\/h2>/i.test(t),n=/<h3>.*<\/h3>/i.test(t),s=/<p>.*<\/p>/i.test(t),a=/<a href=".+">.*<\/a>/i.test(t);if(r&&i&&n&&s&&a)return{success:!0,message:"Strukturë perfekte blogu! I ke zotëruar elementet e tekstit."};let l="Gati aty! Sigurohu që faqja jote të përfshijë: ";const d=[];return r||d.push("një <h1>"),i||d.push("një <h2>"),n||d.push("një <h3>"),s||d.push("një <p>"),a||d.push("një lidhje <a>"),l+=d.join(", ")+".",{success:!1,message:l}}}},{id:"html-lists",title:"HTML: Listat",category:"HTML",difficulty:"Lehtë",locked:!0,learn:{title:"Organizimi i Informacionit",content:"Listat na ndihmojnë të organizojmë elemente. Ne përdorim `<ul>` për lista të pa renditura (me pika) dhe `<li>` për çdo element të listës brenda saj. Gjithashtu mund të përdorësh `<ol>` për lista të renditura (me numra).",exampleCode:`<!DOCTYPE html>
<html>
<head><title>Lista Ime e Pazarit</title></head>
<body>
  <h2>Pazari</h2>
  <ul>
    <li>Qumësht</li>
    <li>Bukë</li>
    <li>Djathë</li>
  </ul>
</body>
</html>`},homework:{prompt:"Krijo një listë të pa renditur (`<ul>`) me të paktën tre nga ushqimet e tua të preferuara. Çdo ushqim duhet të jetë në elementin e vet të listës (`<li>`).",starterCode:`<!DOCTYPE html>
<html>
<head><title>Ushqimet e Preferuara</title></head>
<body>
  <h1>Ushqimet e Mia të Preferuara</h1>
  <!-- Lista jote shkon këtu -->
</body>
</html>`,solutionCheck:t=>{const r=/<ul>[\s\S]*<\/ul>/i.test(t),i=(t.match(/<li>/gi)||[]).length;if(r&&i>=3)return{success:!0,message:"Të bëftë mirë! Kjo është një listë e bërë mirë."};let n="Jo tamam. ";return r||(n+="Sigurohu që ke një etiketë `<ul>`. "),i<3&&(n+=`Të duhen të paktën 3 elemente '<li>', por ti ke vetëm ${i}.`),{success:!1,message:n}}}},{id:"html-tables",title:"HTML: Tabelat",category:"HTML",difficulty:"Mesatar",locked:!0,learn:{title:"Të Dhënat në Rrjeta",content:"Tabelat përdoren për të shfaqur të dhëna në rreshta dhe kolona. Përdor `<table>` për të krijuar tabelën, `<tr>` për çdo rresht, `<th>` për kokat e tabelës, dhe `<td>` për qelizat e të dhënave të tabelës.",exampleCode:`<table border="1">
  <tr>
    <th>Emri</th>
    <th>Mosha</th>
  </tr>
  <tr>
    <td>Alberisa</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Donat</td>
    <td>11</td>
  </tr>
</table>`},homework:{prompt:'Krijo një tabelë me dy kolona: "Emri i Shokut" dhe "Ngjyra e Preferuar". Shto të paktën dy rreshta me të dhëna për dy nga shokët e tu.',starterCode:`<!DOCTYPE html>
<html>
<head><title>Shokët</title></head>
<body>
  <h1>Shokët e Mi</h1>
  <table border="1">
    <!-- Kodi yt i tabelës këtu -->
  </table>
</body>
</html>`,solutionCheck:t=>{const r=/<table[\s\S]*<\/table>/i.test(t),i=(t.match(/<tr>/gi)||[]).length,n=(t.match(/<th>/gi)||[]).length;if(r&&i>=3&&n>=2)return{success:!0,message:"Shkëlqyeshëm! Të dhënat e tua janë të organizuara në mënyrë perfekte."};let s="Gati aty! ";return r||(s+="Mos harro etiketat `<table>`. "),i<3&&(s+="Një rresht koke dhe dy rreshta të dhënash do të thotë që të duhen të paktën 3 etiketa '<tr>'. "),n<2&&(s+="Të duhen dy koka kolonash duke përdorur '<th>'. "),{success:!1,message:s}}}},{id:"html-forms",title:"HTML: Formularët",category:"HTML",difficulty:"Mesatar",locked:!0,learn:{title:"Marrja e të Dhënave nga Përdoruesi",content:'Formularët përdoren për të mbledhur informacion nga përdoruesit. Etiketa `<form>` është kontejneri. Brenda saj, përdorim `<label>` për të përshkruar një fushë inputi dhe `<input>` për të krijuar vetë fushën. Një `<button type="submit">` përdoret për të dërguar formularin.',exampleCode:`<form>
  <label for="fname">Emri:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Mbiemri:</label><br>
  <input type="text" id="lname" name="lname"><br><br>
  <button type="submit">Dërgo</button>
</form>`},homework:{prompt:'Krijo një formular të thjeshtë identifikimi. Ai ka nevojë për një `<form>`, një `<input>` për emrin e përdoruesit, një `<input type="password">` për fjalëkalimin, dhe një buton dërgimi `<button>`. Përdor `<label>` për fushat e inputit.',starterCode:`<!DOCTYPE html>
<html>
<head><title>Identifikohu</title></head>
<body>
  <h1>Identifikohu Këtu</h1>
  <!-- Formulari yt shkon këtu -->
</body>
</html>`,solutionCheck:t=>{const r=/<form[\s\S]*<\/form>/i.test(t),i=/<button[\s\S]*<\/button>/i.test(t),n=/<input.*(text|username)/i.test(t),s=/<input.*type="password"/i.test(t);if(r&&i&&n&&s)return{success:!0,message:"Formular i shkëlqyer! Je gati të mbledhësh të dhëna nga përdoruesit."};let a="Kontrollo formularin tënd. ";const l=[];return r||l.push("një kontejner `<form>`"),n||l.push("një `<input>` për emrin e përdoruesit"),s||l.push('një `<input type="password">` për fjalëkalimin'),i||l.push("një buton dërgimi `<button>`"),a+="Të mungon "+l.join(", ")+".",{success:!1,message:a}}}},{id:"css-colors",title:"CSS: Ngjyrat dhe Sfondet",category:"CSS",difficulty:"Lehtë",locked:!0,learn:{title:"Ngjyrosja e Faqes Tënde",content:"CSS (Cascading Style Sheets) përdoret për të stiluar HTML-në tënde. Mund të ndryshosh ngjyrat, fontet, hapësirat dhe më shumë! Ne përdorim selektorë për të synuar elementet HTML dhe për të aplikuar stile tek ato brenda një etikete `<style>`.",exampleCode:`<!DOCTYPE html>
<html>
<head>
  <title>Faqe me Ngjyra</title>
  <style>
    body {
      background-color: #F0F4F8; /* Sfond i kaltër i hapur */
    }
    
    h1 {
      color: #333366; /* Tekst i kaltër i errët */
    }

    p {
      color: green; /* Mund të përdorësh edhe emra ngjyrash! */
    }
  </style>
</head>
<body>

  <h1>Ky Titull është i Kaltër i Errët</h1>
  <p>Ky paragraf është i gjelbër.</p>

</body>
</html>`},homework:{prompt:'Stilo faqen! Bëj që etiketa `<h1>` të ketë ngjyrën "tomato" dhe etiketa `<p>` të ketë një ngjyrë sfondi "lightblue".',starterCode:`<!DOCTYPE html>
<html>
<head>
  <title>Faqja Ime e Stiluar</title>
  <style>
    /* CSS-ja jote shkon këtu! */

  </style>
</head>
<body>

  <h1>Më stilo!</h1>
  <p>Edhe mua gjithashtu!</p>

</body>
</html>`,solutionCheck:t=>{const r=/h1\s*\{\s*color:\s*tomato\s*;\s*\}/i.test(t.replace(/\s/g,"")),i=/p\s*\{\s*background-color:\s*lightblue\s*;\s*\}/i.test(t.replace(/\s/g,""));if(r&&i)return{success:!0,message:"Fantastike! Stilimi yt është perfekt."};let n="Jo tamam. Kontrollo CSS-në tënde: ";const s=[];return r||s.push("sigurohu që h1 ka `color: tomato;`"),i||s.push("sigurohu që p ka `background-color: lightblue;`"),n+=s.join(" dhe ")+".",{success:!1,message:n}}}},{id:"js-alerts",title:"JavaScript: Interaksioni i Parë",category:"JavaScript",difficulty:"Lehtë",locked:!0,learn:{title:"Bërja e Faqeve Dinamike",content:"JavaScript të lejon të shtosh interaktivitet në faqen tënde të internetit. Një mënyrë e thjeshtë për të filluar është duke përdorur funksionin `alert()`. Ai shfaq një kuti mesazhi për përdoruesin. Ne shkruajmë JavaScript brenda etiketave `<script>`.",exampleCode:`<!DOCTYPE html>
<html>
<body>

  <h1>JavaScript-i Im i Parë</h1>

  <button onclick="shfaqMesazhin()">Kliko këtu</button>

  <script>
    function shfaqMesazhin() {
      alert('Përshëndetje, kodues!');
    }
  <\/script>

</body>
</html>`},homework:{prompt:'Shkruaj një funksion JavaScript të quajtur `thuajPershendetje` që shfaq një njoftim (alert) me mesazhin "Përshëndetje, JavaScript!". Pastaj, bëj që butoni ta thërrasë këtë funksion kur klikohet.',starterCode:`<!DOCTYPE html>
<html>
<body>

  <h1>Detyrë shtëpie në JavaScript</h1>

  <!-- Bëje këtë buton të thërrasë funksionin tënd -->
  <button onclick="">Kliko për një Përshëndetje</button>

  <script>
    // Përcakto funksionin tënd thuajPershendetje këtu
    
  <\/script>

</body>
</html>`,solutionCheck:t=>{const r=/function\s+thuajPershendetje\s*\(\s*\)\s*\{[\s\S]*alert\(['"]Përshëndetje,\s*JavaScript!['"]\);?\s*\}/.test(t),i=/<button\s+onclick="thuajPershendetje\(\)"/i.test(t);if(r&&i)return{success:!0,message:"Shkëlqyeshëm! Butoni yt i parë interaktiv funksionon!"};let n="Vazhdo të provosh! ";const s=[];return r||s.push("A e krijove funksionin `thuajPershendetje` saktë me mesazhin e duhur të njoftimit?"),i||s.push("A e vendose atributin `onclick` të butonit për të thirrur `thuajPershendetje()`?"),n+=s.join(" "),{success:!1,message:n}}}}],C="currentUser",$=(t,r)=>{const i=E.find(n=>n.username.toLowerCase()===t.toLowerCase()&&n.password===r);if(i){const{password:n,...s}=i;return sessionStorage.setItem(C,JSON.stringify(s)),s}return null},Y=()=>{sessionStorage.removeItem(C)},k=()=>{const t=sessionStorage.getItem(C);return t?JSON.parse(t):null},_=({onLogin:t})=>{const[r,i]=h(""),[n,s]=h(""),[a,l]=h(""),d=o=>{o.preventDefault(),l("");const m=$(r,n);m?t(m):l("Emri i përdoruesit ose fjalëkalimi i gabuar. Ju lutem provoni përsëri.")};return e.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gradient-to-br from-primary to-secondary",children:e.jsxs("div",{className:"w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-2xl",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-800",children:"Mirë se vini në Code Camp!"}),e.jsx("p",{className:"mt-2 text-text-light",children:"Aventura juaj e kodimit fillon këtu."})]}),e.jsxs("form",{className:"mt-8 space-y-6",onSubmit:d,children:[e.jsxs("div",{className:"rounded-md shadow-sm -space-y-px",children:[e.jsx("div",{children:e.jsx("input",{id:"username",name:"username",type:"text",autoComplete:"username",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm",placeholder:"Emri i përdoruesit",value:r,onChange:o=>i(o.target.value)})}),e.jsx("div",{children:e.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm",placeholder:"Fjalëkalimi",value:n,onChange:o=>s(o.target.value)})})]}),a&&e.jsx("p",{className:"text-sm text-red-600 text-center",children:a}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105",children:"Le të fillojmë!"})})]})]})})},z="unlocked_lessons",G=()=>U,S=t=>{const r=`progress_${t}`,i=localStorage.getItem(r);return i?JSON.parse(i):[]},V=(t,r)=>{const i=`progress_${t}`,n=S(t);if(!n.includes(r)){const s=[...n,r];localStorage.setItem(i,JSON.stringify(s))}},L=()=>{const t=localStorage.getItem(z);return t?JSON.parse(t):[]},W=t=>{const r=L();if(!r.includes(t)){const i=[...r,t];localStorage.setItem(z,JSON.stringify(i))}},Z=(t,r,i)=>{const n=`draft_${t}_${r}`;localStorage.setItem(n,i)},Q=(t,r)=>{const i=`draft_${t}_${r}`;return localStorage.getItem(i)},X=(t,r)=>{const i=`draft_${t}_${r}`;localStorage.removeItem(i)},ee=({studentName:t,onBack:r})=>{const i=()=>{window.print()};return e.jsxs("div",{className:"bg-background p-4 sm:p-6 lg:p-8",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6 print:hidden",children:[e.jsx("button",{onClick:r,className:"text-sm text-primary hover:underline",children:"← Kthehu te Paneli"}),e.jsx("button",{onClick:i,className:"px-4 py-2 text-sm font-medium text-white bg-secondary rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors",children:"Printo Certifikatën"})]}),e.jsxs("div",{id:"certificate",className:"bg-white p-8 sm:p-12 lg:p-16 rounded-lg shadow-lg border-4 border-accent relative aspect-[11/8.5]",children:[e.jsx("style",{children:`
            @media print {
              body * {
                visibility: hidden;
              }
              #certificate, #certificate * {
                visibility: visible;
              }
              #certificate {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 1rem;
                border: 10px solid #F59E0B;
                box-sizing: border-box;
              }
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-2xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-wider",style:{fontFamily:"'Brush Script MT', cursive"},children:"Certifikatë Përfundimi"}),e.jsx("p",{className:"mt-4 sm:mt-6 text-base sm:text-lg text-text-light",children:"Me krenari i jepet"}),e.jsx("p",{className:"mt-4 sm:mt-8 text-3xl sm:text-5xl lg:text-6xl font-bold text-text-main capitalize",style:{fontFamily:"'Garamond', serif"},children:t}),e.jsx("p",{className:"mt-4 sm:mt-6 text-base sm:text-lg text-text-light",children:"për përfundimin me sukses të të gjitha mësimeve në"}),e.jsx("p",{className:"mt-2 text-xl sm:text-2xl lg:text-3xl font-bold text-secondary",children:"Code Camp for Kids"}),e.jsxs("div",{className:"mt-8 sm:mt-12 lg:mt-16 flex justify-around",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"border-t-2 border-gray-300 pt-2 px-8 text-sm text-text-light",children:"Data"}),e.jsx("p",{className:"font-semibold text-text-main",children:new Date().toLocaleDateString("sq-AL")})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"border-t-2 border-gray-300 pt-2 px-8 text-sm text-text-light",children:"Nënshkrimi i Mësuesit"}),e.jsx("p",{className:"font-semibold text-text-main",children:"Ernis Asllani"})]})]})]}),e.jsx("div",{className:"absolute top-4 right-4 text-5xl text-accent opacity-20",children:"🏆"}),e.jsx("div",{className:"absolute bottom-4 left-4 text-5xl text-accent opacity-20",children:"💻"})]})]})},te=({onViewCertificate:t})=>e.jsxs("div",{className:"bg-gradient-to-r from-accent to-yellow-400 text-white p-6 rounded-lg shadow-lg mb-8 flex items-center justify-between flex-col sm:flex-row text-center sm:text-left",children:[e.jsxs("div",{className:"mb-4 sm:mb-0",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Urime! 🏆"}),e.jsx("p",{className:"mt-1",children:"Ju keni përfunduar të gjitha mësimet e disponueshme. Punë e shkëlqyer!"})]}),e.jsx("button",{onClick:t,className:"bg-white text-accent font-bold py-2 px-6 rounded-full hover:bg-yellow-50 transition-transform transform hover:scale-105",children:"Shiko Certifikatën"})]}),se=({category:t})=>{const r={HTML:"bg-orange-100 text-orange-800",CSS:"bg-blue-100 text-blue-800",JavaScript:"bg-yellow-100 text-yellow-800"};return e.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full ${r[t]}`,children:t})},re=({difficulty:t})=>{const r={Lehtë:"bg-green-100 text-green-800",Mesatar:"bg-yellow-100 text-yellow-800",Vështirë:"bg-red-100 text-red-800"};return e.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full ${r[t]}`,children:t})},ie=({lessons:t,onSelectLesson:r})=>{const[i,n]=h([]),[s,a]=h([]),[l,d]=h(null),[o,m]=h(!1);b(()=>{const c=k();c&&(d(c),n(S(c.id))),a(L())},[]);const f=t.filter(c=>!c.locked||s.includes(c.id)),u=f.length>0&&f.every(c=>i.includes(c.id));return o&&l?e.jsx(ee,{studentName:l.username,onBack:()=>m(!1)}):e.jsxs("div",{children:[u&&e.jsx(te,{onViewCertificate:()=>m(!0)}),e.jsx("h2",{className:"text-2xl md:text-3xl font-bold mb-2",children:"Shtegu Juaj i të Mësuarit"}),e.jsx("p",{className:"text-text-light mb-6 md:mb-8",children:"Zgjidhni një mësim për të filluar sfidën tuaj të radhës të kodimit!"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",children:t.map(c=>{const p=c.locked&&!s.includes(c.id),g=p?"bg-gray-100 p-6 rounded-lg shadow-inner cursor-not-allowed flex flex-col justify-between opacity-60":"bg-card p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between";return e.jsxs("div",{onClick:()=>!p&&r(c),className:g,children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsx(se,{category:c.category}),p?e.jsx("div",{className:"flex items-center text-gray-500",title:"I bllokuar",children:e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M10 2a4 4 0 00-4 4v2H4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-2V6a4 4 0 00-4-4zm2 6V6a2 2 0 10-4 0v2h4z",clipRule:"evenodd"})})}):i.includes(c.id)&&e.jsxs("div",{className:"flex items-center text-secondary",children:[e.jsx("svg",{className:"w-5 h-5 mr-1",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),e.jsx("span",{className:"text-sm font-semibold",children:"Përfunduar"})]})]}),e.jsx("h3",{className:"text-xl font-semibold mb-2 text-text-main",children:c.title})]}),e.jsx("div",{className:"mt-4",children:e.jsx(re,{difficulty:c.difficulty})})]},c.id)})})]})},M=({value:t,onChange:r,disableCopyPaste:i=!1})=>{const[n,s]=h(!1),a=l=>{i&&(l.preventDefault(),s(!0),setTimeout(()=>s(!1),3e3))};return e.jsxs("div",{className:"relative h-80",children:[e.jsx("textarea",{value:t,onChange:l=>r(l.target.value),onPaste:a,onCopy:a,onCut:a,className:"w-full h-full p-4 font-mono text-sm bg-gray-800 text-white rounded-md border-gray-600 focus:ring-primary focus:border-primary resize-none",spellCheck:"false",autoCapitalize:"off",autoCorrect:"off"}),n&&e.jsx("div",{className:"absolute bottom-2 right-2 bg-red-500 text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-lg",children:"Kopjimi dhe ngjitja janë çaktivizuar. Provo ta shkruash kodin vetë!"})]})},ne=async(t,r)=>{const i=new R({apiKey:void 0}),n=`
    You are a friendly and encouraging programming teacher for young kids.
    A student is working on a homework assignment and needs a hint.
    Respond in ALBANIAN.
    Do NOT give the direct answer or write the code for them.
    Provide a simple, small hint in ALBANIAN to guide them in the right direction.
    Keep the hint to 1-2 sentences.

    Homework Assignment: "${t}"

    Student's current code:
    \`\`\`html
    ${r}
    \`\`\`

    What is a good hint?
  `;try{return(await i.models.generateContent({model:"gemini-2.5-flash",contents:n})).text}catch(s){return console.error("Error getting hint from Gemini:",s),"Më fal, nuk munda të gjej një ndihmë tani. Të lutem provo përsëri."}},ae=({lesson:t,onBack:r})=>{const[i,n]=h("Mëso"),[s,a]=h(t.learn.exampleCode),[l,d]=h(()=>{const x=k();return x?Q(x.id,t.id)??t.homework.starterCode:t.homework.starterCode}),[o,m]=h(null),[f,u]=h(""),[c,p]=h(!1),[g,I]=h(null);b(()=>{I(k())},[]),b(()=>{g&&Z(g.id,t.id,l)},[l,g,t.id]);const H=()=>{const x=document.getElementById("test-preview");x&&(x.srcdoc=s)},A=()=>{const x=t.homework.solutionCheck(l);m(x),x.success&&g&&(V(g.id,t.id),X(g.id,t.id));const v=document.getElementById("homework-preview");v&&(v.srcdoc=l)},B=async()=>{p(!0),u("");const x=await ne(t.homework.prompt,l);u(x),p(!1)},y=({tabName:x})=>e.jsx("button",{onClick:()=>n(x),className:`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${i===x?"bg-card text-primary border-b-2 border-primary":"text-text-light hover:text-text-main"}`,children:x});return e.jsxs("div",{className:"bg-card p-6 rounded-lg shadow-md",children:[e.jsx("button",{onClick:r,className:"mb-4 text-sm text-primary hover:underline",children:"← Kthehu te Paneli"}),e.jsx("h2",{className:"text-3xl font-bold mb-4",children:t.title}),e.jsx("div",{className:"border-b border-gray-200",children:e.jsxs("nav",{className:"-mb-px flex space-x-4",children:[e.jsx(y,{tabName:"Mëso"}),e.jsx(y,{tabName:"Testo"}),e.jsx(y,{tabName:"Detyrë"})]})}),e.jsxs("div",{className:"mt-6",children:[i==="Mëso"&&e.jsxs("div",{className:"prose max-w-none",children:[e.jsx("h3",{className:"text-xl font-semibold",children:t.learn.title}),e.jsx("p",{children:t.learn.content}),e.jsx("pre",{className:"bg-gray-800 text-white p-4 rounded-md overflow-x-auto",children:e.jsx("code",{className:"font-mono",children:t.learn.exampleCode})})]}),(i==="Testo"||i==="Detyrë")&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[i==="Testo"&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mb-2 text-text-light",children:"Provo kodin këtu. Mos ngurro ta ndryshosh dhe të shohësh se çfarë ndodh!"}),e.jsx(M,{value:s,onChange:a}),e.jsx("button",{onClick:H,className:"mt-4 px-4 py-2 bg-secondary text-white rounded-md hover:bg-green-600",children:"Ekzekuto Kodin"})]}),i==="Detyrë"&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mb-2 font-medium text-text-main",children:t.homework.prompt}),e.jsx(M,{value:l,onChange:d,disableCopyPaste:!0}),e.jsxs("div",{className:"flex items-center space-x-4 mt-4",children:[e.jsx("button",{onClick:A,className:"px-4 py-2 bg-primary text-white rounded-md hover:bg-indigo-700",children:"Dorëzo Detyrën"}),e.jsx("button",{onClick:B,disabled:c,className:"px-4 py-2 bg-accent text-white rounded-md hover:bg-amber-600 disabled:bg-gray-400",children:c?"Duke menduar...":"Merr një Ndihmë"})]}),f&&e.jsx("div",{className:"mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-r-lg",children:e.jsxs("p",{children:[e.jsx("span",{className:"font-bold",children:"Ndihmë:"})," ",f]})}),o&&e.jsx("div",{className:`mt-4 p-3 border-l-4 rounded-r-lg ${o.success?"bg-green-100 border-green-500 text-green-700 animate-success-pop":"bg-red-100 border-red-500 text-red-700"}`,children:e.jsxs("p",{children:[e.jsx("span",{className:"font-bold",children:o.success?"Sukses!":"Provo Përsëri!"})," ",o.message]})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Pamja e Drejtpërdrejtë"}),e.jsx("iframe",{id:i==="Testo"?"test-preview":"homework-preview",className:"w-full h-96 border border-gray-300 rounded-md bg-white",title:"Preview",srcDoc:i==="Testo"?s:l})]})]})]})]})},oe=({rank:t})=>{const r={1:"text-yellow-400",2:"text-gray-400",3:"text-yellow-600"};return t>3?null:e.jsx("svg",{className:`w-6 h-6 ${r[t]}`,fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM5.05 3.95a.75.75 0 011.06 0l1.063 1.063a.75.75 0 01-1.06 1.06L5.05 5.01a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.063 1.063a.75.75 0 11-1.06-1.06L14.95 3.95a.75.75 0 011.06 0zM10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V5z",clipRule:"evenodd"})})},le=({students:t,progress:r,unlockedLessons:i})=>{const n=N(()=>t.map(s=>{const a=r[s.id]||[],l=i.filter(d=>a.includes(d.id)).length;return{...s,score:l}}).sort((s,a)=>a.score-s.score).slice(0,3),[t,r,i]);return e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4 text-text-main",children:"Studentët më të Mirë"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[n.map((s,a)=>e.jsxs("div",{className:"bg-card p-4 rounded-lg shadow-sm flex items-center space-x-4",children:[e.jsx("span",{className:"text-2xl font-bold text-gray-400",children:a+1}),e.jsx(oe,{rank:a+1}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"font-semibold capitalize text-text-main",children:s.username}),e.jsxs("p",{className:"text-sm text-text-light",children:[s.score," ",s.score===1?"mësim":"mësime"," të përfunduara"]})]})]},s.id)),n.length===0&&e.jsx("p",{className:"text-text-light col-span-full",children:"Askush nuk ka përfunduar ende ndonjë mësim. Gara ka filluar!"})]})]})},q=({lesson:t,completedLessons:r,unlockedLessons:i})=>{const n=t.locked&&!i.includes(t.id),s=r==null?void 0:r.includes(t.id);return n?e.jsx("span",{className:"inline-flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full",title:"I bllokuar",children:e.jsx("svg",{className:"w-4 h-4 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M10 2a4 4 0 00-4 4v2H4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-2V6a4 4 0 00-4-4zm2 6V6a2 2 0 10-4 0v2h4z",clipRule:"evenodd"})})}):s?e.jsx("span",{className:"inline-flex items-center justify-center w-6 h-6 bg-green-100 rounded-full",title:"Përfunduar",children:e.jsx("svg",{className:"w-4 h-4 text-green-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})})}):e.jsx("span",{className:"inline-flex items-center justify-center w-6 h-6 bg-red-100 rounded-full",title:"E padorëzuar",children:e.jsx("svg",{className:"w-4 h-4 text-red-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})},de=({lessons:t})=>{const[r,i]=h({}),[n,s]=h([]),a=N(()=>E.filter(o=>o.role==="student"),[]);b(()=>{const o={};for(const m of a)o[m.id]=S(m.id);i(o),s(L())},[a]);const l=o=>{W(o),s(m=>[...m,o])},d=N(()=>t.filter(o=>!o.locked||n.includes(o.id)),[t,n]);return a.length===0?e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl font-bold mb-2",children:"Paneli i Mësuesit"}),e.jsxs("div",{className:"bg-card p-8 rounded-lg shadow-md text-center mt-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-text-main",children:"Nuk ka studentë të regjistruar ende."}),e.jsx("p",{className:"text-text-light mt-2",children:"Kur studentët të regjistrohen, progresi i tyre do të shfaqet këtu."})]})]}):e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl font-bold mb-2",children:"Paneli i Mësuesit"}),e.jsx("p",{className:"text-text-light mb-8",children:"Këtu është një pasqyrë e detyrave të përfunduara të studentëve tuaj. Ju mund të zhbllokoni mësime të reja për të gjithë."}),e.jsx(le,{students:a,progress:r,unlockedLessons:d}),e.jsx("div",{className:"hidden md:block bg-card rounded-lg shadow-md overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"sticky left-0 bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider z-10",children:"Studenti"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"Përfundimi"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"Progresi"}),t.map(o=>e.jsx("th",{scope:"col",className:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",children:e.jsxs("div",{className:"flex flex-col items-center justify-center space-y-2",children:[e.jsx("span",{children:o.title}),o.locked&&!n.includes(o.id)&&e.jsx("button",{onClick:()=>l(o.id),className:"px-2 py-1 text-xs text-white bg-primary rounded hover:bg-indigo-700 transition",children:"Zhblloko"}),o.locked&&n.includes(o.id)&&e.jsx("span",{className:"px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full font-semibold",children:"I zhbllokuar"})]})},o.id))]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:a.map(o=>{const m=d.filter(u=>{var c;return(c=r[o.id])==null?void 0:c.includes(u.id)}).length,f=d.length>0?Math.round(m/d.length*100):0;return e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"sticky left-0 bg-white hover:bg-gray-50 px-6 py-4 whitespace-nowrap z-10",children:e.jsx("div",{className:"text-sm font-medium text-gray-900 capitalize",children:o.username})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-center",children:e.jsxs("span",{className:"text-sm font-medium text-gray-900",children:[f,"%"]})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap min-w-[200px]",children:e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2.5",children:e.jsx("div",{className:"bg-secondary h-2.5 rounded-full transition-all duration-500",style:{width:`${f}%`}})})}),t.map(u=>e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-center",children:e.jsx(q,{lesson:u,completedLessons:r[o.id],unlockedLessons:n})},u.id))]},o.id)})})]})})}),e.jsxs("div",{className:"md:hidden space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-text-main",children:"Menaxhimi i Mësimeve"}),e.jsx("div",{className:"space-y-2",children:t.filter(o=>o.locked).map(o=>e.jsxs("div",{className:"bg-card p-3 rounded-lg shadow-sm flex justify-between items-center",children:[e.jsx("span",{className:"text-sm font-medium text-text-main",children:o.title}),n.includes(o.id)?e.jsx("span",{className:"px-3 py-1 text-xs text-green-800 bg-green-100 rounded-full font-semibold",children:"I zhbllokuar"}):e.jsx("button",{onClick:()=>l(o.id),className:"px-3 py-1 text-xs text-white bg-primary rounded-full hover:bg-indigo-700 transition",children:"Zhblloko"})]},o.id))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-text-main",children:"Progresi i Studentëve"}),a.map(o=>{const m=d.filter(u=>{var c;return(c=r[o.id])==null?void 0:c.includes(u.id)}).length,f=d.length>0?Math.round(m/d.length*100):0;return e.jsxs("div",{className:"bg-card p-4 rounded-lg shadow-sm mb-4",children:[e.jsxs("div",{className:"flex justify-between items-center mb-3",children:[e.jsx("h4",{className:"font-bold text-lg capitalize text-primary",children:o.username}),e.jsxs("span",{className:"text-sm font-semibold text-text-main",children:[f,"%"]})]}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2 mb-4",children:e.jsx("div",{className:"bg-secondary h-2 rounded-full transition-all duration-500",style:{width:`${f}%`}})}),e.jsx("div",{className:"space-y-2",children:t.map(u=>e.jsxs("div",{className:"flex justify-between items-center text-sm",children:[e.jsx("span",{className:"text-text-light",children:u.title}),e.jsx(q,{lesson:u,completedLessons:r[o.id],unlockedLessons:n})]},u.id))})]},o.id)})]})]})]})},ce=()=>{const[t,r]=h(null),[i,n]=h([]),[s,a]=h(null),[l,d]=h(!0);b(()=>{const p=k();p&&r(p),n(G()),d(!1)},[]);const o=p=>{r(p)},m=()=>{Y(),r(null),a(null)},f=p=>{a(p)},u=()=>{a(null)},c=()=>{if(!t)return e.jsx(_,{onLogin:o});const p=e.jsxs("header",{className:"flex justify-between items-center mb-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-primary cursor-pointer",onClick:u,children:"Code Camp"}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("span",{className:"text-text-light",children:["Mirë se erdhe, ",e.jsx("span",{className:"font-semibold text-text-main",children:t.username}),"!"]}),e.jsx("button",{onClick:m,className:"px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors",children:"Dilni"})]})]});return t.role==="teacher"?e.jsxs("div",{className:"p-4 sm:p-6 lg:p-8",children:[p,e.jsx("main",{children:e.jsx(de,{lessons:i})})]}):e.jsxs("div",{className:"p-4 sm:p-6 lg:p-8",children:[p,e.jsx("main",{children:s?e.jsx(ae,{lesson:s,onBack:u}):e.jsx(ie,{lessons:i,onSelectLesson:f})})]})};return l?e.jsx("div",{className:"flex items-center justify-center h-screen bg-background",children:"Duke u ngarkuar..."}):e.jsx("div",{className:"min-h-screen bg-background font-sans text-text-main",children:c()})},D=document.getElementById("root");if(!D)throw new Error("Could not find root element to mount to");const he=J.createRoot(D);he.render(e.jsx(O.StrictMode,{children:e.jsx(ce,{})}));
