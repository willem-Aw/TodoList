// let categories = [
//     {
//         title: "Personal",
//     },
//     {
//         title: "Work",
//     },
//     {
//         title: "Shopping",
//     },
//     {
//         title: "Coding",
//     },
//     {
//         title: "Health",
//     },
//     {
//         title: "Fitness",
//     },
//     {
//         title: "Education",
//     },
//     {
//         title: "Finance",
//     },
// ];

/*let tasks = [
    {
        id: 1,
        task: "Go to market",
        category: "Shopping",
        completed: true,
    },
    {
        id: 2,
        task: "Read a chapter of a book",
        category: "Personal",
        completed: false,
    },
    {
        id: 3,
        task: "Prepare presentation for meeting",
        category: "Work",
        completed: false,
    },
    {
        id: 4,
        task: "Complete coding challenge",
        category: "Coding",
        completed: false,
    },
    {
        id: 5,
        task: "Take a 30-minute walk",
        category: "Health",
        completed: false,
    },
    {
        id: 6,
        task: "Do a 20-minute HIIT workout",
        category: "Fitness",
        completed: false,
    },
    {
        id: 7,
        task: "Watch an educational video online",
        category: "Education",
        completed: false,
    },
    {
        id: 8,
        task: "Review monthly budget",
        category: "Finance",
        completed: false,
    },
    {
        id: 9,
        task: "Buy groceries for the week",
        category: "Shopping",
        completed: false,
    },
    {
        id: 10,
        task: "Write in a journal",
        category: "Personal",
        completed: false,
    },
    {
        id: 11,
        task: "Send follow-up emails",
        category: "Work",
        completed: false,
    },
    {
        id: 12,
        task: "Work on a coding side project",
        category: "Coding",
        completed: false,
    },
    {
        id: 13,
        task: "Try a new healthy recipe",
        category: "Health",
        completed: false,
    },
    {
        id: 14,
        task: "Attend a yoga class",
        category: "Fitness",
        completed: false,
    },
    {
        id: 15,
        task: "Read an article about a new topic",
        category: "Education",
        completed: false,
    },
    {
        id: 16,
        task: "Set up automatic bill payments",
        category: "Finance",
        completed: false,
    },
    // Additional tasks for each category
    {
        id: 17,
        task: "Buy new clothes",
        category: "Shopping",
        completed: false,
    },
    {
        id: 18,
        task: "Meditate for 10 minutes",
        category: "Personal",
        completed: false,
    },
    {
        id: 19,
        task: "Prepare agenda for team meeting",
        category: "Work",
        completed: false,
    },
    {
        id: 20,
        task: "Debug a software issue",
        category: "Coding",
        completed: false,
    },
    {
        id: 21,
        task: "Try a new recipe for lunch",
        category: "Health",
        completed: false,
    },
    {
        id: 22,
        task: "Go for a run",
        category: "Fitness",
        completed: false,
    },
    {
        id: 23,
        task: "Learn a new language online",
        category: "Education",
        completed: false,
    },
    {
        id: 24,
        task: "Read about history",
        category: "Education",
        completed: false,
    },
    {
        id: 25,
        task: "Review investment portfolio",
        category: "Finance",
        completed: false,
    },
    {
        id: 26,
        task: "Review investment portfolio",
        category: "Finance",
        completed: false,
    },
    // Add more tasks for each category as desired
];*/
let tasks = getDataFormLocalStorage("tasks");
let categories = getDataFormLocalStorage("categories");

const screenContainer = document.querySelector(".ta__main-board");
const backArrow = document.querySelectorAll(
    ".ta__app-heading .back-arrow"
);
const addTaskBtn = document.querySelector("#add-task");
const addCatBtn = document.querySelector("#add-category");
const formOverlayWrapper = document.querySelector(".ta__form-overlay");
const formOverlay = document.querySelector(
    ".ta__form-overlay .ta_popin_overlay"
);
const addTaskFom = document.querySelector("#add-task-form");
const taskCatSelect = document.querySelector("#task-category-select");
const addCatFom = document.querySelector("#add-category-form");
const formClose = document.querySelector(".close-form");
const taskText = document.querySelector(".task-wrapper .task-text");
const topDate = document.querySelector('.ta__today');
const categoriesContainer = document.querySelector(".categories");
const tasksContainer = document.querySelector(".ta_tasks-wrapper .tasks");
const taskListCount = document.querySelector(".tasks-list-screen .task-count-per-category");
const burgerMob = document.querySelector('.ta__app-heading .ta__burger-mob');
const innerContent = document.querySelector('.ta__inner-content');
let selectedCategory = categories[0];

