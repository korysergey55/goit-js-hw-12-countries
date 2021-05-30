/*
  Документация API: https://jsonplaceholder.typicode.com/

  Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users/ 

  Написать функцию getUsers, которая по нажатию кнопки посылает get запрос.
  Результатом fetch будет массив объектов.
  
  В таблицу .user-table добавить строки для каждого пользователя.
  Каждая строка состоит из 3-х столбцов указанного формата.
  Кол-во строк будет такое как и кол-во объектов пользователей в ответе.
  
    Имя | Почта | Город 
    Имя | Почта | Город 
    и так далее для каждого пользователя...
*/

const container = document.querySelector("#task-1");
const getBtn = container.querySelector("button");
const userTable = container.querySelector(".users-table");

getBtn.addEventListener("click", getUsers);

import { fetchData } from "./api-service.js";

function getUsers() {
  fetchData("/users").then(renderMarkup);
}

function renderMarkup(arr) {
  userTable.innerHTML = makeMarkup(arr);
}

const tableHead = `
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>City</th>
      </tr>
    </thead>`;

function makeMarkup(arr) {
  const usersMarkup = arr
    .map(
      (item) =>
        `<tr>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.address.city}</td>
      </tr>`
    )
    .join("");

  return tableHead + usersMarkup;
}
