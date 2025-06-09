// Função para salvar os dados do usuário em um arquivo JSON (localStorage)
function saveUser(data) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
}

// Função para verificar se o usuário existe pelo email e senha
function checkUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.email === email && user.password === password);
}

// Função para verificar se o e-mail já está em uso
function checkEmail(email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.email === email);
}

// Manipula o formulário de cadastro, se existir na página
const registrationForm = document.getElementById('registrationForm');
if (registrationForm) {
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const cpf = document.getElementById('cpf').value.trim();
        const dob = document.getElementById('dob').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const address = document.getElementById('address').value;
        const terms = document.getElementById('terms').checked;

        if (checkEmail(email)) {
            alert('E-mail já está em uso!');
            return;
        }

        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }

        if (!terms) {
            alert('Você deve aceitar os termos de uso!');
            return;
        }

        const userData = {
            fullName,
            email,
            phone,
            cpf,
            dob,
            password,
            address
        };

        saveUser(userData);
        alert('Cadastro realizado com sucesso! Você será redirecionado para a página de login.');
        window.location.href = 'login.html';
    });
}

// Manipula o formulário de login, se existir na página
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        const user = checkUser(email, password);

        if (!user) {
            alert('E-mail ou senha incorretos!');
            return;
        }

        alert('Login realizado com sucesso! Você será redirecionado à página de agendamento.' );
        window.location.href = 'agendamento/agendamento.html';
    });
}
