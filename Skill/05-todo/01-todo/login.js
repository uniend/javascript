// 로그인하기

const userForm = document.querySelector("#form_login");
const userId = document.querySelector("#form_login input");
const loginBtn = document.querySelector("#form_login button");
const userName = document.querySelector(".user_name");

const userNameList = [];

function SaveId(e) {
  e.preventDefault();
  const id = userId.value;
  localStorage.setItem("id", id);
}

function handleLogin(e) {
  SaveId(e);
  const id = localStorage.getItem("id");
  if (id != "") {
    userName.innerHTML = `${id}`;
  }
}

userForm.addEventListener("submit", SaveId);
loginBtn.addEventListener("click", handleLogin);
