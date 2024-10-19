const listaSelecaoPokedevs = document.querySelectorAll('.pokedev');

listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        esconderCartaoPokedev();

        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);
        esconderPokedevNaListagem();
        ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);
    });
});

function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function esconderPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    if (pokedevAtivoNaListagem) {
        pokedevAtivoNaListagem.classList.remove("ativo");
    }
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    if (cartaoPokedevAberto) {
        cartaoPokedevAberto.classList.remove("aberto");
    }
}