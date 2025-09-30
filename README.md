# 📘 Incubyte TDD Assessment — String Calculator (Node.js + TypeScript + Jest)

## Overview
This project implements the classic **String Calculator practice exercise** using **Test-Driven Development (TDD)** principles.  
It demonstrates incremental development through **Red → Green → Refactor** cycles, with commit history showing each step.

The exercise is implemented in **Node.js + TypeScript** with **Jest** as the testing framework.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Test
```bash
# Install dependencies
npm ci

# Run all tests
npm test

# Run with coverage
npm run test -- --coverage
```

---

## ✅ Implemented Features (Steps)

- **Step 1:** Empty string returns 0; single number returns value; two numbers return sum  
- **Step 2:** Unknown number of comma-separated numbers  
- **Step 3:** Support newlines as delimiters  
- **Step 4:** Custom delimiters using `//;\n` syntax  
- **Step 5:** Throw on negatives with error message listing all negatives  
- **Step 6:** Ignore numbers greater than 1000  
- **Step 7:** Support delimiters of any length (e.g. `//[***]\n1***2***3`)  
- **Step 8:** Support multiple delimiters (e.g. `//[*][%]\n1*2%3`)  
- **Step 9:** Support multiple multi-length delimiters (e.g. `//[foo][bar]\n1foo2bar3`)  

---

## 📂 Project Structure
```
src/
  stringCalculator.ts   # Implementation
tests/
  stringCalculator.test.ts # Jest test cases
```

---

## 🧪 Example Test Cases

```ts
add('')                // 0
add('1,2,3')           // 6
add('1\n2,3')          // 6
add('//;\n1;2')        // 3
add('//[***]\n1***2***3')  // 6
add('//[*][%]\n1*2%3')     // 6
add('//[foo][bar]\n1foo2bar3') // 6
add('2,1001')          // 2
add('1,-2,-3')         // throws "negatives not allowed: -2,-3"
```

---

## 🔍 Design & Assumptions
- Default delimiters: `,` and `\n`
- Custom delimiter format:
  - `//;\n1;2`
  - `//[***]\n1***2***3`
  - `//[*][%]\n1*2%3`
  - `//[foo][bar]\n1foo2bar3`
- Numbers >1000 are ignored
- Negative numbers throw `Error` with all negatives listed
- Time complexity: **O(n)** for n tokens
- Regex safely escapes special characters in delimiters

---

## 📖 TDD Evidence
This repo was built strictly using TDD.  
Each commit follows the **Red → Green → Refactor** cycle.

👉 See [GIT_LOG.md](./GIT_LOG.md) for commit history.

Example commit flow:
```
tdd(red): add failing test for empty string
tdd(green): implement empty string returns 0
tdd(refactor): extract parse util
tdd(red): add failing test for multiple numbers
tdd(green): implement comma separation
...
```

---

## 🛠 Future Enhancements
- More robust input validation (non-numeric tokens, whitespace trimming).
- Extended delimiter rules (nested or regex-like delimiters).
- Performance optimizations for very large inputs.
- Publish as an NPM package.

---

## 🤝 Acknowledgements
- Inspired by Roy Osherove’s [String Calculator exercise](https://osherove.com/tdd-kata-1).  
- Aligned with Incubyte’s emphasis on **craftsmanship, TDD, and clean code**.

---

### 📌 Notes for Reviewers
- Please check **commit history** (`GIT_LOG.md`) for TDD cycle evidence.  
- Tests are **granular, descriptive, and executable specifications**.  
- The solution balances clarity, correctness, and extensibility.
