// 1. form을 생성
// 2. form의 input을 반드시 입력하도록, value값을 로컬스토리지에 저장 -- > 기능1
//  - 값은 데이터 구조를 표현하기 용이한 배열 또는 객체 형태에 저장되어 보내져야한다.
//  - 리스트를 새로 입력하고 보내면 기존값은 지워지고 , 새로운 값만 저장되기 때문에 기존값을 복사하고 새로운 값도 함께 보내는게 필요
// 3. 저장한 값을 불러와서 화면에 그려주는 함수
//  - html 태그 li와 번호를 뿌려줘야함
// 4. 그려진 값을 삭제하는 함수
//  - 어떤 데이터를 삭제할건지 알아야 해당 번호만 삭제가 가능하기 떄문에 고유의 값 id가 필요하다.

const todoForm = document.querySelector("#form_todo");
const todoInput = document.querySelector("#form_todo input");
const todoList = document.querySelector("#todolist");

let todo = [];

function deleteList(e) {
  const li = e.target.parentElement; // 이렇게하면 어떤 li를 지워하는지는 알지만,데이터 베이스에서 어떤 데이터를지워야하는지를 모른다.
  todo = todo.filter((todo) => todo.id !== parseInt(li.id));
  localStorage.setItem("todos", JSON.stringify(todo));
  li.remove();
}

function paintlist(input) {
  const li = document.createElement("li");
  li.id = input.id; // li에 id 넣어주기
  const span = document.createElement("span");
  span.innerHTML = input.text;
  const btn = document.createElement("button");
  btn.innerHTML = "삭제";
  btn.addEventListener("click", deleteList);
  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}

function handleAddtodo(e) {
  e.preventDefault();
  let input = todoInput.value;
  todoInput.value = "";
  const NewTodo = {
    text: input,
    id: Date.now(),
  };
  todo.push(NewTodo); // todo 배열이 비워져있기 떄문에새로고침하면 초기확 항상된다.
  paintlist(NewTodo);
  localStorage.setItem("todos", JSON.stringify(todo));
}
todoForm.addEventListener("submit", handleAddtodo);

// 폼 서브밋이 끝나고 난후 , 로컬스토리지의 데이터를 받아와 뿌려주기
// 새로고침시 시행되면서, 데이터를 뿌려주고상단의 배열이 빈배열이 아니게 해준다.
const getSaveTodo = localStorage.getItem("todos");
if (getSaveTodo !== null) {
  const ArrayTodo = JSON.parse(getSaveTodo);
  todo = ArrayTodo;
  ArrayTodo.forEach(paintlist); // 콜백함수 내 매개변수 넣어주는걸 자바스크립트가 해주고있다.
}
