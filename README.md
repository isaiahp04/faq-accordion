# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- My Solution URL: [My Solution URL](https://your-solution-url.com)
- My Live Site: [My Live Site](https://isaiahp04.github.io/faq-accordion)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

```css
.accordion-title::after {
    content: url(assets/images/icon-plus.svg);
}
```
```js
const accordionTitles =document.querySelectorAll('.accordion-title');

accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener('click', () => {
        const height = accordionTitle.nextElementSibling.scrollHeight;
        console.log(height);
        accordionTitle.classList.toggle("active-title");
        if (accordionTitle.classList.contains('active-title')) {
            accordionTitle.nextElementSibling.style.maxHeight = `${height}px`;
        } else {
            accordionTitle.nextElementSibling.style.maxHeight = "0px";
        }
    });
});
```

### Continued development

I want to learn more about JavaScript

### Useful resources

- [Create an Accordion Menu in 15 minutes with JavaScript](https://www.youtube.com/watch?v=nMbtxsNwu1A)

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)