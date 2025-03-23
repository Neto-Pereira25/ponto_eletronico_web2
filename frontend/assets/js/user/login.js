document.getElementById('login').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('floatingLoginEmail').value;
    const password = document.getElementById('floatingLoginPassword').value;

    fetch('http://localhost:8080/employee/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else if (response.status === 400) {
                const msg = 'Error ao fazer login do usuário, verifique seus dados e tente novament';
                throw new Error(msg);
            }

            throw new Error('Algo deu errado ao fazer login, entre em contato com o responsável pelo sistema');
        })
        .then(data => {
            sessionStorage.setItem('user', JSON.stringify(data));
            window.location.reload();
        })
        .catch(error => {
            sessionStorage.setItem('msg', JSON.stringify(error.message));
        });

    fetch('http://localhost:8080/employee', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
        })
        .then(data => {
            sessionStorage.setItem('employeeList', JSON.stringify(data));
        })
        .catch();

});