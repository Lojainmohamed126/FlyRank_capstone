# AI-Assisted Workflow Comparison

## Overview

I built the same small settings-form feature twice. Round one used the intentionally vague prompt, “Build a settings form with validation,” and the result was saved on the `vague-prompt` branch. Round two used a precise specification covering the required fields, validation behavior, accessibility requirements, file structure, example behaviors, and verification scenarios. It was developed independently on the `precise-prompt` branch.

## Correctness

The precise workflow produced a more explicitly specified implementation. The form contains Name, Email, and Notification Preference fields, required-field validation, email-format validation, inline validation messages, and a successful-submission message. I tested four specific paths: empty fields, invalid email, missing notification preference, and valid submission. The empty-field test confirmed that focus moves to Name.

The Git comparison showed a substantial implementation difference: `git diff vague-prompt..precise-prompt --stat` reported 7 files changed, 253 insertions, and 458 deletions. The diff included changes to `index.html`, the CSS files, `js/main.js`, and `js/modules/settings-form.js`; it also showed that `package.json` was deleted in the precise version. This made the comparison concrete rather than based only on how the code felt.

## Accessibility

The precise workflow explicitly required visible labels and accessible validation. The implementation associates each field with an error element using `aria-describedby` and marks invalid controls with `aria-invalid="true"`. It also includes visible keyboard focus styles and verifies that focus moves to the first invalid field.

## AI Mistake and Verification

During browser verification, I caught an AI-generated/setup mistake: `js/main.js` was initially in the wrong location, causing the browser to request `/js/main.js` and receive HTTP 404. I corrected the file location so the entry point was actually `js/main.js`. After refreshing, the server returned HTTP 200 for `/js/main.js`, and the validation behavior worked.

This showed why I should not rely only on an AI's claim that a feature is complete. Running the application and checking the requested scenarios caught a real problem.

## Review Effort and Lessons

The vague prompt required less planning initially but gave less guidance about accessibility, structure, edge cases, and verification. The precise prompt required more specification up front, but it made the expected behavior easier to review and test. The main lesson is that effective AI-assisted development means providing constraints and examples, then independently verifying the result.

For future frontend work, I will use an explore-plan-code loop, define acceptance criteria before implementation, test explicit edge cases, review the diff, and only then commit the result.