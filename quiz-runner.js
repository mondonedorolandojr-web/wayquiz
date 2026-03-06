// quiz-runner.js - simple quiz UI
(function(){
  // simple confetti and sound helpers
  function playCheer(volume=0.06, duration=0.18){
    try{
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(880, ctx.currentTime);
      g.gain.setValueAtTime(volume, ctx.currentTime);
      o.connect(g); g.connect(ctx.destination);
      o.start();
      o.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + duration);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      setTimeout(()=>{ try{ o.stop(); ctx.close(); }catch(e){} }, (duration+0.05)*1000);
    }catch(e){ /* ignore audio errors */ }
  }

  function runConfetti(amount=80){
    const canvas = document.createElement('canvas');
    canvas.className = 'confetti-canvas';
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    const colors = ['#ff4d4f','#ffb400','#00c853','#00b0ff','#9b59b6'];
    const pieces = [];
    for(let i=0;i<amount;i++){
      pieces.push({
        x: Math.random()*canvas.width,
        y: Math.random()*-canvas.height*0.5,
        w: 8+Math.random()*10,
        h: 6+Math.random()*8,
        rot: Math.random()*360,
        speedY: 2 + Math.random()*4,
        speedX: -2 + Math.random()*4,
        color: colors[Math.floor(Math.random()*colors.length)],
        rotSpeed: -6 + Math.random()*12
      });
    }
    let t0 = performance.now();
    const duration = 3500;
    function frame(now){
      const dt = now - t0; t0 = now;
      ctx.clearRect(0,0,canvas.width,canvas.height);
      pieces.forEach(p=>{
        p.x += p.speedX * (dt/16);
        p.y += p.speedY * (dt/16);
        p.rot += p.rotSpeed * (dt/16);
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot * Math.PI/180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
        ctx.restore();
      });
      if(now - start < duration){ req = requestAnimationFrame(frame); }
      else{ cancelAnimationFrame(req); canvas.parentNode && canvas.parentNode.removeChild(canvas); }
    }
    let req; const start = performance.now(); req = requestAnimationFrame(frame);
  }

  const quizzes = {
    // Math subtopics
    math_addition: [
      {q: 'What is 2 + 2?', opts:['3','4','5','6'], a:1},
      {q: 'What is 7 + 5?', opts:['11','12','13','10'], a:1},
      {q: 'What is 15 + 6?', opts:['20','21','22','19'], a:1}
    ],
    math_subtraction: [
      {q: 'What is 5 - 2?', opts:['1','2','3','4'], a:2},
      {q: 'What is 10 - 7?', opts:['1','2','3','4'], a:2},
      {q: 'What is 20 - 9?', opts:['11','12','10','9'], a:0}
    ],
    math_multiplication: [
      {q: 'What is 3 × 4?', opts:['7','12','10','9'], a:1},
      {q: 'What is 6 × 6?', opts:['30','36','42','32'], a:1},
      {q: 'What is 9 × 7?', opts:['54','56','63','72'], a:2}
    ],
    math_division: [
      {q: 'What is 8 ÷ 2?', opts:['2','3','4','5'], a:2},
      {q: 'What is 9 ÷ 3?', opts:['1','2','3','4'], a:2},
      {q: 'What is 18 ÷ 6?', opts:['2','3','4','5'], a:1}
    ],
    math_fractions: [
      {q: 'What is 1/2 + 1/2?', opts:['1/2','1','3/2','0'], a:1},
      {q: 'What is 3/4 of 8?', opts:['4','6','5','3'], a:1},
      {q: 'Which is bigger: 1/3 or 1/4?', opts:['1/3','1/4','Equal','Depends'], a:0}
    ],
    math_decimals: [
      {q: 'What is 0.5 + 0.5?', opts:['0.5','1.0','1.5','2.0'], a:1},
      {q: 'What is 0.25 × 4?', opts:['0.5','1','2','4'], a:1},
      {q: 'Which is 0.75 as a fraction?', opts:['3/4','1/2','1/4','7/10'], a:0}
    ],
    math_percents: [
      {q: 'What is 25% of 200?', opts:['25','50','75','100'], a:1},
      {q: '25% as a decimal is?', opts:['0.025','0.25','2.5','25'], a:1},
      {q: 'What is 10% of 50?', opts:['0.5','5','10','50'], a:1}
    ],
    math_negatives: [
      {q: 'What is -1 + 1?', opts:['-2','0','1','2'], a:1},
      {q: 'What is -3 + -2?', opts:['-1','-5','5','1'], a:1},
      {q: 'What is -4 × 2?', opts:['-8','8','-6','6'], a:0}
    ],

    // Pre-algebra / other categories
    pre_number_properties: [
      {q: 'Is 0 an even number?', opts:['Yes','No','Depends','Unknown'], a:0},
      {q: 'Is 15 divisible by 3?', opts:['Yes','No','Only sometimes','Cannot tell'], a:0}
    ],
    pre_variables: [
      {q: 'Solve for x: x + 2 = 5', opts:['1','2','3','4'], a:2},
      {q: 'If x=3, what is 2x?', opts:['3','5','6','9'], a:2}
    ],
    pre_algebraic_expressions: [
      {q: 'Simplify: 2x + 3x', opts:['2x','3x','5x','6x'], a:2},
      {q: 'Simplify: 4y - y', opts:['y','3y','4y','5y'], a:1}
    ],
    pre_one_step_equations: [
      {q: 'Solve: 2x = 8', opts:['2','4','6','8'], a:1},
      {q: 'Solve: x/3 = 4', opts:['1','2','3','12'], a:3}
    ],

    // Science - Life Sciences
    science_biology: [
      {q: 'What is the basic unit of life?', opts:['Atom','Molecule','Cell','Tissue'], a:2},
      {q: 'Which of these is a prokaryote?', opts:['Dog','Bacteria','Plant','Fish'], a:1},
      {q: 'What do mitochondria do in a cell?', opts:['Store DNA','Produce energy','Make proteins','Filter water'], a:1}
    ],
    science_ecology: [
      {q: 'What is a group of organisms of the same species living in one area called?', opts:['Ecosystem','Biome','Population','Community'], a:2},
      {q: 'What is the role of decomposers in an ecosystem?', opts:['Produce food','Break down dead matter','Hunt prey','Photosynthesize'], a:1},
      {q: 'What percentage of Earth\'s oxygen comes from the ocean?', opts:['20%','50%','70%','10%'], a:1}
    ],
    science_body: [
      {q: 'How many bones does an adult human have?', opts:['186','206','226','256'], a:1},
      {q: 'What is the largest organ in the human body?', opts:['Heart','Brain','Skin','Liver'], a:2},
      {q: 'What type of blood cell helps fight infections?', opts:['Red blood cells','White blood cells','Platelets','Plasma'], a:1}
    ],
    science_plants: [
      {q: 'What process do plants use to make their own food?', opts:['Respiration','Photosynthesis','Fermentation','Digestion'], a:1},
      {q: 'Which part of a plant absorbs water from the soil?', opts:['Stem','Leaf','Root','Flower'], a:2},
      {q: 'What color is chlorophyll?', opts:['Red','Yellow','Green','Blue'], a:2}
    ],

    // Science - Physical Sciences
    science_physics: [
      {q: 'What is the SI unit of force?', opts:['Joule','Watt','Newton','Pascal'], a:2},
      {q: 'What does Newton\'s first law of motion state?', opts:['Force equals mass times acceleration','An object at rest stays at rest unless acted upon','Energy cannot be created or destroyed','For every action there is a reaction'], a:1},
      {q: 'What is the speed of light in vacuum?', opts:['300 m/s','300,000 m/s','300,000,000 m/s','3,000,000,000 m/s'], a:2}
    ],
    science_chemistry: [
      {q: 'What is the chemical symbol for Gold?', opts:['Go','Au','Gd','Gl'], a:1},
      {q: 'What is the pH value of pure water at 25°C?', opts:['5','7','9','11'], a:1},
      {q: 'How many electrons does a Carbon atom have?', opts:['4','6','8','12'], a:1}
    ],
    science_geology: [
      {q: 'What is the hardest natural substance on Earth?', opts:['Granite','Diamond','Quartz','Feldspar'], a:1},
      {q: 'How many main layers does the Earth have?', opts:['2','3','4','5'], a:1},
      {q: 'What scale measures the hardness of minerals?', opts:['Richter','Mohs','pH','Decibel'], a:1}
    ],
    science_astronomy: [
      {q: 'Which planet is closest to the Sun?', opts:['Venus','Mercury','Mars','Earth'], a:1},
      {q: 'What is the name of our galaxy?', opts:['Andromeda','Orion','Milky Way','Sagittarius'], a:2},
      {q: 'How long does it take Earth to orbit the Sun?', opts:['30 days','365 days','1000 days','10 years'], a:1}
    ],

    // Reading - Fundamentals
    read_alphabet: [
      {q: 'Which letter comes after M in the alphabet?', opts:['K','L','N','O'], a:2},
      {q: 'How many letters are in the English alphabet?', opts:['24','25','26','27'], a:2},
      {q: 'What is the first letter of the alphabet?', opts:['B','A','C','D'], a:1}
    ],
    read_vowels: [
      {q: 'Which of these is a vowel?', opts:['B','E','G','K'], a:1},
      {q: 'How many vowels are there in the English alphabet?', opts:['3','4','5','6'], a:2},
      {q: 'Which is NOT a vowel?', opts:['A','E','I','L'], a:3}
    ],
    read_consonants: [
      {q: 'Which of these is a consonant?', opts:['A','E','M','O'], a:2},
      {q: 'What letter follows D, E, F?', opts:['G','H','I','J'], a:0},
      {q: 'How many consonants are in the English alphabet?', opts:['21','20','15','25'], a:0}
    ],
    read_punctuation: [
      {q: 'What is this punctuation mark called? .', opts:['Comma','Period','Colon','Dash'], a:1},
      {q: 'What punctuation mark ends a question?', opts:['Period','Comma','Question mark','Exclamation'], a:2},
      {q: 'What is this called? !', opts:['Question mark','Exclamation mark','Period','Apostrophe'], a:1}
    ],

    // Reading - Advanced
    read_comprehension: [
      {q: 'What is the main purpose of reading comprehension?', opts:['To read fast','To understand the text','To memorize words','To spell correctly'], a:1},
      {q: 'What is the central idea of a story called?', opts:['Plot','Theme','Setting','Character'], a:1},
      {q: 'What helps you understand what happens next in a story?', opts:['Punctuation','Context clues','Dictionary','Spelling'], a:1}
    ],
    read_vocabulary: [
      {q: 'What does "benevolent" mean?', opts:['Angry','Kind and helpful','Sad','Confused'], a:1},
      {q: 'Which word means the opposite of "big"?', opts:['Large','Small','Huge','Enormous'], a:1},
      {q: 'What does "curious" mean?', opts:['Scared','Angry','Eager to know','Tired'], a:2}
    ],
    read_grammar: [
      {q: 'Which sentence is grammatically correct?', opts:['She go to school','She goes to school','She going to school','She gone to school'], a:1},
      {q: 'What is the subject of this sentence? "The cat sleeps."', opts:['Sleeps','The','Cat','The cat'], a:2},
      {q: 'What is a noun?', opts:['An action','A thing or person','A description','An emotion'], a:1}
    ],
    read_poetry: [
      {q: 'What is a poem that rhymes called?', opts:['Free verse','Rhyming poem','Haiku','Sonnet'], a:3},
      {q: 'What is a haiku?', opts:['A long poem','A poem with 5-7-5 syllables','A sad poem','A poem about nature'], a:1},
      {q: 'What is a rhyme?', opts:['Repetition of sounds','Same syllable count','Different words','Repeated letters'], a:0}
    ],

    // Foreign Language - Languages
    lang_spanish: [
      {q: 'How do you say "Hello" in Spanish?', opts:['Adios','Hola','Por favor','Gracias'], a:1},
      {q: 'What does "Gracias" mean?', opts:['Hello','Goodbye','Thank you','Please'], a:2},
      {q: 'How do you say "Water" in Spanish?', opts:['Comida','Agua','Pan','Vino'], a:1}
    ],
    lang_french: [
      {q: 'How do you say "Hello" in French?', opts:['Salut','Bonjour','Au revoir','Merci'], a:1},
      {q: 'What does "Merci" mean?', opts:['Hello','Goodbye','Thank you','Please'], a:2},
      {q: 'How do you say "Bread" in French?', opts:['Eau','Pain','Fleur','Chat'], a:1}
    ],
    lang_german: [
      {q: 'How do you say "Hello" in German?', opts:['Auf Wiedersehen','Hallo','Danke','Guten Tag'], a:3},
      {q: 'What does "Danke" mean?', opts:['Hello','Goodbye','Thank you','Goodnight'], a:2},
      {q: 'How do you say "Cat" in German?', opts:['Hund','Katze','Vogel','Fisch'], a:1}
    ],
    lang_japanese: [
      {q: 'How do you say "Hello" in Japanese?', opts:['Sayonara','Konnichiwa','Arigato','Sumimasen'], a:1},
      {q: 'What does "Arigato" mean?', opts:['Hello','Goodbye','Thank you','Goodnight'], a:2},
      {q: 'How do you say "Yes" in Japanese?', opts:['Iie','Hai','Nani','Dare'], a:1}
    ],

    // Foreign Language - Skills
    lang_phrases: [
      {q: 'What does "Au revoir" mean?', opts:['Hello','Goodbye','Thank you','Good morning'], a:1},
      {q: 'What does "Guten Morgen" mean?', opts:['Good night','Good morning','Good afternoon','Good evening'], a:1},
      {q: 'In Spanish, "De nada" means:', opts:['You\'re welcome','No problem','Thank you','Please'], a:0}
    ],
    lang_grammar: [
      {q: 'In Spanish, which article means "the" (feminine singular)?', opts:['El','La','Los','Las'], a:1},
      {q: 'In French, what is the present tense of "to be"?', opts:['Etre','Avoir','Aller','Faire'], a:0},
      {q: 'In German, which article is used for "der"?', opts:['Feminine','Masculine','Neuter','Plural'], a:1}
    ],
    lang_vocab: [
      {q: 'What does "Familia" mean in Spanish?', opts:['Friend','House','Family','School'], a:2},
      {q: 'What does "Maison" mean in French?', opts:['Garden','House','School','Park'], a:1},
      {q: 'What does "Schule" mean in German?', opts:['Book','School','Teacher','Classroom'], a:1}
    ],
    lang_pronunciation: [
      {q: 'How is the French letter "R" typically pronounced?', opts:['Like English R','Guttural sound','Silent','Like W'], a:1},
      {q: 'In Spanish, "J" sounds like:', opts:['English J','English H','English Y','Silent'], a:1},
      {q: 'In German, "W" is pronounced like:', opts:['English W','English V','English Z','English Y'], a:1}
    ]
  };

  const titles = {
    math_addition: 'Addition',
    math_subtraction: 'Subtraction',
    math_multiplication: 'Multiplication',
    math_division: 'Division',
    math_fractions: 'Fractions',
    math_decimals: 'Decimals',
    math_percents: 'Percents',
    math_negatives: 'Negatives',
    pre_number_properties: 'Number Properties',
    pre_variables: 'Variables',
    pre_algebraic_expressions: 'Algebraic Expressions',
    pre_one_step_equations: 'One-Step Equations',
    
    // Science
    science_biology: 'Biology',
    science_ecology: 'Ecology',
    science_body: 'Human Body',
    science_plants: 'Plants',
    science_physics: 'Physics',
    science_chemistry: 'Chemistry',
    science_geology: 'Geology',
    science_astronomy: 'Astronomy',
    
    // Reading
    read_alphabet: 'Alphabet',
    read_vowels: 'Vowels',
    read_consonants: 'Consonants',
    read_punctuation: 'Punctuation',
    read_comprehension: 'Comprehension',
    read_vocabulary: 'Vocabulary',
    read_grammar: 'Grammar',
    read_poetry: 'Poetry',
    
    // Foreign Language
    lang_spanish: 'Spanish',
    lang_french: 'French',
    lang_german: 'German',
    lang_japanese: 'Japanese',
    lang_phrases: 'Common Phrases',
    lang_grammar: 'Grammar',
    lang_vocab: 'Vocabulary',
    lang_pronunciation: 'Pronunciation'
  };

  function $(s,root=document){return root.querySelector(s)}

  function renderQuiz(category){
    const data = quizzes[category] || [];
    const state = {i:0,score:0,questions:data};

    const root = document.getElementById('quiz-root');
    function showQuestion(){
      const item = state.questions[state.i];
      root.innerHTML = '';
      const card = document.createElement('div'); card.className='quiz-card';
      // header with subtopic title
      const hdr = document.createElement('div'); hdr.className='quiz-header'; hdr.textContent = titles[category] || category;
      card.appendChild(hdr);
      const q = document.createElement('div'); q.className='quiz-question'; q.textContent = item.q; card.appendChild(q);
      const opts = document.createElement('div'); opts.className='quiz-options';
      item.opts.forEach((opt,idx)=>{
        const b = document.createElement('button'); b.className='option'; b.textContent = opt; b.disabled=false;
        b.addEventListener('click', ()=>{
          // disable all
          opts.querySelectorAll('.option').forEach(o=>{o.disabled=true; o.classList.add('disabled')});
          if(idx===item.a){ b.classList.add('correct'); state.score++; } else { b.classList.add('wrong'); opts.children[item.a].classList.add('correct'); }
        });
        opts.appendChild(b);
      });
      card.appendChild(opts);
      const footer = document.createElement('div'); footer.className='quiz-footer';
      const next = document.createElement('button'); next.className='btn-next'; next.textContent='Next';
      next.addEventListener('click', ()=>{
        if(state.i < state.questions.length-1){ state.i++; showQuestion(); } else { showResult(); }
      });
      footer.appendChild(next);
      card.appendChild(footer);
      // ensure overlay is visible
      root.appendChild(card);
      // animate card in
      requestAnimationFrame(()=>{ card.style.opacity = '1'; card.style.transform = 'none'; });
    }

    function showResult(){
      root.innerHTML='';
      const card = document.createElement('div'); card.className='quiz-card';
      const res = document.createElement('div'); res.className='quiz-result';
      const total = state.questions.length;
      const pct = total ? Math.round((state.score / total) * 100) : 0;
      let message = '';
      if(pct === 100) message = 'Perfect!';
      else if(pct >= 80) message = "You're so good!";
      else if(pct >= 50) message = 'Good job!';
      else message = 'Keep trying!';

      res.innerHTML = `
        <div class="result-badge">${pct}%</div>
        <div class="result-title">${message}</div>
        <p class="result-sub">You scored ${state.score} / ${total}</p>
      `;
      card.appendChild(res);

      // save score to localStorage under a unified key
      try{
        const key = 'wayquizz_scores';
        const raw = localStorage.getItem(key);
        const store = raw ? JSON.parse(raw) : {};
        if(!store[category]) store[category] = [];
        store[category].push({score: state.score, total: state.questions.length, date: new Date().toISOString()});
        localStorage.setItem(key, JSON.stringify(store));
      }catch(e){ console.warn('Could not save score', e); }

      const footer = document.createElement('div'); footer.style.display='flex'; footer.style.justifyContent='center'; footer.style.gap='12px'; footer.style.marginTop='12px';

      const retry = document.createElement('button'); retry.className='btn-next'; retry.textContent='Retry';
      retry.addEventListener('click', ()=>{ state.i = 0; state.score = 0; showQuestion(); });

      const backMain = document.createElement('button'); backMain.className='btn-next'; backMain.textContent='Back to Topics';
      backMain.style.background = '#63b7b6';
      backMain.addEventListener('click', ()=>{
        // hide quiz root and show main content if present
        const main = document.getElementById('main-content');
        if(main) main.style.display = '';
        root.style.display = 'none';
        document.body.classList.remove('quiz-runner');
        root.innerHTML = '';
      });

      footer.appendChild(retry);
      footer.appendChild(backMain);
      card.appendChild(footer);
      root.appendChild(card);

      // celebrate on high scores
      if(pct >= 80){
        // small delay so result is visible then play effects
        setTimeout(()=>{
          // more confetti for perfect
          runConfetti(pct === 100 ? 160 : 80);
          playCheer(pct === 100 ? 0.12 : 0.06, pct === 100 ? 0.3 : 0.18);
          // add an emoji to result title for extra flair
          const emoji = document.createElement('div'); emoji.className = 'celebrate-emoji'; emoji.textContent = pct === 100 ? '🎉' : '👏';
          res.insertBefore(emoji, res.firstChild);
        }, 240);
      }
    }

    showQuestion();
  }

  window.startQuiz = function(category){
    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if(!user || !user.name){
      alert("Please log in first to take quizzes!");
      window.location.href = "login.html";
      return;
    }
    
    // hide main content if present
    const main = document.getElementById('main-content');
    if(main) main.style.display = 'none';
    // ensure quiz root exists and is visible
    let root = document.getElementById('quiz-root');
    if(!root){ root = document.createElement('div'); root.id = 'quiz-root'; document.body.appendChild(root); }
    // make it an overlay and show
    root.className = 'quiz-overlay';
    root.style.display = 'flex';
    renderQuiz(category);
  }
})();
