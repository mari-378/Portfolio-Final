document.addEventListener("DOMContentLoaded", function() {
    var main = document.createElement('main');
    main.classList.add('container');
    document.body.appendChild(main);
    
    criarPerfil(main);

    fetch('./links.json')
    .then(response => response.json())
    .then(data => {
        criarLinks(main, data);
    })
    .catch(error => console.log('Erro ao carregar JSON', error));
})

function criarPerfil(container) {
    var perfilContainer = document.createElement('div');
    perfilContainer.classList.add('perfil');

    var foto = document.createElement('img');
    foto.src = "./images/perfil.png";
    foto.alt = "Foto de Perfil";
    foto.classList.add('foto-perfil');

    var nome = document.createElement('h1');
    nome.textContent = "Mariana Melo";

    var descricao = document.createElement('p');
    descricao.textContent = "Desenvolvedora Frontend"

    perfilContainer.appendChild(foto);
    perfilContainer.appendChild(nome);
    perfilContainer.appendChild(descricao);

    container.appendChild(perfilContainer);
}

function criarLinks(container, objJS) {
    var links = objJS["links"];

    var lista = document.createElement('ul');
    lista.classList.add('ulLinks');

    for (var i = 0; i < links.length; i++) {
        var item = document.createElement('li');
        item.classList.add('liLinks');

        var novoLink = document.createElement('a');
        novoLink.classList.add('aLinks');
        novoLink.innerHTML = links[i]["icon"] + "" + links[i]["name"];
        novoLink.href = links[i]["url"];
        novoLink.target = "_blank";

        item.appendChild(novoLink);
        lista.appendChild(item);
    }

    container.appendChild(lista);
}