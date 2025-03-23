document.getElementById('registeruser').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('floatingRegisterName').value;
    const email = document.getElementById('floatingRegisterEmail').value;
    // const position = document.getElementById('floatingRegisterPosition').value;
    // const department = document.getElementById('floatingRegisterDepartment').value;
    const password = document.getElementById('floatingRegisterPassword').value;
    const repeatPassword = document.getElementById('floatingRegisterRepeatPassword').value;

    if (password !== repeatPassword) {
        console.error('Senhas não são iguais');
        return;
    }

    fetch('http://localhost:8080/employee/registeruser', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            // position,
            // department,
            password
        })
    })
        .then(response => {
            if (response.status === 201) {
                return response.json();
            } else {
                throw new Error('Erro ao Cadastrar Usuário');
            }
        })
        .then(data => {
            const msg = 'Usuário cadastrado com sucesso';
            // const email = data.email;
            // const user = { email };
            // sessionStorage.setItem('user', JSON.stringify(user));
            sessionStorage.setItem('msg', JSON.stringify(msg));

            window.location.href = '/frontend/index.html';
        })
        .catch(error => {
            console.error('Error ao cadastrar:', error);
            const msg = 'Error ao cadastrar o usuário';
            sessionStorage.setItem('msg', JSON.stringify(msg));
        });

});