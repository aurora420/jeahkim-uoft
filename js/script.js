const courseMenu = document.querySelector(".course-options");
const subjectMenu = document.querySelector("#subject-menu");
const subjectOptions = document.querySelector(".subject-options");
const selectBtns = document.querySelectorAll(".select-btn");

const courseSubjects = {
    "Course A": ["Subject 1", "Subject 2", "Subject 3"],
    "Course B": ["Subject 4", "Subject 5"],
    "Course C": ["Subject 6", "Subject 7", "Subject 8"]
};

// Handle course selection
courseMenu.addEventListener("click", (e) => {
    const selectedCourse = e.target.innerText;

    if (courseSubjects[selectedCourse]) {
        // Show subject dropdown
        subjectMenu.style.display = "block";
        
        // Populate the subject options
        subjectOptions.innerHTML = "";
        courseSubjects[selectedCourse].forEach(subject => {
            const li = document.createElement("li");
            li.classList.add("option");
            li.innerText = subject;
            subjectOptions.appendChild(li);
        });

        // Close course menu
        courseMenu.style.display = "none";
    }
});

// Handle subject selection
subjectOptions.addEventListener("click", (e) => {
    const selectedSubject = e.target.innerText;
    alert(`You selected ${selectedSubject}`);

    // Optionally, you can handle form submission or other actions here.
});

// Toggle dropdown menu visibility
selectBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const menu = btn.parentElement;
        menu.classList.toggle("active");
    });
});
