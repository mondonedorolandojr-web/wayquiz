import fs from 'fs';
import { generateQuestionsFromText } from './questionGenerator.js';

const text = fs.readFileSync('../amazon_quiz_content.txt', 'utf-8');
console.log('Text length:', text.length);

generateQuestionsFromText(text).then(questions => {
  console.log('Questions generated:', questions.length);
  console.log(JSON.stringify(questions.slice(0, 2), null, 2));
}).catch(err => {
  console.error('Error:', err);
});