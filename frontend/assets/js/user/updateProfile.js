document.querySelector('#updateProfile').addEventListener('submit', function (event) {
    event.preventDefault();

    const user = JSON.parse(sessionStorage.getItem('user'));

    const userName = document.querySelector('#floatingRegisterName').value;
    const userPosition = document.querySelector('#floatingRegisterPosition').value;
    const userDepartment = document.querySelector('#floatingRegisterDepartment').value;
    const userEmail = document.querySelector('#floatingRegisterEmail').value;
    const userPassword = document.querySelector('#floatingRegisterPassword').value;
    const userRepeatPassword = document.querySelector('#floatingRegisterRepeatPassword').value;

    if (user !== null) {

        if ((userName === '' || userName === null) ||
            (userPosition === '' || userPosition === null) ||
            (userDepartment === '' || userDepartment === null) ||
            (userEmail === '' || userEmail === null) ||
            (userPassword === '' || userPassword === null) ||
            (userRepeatPassword === '' || userRepeatPassword === null)) {
            const msg = 'Erro ao atualizar dados do usuário, campos precisam estar preenchidos';
            sessionStorage.setItem('msg', JSON.stringify(msg));

            window.location.reload();
            return;
        }

        if (userPassword !== userRepeatPassword) {
            const msg = 'Erro ao atualizar dados do usuário, senhas precisam ser iguais';
            sessionStorage.setItem('msg', JSON.stringify(msg));

            window.location.reload();
            return;
        }

        const url = `http://localhost:8080/employee/${user.id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: userName,
                email: userEmail,
                position: userPosition,
                department: userDepartment,
                password: userPassword
            })
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Erro ao atualizar os dados do usuário!');
                }
            })
            .then(data => {
                const msg = 'Dados do usuário atualizados com sucesso';
                sessionStorage.setItem('msg', JSON.stringify(msg));
                sessionStorage.setItem('user', JSON.stringify(data));

                window.location.reload();
            })
            .catch(error => {
                console.error('Error ao atualizar usuário:', error);
                const msg = 'Error ao atualizar usuário';
                sessionStorage.setItem('msg', JSON.stringify(msg));
            });
    }


});