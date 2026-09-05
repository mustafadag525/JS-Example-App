//todo ekleyin todo girin kısmı

// tüm elementeler seçildi

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");

//şimdi değerleri ul ye ekleyeceğiz ul yi seçeceğiz
const todolist = document.querySelector(".list-group");

//şimdi bir tane alert ekleyeceğiz başıryla eklendi diye card body yi ekleyeceğiz

const firstcardbody = document.querySelectorAll(".card-body")[0];
const secondcardbody = document.querySelectorAll(".card-body")[1];

//todo arayın kısmı filter kısmı daha sonra işimize yaracayacak şimdiden ekleyelim

const filter = document.querySelector("#filter");

// tüm taslakları temizleyin kısmı

const clear = document.querySelector("#clear-todos");

eventListeners(); // sayfa yeni açıldığında elementleri seçecğiz bu fonlsiiyon çalışacak

function eventListeners() {
  // tüm event listenerlar
  form.addEventListener("submit", addTodo);

  document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
}

//ekleme işlemleri
function addTodo(e) {
  //inputtaki değerleri alma

  const newTodo = todoInput.value.trim(); // trim fonk başında ve sonunda boşluk varsa siler
  //önemli!!!: burda oluşan newtodo diğer listede görmek için veya diğer yerlerde kullanmak için

  if (newTodo === "") {
    ShowAlert("danger", "lütfen bir todo girin...");
  } else {
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);
    ShowAlert("success", "Başarı ile eklendi");
  }

  //addTodoToUI(newTodo); if elsenin içine alacğız

  e.preventDefault(); //En sık form gönderildiğinde sayfanın yenilenmesini veya bir bağlantıya (<a> etiketi) tıklandığında başka bir sayfaya gitmeyi engellemek için kullanılır.
}

function loadAllTodosToUI() {
  // todo ekleme

  let todos = getTodosFromStroage();

  todos.forEach(function (todo) {
    addTodoToUI(todo);
  });
}

function getTodosFromStroage() {
  // her yerde kullanmak için return ettik   //local storage ekleme işlemi

  let todos;

  if (localStorage.getItem("todos") === "null") {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

function addTodoToStorage(newTodo) {
  let todos = getTodosFromStroage();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));

  /*  //local storage ekleme işlemi

  let todos;

  if (localStorage.getItem("todos") === "null") { //getTodosFromStroage fonksiyonunu yazmadan önce kullandık return yaparak her yerde kullanbiliriz
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }*/
}

function ShowAlert(type, message) {
  //dinamik olarak elemmnt oluşturacağız

  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`; //backtick alt096
  alert.textContent = message;

  firstcardbody.appendChild(alert);

  setTimeout(function () {
    //lütfen bir todo girin kısmını 2 sn sonra ekrandan kaldır
    alert.remove();
  }, 2000);
}

function addTodoToUI(newTodo) {
  // arayüze ekleme işlemi , string değer listıtem olarak uı ekleyecek
  //dinamik olarak liste oluşturacağız

  const listItem = document.createElement("li"); // yeni element oluşturma işlemi

  //link oluşturma
  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = "<i class = 'fa fa-remove'></i>";

  listItem.className = "list-group-item d-flex justify-content-between";

  //text node
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);

  //ul ye ekleyeceğiz yukarda ul yi tanımladık todo liste list item ekleme
  todolist.appendChild(listItem);

  //todo inputu boşaltma
  todoInput.value = "";
}
