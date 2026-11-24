
# Accessibility Audit Report
## Hospital Appointment Management Website

**Experiment:** Lab Experiment 2 – Refactor to Engineering-Grade HTML  
**Project:** Hospital Appointment Management  
**Standard:** WCAG 2.2 AA (target)  
**Date:** 23 November 2026

---

## 1. Objective

To identify accessibility problems in the original non-semantic hospital webpage and improve its accessibility using HTML5 semantic elements, accessible forms, keyboard navigation and validation.

## 2. Before Refactoring

The original webpage had the following potential accessibility problems:

| Area | Identified Problem |
|---|---|
| HTML structure | Excessive use of div elements |
| Headings | Improper heading hierarchy |
| Navigation | No clearly labelled navigation |
| Images | Missing alternative text |
| Forms | Missing or incorrectly associated labels |
| Inputs | Generic input types |
| Keyboard | No visible focus indicators |
| Validation | Insufficient input validation |
| Screen readers | Unclear page structure |

## 3. After Refactoring

The following improvements were implemented:

| Area | Improvement |
|---|---|
| HTML structure | header, nav, main, section, article and footer |
| Headings | Logical heading hierarchy |
| Navigation | Accessible navigation landmark |
| Images | Descriptive alt attributes |
| Forms | Explicit labels connected using for and id |
| Inputs | email, tel, date and select elements |
| Keyboard | Visible focus indicators |
| Validation | required, pattern, minlength and maxlength |
| Screen readers | Accessible labels and live status messages |
| Navigation | Skip-to-content link |

## 4. Accessibility Testing Checklist

- [x] Semantic HTML5 elements implemented
- [x] Proper page language specified
- [x] Heading structure improved
- [x] Form labels connected to inputs
- [x] Appropriate input types used
- [x] Required field validation added
- [x] Keyboard focus indicators added
- [x] Skip navigation link added
- [x] Image alternative text provided
- [x] Live form status message implemented
- [x] Responsive layout implemented
- [x] Reduced-motion preference supported

## 5. Before-and-After Comparison

| Feature | Before | After |
|---|---|---|
| Semantic HTML | Poor | Improved |
| Form labels | Missing/unclear | Explicit labels |
| Keyboard access | Limited | Improved |
| Validation | Basic | HTML5 validation |
| Screen reader structure | Unclear | Semantic landmarks |
| Image accessibility | Missing alt text | Descriptive alt text |

## 6. Screen Reader Testing

Suggested testing tools:

1. NVDA with Firefox or Chrome on Windows.
2. VoiceOver with Safari on macOS.
3. TalkBack with Chrome on Android.

Testing procedure:

1. Open the webpage using a screen reader.
2. Navigate through the page using heading navigation.
3. Verify that the navigation landmark is announced.
4. Navigate to the appointment form.
5. Check that each input label is announced.
6. Submit the form with required fields empty.
7. Verify that validation errors are announced.
8. Complete the form and verify the confirmation message.

**Testing status:** Manual testing should be performed on the final running webpage. No actual screen-reader test results are claimed by this template.

## 7. Recommended Audit Tools

- WAVE Accessibility Evaluation Tool
- axe DevTools
- Lighthouse Accessibility Audit
- NVDA Screen Reader
- VoiceOver Screen Reader

## 8. Conclusion

The webpage was refactored using semantic HTML5 elements and accessibility best practices. The appointment form now includes meaningful labels, suitable input types, keyboard focus indicators and browser-based validation.

These changes provide a stronger accessibility foundation and improve usability for patients, including users who rely on assistive technologies.

A final WCAG 2.2 AA compliance claim requires automated and manual verification.
