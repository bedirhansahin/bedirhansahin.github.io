const input = document.querySelector('#todo')
const addBtn = document.querySelector('#addBtn')
const list = document.querySelector('#list')
const container = document.querySelector('#alert')
const clearTodos = document.querySelector('#clearTodos')
const alertMessage = document.querySelector('#alert')

eventListeners()

function eventListeners () {
  addBtn.addEventListener('click', addTodo)
  list.addEventListener('click', deleteTodo)
  clearTodos.addEventListener('click', clearAllTodos)
  input.addEventListener('keyup', enterKeyup)
}

function enterKeyup (e) {
  if (event.keyCode === 13) {
    event.preventDefault()
    addTodo();
  }
}

function clearAllTodos (e) {
  if (confirm('Emin misiniz?')) {
    const listItems = document.querySelectorAll('.list-group-item')
    listItems.forEach(element => {
      element.remove()
    })
  }
}

function deleteTodo (e) {
  if (e.target.className === 'fa fa-remove') {
    e.target.parentElement.parentElement.remove()
    showAlert('danger', 'todo başarıyla silindi')
  }
}

function addTodo (e) {
  const newTodo = input.value.trim()

  if (newTodo == '') {
    showAlert('danger', 'Lütfen bir todo giriniz')
  } else {
    AddTodoToList(newTodo)
    showAlert('success', 'Todo ekleme başarılı')
  }
}

function showAlert (type, message) {
  const alert = document.createElement('div')

  alert.className = 'text-center m-0 alert alert-' + type
  alert.textContent = message

  alertMessage.appendChild(alert)

  setTimeout(() => {
    alert.remove()
  }, 1000)
}

function AddTodoToList (newTodo) {
  const li = document.createElement('li')
  const link = document.createElement('a')

  li.innerText = input.value
  link.href = '#'
  link.className = 'delete-item ml-3'
  link.innerHTML = "<i class='fa fa-remove'></i>"

  li.className = 'list-group-item d-flex justify-content-between listbg'

  li.appendChild(link)
  list.appendChild(li)

  input.value = ''
}
