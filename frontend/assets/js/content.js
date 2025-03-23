const contentLogout = `
<div class="w-75 mx-auto my-2 bg-light p-3 rounded">
        <!-- Pills navs -->
        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link " id="tab-login" data-bs-toggle="pill" href="#pills-login" role="tab"
                    aria-controls="pills-login" aria-selected="true">Login</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="tab-register" data-bs-toggle="pill" href="#pills-register" role="tab"
                    aria-controls="pills-register" aria-selected="false">Cadastra-se</a>
            </li>
        </ul>
        <!-- Pills navs -->

        <!-- Pills content -->
        <div class="tab-content">
            <div class="tab-pane fade" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                <form method="post" id="login">

                    <!-- Email input -->
                    <div class="form-floating mb-4">
                        <input type="email" id="floatingLoginEmail" class="form-control" placeholder="email"
                            name="email" />
                        <label for="floatingLoginEmail">Email</label>
                    </div>

                    <!-- Password input -->
                    <div class="form-floating mb-4">
                        <input type="password" id="floatingLoginPassword" class="form-control" placeholder="senha"
                            name="password" />
                        <label for="floatingLoginPassword">Senha</label>
                    </div>

                    <!-- Submit button -->
                    <div class="d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary w-25">Entrar</button>
                    </div>
                </form>
            </div>
            <div class="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                <form method="post" id="registeruser">

                    <!-- Name input -->
                    <div class="form-floating mb-4">
                        <input type="text" id="floatingRegisterName" class="form-control" placeholder="nome"
                            name="name" />
                        <label for="floatingRegisterName">Name</label>
                    </div>

                    <!-- Email input -->
                    <div class="form-floating mb-4">
                        <input type="email" id="floatingRegisterEmail" class="form-control" placeholder="email"
                            name="email" />
                        <label for="floatingRegisterEmail">Email</label>
                    </div>

                    <!-- Position input 
                    <div class="form-floating mb-4">
                        <input type="text" id="floatingRegisterPosition" class="form-control" placeholder="position"
                            name="position" />
                        <label for="floatingRegisterPosition">Position</label>
                    </div>
                    -->

                    <!-- Department input 
                    <div class="form-floating mb-4">
                        <input type="text" id="floatingRegisterDepartment" class="form-control" placeholder="department"
                            name="department" />
                        <label for="floatingRegisterDepartment">Department</label>
                    </div>
                    -->

                    <!-- Password input -->
                    <div class="form-floating mb-4">
                        <input type="password" id="floatingRegisterPassword" class="form-control" placeholder="senha"
                            name="password" />
                        <label for="floatingRegisterPassword">Senha</label>
                    </div>

                    <!-- Repeat Password input -->
                    <div class="form-floating mb-4">
                        <input type="password" id="floatingRegisterRepeatPassword" class="form-control"
                            placeholder="repita a senha" name="repeatPassword" />
                        <label for="floatingRegisterRepeatPassword">Repita a senha</label>
                    </div>

                    <div class="d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary">Efetuar Cadastro</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
`;

const contentLogin = `
<div class="w-75 mx-auto my-2 bg-light p-3 rounded">
        <h2 class="text-center text-primary mb-4">Bem vindo ao Sistema Conexione</h2>
        <p class="fs-5">Como um usuário do nosso sistema você pode realizar as seguintes operações:</p>

        <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="col-md-6 mb-3 w-75 w-md-100">
                <a class="fw-bold btn btn-primary w-100 w-md-75" data-bs-toggle="collapse" href="#collapseMyContacts"
                    role="button" aria-expanded="false" aria-controls="collapseMyContacts">Funcionários:</a>
                <div class="collapse " id="collapseMyContacts">
                    <div class="card card-body my-2">
                        <p class="text-justify"><span class="fw-bold">Adicionar Funcionário</span> -> Você pode
                            cadastrar
                            novos funcionários, basta
                            clicar
                            em Funcionários no menu
                            de navegação e depois clicar em adicionar funcionário. Você será redirecionado para outra
                            página
                            e
                            lá poderá cadastrar um novo funcionário.</p>
                    </div>

                    <div class="card card-body my-2 text-justify">
                        <p class="text-justify"><span class="fw-bold">Pesquisar Funcionário</span> -> Você pode
                            pesquisar
                            por um ou mais funcionários
                            que
                            tenham um determinado nome,
                            basta clicar em Funcionários no menu de navegação e depois clicar em pesquisar funcionário.
                            Você
                            será redirecionado para outra página e lá você pode digitar uma palavra para pesquisar os
                            funcionários que combinem com a palavra informada.
                        </p>
                    </div>

                    <div class="card card-body my-2">
                        <p class="text-justify"><span class="fw-bold">Listar Todos os Funcionários</span> -> Você pode
                            listar todos os funcionários da empresa,
                            basta clicar em Funcionários no menu de navegação e depois clicar em lista de funcionários.
                            Você será redirecionado
                            para
                            outra página contendo a lista com todos os funcionários da empresa.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-6 mb-3 w-75 w-md-100">
                <a class="fw-bold btn btn-primary w-100 w-md-75" data-bs-toggle="collapse" href="#collapseProfile"
                    role="button" aria-expanded="false" aria-controls="collapseProfile">Perfil:</a>
                <div class="collapse" id="collapseProfile">
                    <div class="card card-body my-2">
                        <p class="text-justify"><span class="fw-bold">Ver Perfil</span> -> Você pode ver as informações
                            do seu perfil, basta clicar em perfil no menu de navegação, depois clicar em ver perfil.
                            Você será redirecionado para uma página com as informações do seu perfil.</p>
                    </div>

                    <div class="card card-body my-2 text-justify">
                        <p class="text-justify"><span class="fw-bold">Editar Perfil</span> -> Você pode editar suas
                            informações de perfil, basta clicar em perfil no menu de navegação, depois clicar em editar
                            perfil. Você será redirecionado para uma página onde poderá editar seus dados de usuário.
                        </p>
                    </div>

                    <div class="card card-body my-2">
                        <p class="text-justify"><span class="fw-bold">Alterar Senha</span> -> Você pode alterar sua
                            senha, basta você clicar em perfil no menu de navegação, depois em alterar senha. Você será
                            redirecionado para uma página onde poderá alterar sua senha.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

const indexContent = document.querySelector('.content');

if (sessionStorage.getItem('user')) {
    indexContent.innerHTML = contentLogin;
} else {
    indexContent.innerHTML = contentLogout;
}
