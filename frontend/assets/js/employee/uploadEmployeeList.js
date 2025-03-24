const employeeList = JSON.parse(sessionStorage.getItem("employeeList"));

const tbody = document.querySelector('.employeeList');

for (let employee of employeeList) {
    const tr = document.createElement('tr');

    const tdId = document.createElement('td');
    const tdName = document.createElement('td');
    const tdPosition = document.createElement('td');
    const tdDepartment = document.createElement('td');
    const tdEmail = document.createElement('td');
    const tdActions = document.createElement('td');

    tdId.classList.add(`id`);
    tdId.classList.add(`employee-id:${employee.id}`);

    tdId.innerText = employee.id;
    tdName.innerText = employee.name;
    tdPosition.innerText = employee.position;
    tdDepartment.innerText = employee.department;
    tdEmail.innerText = employee.email;
    tdActions.innerHTML = `
                            <!-- Editar -->
                            <a class="btn btn-primary editEmployee" href="#" data-action="edit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path
                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fill-rule="evenodd"
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                </svg>
                            </a>
                            <!-- Deletar -->
                            <a class="btn btn-danger" href="#" data-action="delete">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-trash" viewBox="0 0 16 16">
                                    <path
                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                    <path
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                </svg>
                            </a>
                            <!-- Registrar Ponto -->
                            <a class="btn btn-success" href="#" data-action="clockIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ui-checks-grid" viewBox="0 0 16 16">
                                    <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1m9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0z"/>
                                </svg>
                            </a>
                            <!-- Listar os pontos -->
                            <a class="btn btn-secondary" href="#" data-action="viewRecords">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-info-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path
                                        d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                </svg>
                                <span>Registros</span>
                            </a>
    `;

    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdPosition);
    tr.appendChild(tdDepartment);
    tr.appendChild(tdEmail);
    tr.appendChild(tdActions);

    tbody.appendChild(tr);
}

tbody.addEventListener('click', function (event) {
    // Verifique se o clique foi numa âncora
    if (event.target.closest('a')) {
        // Encontre o tr que contém a âncora clicada

        const link = event.target.closest('a');
        const action = link.getAttribute('data-action');

        const tr = link.closest('tr');
        const id = tr.firstChild.textContent;


        if (action === 'edit') {
            sessionStorage.setItem('editId', id);
            window.location.href = '/frontend/assets/pages/updateEmployee.html';
        } else if (action === 'delete') {
            fetch(`http://localhost:8080/employee/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => {
                    if (response.status === 204) {
                        return;
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
                    console.error('Erro ao deletar funcionário:', error);
                    const msg = 'Erro ao deletar funcionário';
                    sessionStorage.setItem('msg', JSON.stringify(msg));
                });
        } else if (action === 'clockIn') {
            fetch('http://localhost:8080/timeregister', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    employeeId: id,
                    dateTime: new Date()
                })
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then(() => {
                    window.location.reload();
                })
                .catch(error => {
                    console.error('Erro ao registrar ponto do funcionario:', error);
                    const msg = 'Erro ao registrar ponto do funcionario';
                    sessionStorage.setItem('msg', JSON.stringify(msg));
                });
        } else if (action === 'viewRecords') {
            sessionStorage.setItem('viewRecordsId', id);
        }
    }
});
