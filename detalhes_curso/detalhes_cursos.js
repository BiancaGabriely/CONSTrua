const API_URL = 'http://localhost:3000'

document.addEventListener("DOMContentLoaded", () => {
    const parametros = new URLSearchParams(window.location.search)
    const idCurso = parametros.get('id') || 'prompt-ia'

  carregarDetalhesDoCurso(idCurso);
})

function carregarDetalhesDoCurso(id) {
  fetch(`${API_URL}/cursos/${id}`)
    .then(resposta => {
      if (!resposta.ok) {
        throw new Error(`Curso com ID "${id}" não foi encontrado na API.`)
      }
      return resposta.json()
    })
    .then(curso => {
      renderizarCurso(curso)
    })
    .catch(erro => {
      console.error('Erro na requisição:', erro)
      mostrarMensagemErro()
    })
}

function renderizarCurso(curso){
    const elementoPaginaTitulo= document.getElementById('pagina-titulo')

    if (elementoPaginaTitulo) {
        elementoPaginaTitulo.innerText = `${curso.titulo} - CONSTrua`
    }
}

document.getElementById('curso-categoria').innerText = curso.categoria || 'Geral'
document.getElementById('curso-avaliacao').innerText = curso.avaliacao || '0.0'
document.getElementById('curso-titulo').innerText = curso.titulo || 'Curso sem título'
  
  const elDescricao = document.getElementById('cursoDescricao')

  if (elDescricao) {
    elDescricao.innerText = curso.descricao || 'Sem descrição disponível.'
  }

  if (curso.instrutor){
    document.getElementById('instrutorNome').innerText = curso.instrutor.nome || 'Instrutor Não Informado'
    document.getElementById('instrutorCargo').innerText = curso.instrutor.cargo || ''

    const imgFoto = document.getElementById('instrutor-foto')
    if (imgFoto) {
      imgFoto.src = curso.instrutor.foto || IMAGEM_PADRAO_FOTO
      imgFoto.onerror = () => { imgFoto.src = IMAGEM_PADRAO_FOTO }
    }
  }