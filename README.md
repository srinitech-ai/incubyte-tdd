Incubyte TDD Assessment — String Calculator (Node.js + TypeScript + Jest)

Overview

TDD implementation of the classic String Calculator kata following Incubyte's assessment steps. The repo history shows red → green commits per step.

Prerequisites

- Node.js 18+

Install & Test

- npm install
- npm test

Implemented Steps

- Step 1: Empty string → 0; single and two numbers
- Step 2: Unknown number of inputs
- Step 3: Newlines as delimiters
- Step 4: Custom delimiter syntax `//;<newline>`
- Step 5: Throw on negatives with message listing all negatives

Project Structure

- src/stringCalculator.ts — implementation
- tests/stringCalculator.test.ts — executable specifications

Notes

- Jest configured for ESM TypeScript via ts-jest preset.
- Commit messages reflect TDD cycles.