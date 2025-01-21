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


document.addEventListener("DOMContentLoaded", () => {
    // Get references to the menu options and the Exercise1 link container
    const options = document.querySelectorAll('.option'); // All dropdown options
    const exercise1Link = document.getElementById("Exercise1");

    // Add click event listeners to all options
    options.forEach((option, index) => {
        option.addEventListener("click", () => {
            if (index === 1) { // Week 2 (0-based index for the second option)
                exercise1Link.style.display = "block"; // Show the Exercise1 link
            } else {
                exercise1Link.style.display = "none"; // Hide the Exercise1 link for other weeks
            }
        });
    });
});
