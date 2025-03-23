document.getElementById('logout').addEventListener('click', function (event) {
    event.preventDefault();

    sessionStorage.removeItem("user");
    sessionStorage.removeItem("employeeList");

    window.location.href = '/frontend/index.html';
});