topDate.innerHTML = "Today, " + new Date(Date.now()).toLocaleString('en-GB').split(',')[0].split('/').join('-');

/**
 * Gets the categories from local storage and returns them.
 * If the categories key does not exist in local storage, it returns an empty array.
 * @returns {Array} The categories in local storage.
 */
function loadCat() {
    return categories = getDataFormLocalStorage("categories");
}

/**
 * Stores the given data in local storage under the given storage name.
 * @param {string} storageName - The key to store the data under in local storage.
 * @param {Object|Array} data - The data to store in local storage.
 */
function setDataToLocalStorage(storageName, data) {
    localStorage.setItem(storageName, JSON.stringify(data));
}

/**
 * Gets the data from local storage and returns it.
 * If the storage name does not exist in local storage, it returns an empty array.
 * @param {string} storageName - The key to get the data from in local storage.
 * @returns {Object|Array} The data from local storage.
 */
function getDataFormLocalStorage(storageName) {
    return JSON.parse(localStorage.getItem(storageName)) || [];
}
/**
 * Gets all tasks that belong to the given category.
 * @param {Object} category - The category to get the tasks from. The category should have a title property.
 * @returns {Array} An array of tasks that belong to the given category.
 */
function getTasksByCategory(category) {
    return tasks.filter(
        (task) => task.category.toLowerCase() === category.title.toLowerCase()
    );
}

/**
 * Adds a specified class to the given DOM element.
 * @param {Element} elem - The DOM element to which the class will be added.
 * @param {string} className - The class name to add to the element.
 */
function setClass(elem, className) {
    elem.classList.add(className);
}
/**
 * Removes a specified class from the given DOM element.
 * @param {Element} elem - The DOM element from which the class will be removed.
 * @param {string} className - The class name to remove from the element.
 */
function removeClass(elem, className) {
    elem.classList.remove(className);
}

addTaskBtn.addEventListener("click", function () {
    addCatFom.style.display = "none";
    addTaskFom.style.display = "grid";
    setClass(formOverlayWrapper, 'active');
});
addCatBtn.addEventListener("click", function () {
    addCatFom.style.display = "grid";
    addTaskFom.style.display = "none";
    setClass(formOverlayWrapper, 'active');
});
formClose.addEventListener("click", () => {
    removeClass(formOverlayWrapper, 'active');
});
formOverlay.addEventListener("click", () => {
    removeClass(formOverlayWrapper, 'active');
});

addTaskFom.addEventListener("submit", (e) => {
    // e.preventDefault();
    const task = addTaskFom.querySelector("#task").value;
    const category = taskCatSelect.value;

    const newTask = {
        id: tasks.length + 1,
        task,
        category,
        // date: new Date().toLocaleDateString(),
        date: new Date(Date.now()).toLocaleString('en-GB').split(',')[0].split('/').join('-'),
        completed: false,
    };

    // console.log(newTask);
    tasks.push(newTask);
    setDataToLocalStorage("tasks", tasks);
    renderCategries();
    removeClass(formOverlayWrapper, 'active');
    addTaskFom.querySelector("#task").value = "";
    window.location.reload();
});

addCatFom.addEventListener("submit", (e) => {
    // e.preventDefault();
    const category = addCatFom.querySelector("#task").value;
    const newCategory = {
        id: categories.length + 1,
        title: category,
    };
    categories.push(newCategory);
    setDataToLocalStorage("categories", categories);
    addCatToSelect();
    addCatFom.querySelector("#task").value = "";
    removeClass(formOverlayWrapper, 'active');
    window.location.reload();
});
// update categories in the select
taskCatSelect.innerHTML = "";
/**
 * Populates the task category select element with the available 
 * categories. This function iterates over the categories array, 
 * creates an option element for each category, and appends it to 
 * the task category select dropdown in the DOM.
 */
