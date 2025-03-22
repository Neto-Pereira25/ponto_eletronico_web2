const content = `
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
                <form method="post" action="/login">

                    <!-- Email input -->
                    <div class="form-floating mb-4">
                        <input type="email" id="floatingLoginName" class="form-control" placeholder="email"
                            name="email" />
                        <label for="floatingLoginName">Email</label>
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

const indexContent = document.querySelector('.content');

indexContent.innerHTML = content;