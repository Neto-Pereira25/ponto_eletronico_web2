const navBarLogin = `
<nav class="navbar navbar-expand-lg navbar-light bg-dark bg-gradient">
            <div class="container-fluid">
                <a class="navbar-brand text-white" href="/frontend/index.html">CheckPoint</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon bg-secondary rounded"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Funcionários
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/frontend/assets/pages/insertEmployee.html">Adicionar Funcionário</a></li>
                                <li><a class="dropdown-item" href="/frontend/assets/pages/findEmployees.html">Pesquisar Funcionário</a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="/frontend/assets/pages/employees.html">Lista de Funcionários</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Perfil
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/frontend/assets/pages/userProfile.html">Ver Perfil</a></li>
                                <li><a class="dropdown-item" href="/frontend/assets/pages/updateUser.html">Editar Perfil</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="d-flex flex-row flex-md-row-reverse">
                        <a class="btn btn-danger justify-content-center align-item-center" href="/frontend/index.html" id="logout">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                                <path fill-rule="evenodd"
                                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                            </svg> <span>Sair</span></a>
                    </div>
                </div>
            </div>
        </nav>
`;

const navBarLogout = `
<nav class="navbar navbar-expand-lg navbar-light bg-dark bg-gradient">
            <div class="container-fluid">
                <a class="navbar-brand text-white" href="#">CheckPoint</a>
            </div>
        </nav>
`;
const navContainer = document.querySelector('.navBar');

if (sessionStorage.getItem("user")) { // usuário logado
    navContainer.innerHTML = navBarLogin;
} else { // usuário deslogado
    navContainer.innerHTML = navBarLogout;
}



