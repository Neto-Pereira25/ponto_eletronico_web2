document.getElementById('logout').addEventListener('click', function (event) {
    event.preventDefault();

    console.log('\nCliquei no logout\n');
    sessionStorage.removeItem("user");
    window.location.href = '/frontend/index.html';
});