# AI-Assisted Workflow Comparison

## Overview

I compared two approaches for building the same settings form. The first branch, `vague-prompt`, used the intentionally simple prompt: “Build a settings form with validation.” The second branch, `precise-prompt`, used a detailed specification with the required fields, validation behavior, accessibility requirements, project structure, and verification scenarios.

## Correctness

The precise workflow produced a more clearly specified implementation. The form includes Name, Email, and Notification Preference fields, required-field validation, email-format validation, inline error messages, and a successful-submission message. I verified four scenarios in the browser: empty fields, invalid email, missing notification preference, and valid submission. The empty-field test also confirmed that focus moves to Name.

The Git diff showed 7 files changed between the branches, with 253 insertions and 458 deletions. This demonstrates that the precise approach did not simply make small wording changes; it produced a substantially different implementation.

## Accessibility

The precise version uses visible labels for each control and accessibility attributes including `aria-describedby` and `aria-invalid`. It also provides visible keyboard focus styles. These requirements made accessibility part of the specification rather than something I had to notice later during review.

## Edge Cases and Verification

The precise workflow explicitly identified the cases that needed testing. During verification, I caught an implementation/setup issue where `main.js` was initially in the wrong directory, causing a 404 when the browser requested `/js/main.js`. I moved it to `js/main.js`, refreshed the application, and confirmed the server returned HTTP 200. This showed why browser verification is important instead of relying only on an AI-generated explanation.

## Review Effort

The vague prompt was faster to give initially, but it provided less guidance about structure, accessibility, edge cases, and verification. The precise workflow required more planning and specification up front, but it made the expected behavior easier to review and test. The main lesson is that AI output is more useful when I give it constraints and then verify the result rather than accepting the first implementation.

## Workflow I Will Use

For future frontend AI work, I will first define the feature and constraints, ask the AI to explore and plan before coding, specify accessibility and expected behavior, implement on a separate branch, run explicit verification scenarios, review the diff, and only then commit the result.