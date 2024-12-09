// js for my site
// loads js only after html fully loads
document.addEventListener('DOMContentLoaded', () => {
    // hyperlink color change on click
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', event => {
            links.forEach(link => link.style.color = ''); // resets colors
            event.target.style.color = '#111'; // highlights clicked link
        });
    });

    // button hover and click effects
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#555';
            button.style.color = '#fff';
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#333';
            button.style.color = '#fff';
        });

        button.addEventListener('click', () => {
            button.style.backgroundColor = 'purple';
            button.style.color = '#333';
        });
    });

    // navigation back to sections
    const navigateLinks = document.querySelectorAll('nav ul li a');
    navigateLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault(); // prevent default link behavior
            const targetId = link.getAttribute('href').substring(1); // get section ID
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' }); // smoothly scrolls to section instead of snap
        });
    });
});
