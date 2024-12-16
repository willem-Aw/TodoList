categoriesItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // item.classList.toggle('active');
        selectedCategory = categories[index];
        // taskText.innerHTML = selectedCategory.title;
        let currentCatTasks = getTasksByCategory(selectedCategory);
        // console.log(currentCatTasks[0]);
        taskListCount.innerHTML = currentCatTasks.length + ' tasks';
        tasksContainer.innerHTML = "";
        currentCatTasks.forEach((task, index) => {
            tasksContainer.innerHTML += `
                    <div class="task-wrapper">
                        <label for="task-${index}" class="task">
                            <input type="checkbox" name="task-${index}" id="task-${index}" />
                            <span class="checkmark-icon"
                            ><i class="ri-check-line"></i
                            ></span>
                            <span class="task-text">${task.task}</span>
                        </label>
                        <button class="delete">
                            <i class="ri-delete-bin-7-line"></i>
                        </button>
                    </div>
                `;
            const checkbox = tasksContainer.querySelector(`#task-${index}`);
            console.log(checkbox);
            // console.log(tasksContainer);


            // checkbox.addEventListener("change", function () {
                // task.completed = checkbox.checked;
                // if (checkbox.checked === task.completed) {
                //     checkbox.parentElement.classList.add("completed");
                // } else {
                //     checkbox.parentElement.classList.remove("completed");
                // }
                // addTaskToLocalStorage();
            //     console.log(this.checked);
            // })
        });
        toggleScreen();
    });

    const option = item.querySelector(".options");
    option.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
    });
});