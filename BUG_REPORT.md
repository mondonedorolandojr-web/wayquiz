# WayQuizz Bug Report & Issues Found

## 🔴 Critical Issues

### 1. **About.jsx - Navigation Not Using React Router**
**Location:** [pages/About.jsx](pages/About.jsx#L10-L13)
**Severity:** High
**Issue:** Navigation links use `<a href>` instead of React Router `<Link>` component, causing full page reloads instead of client-side navigation.
```jsx
// ❌ Wrong
<a href="/quiz" style={{...}}>Quizzes</a>

// ✅ Should be
<Link to="/quiz" style={{...}}>Quizzes</Link>
```
**Impact:** Poor performance, loss of component state, worse UX

---

### 2. **QuizApp.jsx - Missing Question Array Validation**
**Location:** [QuizApp.jsx](QuizApp.jsx#L103)
**Severity:** High
**Issue:** No validation that `currentQuiz.questions` is an array before accessing `.length` and mapping.
```jsx
// Could crash if questions is undefined/null
{currentQuiz.questions.map((option, index) => (
```
**Fix:** Add guard clause:
```jsx
if (!currentQuiz?.questions || !Array.isArray(currentQuiz.questions)) return null;
```

---

### 3. **QuizUploader.jsx - Incomplete Error Handling**
**Location:** [components/QuizUploader.jsx](components/QuizUploader.jsx#L32-L47)
**Severity:** High
**Issue:** Fetch error handling doesn't differentiate between network errors and JSON parsing errors. If `response.json()` fails, it won't be caught properly.
```jsx
const data = await response.json(); // Could throw but is in catch block
```
**Fix:** Wrap JSON parsing separately or add try-catch for JSON parsing

---

### 4. **Server Upload - No File Size Limit**
**Location:** [server/server.js](server/server.js#L18)
**Severity:** High
**Issue:** Multer upload has no size limit, allowing DOS attacks or memory exhaustion
```jsx
const upload = multer({ dest: 'uploads/' }); // No limits!
```
**Fix:**
```jsx
const upload = multer({ 
  dest: 'uploads/',
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB max
});
```

---

## 🟡 Medium Issues

### 5. **QuestionGenerator.js - Weak Question Generation Logic**
**Location:** [server/questionGenerator.js](server/questionGenerator.js#L8-65)
**Severity:** Medium
**Issues:**
- Only extracts 6 sentences max, resulting in ≤10 questions from short texts
- Distractors are poor (just word variations, not realistic alternatives)
- Regex doesn't handle capitalized words properly
- `indexOf()` could fail if correct answer gets filtered out during shuffle
```jsx
const correctIndex = shuffled.indexOf(correctAnswer); // Could be -1
```
**Suggested Fix:** 
- Increase sentence extraction limit
- Generate more contextually relevant distractors
- Better word extraction regex

---

### 6. **Navbar.jsx - Duplicate Style Application**
**Location:** [components/Navbar.jsx](components/Navbar.jsx#L17-23)
**Severity:** Medium
**Issue:** Color property applied both conditionally AND in the main style object, causing conflicts:
```jsx
<Link to="/" style={{
  color: 'white',
  backgroundColor: location.pathname === '/' ? '#f2e9b8' : 'transparent',
  color: location.pathname === '/' ? '#111' : 'white' // Color set twice!
}}>
```
**Fix:** Remove first `color: 'white'` or move color logic out

---

### 7. **About.jsx - Duplicate Navbar Code**
**Location:** [pages/About.jsx](pages/About.jsx#L2-20)
**Severity:** Medium
**Issue:** Navbar is hard-coded instead of using the Navbar component. Breaks DRY principle and makes maintenance harder. Also uses `<a>` tags instead of `<Link>`.
**Fix:** Import and use `<Navbar>` component like in other pages

---

### 8. **Missing Image Assets**
**Location:** [Navbar.jsx](components/Navbar.jsx#L5) and [About.jsx](pages/About.jsx#L4)
**Severity:** Medium
**Issue:** References to `/logo.jpg` and images like `/math.jfif`, `/science.jfif` will cause 404 errors if not in public folder
**Impact:** Broken images throughout the app

---

### 9. **Memory Leak in QuizUploader**
**Location:** [components/QuizUploader.jsx](components/QuizUploader.jsx#L47)
**Severity:** Medium
**Issue:** setTimeout with state updates could fire after component unmounts:
```jsx
setTimeout(() => onClose(), 1000); // Could cause unmounted component warning
```
**Fix:** Use AbortController or cleanup in useEffect

---

### 10. **QuizApp.jsx - No Loading Indicator During Question Transition**
**Location:** [QuizApp.jsx](QuizApp.jsx#L24-34)
**Severity:** Low
**Issue:** 500ms timeout between questions has no visual feedback. User might think app is frozen.
**Fix:** Add loading spinner or disabled state during transition

---

## 🟢 Minor Issues

### 11. **Missing Error Boundary**
**Location:** [App.jsx](App.jsx)
**Severity:** Low
**Issue:** No Error Boundary component to catch and handle React errors gracefully
**Fix:** Create error boundary component for production safety

---

### 12. **Login/Signup Modal - Only Demo Functionality**
**Location:** [components/LoginModal.jsx](components/LoginModal.jsx#L13-18)
**Severity:** Low
**Issue:** Shows alert dialogs instead of actually handling auth. Fine for demo but should be noted.
```jsx
alert(`Welcome back! (Demo login)`);
```

---

### 13. **Quiz Questions Missing from Initial Load**
**Location:** All quiz data in [lib/quizData.js](lib/quizData.js)
**Severity:** Low
**Issue:** Some quizzes have very few questions (Reading: 2, Science: 3). Consider adding more.

---

### 14. **Progress Bar Precision Issues**
**Location:** [QuizApp.jsx](QuizApp.jsx#L259)
**Severity:** Low
**Issue:** Percentage calculation could have floating point precision issues for edge cases
```jsx
width: `${((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100}%`
```
**Fix:** Use `Math.round()` to ensure integer percentages

---

### 15. **Hardcoded Server URL**
**Location:** [components/QuizUploader.jsx](components/QuizUploader.jsx#L34)
**Severity:** Low
**Issue:** Server URL hardcoded as `http://localhost:5000`
```jsx
const response = await fetch('http://localhost:5000/api/generate-questions', {
```
**Fix:** Use environment variables for different deployments

---

## 📋 Summary Table

| # | Issue | Severity | Component | Type |
|---|-------|----------|-----------|------|
| 1 | Navigation using `<a>` instead of `<Link>` | 🔴 High | About.jsx | Logic |
| 2 | Missing questions array validation | 🔴 High | QuizApp.jsx | Logic |
| 3 | Incomplete fetch error handling | 🔴 High | QuizUploader.jsx | Logic |  
| 4 | No file upload size limit | 🔴 High | server.js | Security |
| 5 | Weak question generation | 🟡 Medium | questionGenerator.js | Logic |
| 6 | Duplicate style attributes | 🟡 Medium | Navbar.jsx | Style |
| 7 | Duplicate navbar code | 🟡 Medium | About.jsx | Architecture |
| 8 | Missing image assets | 🟡 Medium | Multiple | Assets |
| 9 | Memory leak potential | 🟡 Medium | QuizUploader.jsx | Memory |
| 10 | Missing loading states | 🟡 Medium | QuizApp.jsx | UX |
| 11 | No error boundary | 🟢 Low | App.jsx | Error Handling |
| 12 | Demo auth only | 🟢 Low | LoginModal.jsx | Feature |
| 13 | Few quiz questions | 🟢 Low | quizData.js | Content |
| 14 | Progress bar precision | 🟢 Low | QuizApp.jsx | Display |
| 15 | Hardcoded server URL | 🟢 Low | QuizUploader.jsx | Config |

---

## ✅ Recommendations - Priority Fix Order

1. **First:** Fix navigation in About.jsx (High impact, easy fix)
2. **Second:** Add file size limit to server (Security critical)
3. **Third:** Fix question validation in QuizApp.jsx (Prevents crashes)
4. **Fourth:** Improve error handling in QuizUploader (Better UX)
5. **Fifth:** Remove duplicate navbar code from About.jsx (Code quality)
6. **Sixth:** Address other medium/low priority items as time permits

