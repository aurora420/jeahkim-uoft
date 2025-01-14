// Get all the select menus
const selectMenus = document.querySelectorAll('.select-menu');

selectMenus.forEach(menu => {
    const btn = menu.querySelector('.select-btn');
    const options = menu.querySelector('.options');
    const content = menu.querySelector('.sBtn-text');

    // Toggle active class to show or hide options
    btn.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Add event listener to each option inside the dropdown
    const optionItems = options.querySelectorAll('.option');
    optionItems.forEach(item => {
        item.addEventListener('click', () => {
            // Update the select button text
            content.textContent = item.textContent;

            // Update the content in the second section (render as HTML)
            const section2Content = document.getElementById("section1-content");
            section2Content.innerHTML = item.getAttribute("data-content");
            
            // Close the dropdown after selection
            menu.classList.remove('active');
        });
    });
});

const options = document.querySelectorAll('.option');
const visualSolutionContainer = document.getElementById('visual-solution-container');

options.forEach(option => {
    option.addEventListener('click', () => {
        const content = option.getAttribute('data-content');
        
        // Check if the content includes "Visual Solution" or "timeline"
        if (content.includes("Visual Solution") || content.includes("timeline")) {
            visualSolutionContainer.style.display = "block"; // Show the image
        } else {
            visualSolutionContainer.style.display = "none"; // Hide the image
        }
    });
});