function addCatToSelect() {
    categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.title;
        option.textContent = category.title;
        taskCatSelect.appendChild(option);
    })
}
addCatToSelect()

/**
 * Renders the list of categories in the DOM, dynamically creating
 * and appending category elements to the categories container. Each
 * category element displays the category name and the number of tasks
 * in that category. It also provides options to delete the category.
 * When a category is clicked, it selects the category and displays
 * the tasks associated with it in the tasks container.
 */
function renderCategries() {
    categoriesContainer.innerHTML = "";
    categories.forEach((category, index) => {
        let currentCatTasks = getTasksByCategory(category);
        // console.log(currentCatTasks);
        // selectedCategory = category;

        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");
        categoryDiv.id = "cat-" + index;


        categoryDiv.innerHTML += `
                <div class="item">
                    <div class="cat-text">
                        <p class="cat-name">${category.title}</p>
                        <p>You have ${currentCatTasks.length} tasks</p>
                    </div>
                    <div class="options">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="options-content">
                        <ul>
                            <!--<li><a href="#">Edit</a></li> !-->
                            <li><a href="#" id="delete-cat">Delete</a></li>
                        </ul>
                    </div>
                </div>
        `;
        categoriesContainer.appendChild(categoryDiv);
        categoryDiv.addEventListener("click", () => {
            selectedCategory = categories[index];
            let currentCatTasks = getTasksByCategory(selectedCategory);
            taskListCount.innerHTML = currentCatTasks.length + ' tasks';
            tasksContainer.innerHTML = "";

            taskIteration(currentCatTasks, tasksContainer, false);
            setClass(screenContainer, 'show-lists-screen');
        });
        const optionsContent = categoryDiv.querySelector(".options-content");
        const option = categoryDiv.querySelector(".options");
        option.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleOptionContent(optionsContent);
        });
        const deleteCatButton = categoryDiv.querySelector("#delete-cat");
        deleteCatButton.addEventListener("click", function (e) {
            e.stopPropagation();

            // Get the current category
            const deletedCategory = categories[index];

            categories.splice(index, 1);

            // Remove tasks related to the deleted category
            tasks = tasks.filter(task => task.category !== deletedCategory.title);

            setDataToLocalStorage("categories", categories);
            setDataToLocalStorage("tasks", tasks);
            renderCategries();
            window.location.reload();
        });
    });
};

/**
 * Iterates over a list of tasks and dynamically creates task elements 
 * in the provided container. Each task element includes a checkbox 
 * to mark the task as completed, and a delete button to remove the task.
 *
 * @param {Array} tasksToIterate - The array of task objects to iterate over.
 * @param {HTMLElement} tasksContainer - The DOM element where the tasks 
 *     will be appended.
 */
function taskIteration(tasksToIterate, tasksContainer, isTaskDone) {
    tasksToIterate.forEach((task, taskIndex) => {
        // Create the task element dynamically
        const taskWrapper = document.createElement("div");
        taskWrapper.classList.add("task-wrapper");

        taskWrapper.innerHTML = `
            <label for="task-${taskIndex}" class="task">
                <input type="checkbox" name="task-${taskIndex}" id="task-${taskIndex}" ${task.completed ? "checked" : ""} ${isTaskDone} ? "disabled"/>
                <span class="checkmark-icon">
                    <i class="ri-check-line"></i>
                </span>
                <span class="task-text">${task.task}</span>
            </label>
            ${!isTaskDone ? "" : `<span class="task-category">Category: ${task.category}</span>`}
            <div class="task-date">${task.date}</div>
            <button class="delete">
                <i class="ri-delete-bin-7-line"></i>
            </button>
        `;

        tasksContainer.appendChild(taskWrapper);

        // Add event listener directly to the checkbox
        const checkbox = taskWrapper.querySelector(`#task-${taskIndex}`);
        checkbox.addEventListener("change", function () {
            task.completed = this.checked;

            /**
             * This solution was adopted to resolve the update from the task done screen without refreshing the page
             * where the taskDone array is being filtered from the main tasks array
             * Unfortunately, it still doesn't work for the moment
             */
            // Locate the task in the main tasks array and update it
            const taskInMainList = tasks.find((t) => t.id === task.id);
            if (taskInMainList) {
                taskInMainList.completed = task.completed;
                setDataToLocalStorage("tasks", tasks);
            }
        });

        /**
         * the case from the task done screen here is also the same as the above problem
         */
        // Add event listener directly to the delete button
        const deleteButton = taskWrapper.querySelector(".delete");
        deleteButton.addEventListener("click", function () {
            tasks = tasks.filter(t => t.id !== task.id); // Remove task from main array
            setDataToLocalStorage("tasks", tasks);

            renderCategries();
            window.location.reload();
        });
    });
}

