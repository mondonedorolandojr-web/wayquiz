export const CATEGORIES = [
  {
    id: "math",
    name: "Mathematics",
    icon: "🧮",
    description: "Arithmetic, fractions, decimals, and pre-algebra",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "science",
    name: "Science",
    icon: "🔬",
    description: "Biology, chemistry, physics, and earth science",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "reading",
    name: "Reading",
    icon: "📖",
    description: "Alphabet, grammar, vocabulary, and poetry",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "language",
    name: "Foreign Language",
    icon: "🌐",
    description: "Spanish, French, German, and Japanese",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "literature",
    name: "Literature",
    icon: "📚",
    description: "Stories, poetry, literary terms, and famous authors",
    color: "from-fuchsia-500 to-violet-500",
  },
  {
    id: "history",
    name: "History",
    icon: "🏛️",
    description: "Events, people, and cultures from past eras",
    color: "from-slate-500 to-cyan-500",
  },
];

const mathQuestions = [
  // Basic Arithmetic
  { id: "m1", question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correctAnswer: 1, explanation: "2 + 2 = 4", trivia: "The number 4 is the smallest composite number!" },
  { id: "m2", question: "What is 5 - 3?", options: ["1", "2", "3", "4"], correctAnswer: 1, explanation: "5 - 3 = 2", trivia: "2 is the only even prime number!" },
  { id: "m3", question: "What is 3 × 4?", options: ["7", "12", "10", "9"], correctAnswer: 1, explanation: "3 × 4 = 12", trivia: "12 is a dozen, commonly used in many cultures!" },
  { id: "m4", question: "What is 8 ÷ 2?", options: ["2", "3", "4", "5"], correctAnswer: 2, explanation: "8 ÷ 2 = 4", trivia: "Division is the opposite of multiplication!" },
  { id: "m5", question: "What is 10 + 15?", options: ["20", "25", "30", "35"], correctAnswer: 1, explanation: "10 + 15 = 25", trivia: "25 is a perfect square (5 × 5)!" },
  
  // Fractions & Decimals
  { id: "m6", question: "What is 1/2 + 1/2?", options: ["1/2", "1", "3/2", "0"], correctAnswer: 1, explanation: "1/2 + 1/2 = 1", trivia: "Fractions represent parts of a whole!" },
  { id: "m7", question: "What is 3/4 of 8?", options: ["4", "6", "5", "3"], correctAnswer: 1, explanation: "3/4 × 8 = 6", trivia: "Multiplying fractions: multiply numerators and denominators!" },
  { id: "m8", question: "Which is bigger: 1/3 or 1/4?", options: ["1/3", "1/4", "Equal", "Depends"], correctAnswer: 0, explanation: "1/3 ≈ 0.333 and 1/4 = 0.25, so 1/3 is bigger", trivia: "Smaller denominators = larger fractions!" },
  { id: "m9", question: "What is 0.5 + 0.5?", options: ["0.5", "1.0", "1.5", "2.0"], correctAnswer: 1, explanation: "0.5 + 0.5 = 1.0", trivia: "Decimals are just another way to write fractions!" },
  { id: "m10", question: "What is 0.25 × 4?", options: ["0.5", "1", "2", "4"], correctAnswer: 1, explanation: "0.25 × 4 = 1", trivia: "0.25 = 1/4, so this is like 1/4 of 4!" },
  
  // Percentages
  { id: "m11", question: "What is 25% of 200?", options: ["25", "50", "75", "100"], correctAnswer: 1, explanation: "25% × 200 = 50", trivia: "25% = 1/4, so 200÷4 = 50!" },
  { id: "m12", question: "25% as a decimal is?", options: ["0.025", "0.25", "2.5", "25"], correctAnswer: 1, explanation: "25% = 25/100 = 0.25", trivia: "To convert %, divide by 100!" },
  { id: "m13", question: "What is 10% of 50?", options: ["0.5", "5", "10", "50"], correctAnswer: 1, explanation: "10% × 50 = 5", trivia: "10% is the same as multiplying by 0.1!" },
  { id: "m14", question: "What is 50% of 80?", options: ["20", "30", "40", "50"], correctAnswer: 2, explanation: "50% × 80 = 40", trivia: "50% means half!" },
  { id: "m15", question: "What percentage is 20 out of 100?", options: ["10%", "20%", "30%", "50%"], correctAnswer: 1, explanation: "20/100 = 20%", trivia: "Percentages are parts per 100!" },
  
  // Negative Numbers
  { id: "m16", question: "What is -5 + 3?", options: ["-8", "-2", "2", "8"], correctAnswer: 1, explanation: "-5 + 3 = -2", trivia: "Negative numbers are less than zero!" },
  { id: "m17", question: "What is -2 × -3?", options: ["-6", "6", "-5", "5"], correctAnswer: 1, explanation: "-2 × -3 = 6", trivia: "Negative times negative = positive!" },
  { id: "m18", question: "Which is bigger: -5 or -2?", options: ["-5", "-2", "Equal", "Cannot compare"], correctAnswer: 1, explanation: "-2 is greater than -5", trivia: "On a number line, -2 is to the right of -5!" },
  
  // Order of Operations
  { id: "m19", question: "What is 2 + 3 × 4?", options: ["20", "14", "12", "8"], correctAnswer: 1, explanation: "Multiply first: 3 × 4 = 12, then 2 + 12 = 14", trivia: "Remember PEMDAS: Parentheses, Exponents, Multiply/Divide, Add/Subtract!" },
  { id: "m20", question: "What is (2 + 3) × 4?", options: ["20", "14", "12", "8"], correctAnswer: 0, explanation: "Parentheses first: 2 + 3 = 5, then 5 × 4 = 20", trivia: "Parentheses change everything!" },
];

