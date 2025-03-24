async function uploadData(id) {
    try {
        const response = await fetch(`http://localhost:8080/timeregister`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            const data = await response.json();
            const registers = data.filter(tr => tr.employeeId == id); // Filtra os registros para o id correto
            sessionStorage.setItem('timeRegisterList', JSON.stringify(registers));
        } else {
            throw new Error('Erro ao buscar registros');
        }
    } catch (error) {
        console.error('Erro ao carregar lista de registros:', error);
        const msg = 'Erro ao carregar lista de registros';
        sessionStorage.setItem('msg', JSON.stringify(msg));
    }

    try {
        const response = await fetch(`http://localhost:8080/employee/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            const data = await response.json();
            sessionStorage.setItem('employeeName', JSON.stringify(data.name));
        } else {
            throw new Error('Erro ao carregar os dados do funcionário');
        }
    } catch (error) {
        console.error('Erro ao dados do funcionário:', error);
        const msg = 'Erro ao dados do funcionário';
        sessionStorage.setItem('msg', JSON.stringify(msg));
    }
}

async function loadTimeRegisters() {
    const id = sessionStorage.getItem('viewRecordsId');
    await uploadData(id);

    const timeRegisterList = JSON.parse(sessionStorage.getItem('timeRegisterList'));

    const tbody = document.querySelector('.timeRegisterList');

    for (let register of timeRegisterList) {
        const tr = document.createElement('tr');

        const tdId = document.createElement('td');
        const tdDate = document.createElement('td');

        tdId.innerText = register.id;
        tdDate.innerText = register.dateTime;

        tr.appendChild(tdId);
        tr.appendChild(tdDate);

        tbody.appendChild(tr);
    }

    document.querySelector('.employeeName').innerText = JSON.parse(sessionStorage.getItem('employeeName'));
}

// Chama a função que vai carregar os dados
loadTimeRegisters();