# JS-Example-App



### 📝 JavaScript Todo List Application

This project is a dynamic **Todo List** application developed using core JavaScript, HTML5 Local Storage, and Bootstrap 4. It allows users to add, list, and persistently store their daily tasks within the browser. 

### 🚀 Features

* **Dynamic Todo Creation:** Add new tasks instantly via the user interface.
* **Persistent Storage (Local Storage):** Tasks are saved in the browser's Local Storage, ensuring data is not lost even if the page is refreshed or closed.
* **Smart Validation & Alerts:** Dynamic Bootstrap alert components provide immediate feedback for empty inputs or successful additions.
* **Auto-Dismiss Notifications:** Alert banners automatically clear from the screen after 2 seconds.

### 🛠️ Technologies Used

* **HTML5 & CSS3**
* **JavaScript (ES6+)**
* **Bootstrap 4** (For responsive UI design)
* **Font Awesome 4.7** (For UI icons)

### 📁 Project Structure

* index.html: The structural markup and Bootstrap theme layout.
* todo.js: The core logic managing DOM manipulation, event listeners, and Local Storage synchronization.

### 💻 Installation & Usage

1. Clone or download this repository to your local machine.
2. Open the index.html file in any modern web browser to run the application instantly.

### 🧠 Code Architecture Overview

* addTodo(): Handles form submission, trims input values, performs validation, and triggers UI/storage updates.
* addTodoToUI(): Dynamically constructs HTML elements (<li>, <a>, and <i>) to render new tasks onto the list.
* addTodoToStorage() & getTodosFromStroage(): Manages reading from and writing data to Local Storage using JSON formatting.
* ShowAlert(): Generates contextual status alerts (success/danger) and utilizes setTimeout to automatically remove them after 2000ms.
