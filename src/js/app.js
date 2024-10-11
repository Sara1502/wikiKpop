function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == ""){
        section.innerHTML = `<div class="nada">
                                <p>Não foi encontrado</p>
                            </div>`
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            resultados += `
                <div class="item-resultado">
                    <a href=${dado.link}><h2>${dado.titulo}</h2></a>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.insta}, target="_blank">
                        Instagram
                    </a>
                </div>  
           `
        }

        if (!resultados){
            resultados = `<div class="nada">
                                <p>Não foi encontrado</p>
                            </div>`
        }
    }
    section.innerHTML = resultados
}


