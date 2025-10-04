import { User, Lesson } from './types.ts';

export const USERS: User[] = [
  { id: 1, username: 'alberisa', password: 'alberisa001', role: 'student' },
  { id: 2, username: 'ronela', password: 'ronela002', role: 'student' },
  { id: 3, username: 'enes', password: 'enes003', role: 'student' },
  { id: 4, username: 'almir', password: 'almir004', role: 'student' },
  { id: 5, username: 'donat', password: 'donat005', role: 'student' },
  { id: 6, username: 'rreze', password: 'rreze006', role: 'student' },
  { id: 7, username: 'klea', password: 'klea007', role: 'student' },
  { id: 8, username: 'sara', password: 'sara008', role: 'student' },
  { id: 9, username: 'elsa', password: 'elsa009', role: 'student' },
  { id: 10, username: 'riola', password: 'riola010', role: 'student' },
  { id: 11, username: 'muharrem', password: 'muharrem011', role: 'student' },
  { id: 12, username: 'ibrahim', password: 'ibrahim012', role: 'student' },
  { id: 13, username: 'eltion', password: 'eltion013', role: 'student' },
  { id: 14, username: 'olt', password: 'olt014', role: 'student' },
  { id: 15, username: 'amar', password: 'amar015', role: 'student' },
  { id: 16, username: 'eldi', password: 'eldi016', role: 'student' },
  { id: 17, username: 'nisi', password: 'nisi01', role: 'student' },
  { id: 100, username: 'ernis', password: 'password', role: 'teacher' },
];

