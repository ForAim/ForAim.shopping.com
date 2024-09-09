// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Create scroll-to-top button
    const button = document.createElement('button');
    button.textContent = 'Top';
    button.id = 'scroll-to-top';
    document.body.appendChild(button);

    // Style the button
    const style = document.createElement('style');
    style.textContent = `
        #scroll-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 10px 20px;
            background-color: #333;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            display: none;
        }
        #scroll-to-top:hover {
            background-color: darkblue;
        }
    `;
    document.head.appendChild(style);

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });

    // Scroll to top when button is clicked
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
