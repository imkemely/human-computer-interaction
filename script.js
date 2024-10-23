document.addEventListener('DOMContentLoaded', (event) => {
    // Select the button and the text element
    const button = document.querySelector('#myButton');
    const text = document.querySelector('#myText');

    // Add an event listener to the button
    if (button && text) {
        button.addEventListener('click', () => {
            // Change the text content and style
            text.textContent = 'Button Clicked!';
            text.style.color = 'blue';
        });
    }

    // Attach click events dynamically for section buttons
    const sectionButtons = document.querySelectorAll('nav button:not(#myButton)');

    sectionButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const section = event.target.getAttribute('onclick').match(/'([^']+)'/)[1];
            displayContent(section);
        });
    });

    // Initial content display
    displayContent('about');
});

function displayContent(section) {
    const contentDiv = document.getElementById('content');
    
    const content = {
        about: `
            <h2>About Us</h2>
            <div class="about-container">
                <div class="about-photo">
                    <img src="profilepics\\carlosmejia.jpg" alt="Your Photo">
                    <img src="profilepics\\kemelypfp.jpg" alt="Kemely Photo">
                </div>
                <div class="about-description">
                    <div class="description-box">
                        <h3>Carlos Mejia</h3>
                        <p> Hi! I'm Carlos, a computer science student with a strong passion for game development and web design, eager to create engaging and innovative digital experiences. </p>
                    </div>
                    <div class="description-box">
                        <h3>Kemely</h3>
                        <p>Hi! I'm Kemely, a computer science student with a passion for game development and web design. </p>
                    </div>
                </div>
            </div>
            `,
        research: "<h2>Research</h2><p>This section highlights the research conducted for this project.</p>",
        personas: `
            <h2>Personas</h2>
            <div id="persona-container">
                <div id="persona-display"></div>
                <button id="switch-persona">Switch Persona</button>
            </div>
        `,
        scenario: `
        <h2>Scenarios</h2>
        <div id="scenario-container">
            <div id="scenario-display"></div>
            <button id="switch-scenario">Switch Scenario</button>
        </div>
        `
        ,
        storyboard: `
            <h2>Storyboard</h2>
            <iframe 
                style="border: 1px solid rgba(0, 0, 0, 0.1);" 
                width="100%" 
                height="600" 
                src="https://embed.figma.com/design/3hTw47iabPrm2vC8ngXluh/Untitled?node-id=0-1&embed-host=share" 
                allowfullscreen>
            </iframe>
        `,
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

    if (section === 'personas') {
        setupPersonaSwitch();
    } else if (section ==  'scenario') {
        setupScenarioSwitch();
    } else if (section == 'storyboard') {
        setupStoryboardSwitch();
    }

}

function setupPersonaSwitch() {
    const personas = [
        {
            name: "Sophia Gonzalez",
            image: "images/pexels-photo-774909.jpeg",
            age: 20,
            occupation: "Engineering Student",
            technicalSkill: "High",
            background: "Sophia is a third-year electrical engineering student. She's comfortable with technology and needs a calculator for complex equations and unit conversions.",
            uses: [
                "Solving differential equations",
                "Performing vector calculations",
                "Converting between different unit systems"
            ],
            painPoints: [
                "Standard calculators lack advanced engineering functions",
                "Difficulty in saving and recalling complex equations",
                "Needs graphing capabilities for visualizing functions",
            ],
            desiredFeatures: [
                "Built-in engineering formulas and constants",
                "Ability to save and recall complex equations",
                "Graphing capabilities for visualizing functions" 
            ],
            quote: "I need a calculator that can keep up with advanced coursework and help me visualize complex functions."
        },
        {
            name: "Joe Smith",
            image: "images/pexels-photo-2379004.jpeg",
            age: 35,
            occupation: "Financial Analyst",
            technicalSkill: "Medium",
            background: "Joe works in corporate finance, dealing with complex financial models and data analysis. He's proficient with spreadsheets but needs a powerful calculator for quick calculations and verifications",
            uses: [
                "Performing financial calculations",
                "Currency conversions",
                "Statistical analysis of data sets"
            ],
            painPoints: [
                "Lack of financial functions in standard calculators",
                "Difficulty in handling large numbers and multiple currencies",
                "Needs statistical analysis capabilities for data sets" 
            ],
            desiredFeatures: [
                "Comprehensive financial functions library",
                "Real-time currency conversion with historical rates",
                "Ability to import and analyze small data sets"
            ],
            quote: "I need a calculator that speaks the language of finance and helps me make quick, accurate decisions."
        },
    ];

    let currentPersonaIndex = 0;

    function displayPersona(index) {
        const persona = personas[index];
        const personaDisplay = document.getElementById('persona-display');
        personaDisplay.innerHTML = `
            <div class="persona-profile">
                <div class="persona-image-container">
                    <img src="${persona.image}" alt="${persona.name}" class="persona-image">
                </div>
                <div class="persona-basic-info">
                    <h3 class="persona-title">${persona.name}</h3>
                    <p><strong>Age:</strong> ${persona.age}</p>
                    <p><strong>Occupation:</strong> ${persona.occupation}</p>
                    <p><strong>Technical Skill:</strong> ${persona.technicalSkill}</p>
                </div>
            </div>
            <div class="persona-details">
                <div class="persona-background">
                    <h4>Background</h4>
                    <p>${persona.background}</p>
                </div>
                <div class="persona-columns">
                        <div class="persona-column">
                            <h4>Primary Calculator Uses</h4>
                            <ul>${persona.uses.map(use => `<li>${use}</li>`).join('')}</ul>
                        </div>
                        <div class="persona-column">
                            <h4>Pain Points</h4>
                            <ul>${persona.painPoints.map(point => `<li>${point}</li>`).join('')}</ul>
                        </div>
                        <div class="persona-column">
                            <h4>Desired Features</h4>
                            <ul>${persona.desiredFeatures.map(feature => `<li>${feature}</li>`).join('')}</ul>
                        </div>
                </div>
            <blockquote class="persona-quote">"${persona.quote}"</blockquote>
        `;
    }

    displayPersona(currentPersonaIndex);
    const switchButton = document.getElementById('switch-persona');
    switchButton.addEventListener('click', () => {
        currentPersonaIndex = (currentPersonaIndex + 1) % personas.length;
        displayPersona(currentPersonaIndex);
    });
}
    
    function setupScenarioSwitch() {
        const scenarios = [
            {
                    title: "Sophia's Engineering Challenge" ,
                    content: `<p> Sophia, a dedicated third-year engineering student, finds herself grappling with a complex differential equation for her advanced physics project. As she attempts to solve it using her standard calculator, she quickly realizes its limitations. Frustrated but determinet, Sophia recalls hearing about a new advanced calculator app designer for engineering students.</p>
                    <p>Excited by the possibility, she dowloads the app onto her smarthphone. Upon opening it, Sophia is immediately impressed by its clean, intuitive interface. She inputs her differential equation unig the app's specialized engineering keyboard, which inlcudes commonlu used symbols and functions.</p>
                    <p>As she explores the app, Sophia discovers a built-in formula library. She quickly accesses relevant equations and constants, saving her valuable time. The app not only processes her equation but also provides a step-by-step solution, complete with detailed graph of the function.</p>
                    <p>Thrilled with the results, Sophia uses the app's note-taking feature to jot down key points for her project. She saves her work within the app, knowing she can easily reference it later. With renewed confidence, Sophia completes her assigment in record time, deeply appreciating the app's efficiency and advanced features.</p>
                    <p>This experience not only solves Sophia's immediate problem but also transforms her approach to complex calculations. She realizes that with this advanced calculator app, she's better equipped to tackle future engineering challenges, bridging the gap between theoretical knowledge and practical problem-solving.</p>`
            },
            {
                title: "Joe's Financial Analysis Breakthrough",
                content: `<p>Joe, a seasoned fincancial analyst, sits at his desk, brow furrowed in concentration. He's working on a critical international financial model, but his standard calculator and spreadsheet software are proving inadequate for the complex calculations required. As the deadline looms, Joe feels pressure mounting.</p>
                <p>Remembering a colleague's recommendation, Joe decides to try out an advanced calculator app specialized for finance professionals. He quickly downloads it to his tablet, hoping it might offer a solution. As the app loads, Joe is immediatly struck by its sleek, professional interface, designed with finance workflows in mind.</p>
                <p>Diving in, Joe starts inputting his financial data. He's pleasently surprised to find a range of specialized functions tailored for financial analysis. The app's ability to handle large numbers with precision and perform complex financial calculations in real-time is a game-changer for Joe.</p>
                <p>As he works through his model, Joe encounters a section requiring multipled currency conversions. With a few taps, he accesses the app's real-time currency converion feature, complete with historical rate data. This feature alone saves him considerable time and enhances the accuracy of his analysis</p>
                <p> The app's ability to generate detailed, customizable graphs catches Joe's attention next. He creates vidualizations for his data that he can directly compare with his speadsheet, offering new insights into the financial trend he's analyzing. The app even allows him to export these high-quality graphs for his presentation.</p>
                <p>As Joe finalizes his analysis, he realizes he's not only completed the task faster but with a level of depth and accuracy that surpasses his previous work. The next day, Joe confidently presents his comprehensive financial analysis to hsi colleagues and supervisors, backed by the robust calculations and clear visualizations deom the app. </p>
                <p>This experience masks a turning point in Joe's career. He recognizes that embracing advanced digital tools like this calcuator app isn't just about convinience- it's about elevating the quality and reliability of his financial analyses, ultimately leading to better-informed business decisions.</p>`
            }
        ];

        let currentScenarioIndex = 0;

        function  displayScenario(index) {
            const scenario = scenarios[index];
            const scenarioDisplay =  document.getElementById('scenario-display');
            scenarioDisplay.innerHTML = `
                <h3 class="scenario-title">${scenario.title}</h3>
                <div class="scenario-content">
                    ${scenario.content}
                <div/>
                `;
        }

        displayScenario(currentScenarioIndex);
        const switchButton = document.getElementById('switch-scenario');
        switchButton.addEventListener( 'click' ,() => {
            currentScenarioIndex = (currentScenarioIndex + 1) % scenarios.length;
            displayScenario(currentScenarioIndex);
        });

    }