document.addEventListener("DOMContentLoaded", () => {
    // Get all select menus
    const selectMenus = document.querySelectorAll('.select-menu');

    function closeAllMenus(exceptMenu = null) {
        selectMenus.forEach(menu => {
            if (menu !== exceptMenu) {
                menu.classList.remove("active");
            }
        });
    }

    selectMenus.forEach(menu => {
        const btn = menu.querySelector('.select-btn');
        const options = menu.querySelector('.options');
        const content = menu.querySelector('.sBtn-text');

        btn.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevents event from bubbling up

            // Check if this menu is already active
            const isActive = menu.classList.contains("active");

            // Close all menus before opening a new one
            closeAllMenus();

            // Toggle only the clicked menu
            if (!isActive) {
                menu.classList.add("active");
            }
        });

        // Handle option selection inside the dropdown
        options?.querySelectorAll('.option').forEach(item => {
            item.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevents event bubbling
                
                content.textContent = item.textContent;
                document.getElementById("section1-content").innerHTML = item.getAttribute("data-content");
                menu.classList.remove('active');
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", () => {
        closeAllMenus();
    });

    // Handle Exercise1 link display logic
    const options = document.querySelectorAll('.option'); 
    const exercise1Link = document.getElementById("Exercise1");

    options.forEach((option, index) => {
        option.addEventListener("click", () => {
            exercise1Link.style.display = index === 1 ? "block" : "none"; // Show for "Week 2", hide for others
        });
    });
});

