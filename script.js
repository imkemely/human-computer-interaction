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

// Attach click events dynamically for section buttons
const sectionButtons = document.querySelectorAll('nav button:not(#myButton)');

sectionButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const section = event.target.getAttribute('onclick').match(/'([^']+)'/)[1];
        displayContent(section);
    });
});


function displayContent(section) {
    const contentDiv = document.getElementById('content');
    
    const content = {
        about: "<h2>About</h2><p>This section contains information about the project and its objectives.</p>",
        research: "<h2>Research</h2><p>This section highlights the research conducted for this project.</p>",
        personas: "<h2>Personas</h2><p>Details about user personas are presented here to represent different user types.</p>",
        scenario: "<h2>Scenario</h2><p>A real-life scenario that illustrates how users would interact with the project.</p>",
        storyboard: "<h2>Storyboard</h2><p>The storyboard illustrates the interaction flow of the user through the project interface.</p>",
        moodboard: `
            <h2>Moodboard</h2>
            <p>This section showcases the aesthetic direction of the project through Milanote.</p>
            <iframe 
                src="https://app.milanote.com/1T044x1viFPyaF?p=sZftG0VZK38" 
                width="100%" 
                height="600" 
                style="border: none; border-radius: 8px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);">
            </iframe>
         `,
        flowchart: "<h2>Flowchart</h2><p>This flowchart outlines the logical structure of the project and its features.</p>",
        wireframes: "<h2>Wireframes</h2><p>The wireframes give a visual blueprint of the interface design.</p>",
        gui: "<h2>GUI</h2><p>The graphical user interface (GUI) design and key elements are discussed here.</p>",
        prototype: "<h2>Prototype</h2><p>A clickable prototype demonstrating the functionality of the project.</p>",
        references: "<h2>References</h2><p>A list of references and resources used throughout the project.</p>"
    };

    // Update content area based on the button clicked
    contentDiv.innerHTML = content[section] || "<p>Content not available.</p>";
}