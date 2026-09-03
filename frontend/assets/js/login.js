const superUser = {
    nome: 'adm',
    email: 'admin123',
    senha: 'admin123'
}

function validarUsuario(event){
    event.preventDefault();

    const email = document.querySelector('input#email').value
    const senha = document.querySelector('input#senha').value
    
    if(email === superUser.email && senha == superUser.senha) return true
    
}

