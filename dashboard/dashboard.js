const nome = localStorage.getItem("Usuario") || "Aluno";

document.getElementById("boasvindas").textContent = `Bem-vindo de volta, ${nome}!`;



