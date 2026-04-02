
# Blueprint: Lotto Number Generator

## Overview

This project is a simple, visually appealing Lotto Number Generator web application. It allows users to generate a set of unique lottery numbers with the click of a button. The application is built using modern HTML, CSS, and JavaScript, following the principles of Web Components for modularity and modern CSS for styling.

## Features & Design

*   **Lotto Number Generation:** Generates 6 unique random numbers between 1 and 45.
*   **Visual Design:**
    *   **Layout:** A clean, centered layout that is responsive and works well on mobile and desktop.
    *   **Color Scheme:** A dark theme with vibrant colors for the generated numbers. The colors of the numbers will vary based on the number range.
    *   **Animation:** A "fireworks" animation will be triggered when the numbers are generated, adding a celebratory feel.
    *   **Typography:** Clear, legible fonts are used for the title and numbers.
*   **Web Components:** The application will be structured using a custom element `<lotto-generator>` to encapsulate the functionality.

## Current Plan

1.  **Create `blueprint.md`:** Document the project overview, features, and plan. (Done)
2.  **Modify `index.html`:**
    *   Update the title to "Lotto Number Generator".
    *   Add a `<lotto-generator>` custom element to the body.
3.  **Modify `style.css`:**
    *   Add styles for the overall page, including a dark theme and a background texture.
    *   Style the components of the lotto generator, including the number display and the "Generate" button.
    *   Implement the fireworks animation using CSS keyframes.
4.  **Modify `main.js`:**
    *   Define the `LottoGenerator` class as a custom element.
    *   Implement the logic for generating unique random numbers.
    *   Handle the button click event to trigger number generation and the animation.
    *   Dynamically create and style the number elements based on the generated numbers.

