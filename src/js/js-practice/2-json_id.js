/*
  Документация API: https://jsonplaceholder.typicode.com/

  Написать функцию getUserById, которая по событию сабмит на форме посылает запрос на получение информации о пользоватеьте с id (число) введенным в input. 
 
  Объект что придет в ответе используйте для вывода информации о пользователе в элементе .result
  
  Если пользователя с таким идентификатором в базе данных нет, в элемент .error вывести строку `Ошибка! Пользователя с id "${id}" не существует`
*/

const container = document.querySelector("#task-2");
const formRef = container.querySelector(".search-form");
const resultRef = container.querySelector(".result");
const errorRef = container.querySelector(".error");

formRef.addEventListener("submit", getUserById);

import { fetchById } from "./api-service.js";

function getUserById(event) {
  event.preventDefault();

  const formRef = event.currentTarget;
  const id = formRef.elements.userId.value;

  fetchById(id)
    .then((user) => renderMarkup(user))
    .catch((error) => renderError(error));
  // fetchById(id).then(renderMarkup).catch(renderError);
}

const makeMarkup = ({ id, name, phone }) => `
  <table>
    <tbody>
      <tr>
        <th>User ID:  &emsp;</th>
        <td>${id}</td>
      </tr>
      <tr>
        <th>User name:  &emsp;</th>
        <td>${name}</td>
      </tr>
      <tr>
        <th>Phone number:  &emsp;</th>
        <td>${phone}</td>
      </tr>
    </tbody>
  </table>`;

function renderMarkup(user) {
  errorRef.textContent = "";
  resultRef.innerHTML = makeMarkup(user);
}

function renderError(error) {
  resultRef.innerHTML = "";
  errorRef.textContent = error.message;
}
