document.getElementById('updateEmployee').addEventListener('submit', function (event) {
    event.preventDefault();

    const id = sessionStorage.getItem('editId');

    const name = document.getElementById('floatingRegisterName').value;
    const position = document.getElementById('floatingRegisterPosition').value;
    const department = document.getElementById('floatingRegisterDepartment').value;
    const email = document.getElementById('floatingRegisterEmail').value;
    const password = document.getElementById('floatingRegisterPassword').value;
    const repeatPassword = document.getElementById('floatingRegisterRepeatPassword').value;

    if ((name === '' || name === null) ||
        (position === '' || position === null) ||
        (department === '' || department === null) ||
        (email === '' || email === null) ||
        (password === '' || password === null) ||
        (repeatPassword === '' || repeatPassword === null)) {
        const msg = 'Erro ao atualizar dados do funcionário, campos precisam estar preenchidos';
        sessionStorage.setItem('msg', JSON.stringify(msg));

        window.location.reload();
        return;
    }

    if (password !== repeatPassword) {
        const msg = 'Erro ao atualizar dados do funcionário, senhas precisam ser iguais';
        sessionStorage.setItem('msg', JSON.stringify(msg));

        window.location.reload();
        return;
    }

    fetch(`http://localhost:8080/employee/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            position,
            department,
            email,
            password
        })
    })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
        })
        .then(async data => {
            sessionStorage.removeItem('editId');

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
            console.error('Erro ao atualizar dados do funcionário:', error);
            const msg = 'Erro ao atualizar dados do funcionário';
            sessionStorage.setItem('msg', JSON.stringify(msg));
        });
});