const scienceQuestions = [
  // Biology
  { id: "s1", question: "What is the basic unit of life?", options: ["Atom", "Molecule", "Cell", "Tissue"], correctAnswer: 2, explanation: "The cell is the basic unit of life", trivia: "The human body contains about 37.2 trillion cells!" },
  { id: "s2", question: "What gas do plants absorb?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correctAnswer: 1, explanation: "Plants absorb CO2 for photosynthesis", trivia: "Trees can absorb CO2 and help fight climate change!" },
  { id: "s3", question: "What process do plants use to make food?", options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"], correctAnswer: 1, explanation: "Photosynthesis converts sunlight into energy", trivia: "Chlorophyll is the green pigment that absorbs sunlight!" },
  { id: "s4", question: "What do animals exhale to the atmosphere?", options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"], correctAnswer: 2, explanation: "Animals exhale CO2 during cellular respiration", trivia: "This CO2 is then used by plants!" },
  { id: "s5", question: "How many bones are in an adult human body?", options: ["186", "206", "256", "306"], correctAnswer: 1, explanation: "An adult has 206 bones", trivia: "Babies are born with about 300 bones, but many fuse as they grow!" },
  
  // Chemistry
  { id: "s6", question: "What is the hardest natural substance?", options: ["Iron", "Diamond", "Gold", "Platinum"], correctAnswer: 1, explanation: "Diamond is the hardest natural substance", trivia: "Diamonds are formed deep underground under extreme pressure!" },
  { id: "s7", question: "What is water made of?", options: ["Hydrogen and Nitrogen", "Oxygen and Nitrogen", "Hydrogen and Oxygen", "Hydrogen and Carbon"], correctAnswer: 2, explanation: "Water is H₂O: 2 hydrogen atoms and 1 oxygen atom", trivia: "Water covers about 71% of Earth's surface!" },
  { id: "s8", question: "What element has the symbol 'Au'?", options: ["Silver", "Gold", "Aluminum", "Argon"], correctAnswer: 1, explanation: "Au is the symbol for Gold", trivia: "Gold is one of the most precious metals!" },
  { id: "s9", question: "How many elements are in the periodic table?", options: ["82", "98", "118", "150"], correctAnswer: 2, explanation: "There are 118 known elements", trivia: "New elements are sometimes discovered by scientists!" },
  
  // Physics
  { id: "s10", question: "What is the SI unit of force?", options: ["Joule", "Newton", "Watt", "Pascal"], correctAnswer: 1, explanation: "The Newton (N) is the unit of force", trivia: "It's named after Sir Isaac Newton!" },
  { id: "s11", question: "What is the speed of light?", options: ["1 million km/s", "300,000 km/s", "3,000 km/s", "30,000 km/s"], correctAnswer: 1, explanation: "Light travels at approximately 300,000 km/second", trivia: "Nothing can travel faster than light!" },
  { id: "s12", question: "What is the study of motion and forces called?", options: ["Chemistry", "Biology", "Physics", "Geology"], correctAnswer: 2, explanation: "Physics is the study of motion, forces, and energy", trivia: "Physics is one of the oldest sciences!" },
  { id: "s13", question: "What does gravity do?", options: ["Repel objects", "Create light", "Attract objects", "Make things spin"], correctAnswer: 2, explanation: "Gravity is a force that attracts objects toward each other", trivia: "Earth's gravity pulls us toward the center!" },
  
  // Earth Science
  { id: "s14", question: "What is the largest planet in our solar system?", options: ["Saturn", "Neptune", "Jupiter", "Uranus"], correctAnswer: 2, explanation: "Jupiter is the largest planet", trivia: "Jupiter has a Great Red Spot that's larger than Earth!" },
  { id: "s15", question: "How many moons does Earth have?", options: ["0", "1", "2", "3"], correctAnswer: 1, explanation: "Earth has one moon", trivia: "Our moon is about 384,400 km away!" },
  { id: "s16", question: "What is the hottest layer of Earth's atmosphere?", options: ["Stratosphere", "Troposphere", "Thermosphere", "Mesosphere"], correctAnswer: 2, explanation: "The thermosphere is the hottest layer", trivia: "It can reach temperatures of 2,500°C!" },
  { id: "s17", question: "What percentage of Earth's atmosphere is nitrogen?", options: ["21%", "78%", "1%", "50%"], correctAnswer: 1, explanation: "Nitrogen makes up about 78% of the atmosphere", trivia: "Oxygen is only about 21% of our air!" },
  { id: "s18", question: "What causes earthquakes?", options: ["Heavy rain", "Wind", "Tectonic plates shifting", "Moon phases"], correctAnswer: 2, explanation: "Earthquakes occur when tectonic plates shift", trivia: "The Ring of Fire has about 75% of the world's earthquakes!" },
  
  // Human Body
  { id: "s19", question: "How many chambers does a human heart have?", options: ["2", "3", "4", "5"], correctAnswer: 2, explanation: "The human heart has 4 chambers", trivia: "Your heart beats about 100,000 times per day!" },
  { id: "s20", question: "What is the largest organ in the human body?", options: ["Heart", "Brain", "Liver", "Skin"], correctAnswer: 3, explanation: "The skin is the largest organ by surface area", trivia: "Adult skin weighs about 3-4 kg (6-9 lbs)!" },
];

const readingQuestions = [
  // Alphabet & Phonics
  { id: "r1", question: "Which is a vowel?", options: ["B", "C", "A", "D"], correctAnswer: 2, explanation: "A is a vowel", trivia: "There are 5 vowels in English: A, E, I, O, U!" },
  { id: "r2", question: "Which of these is a consonant?", options: ["A", "E", "I", "B"], correctAnswer: 3, explanation: "B is a consonant", trivia: "Consonants are all letters except vowels!" },
  { id: "r3", question: "How many letters are in the English alphabet?", options: ["24", "25", "26", "27"], correctAnswer: 2, explanation: "The English alphabet has 26 letters", trivia: "The letter Z is the last letter!" },
  
  // Vocabulary & Word Meaning
  { id: "r4", question: "What does 'happy' mean?", options: ["Sad", "Angry", "Joyful", "Tired"], correctAnswer: 2, explanation: "Happy means joyful or pleased", trivia: "Smiling releases endorphins, the body's natural happy chemicals!" },
  { id: "r5", question: "What does 'generous' mean?", options: ["Selfish", "Kind and giving", "Angry", "Lazy"], correctAnswer: 1, explanation: "Generous means willing to give and share", trivia: "Generosity is valued in many cultures!" },
  { id: "r6", question: "What does 'brilliant' mean?", options: ["Dull", "Dark", "Very bright or intelligent", "Small"], correctAnswer: 2, explanation: "Brilliant means shining brightly or very intelligent", trivia: "The word can describe light or a clever mind!" },
  { id: "r7", question: "What does 'fortunate' mean?", options: ["Unlucky", "Lucky", "Tired", "Angry"], correctAnswer: 1, explanation: "Fortunate means lucky or having good fortune", trivia: "Fortune is related to chance and luck!" },
  { id: "r8", question: "What does 'ancient' mean?", options: ["Modern", "New", "Very old", "Recent"], correctAnswer: 2, explanation: "Ancient means very old or from long ago", trivia: "Ancient Egypt was a civilization thousands of years old!" },
  
  // Grammar
  { id: "r9", question: "What is the plural of 'child'?", options: ["Childs", "Children", "Childes", "Childz"], correctAnswer: 1, explanation: "The plural of child is children", trivia: "This is an irregular plural noun!" },
  { id: "r10", question: "What is the past tense of 'run'?", options: ["Runned", "Ran", "Running", "Runs"], correctAnswer: 1, explanation: "The past tense of run is ran", trivia: "This is an irregular verb!" },
  { id: "r11", question: "Which of these is a noun?", options: ["Happy", "Run", "Quick", "Dog"], correctAnswer: 3, explanation: "Dog is a noun (a person, place, or thing)", trivia: "Nouns name things!" },
  { id: "r12", question: "Which of these is a verb?", options: ["Blue", "Table", "Jump", "Tall"], correctAnswer: 2, explanation: "Jump is a verb (an action word)", trivia: "Verbs show what someone or something does!" },
  
  // Reading Comprehension
  { id: "r13", question: "What is the main purpose of a dictionary?", options: ["Tell stories", "Define words", "Count numbers", "Teach math"], correctAnswer: 1, explanation: "A dictionary defines words and their meanings", trivia: "The shortest dictionary has over 20,000 words!" },
  { id: "r14", question: "What genre is a story about dragons and knights?", options: ["Mystery", "Fantasy", "Romance", "Horror"], correctAnswer: 1, explanation: "Fantasy is a genre with magical or imaginary elements", trivia: "Dragons are common in fantasy stories!" },
  { id: "r15", question: "Who writes a book?", options: ["Reader", "Author", "Character", "Publisher"], correctAnswer: 1, explanation: "An author is the person who writes a book", trivia: "Famous authors like J.K. Rowling created beloved stories!" },
  { id: "r16", question: "What is a synonym?", options: ["A word that means the opposite", "A word with the same meaning", "A word that sounds similar", "A word that rhymes"], correctAnswer: 1, explanation: "Synonyms are words with the same or similar meanings", trivia: "Happy and joyful are synonyms!" },
  { id: "r17", question: "What is an antonym?", options: ["A word with the same meaning", "A word that sounds similar", "A word with the opposite meaning", "A word that rhymes"], correctAnswer: 2, explanation: "Antonyms are words with opposite meanings", trivia: "Hot and cold are antonyms!" },
  { id: "r18", question: "What is the main character of a story called?", options: ["Villain", "Protagonist", "Supporting character", "Narrator"], correctAnswer: 1, explanation: "The protagonist is the main character", trivia: "The protagonist is often the hero of the story!" },
  { id: "r19", question: "What is a poem?", options: ["A long story", "Lines of text with rhythm and sometimes rhyme", "A joke", "A scientific paper"], correctAnswer: 1, explanation: "A poem is a form of literature using rhythm and often rhyme", trivia: "Poetry has been written for thousands of years!" },
  { id: "r20", question: "What does 'fluent' reading mean?", options: ["Reading very slowly", "Reading smoothly and easily", "Reading out loud", "Reading silently"], correctAnswer: 1, explanation: "Fluent reading is smooth, easy reading without struggling", trivia: "Fluent readers understand what they read better!" },
];

const literatureQuestions = [
  { id: "lit1", question: "What is the main theme of a story?", options: ["The author", "The setting", "The main idea or message", "The main character"], correctAnswer: 2, explanation: "The theme is the main idea or message of a story", trivia: "Many famous stories teach important lessons through theme!" },
  { id: "lit2", question: "Who is the author of 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"], correctAnswer: 1, explanation: "William Shakespeare wrote 'Romeo and Juliet'", trivia: "Shakespeare is one of the most famous playwrights in history!" },
  { id: "lit3", question: "What is a stanza in poetry?", options: ["A paragraph", "A sentence", "A group of lines", "A chapter"], correctAnswer: 2, explanation: "A stanza is a grouped set of lines in a poem", trivia: "Many poems use stanzas to organize ideas and rhythm!" },
  { id: "lit4", question: "What does 'protagonist' mean?", options: ["A villain", "The narrator", "The main character", "A side character"], correctAnswer: 2, explanation: "The protagonist is the main character in a story", trivia: "The protagonist is often the hero, but not always!" },
  { id: "lit5", question: "What is an autobiography?", options: ["A story about history", "A story someone else wrote about you", "A story you write about your own life", "A fictional tale"], correctAnswer: 2, explanation: "An autobiography is a story written about a person's own life", trivia: "Famous autobiographies include works by Anne Frank and Maya Angelou!" },
];

const languageQuestions = [
  // Spanish
  { id: "l1", question: "How do you say 'Hello' in Spanish?", options: ["Adios", "Hola", "Gracias", "Por favor"], correctAnswer: 1, explanation: "Hola means Hello", trivia: "Spanish is spoken by over 500 million people worldwide!" },
  { id: "l2", question: "How do you say 'Thank you' in Spanish?", options: ["Hola", "Adiós", "Gracias", "Por favor"], correctAnswer: 2, explanation: "Gracias means thank you", trivia: "Saying 'De nada' means 'You're welcome' in Spanish!" },
  { id: "l3", question: "How do you say 'Goodbye' in Spanish?", options: ["Hola", "Adiós", "Por favor", "Gracias"], correctAnswer: 1, explanation: "Adiós means goodbye", trivia: "It literally means 'to God'!" },
  { id: "l4", question: "How do you say 'Please' in Spanish?", options: ["Gracias", "Hola", "Por favor", "Adiós"], correctAnswer: 2, explanation: "Por favor means please", trivia: "Spanish politeness requires using 'por favor'!" },
  { id: "l5", question: "How do you say 'Number 5' in Spanish?", options: ["Cuatro", "Cinco", "Seis", "Tres"], correctAnswer: 1, explanation: "Cinco means five", trivia: "Spanish numbers are easy to learn!" },
  
  // French
  { id: "l6", question: "What does 'Merci' mean?", options: ["Hello", "Goodbye", "Thank you", "Please"], correctAnswer: 2, explanation: "Merci means thank you in French", trivia: "French is the official language of 29 countries!" },
  { id: "l7", question: "How do you say 'Hello' in French?", options: ["Au revoir", "Bonjour", "S'il vous plaît", "Merci"], correctAnswer: 1, explanation: "Bonjour means hello or good day", trivia: "Bonjour means 'good day' literally!" },
  { id: "l8", question: "How do you say 'Goodbye' in French?", options: ["Bonjour", "Merci", "Au revoir", "S'il vous plaît"], correctAnswer: 2, explanation: "Au revoir means goodbye", trivia: "It literally means 'until I see you again'!" },
  { id: "l9", question: "How do you say 'Please' in French?", options: ["Merci", "S'il vous plaît", "Bonjour", "Au revoir"], correctAnswer: 1, explanation: "S'il vous plaît means please (formal)", trivia: "There's also 's'il te plaît' for informal situations!" },
  { id: "l10", question: "What does 'Oui' mean in French?", options: ["No", "Yes", "Maybe", "Please"], correctAnswer: 1, explanation: "Oui means yes", trivia: "'Non' means no in French!" },
  
  // German
  { id: "l11", question: "How do you say 'Hello' in German?", options: ["Guten Morgen", "Auf Wiedersehen", "Danke", "Bitte"], correctAnswer: 0, explanation: "Guten Morgen (or Hallo) means hello", trivia: "German has different greetings for different times of day!" },
  { id: "l12", question: "How do you say 'Thank you' in German?", options: ["Bitte", "Danke", "Nein", "Ja"], correctAnswer: 1, explanation: "Danke means thank you", trivia: "German is spoken by over 130 million people!" },
  { id: "l13", question: "What does 'Ja' mean in German?", options: ["No", "Yes", "Hello", "Goodbye"], correctAnswer: 1, explanation: "Ja means yes", trivia: "'Nein' means no in German!" },
  { id: "l14", question: "How do you say 'Please' in German?", options: ["Ja", "Danke", "Bitte", "Nein"], correctAnswer: 2, explanation: "Bitte means please (or 'you're welcome')", trivia: "Bitte is polite and widely used!" },
  
  // Japanese
  { id: "l15", question: "How do you say 'Hello' in Japanese?", options: ["Sayonara", "Konnichiwa", "Arigatou", "Sumimasen"], correctAnswer: 1, explanation: "Konnichiwa means hello (daytime greeting)", trivia: "Japanese has different greetings for different times!" },
  { id: "l16", question: "How do you say 'Thank you' in Japanese?", options: ["Arigatou", "Konnichiwa", "Sayonara", "Sumimasen"], correctAnswer: 0, explanation: "Arigatou (or arigatou gozaimasu) means thank you", trivia: "'Domo arigatou' means 'thank you very much'!" },
  { id: "l17", question: "How do you say 'Goodbye' in Japanese?", options: ["Arigatou", "Sumimasen", "Sayonara", "Konnichiwa"], correctAnswer: 2, explanation: "Sayonara means goodbye", trivia: "It's one of the most famous Japanese words!" },
  { id: "l18", question: "What does 'Hai' mean in Japanese?", options: ["No", "Yes", "Hello", "Thank you"], correctAnswer: 1, explanation: "Hai means yes", trivia: "'Iie' means no in Japanese!" },
  { id: "l19", question: "How do you say 'Excuse me' in Japanese?", options: ["Arigatou", "Sumimasen", "Konnichiwa", "Sayonara"], correctAnswer: 1, explanation: "Sumimasen means excuse me or sorry", trivia: "It's a very polite expression in Japanese!" },
  { id: "l20", question: "What does 'Kawaii' mean in Japanese slang?", options: ["Strong", "Sad", "Cute", "Happy"], correctAnswer: 2, explanation: "Kawaii means cute or adorable", trivia: "This word is popular in anime and pop culture!" },
];

const historyQuestions = [
  { id: "h1", question: "Who was the first President of the United States?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], correctAnswer: 1, explanation: "George Washington was the first U.S. President", trivia: "Washington served two terms from 1789 to 1797!" },
  { id: "h2", question: "Which ancient civilization built the pyramids?", options: ["Romans", "Greek", "Egyptians", "Mayans"], correctAnswer: 2, explanation: "The pyramids were built by the ancient Egyptians", trivia: "The Great Pyramid of Giza is one of the Seven Wonders of the Ancient World!" },
  { id: "h3", question: "What year did the first man land on the moon?", options: ["1959", "1969", "1979", "1989"], correctAnswer: 1, explanation: "Apollo 11 landed on the moon in 1969", trivia: "Neil Armstrong said 'That's one small step for man...'" },
  { id: "h4", question: "What was the name of the ship that carried the Pilgrims to America?", options: ["Santa Maria", "Mayflower", "Beagle", "Endeavour"], correctAnswer: 1, explanation: "The Pilgrims sailed to America on the Mayflower", trivia: "The Mayflower arrived in 1620 at what became Plymouth Colony!" },
  { id: "h5", question: "What wall divided East and West Berlin?", options: ["Great Wall", "Hadrian's Wall", "Berlin Wall", "Wall of China"], correctAnswer: 2, explanation: "The Berlin Wall divided East and West Berlin", trivia: "It stood from 1961 until 1989!" },
];

export const SAMPLE_QUESTIONS = {
  math: mathQuestions,
  science: scienceQuestions,
  reading: readingQuestions,
  language: languageQuestions,
  literature: literatureQuestions,
  history: historyQuestions,
};

export const quizzes = CATEGORIES.map((category) => ({
  id: category.id,
  title: category.name,
  description: category.description,
  icon: category.icon,
  color: category.color,
  questions: SAMPLE_QUESTIONS[category.id] || [],
}));