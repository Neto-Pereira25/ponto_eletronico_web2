# CheckPoint - Sistema de Ponto Eletrônico

## 📌 Sobre o Projeto
CheckPoint é um sistema de ponto eletrônico desenvolvido com **Spring Boot (Restful API)** e **MySQL**. Ele permite o **cadastro de funcionários** e o **registro de ponto** por meio de uma interface simples, onde o porteiro pode clicar nos cartões de funcionários para registrar sua chegada ao trabalho.

## 🚀 Tecnologias Utilizadas
#### **Java 21**
  <a href="https://www.oracle.com/br/java/technologies/downloads/" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" alt="java" width="40" height="40"/>      
  </a> 

#### **BackEnd**
  <a  href="https://spring.io/" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="spring" width="40" height="40"/>
  </a>       
  
#### **FrontEnd**
<a href="https://www.w3.org/html/" target="_blank">
    <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/HTML.svg" alt="html" width="40" height="40"/> 
  </a> 
  <a href="https://www.w3schools.com/css/" target="_blank"> 
    <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/CSS.svg" alt="css" width="40" height="40"/> 
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> 
    <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/JavaScript.svg" alt="javascript" width="40" height="40"/> 
  </a>
  <a href="#" target="_blank"> 
    <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="url(#paint0_linear_158_100)" rx="60"/><g filter="url(#filter0_d_158_100)"><path fill="url(#paint1_linear_158_100)" d="M131.97 196.157C161.646 196.157 179.529 181.626 179.529 157.66C179.529 139.543 166.77 126.428 147.823 124.351V123.597C161.743 121.332 172.666 108.405 172.666 93.9689C172.666 73.3992 156.427 60 131.68 60H76V196.157H131.97ZM97.6533 77.2674H126.46C142.12 77.2674 151.013 84.2497 151.013 96.8935C151.013 110.387 140.67 117.935 121.917 117.935H97.6533V77.2674V77.2674ZM97.6533 178.89V134.071H126.266C146.76 134.071 157.393 141.619 157.393 156.339C157.393 171.058 147.05 178.89 127.523 178.89H97.6533V178.89Z"/><path stroke="#fff" stroke-width="2" d="M131.97 196.157C161.646 196.157 179.529 181.626 179.529 157.66C179.529 139.543 166.77 126.428 147.823 124.351V123.597C161.743 121.332 172.666 108.405 172.666 93.9689C172.666 73.3992 156.427 60 131.68 60H76V196.157H131.97ZM97.6533 77.2674H126.46C142.12 77.2674 151.013 84.2497 151.013 96.8935C151.013 110.387 140.67 117.935 121.917 117.935H97.6533V77.2674V77.2674ZM97.6533 178.89V134.071H126.266C146.76 134.071 157.393 141.619 157.393 156.339C157.393 171.058 147.05 178.89 127.523 178.89H97.6533V178.89Z"/></g><defs><filter id="filter0_d_158_100" width="137.529" height="170.157" x="59" y="47" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="8"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_158_100"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_158_100" mode="normal" result="shape"/></filter><linearGradient id="paint0_linear_158_100" x1="0" x2="256" y1="0" y2="256" gradientUnits="userSpaceOnUse"><stop stop-color="#9013FE"/><stop offset="1" stop-color="#6B11F4"/></linearGradient><linearGradient id="paint1_linear_158_100" x1="85.793" x2="148.541" y1="68.962" y2="175.084" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#F1E5FC"/></linearGradient></defs></svg>
  </a>
  <a href="https://sass-lang.com" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="bootstrap" width="40" height="40"/>
  </a>

#### Banco de Dados
  <a href="https://www.mysql.com/" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/>
  </a>

#### Ferramenta de Versionamento
  <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a>

## 🎯 Funcionalidades
- **Cadastro de Funcionários** 📋
- **Registro de Ponto via clique** ⏳
- **Listagem de funcionários cadastrados** 👥
- **Visualização dos registros de ponto de um funcionário** 📊
- **Login e autenticação para porteiros** 🔑

## 📂 Estrutura do Projeto
```bash
CheckPoint/
│-- frontend/
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   ├── pages/
│-- src/
│   ├── main/
│   │   ├── java/br/edu/ifpe/discente/joseneto/pontoEletronico/
│   │   │   ├── config/
│   │   │   ├── controller/
│   │   │   ├── model/
│   │   ├── application.properties
|-- db.properties
│-- pom.xml
│-- README.md
```

## 📊 Modelagem do Banco de Dados (MySQL)
```sql
CREATE DATABASE IF NOT EXISTS PontoEletronico;
USE PontoEletronico;

-- Tabela de Funcionários
CREATE TABLE IF NOT EXISTS Funcionario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(50),
    departamento VARCHAR(50),
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

-- Tabela de Registro de Ponto
CREATE TABLE IF NOT EXISTS RegistroPonto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    funcionario_id INT NOT NULL,
    data_hora DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (funcionario_id) REFERENCES Funcionario(id) ON DELETE CASCADE
);
```

## 🔧 Como Executar o Projeto
1. **Clone o repositório:**
   ```bash
   git clone git@github.com:Neto-Pereira25/ponto_eletronico_web2.git
   ```
2. **Configure o banco de dados MySQL:**
   - Crie um banco chamado `PontoEletronico`.
   - Atualize as credenciais no `db.properties`.
3. **Instale as dependências:**
   ```bash
   mvn clean install
   ```
4. **Execute a aplicação:**
   ```bash
   mvn spring-boot:run
   ```
5. **Acesse no navegador a página index na pasta frontend**

---
Feito com ❤️ para simplificar o registro de ponto! 🚀
