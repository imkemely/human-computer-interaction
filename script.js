document.addEventListener('DOMContentLoaded', (event) => {
    // Select the button and the text element
    const button = document.querySelector('#myButton');
    const text = document.querySelector('#myText');

    // Add an event listener to the button
    button.addEventListener('click', () => {
        // Change the text content and style
        text.textContent = 'Button Clicked!';
        text.style.color = 'blue';
    });
});