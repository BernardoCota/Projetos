function tema() {
    let tema = document.getElementById('tema');
    console.log(tema)
    if (tema.getAttribute('id_tema') == 1){
        //QUANDO ESTIVER NO TEMA ESCURO
        tema.setAttribute('id_tema', "2");
        var newIconTema = "/img/solicon.svg";
        var corFundo = "#151515";
        var corMain = "#404680";
        var corTextArea  = "#404040";
        var corFundoButton = "#404040";
        var corFundoInputNota = "#404040";
        var corLetraInputNota = "white"
        var corLetraTituloNota = "white"
        var newIconNota = "/img/notaicon.svg"
        var newSaveIcon = "/img/savenovaicon.svg"
        var newCorLetraTextArea = "white"
    } else {
        //QUANDO ESTIVER NO TEMA CLARO
        tema.setAttribute('id_tema', "1");
        var newIconTema = "/img/luanovaicon.svg";
        var corFundo = "white";
        var corMain = "#BCC3FF";
        var corTextArea  = "white"
        var corFundoButton = "white"
        var corFundoInputNota = "white";
        var corLetraInputNota = "black"
        var corLetraTituloNota = "#5E6180"
        var newIconNota = "/img/notanovaicon.svg"
        var newSaveIcon = "/img/saveicon.svg"
        var newCorLetraTextArea = "black"
    }

    document.getElementById('tema').src = newIconTema;
    document.body.style.backgroundColor = corFundo;
    document.getElementById('fundoprincipal').style.backgroundColor = corMain;
    document.getElementById('nota').style.backgroundColor = corTextArea;
    document.getElementById('saveicon').style.backgroundColor = corFundoButton;
    document.getElementById('titulonota').style.backgroundColor = corFundoInputNota;
    document.getElementById('titulonota').style.color = corLetraInputNota;
    document.getElementById('h1nota').style.color = corLetraTituloNota;
    document.getElementById('noteicon').src = newIconNota;
    document.getElementById('saveicon').src = newSaveIcon;
    document.getElementById('nota').style.color = newCorLetraTextArea;
    document.getElementById('saveicon').addEventListener('click', salvarNota);
}

let notas = [];

function salvarNota() {
    let titulo = document.getElementById('titulonota').value;
    let conteudo = document.getElementById('nota').value;

    notas.push({ titulo: titulo, conteudo: conteudo });

    document.getElementById('titulonota').value = '';
    document.getElementById('nota').value = '';

    exibirNotas();

    if (notas.length === 1) {
        document.getElementById('notasSalvas').style.display = 'block';
    }
}

function exibirNotas() {
    let listaNotas = document.getElementById('listaNotas');
    listaNotas.innerHTML = '';

    if (notas.length > 0) {
        document.getElementById('notasSalvas').style.display = 'block';
        notas.forEach((nota, index) => {
            let li = document.createElement('li');
            let titulo = document.createElement('h3');
            let conteudo = document.createElement('p');
            let deleteIcon = document.createElement('i');

            titulo.textContent = nota.titulo;
            conteudo.textContent = nota.conteudo;

            deleteIcon.className = 'fas fa-trash-alt';
            deleteIcon.addEventListener('click', () => excluirNota(index));

            li.appendChild(titulo);
            li.appendChild(conteudo);
            li.appendChild(deleteIcon);
            listaNotas.appendChild(li);
        });
    } else {
        document.getElementById('notasSalvas').style.display = 'none';
    }
}

function excluirNota(index) {
    notas.splice(index, 1);
    exibirNotas();
}

