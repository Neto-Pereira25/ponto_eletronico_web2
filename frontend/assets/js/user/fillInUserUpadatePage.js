const user = JSON.parse(sessionStorage.getItem('user'));

if (user !== null) {
    const userName = document.querySelector('#floatingRegisterName').value = user.name;
    const userPosition = document.querySelector('#floatingRegisterPosition').value = user.position;
    const userDepartment = document.querySelector('#floatingRegisterDepartment').value = user.department;
    const userEmail = document.querySelector('#floatingRegisterEmail').value = user.email;
}


