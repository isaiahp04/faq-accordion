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