/**
 * Toggles the "active" class on the specified element.
 * If the element has the class, it will be removed; otherwise, it will be added.
 *
 * @param {HTMLElement} element - The DOM element to toggle the class on.
 */
function toggleOptionContent(element) {
    element.classList.toggle("active");
}

const tasksDoneScreen = document.querySelector(".tasks-done-screen");
const tasksDoneLink = document.querySelector('a[data-target="tasks-done"]');
const alltasksLink = document.querySelector('a[data-target="tasks-list"]');
const tasksDoneCount = document.querySelector(".tasks-done-screen .ta__done-count");
const tasksDoneContainer = document.querySelector(".tasks-done-screen .ta__done-wrapper .tasks");
const homeLink = document.querySelectorAll('.ta__logo>button');
const tasksDone = tasks.filter((task) => task.completed);

// add and remove active class on menu list items when clicked
const menuLinkListItems = document.querySelectorAll('.ta__app-left-side ul li a');

menuLinkListItems.forEach(item => {
    item.addEventListener('click', function (e) {
        menuLinkListItems.forEach(link => removeClass(link, 'active'));
        setClass(e.target, 'active');
        removeClass(innerContent, 'show-menu');
    });
});

backArrow.forEach((arrow) => {
    arrow.addEventListener("click", () => {
        removeClass(screenContainer, 'show-lists-screen');
        removeClass(screenContainer, 'show-taks-done-screen');
    });
})

tasksDoneLink.addEventListener("click", () => {
    tasks = getDataFormLocalStorage("tasks");
    const tasksDone = tasks.filter((task) => task.completed);

    tasksDoneCount.innerHTML = tasksDone.length + " tasks";
    tasksDoneContainer.innerHTML = "";
    taskIteration(tasksDone, tasksDoneContainer, true);

    setClass(screenContainer, "show-taks-done-screen");

    setDataToLocalStorage("tasks", tasks);

});

alltasksLink.addEventListener("click", () => {
    removeClass(screenContainer, "show-taks-done-screen");
    removeClass(screenContainer, "show-lists-screen");
})

burgerMob.addEventListener("click", () => {
    toogleClass(innerContent, 'show-menu');
})

homeLink.forEach((link) => {
    link.addEventListener("click", () => {
        menuLinkListItems.forEach(item => {
            menuLinkListItems.forEach(link => removeClass(link, 'active'));
        });
        menuLinkListItems[0].classList.add('active');
        removeClass(innerContent, 'show-menu');
        removeClass(screenContainer, 'show-lists-screen');
        removeClass(screenContainer, 'show-taks-done-screen');
    });
})

function toogleClass(elem, className) {
    elem.classList.toggle(className);
}

/**
 * Executes when the window has finished loading. Checks if there are any
 * categories available. If not, displays a message prompting the user to
 * create a new category and hides the "Add Task" button. Calls the function
 * to render the list of categories in the DOM.
 */
window.onload = () => {
    if (categories.length <= 0) {
        const p = document.createElement("p");
        p.classList.add("no-tasks");
        p.innerHTML = "You need to create a new category first.<br/><br/>Then, add tasks to it.";
        p.style.fontWeight = "bold";
        p.style.color = "var(--red-accent-clr)";
        screenContainer.querySelector('.categories').appendChild(p);
        addTaskBtn.style.display = "none";
    }

    renderCategries();
};
