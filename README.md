# About project
This project containes end-to-end functional tests done with Playwright tool for the SwiftTranslator web UI. I have done 24 positive functional test cases, 10 negative functional test cases and on Positive UI test case.

# System prerequisites
- Node.js (recommended v18+)
- npm (comes with Node.js)
- Git (optional)

# Installation

1. Obtain the Project

```bash

git clone <repository-url>
cd <project-directory>
```

2. Install Required Dependencies

```bash
npm install
```

3. Install Playwright Browsers
```bash
npx playwright install
```
#### Project Structure
tests
    >positive.spec.js
    >nagative.spec.js
    >positiveUi.spec.js

playwright.config.js
package.json 
README.md     

### Running all the tests

Run all test
```bash
npx playwright test
```

Run tests in headed mode
```bash
npx playwright test --headed
```

Run tests with Chromium only:
```bash
npx playwright test --project=chromium
```

### Viewing reports

```bash
npx playwright show-report
```

### Configuration
Global timeouts

Browser selection

Test execution order


Author

Name: DE MEL L M V S M D

Student ID: IT23410572

Degree Program: BSc (Hons) in Information Technology

Academic Year: Year 3

