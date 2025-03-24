const id = sessionStorage.getItem('editId');
fetch(`http://localhost:8080/employee/${id}`, {
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
        const userName = document.querySelector('#floatingRegisterName').value = data.name;
        const userPosition = document.querySelector('#floatingRegisterPosition').value = data.position;
        const userDepartment = document.querySelector('#floatingRegisterDepartment').value = data.department;
        const userEmail = document.querySelector('#floatingRegisterEmail').value = data.email;
    })
    .catch(error => {
        console.error('Erro ao carregar dados do funcionário:', error);
        const msg = 'Erro ao carregar dados do funcionário';
        sessionStorage.setItem('msg', JSON.stringify(msg));
    });





