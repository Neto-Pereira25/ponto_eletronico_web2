const userName = document.getElementById('name');
const userPosition = document.getElementById('position');
const userDepartment = document.getElementById('department');
const userEmail = document.getElementById('email');

const user = JSON.parse(sessionStorage.getItem("user"));


if (user !== null) {
    userName.innerText = user.name;
    userPosition.innerText = user.position;
    userDepartment.innerText = user.department;
    userEmail.innerText = user.email;
}