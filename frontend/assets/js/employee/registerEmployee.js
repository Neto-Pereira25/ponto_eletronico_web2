document.getElementById('registerEmployee').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.querySelector('#floatingRegisterName').value;
    const position = document.querySelector('#floatingRegisterPosition').value;
    const department = document.querySelector('#floatingRegisterDepartment').value;
    const email = document.querySelector('#floatingRegisterEmail').value;
    const password = document.querySelector('#floatingRegisterPassword').value;
    const repeatPassword = document.querySelector('#floatingRegisterRepeatPassword').value;

    if (
        (name === '' || name === null) ||
        (position === '' || position === null) ||
        (department === '' || department === null) ||
        (email === '' || email === null) ||
        (password === '' || password === null) ||
        (repeatPassword === '' || repeatPassword === null)
    ) {
        const msg = 'Erro ao cadastrar funcionário, campos precisam estar preenchidos';
        sessionStorage.setItem('msg', JSON.stringify(msg));

        window.location.reload();
        return;
    }
    if (password !== repeatPassword) {
        const msg = 'Erro ao cadastrar funcionário, senhas precisam ser iguais';
        sessionStorage.setItem('msg', JSON.stringify(msg));

        window.location.reload();
        return;
    }

    fetch('http://localhost:8080/employee', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            position,
            department,
            email,
            password,
        })
    })
        .then(response => {
            if (response.status === 201) {
                return response.json();
            }
        })
        .then(async () => {
            await fetch('http://localhost:8080/employee', {
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

                    window.location.href = '/frontend/assets/pages/employees.html';
                })
                .catch(error => {
                    console.error('Error ao buscar lista de funcionários:', error);
                    const msg = 'Error ao buscar lista de funcionários';
                    sessionStorage.setItem('msg', JSON.stringify(msg));
                });
        })
        .catch(error => {
            console.error('Error ao cadastrar:', error);
            const msg = 'Error ao cadastrar o usuário';
            sessionStorage.setItem('msg', JSON.stringify(msg));
        });



});