export const LESSONS: Lesson[] = [
  {
    id: 'html-basics', 
    title: 'Bazat e HTML: Faqja Jote e Parë',
    category: 'HTML',
    difficulty: 'Lehtë',
    locked: false,
    learn: {
      title: 'Njiheni me Blloqet Ndërtuese',
      content: 'HTML do të thotë HyperText Markup Language. Është skeleti i të gjitha faqeve të internetit. Ne përdorim "etiketa" (tags) për t\'i treguar shfletuesit se çfarë të shfaqë. Etiketat e zakonshme janë `<h1>` për titujt kryesorë, `<p>` për paragrafët, dhe `<img>` për të shfaqur imazhe.',
      exampleCode: `<!DOCTYPE html>
<html>
<head>
  <title>Faqja Ime e Parë</title>
</head>
<body>

  <h1>Përshëndetje Botë!</h1>
  <p>Ky është paragrafi im i parë në faqen time të internetit.</p>
  <img src="https://picsum.photos/200" alt="Një imazh i rastësishëm">

</body>
</html>`,
    },
    homework: {
      prompt: 'Krijo një faqe të thjeshtë për kafshën tënde të preferuar. Ajo duhet të përfshijë një titull kryesor (<h1>), të paktën një paragraf (<p>), dhe një imazh (<img>).',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Kafsha Ime e Preferuar</title>
</head>
<body>

  <!-- Kodi yt shkon këtu! -->

</body>
</html>`,
      solutionCheck: (code) => {
        const hasH1 = /<h1>.*<\/h1>/i.test(code);
        const hasUniqueH1 = !/<h1>\s*Përshëndetje Botë!\s*<\/h1>/i.test(code);
        const hasP = /<p>.*<\/p>/i.test(code);
        const hasImg = /<img/i.test(code);
        
        if (hasH1 && hasUniqueH1 && hasP && hasImg) {
          return { success: true, message: 'Punë e shkëlqyer! I përdore të gjitha etiketat e kërkuara dhe e bëre faqen tënde unike.' };
        }
        
        let message = 'Gati aty! ';
        const missing = [];
        if (!hasH1) missing.push('sigurohu që ke një etiketë <h1>');
        if (hasH1 && !hasUniqueH1) missing.push('ndrysho tekstin brenda <h1> që të mos jetë "Përshëndetje Botë!"');
        if (!hasP) missing.push('sigurohu që ke një etiketë <p>');
        if (!hasImg) missing.push('sigurohu që ke një etiketë <img>');
        
        message += missing.join(', ') + '.';
        return { success: false, message };
      },
    },
  },
  {
    id: 'html-text-links',
    title: 'HTML: Teksti dhe Lidhjet',
    category: 'HTML',
    difficulty: 'Lehtë',
    locked: true,
    learn: {
      title: 'Titujt, Paragrafët dhe Lidhjet',
      content: 'Faqet e internetit përbëhen nga teksti. Ne përdorim etiketat e titujve `<h1>` deri në `<h6>` për tituj, `<p>` për paragrafë, dhe `<a>` (spirancë) për të krijuar lidhje të klikueshme drejt faqeve të tjera.',
      exampleCode: `<!DOCTYPE html>
<html>
<head><title>Teksti & Lidhjet</title></head>
<body>
  <h1>Titulli Kryesor</h1>
  <h2>Nëntitulli</h2>
  <p>Ky është një paragraf teksti. Mund të përmbajë shumë fjali.</p>
  <a href="https://www.google.com">Kjo është një lidhje për në Google!</a>
</body>
</html>`,
    },
    homework: {
      prompt: 'Krijo një faqe për hobin tënd të preferuar. Ajo duhet të ketë një titull `<h2>`, një paragraf `<p>` që e përshkruan atë, dhe një lidhje `<a>` drejt një faqe interneti për atë hobi.',
      starterCode: `<!DOCTYPE html>
<html>
<head><title>Hobi Im</title></head>
<body>
  <h1>Hobi Im i Preferuar</h1>
  <!-- Kodi yt shkon këtu -->
</body>
</html>`,
      solutionCheck: (code) => {
        const hasH2 = /<h2>.*<\/h2>/i.test(code);
        const hasP = /<p>.*<\/p>/i.test(code);
        const hasA = /<a href=".+">.*<\/a>/i.test(code);
        if (hasH2 && hasP && hasA) return { success: true, message: 'Mrekulli! Struktura e faqes tënde është perfekte.' };
        let message = 'Gati aty! Ende duhet të shtosh: ' + [!hasH2 && 'një <h2>', !hasP && 'një <p>', !hasA && 'një etiketë <a> me një href'].filter(Boolean).join(', ') + '.';
        return { success: false, message };
      },
    },
  },
  {
    id: 'html-all-headings',
    title: 'HTML: Gjithçka rreth Tekstit',
    category: 'HTML',
    difficulty: 'Lehtë',
    locked: true,
    learn: {
      title: 'Strukturimi i Tekstit me Tituj',
      content: 'HTML ofron gjashtë nivele titujsh, nga `<h1>` (më i rëndësishmi) te `<h6>` (më pak i rëndësishmi). Duhet t\'i përdorësh me radhë për të krijuar një strukturë dokumenti. Gjithashtu përdorim `<p>` për paragrafë teksti dhe `<a>` për të krijuar lidhje drejt faqeve të tjera.',
      exampleCode: `<!DOCTYPE html>
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
</html>`,
    },
    homework: {
      prompt: 'Krijo një strukturë për një postim blogu. Përdor një `<h1>` për titullin kryesor, një `<h2>` për një titull seksioni, një `<h3>` për një nën-seksion, një `<p>` për pak tekst, dhe një etiketë `<a>` për të lidhur një burim.',
      starterCode: `<!DOCTYPE html>
<html>
<head><title>Postimi Im i Blogut</title></head>
<body>
  <!-- Struktura e postimit tënd të blogut shkon këtu -->
</body>
</html>`,
      solutionCheck: (code) => {
        const hasH1 = /<h1>.*<\/h1>/i.test(code);
        const hasH2 = /<h2>.*<\/h2>/i.test(code);
        const hasH3 = /<h3>.*<\/h3>/i.test(code);
        const hasP = /<p>.*<\/p>/i.test(code);
        const hasA = /<a href=".+">.*<\/a>/i.test(code);
        if (hasH1 && hasH2 && hasH3 && hasP && hasA) {
            return { success: true, message: 'Strukturë perfekte blogu! I ke zotëruar elementet e tekstit.' };
        }
        let message = 'Gati aty! Sigurohu që faqja jote të përfshijë: ';
        const missing = [];
        if (!hasH1) missing.push('një <h1>');
        if (!hasH2) missing.push('një <h2>');
        if (!hasH3) missing.push('një <h3>');
        if (!hasP) missing.push('një <p>');
        if (!hasA) missing.push('një lidhje <a>');
        message += missing.join(', ') + '.';
        return { success: false, message };
      },
    },
  },
  {
    id: 'html-lists',
    title: 'HTML: Listat',
    category: 'HTML',
    difficulty: 'Lehtë',
    locked: true,
    learn: {
      title: 'Organizimi i Informacionit',
      content: 'Listat na ndihmojnë të organizojmë elemente. Ne përdorim `<ul>` për lista të pa renditura (me pika) dhe `<li>` për çdo element të listës brenda saj. Gjithashtu mund të përdorësh `<ol>` për lista të renditura (me numra).',
      exampleCode: `<!DOCTYPE html>
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
</html>`,
    },
    homework: {
      prompt: 'Krijo një listë të pa renditur (`<ul>`) me të paktën tre nga ushqimet e tua të preferuara. Çdo ushqim duhet të jetë në elementin e vet të listës (`<li>`).',
      starterCode: `<!DOCTYPE html>
<html>
<head><title>Ushqimet e Preferuara</title></head>
<body>
  <h1>Ushqimet e Mia të Preferuara</h1>
  <!-- Lista jote shkon këtu -->
</body>
</html>`,
      solutionCheck: (code) => {
        const hasUl = /<ul>[\s\S]*<\/ul>/i.test(code);
        const liCount = (code.match(/<li>/gi) || []).length;
        if (hasUl && liCount >= 3) return { success: true, message: 'Të bëftë mirë! Kjo është një listë e bërë mirë.' };
        let message = 'Jo tamam. ';
        if (!hasUl) message += 'Sigurohu që ke një etiketë `<ul>`. ';
        if (liCount < 3) message += `Të duhen të paktën 3 elemente '<li>', por ti ke vetëm ${liCount}.`;
        return { success: false, message };
      },
    },
  },
  {
    id: 'html-tables',
    title: 'HTML: Tabelat',
    category: 'HTML',
    difficulty: 'Mesatar',
    locked: true,
    learn: {
      title: 'Të Dhënat në Rrjeta',
      content: 'Tabelat përdoren për të shfaqur të dhëna në rreshta dhe kolona. Përdor `<table>` për të krijuar tabelën, `<tr>` për çdo rresht, `<th>` për kokat e tabelës, dhe `<td>` për qelizat e të dhënave të tabelës.',
      exampleCode: `<table border="1">
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
</table>`,
    },
    homework: {
      prompt: 'Krijo një tabelë me dy kolona: "Emri i Shokut" dhe "Ngjyra e Preferuar". Shto të paktën dy rreshta me të dhëna për dy nga shokët e tu.',
      starterCode: `<!DOCTYPE html>
<html>
<head><title>Shokët</title></head>
<body>
  <h1>Shokët e Mi</h1>
  <table border="1">
    <!-- Kodi yt i tabelës këtu -->
  </table>
</body>
</html>`,
      solutionCheck: (code) => {
        const hasTable = /<table[\s\S]*<\/table>/i.test(code);
        const trCount = (code.match(/<tr>/gi) || []).length;
        const thCount = (code.match(/<th>/gi) || []).length;
        if (hasTable && trCount >= 3 && thCount >= 2) return { success: true, message: 'Shkëlqyeshëm! Të dhënat e tua janë të organizuara në mënyrë perfekte.' };
        let message = 'Gati aty! ';
        if(!hasTable) message += 'Mos harro etiketat `<table>`. ';
        if(trCount < 3) message += `Një rresht koke dhe dy rreshta të dhënash do të thotë që të duhen të paktën 3 etiketa '<tr>'. `;
        if(thCount < 2) message += `Të duhen dy koka kolonash duke përdorur '<th>'. `;
        return { success: false, message };
      },
    },
  },
  {
    id: 'html-forms',
    title: 'HTML: Formularët',
    category: 'HTML',
    difficulty: 'Mesatar',
    locked: true,
    learn: {
      title: 'Marrja e të Dhënave nga Përdoruesi',
      content: 'Formularët përdoren për të mbledhur informacion nga përdoruesit. Etiketa `<form>` është kontejneri. Brenda saj, përdorim `<label>` për të përshkruar një fushë inputi dhe `<input>` për të krijuar vetë fushën. Një `<button type="submit">` përdoret për të dërguar formularin.',
      exampleCode: `<form>
  <label for="fname">Emri:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Mbiemri:</label><br>
  <input type="text" id="lname" name="lname"><br><br>
  <button type="submit">Dërgo</button>
</form>`,
    },
    homework: {
      prompt: 'Krijo një formular të thjeshtë identifikimi. Ai ka nevojë për një `<form>`, një `<input>` për emrin e përdoruesit, një `<input type="password">` për fjalëkalimin, dhe një buton dërgimi `<button>`. Përdor `<label>` për fushat e inputit.',
      starterCode: `<!DOCTYPE html>
<html>
<head><title>Identifikohu</title></head>
<body>
  <h1>Identifikohu Këtu</h1>
  <!-- Formulari yt shkon këtu -->
</body>
</html>`,
      solutionCheck: (code) => {
        const hasForm = /<form[\s\S]*<\/form>/i.test(code);
        const hasButton = /<button[\s\S]*<\/button>/i.test(code);
        const hasUsernameInput = /<input.*(text|username)/i.test(code);
        const hasPasswordInput = /<input.*type="password"/i.test(code);

        if (hasForm && hasButton && hasUsernameInput && hasPasswordInput) {
             return { success: true, message: 'Formular i shkëlqyer! Je gati të mbledhësh të dhëna nga përdoruesit.' };
        }
        let message = 'Kontrollo formularin tënd. ';
        const missing = [];
        if (!hasForm) missing.push('një kontejner `<form>`');
        if (!hasUsernameInput) missing.push('një `<input>` për emrin e përdoruesit');
        if (!hasPasswordInput) missing.push('një `<input type="password">` për fjalëkalimin');
        if (!hasButton) missing.push('një buton dërgimi `<button>`');
        message += 'Të mungon ' + missing.join(', ') + '.';
        return { success: false, message };
      },
    },
  },
  {
    id: 'css-colors',
    title: 'CSS: Ngjyrat dhe Sfondet',
    category: 'CSS',
    difficulty: 'Lehtë',
    locked: true,
    learn: {
      title: 'Ngjyrosja e Faqes Tënde',
      content: 'CSS (Cascading Style Sheets) përdoret për të stiluar HTML-në tënde. Mund të ndryshosh ngjyrat, fontet, hapësirat dhe më shumë! Ne përdorim selektorë për të synuar elementet HTML dhe për të aplikuar stile tek ato brenda një etikete `<style>`.',
      exampleCode: `<!DOCTYPE html>
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
</html>`,
    },
    homework: {
      prompt: 'Stilo faqen! Bëj që etiketa `<h1>` të ketë ngjyrën "tomato" dhe etiketa `<p>` të ketë një ngjyrë sfondi "lightblue".',
      starterCode: `<!DOCTYPE html>
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
</html>`,
      solutionCheck: (code) => {
        const h1Styled = /h1\s*\{\s*color:\s*tomato\s*;\s*\}/i.test(code.replace(/\s/g, ''));
        const pStyled = /p\s*\{\s*background-color:\s*lightblue\s*;\s*\}/i.test(code.replace(/\s/g, ''));
        if (h1Styled && pStyled) {
          return { success: true, message: 'Fantastike! Stilimi yt është perfekt.' };
        }
        let message = "Jo tamam. Kontrollo CSS-në tënde: ";
        const missing = [];
        if (!h1Styled) missing.push("sigurohu që h1 ka `color: tomato;`");
        if (!pStyled) missing.push("sigurohu që p ka `background-color: lightblue;`");
        message += missing.join(' dhe ') + '.';
        return { success: false, message };
      },
    },
  },
  {
    id: 'js-alerts',
    title: 'JavaScript: Interaksioni i Parë',
    category: 'JavaScript',
    difficulty: 'Lehtë',
    locked: true,
    learn: {
      title: 'Bërja e Faqeve Dinamike',
      content: 'JavaScript të lejon të shtosh interaktivitet në faqen tënde të internetit. Një mënyrë e thjeshtë për të filluar është duke përdorur funksionin `alert()`. Ai shfaq një kuti mesazhi për përdoruesin. Ne shkruajmë JavaScript brenda etiketave `<script>`.',
      exampleCode: `<!DOCTYPE html>
<html>
<body>

  <h1>JavaScript-i Im i Parë</h1>

  <button onclick="shfaqMesazhin()">Kliko këtu</button>

  <script>
    function shfaqMesazhin() {
      alert('Përshëndetje, kodues!');
    }
  </script>

</body>
</html>`,
    },
    homework: {
      prompt: 'Shkruaj një funksion JavaScript të quajtur `thuajPershendetje` që shfaq një njoftim (alert) me mesazhin "Përshëndetje, JavaScript!". Pastaj, bëj që butoni ta thërrasë këtë funksion kur klikohet.',
      starterCode: `<!DOCTYPE html>
<html>
<body>

  <h1>Detyrë shtëpie në JavaScript</h1>

  <!-- Bëje këtë buton të thërrasë funksionin tënd -->
  <button onclick="">Kliko për një Përshëndetje</button>

  <script>
    // Përcakto funksionin tënd thuajPershendetje këtu
    
  </script>

</body>
</html>`,
      solutionCheck: (code) => {
        const hasFunction = /function\s+thuajPershendetje\s*\(\s*\)\s*\{[\s\S]*alert\(['"]Përshëndetje,\s*JavaScript!['"]\);?\s*\}/.test(code);
        const hasOnclick = /<button\s+onclick="thuajPershendetje\(\)"/i.test(code);
        if (hasFunction && hasOnclick) {
          return { success: true, message: 'Shkëlqyeshëm! Butoni yt i parë interaktiv funksionon!' };
        }
        let message = "Vazhdo të provosh! ";
        const errors = [];
        if (!hasFunction) errors.push("A e krijove funksionin `thuajPershendetje` saktë me mesazhin e duhur të njoftimit?");
        if (!hasOnclick) errors.push("A e vendose atributin `onclick` të butonit për të thirrur `thuajPershendetje()`?");
        message += errors.join(' ');
        return { success: false, message };
      },
    },
  },
];