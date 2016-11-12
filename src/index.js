import './index.css';
import {getUsers} from './api/usersApi';

getUsers()
  .then(result => {
    let userBody = "";

    result.map(user => {
      userBody += `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        </tr>`
    });
    global.document.getElementById('users').innerHTML = userBody;
  });
