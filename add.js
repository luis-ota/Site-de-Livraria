function adicionarLivro() {
    var nome = document.querySelector('#livro').value;
    var link = document.querySelector('#capa').value;
    var resumo = document.querySelector('#descricao').value;
    var autor = document.querySelector('#autor').value;
    var ano = document.querySelector('#ano').value;
    var paginas = document.querySelector('#paginas').value;


    if(link.endsWith('.jpg') || link.endsWith('.png') || link.endsWith('.jpeg')) {
        imprimirLivro(nome, link, resumo, autor, ano, paginas);    
    }  else {
      alert('Imagem inválida');
    }
    document.querySelector('#livro').value = ""
    document.querySelector('#capa').value = ""
    document.querySelector('#descricao').value = ""
    document.querySelector('#autor').value = ""
    document.querySelector('#ano').value = ""
    document.querySelector('#paginas').value = ""
  }

function imprimirLivro(nome, imgLink, resumo, autor, ano, paginas) {
    var listaLivros = document.querySelector('#cardContainer');


    var elementoLivro = `
    <div    class="livro">
    <h2>${nome}</h2>
    <div class="imagem_container">
        <img src="${imgLink}" />
    </div>
    <p>
    ${resumo}
    </p>
    <h4>Detalhes do Livro</h4>
    <ol>
        <li><b>Autor: </b>${autor}</li>
        <li><b>Ano de publicação: </b>${ano}</li>
        <li><b>Quantida de páginas: </b>${paginas} páginas</li>
    </ol>
</div>
`
console.log(listaLivros)
console.log(elementoLivro)
listaLivros.innerHTML = listaLivros.innerHTML + elementoLivro;  
  }