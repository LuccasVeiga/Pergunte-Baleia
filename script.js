function escolherOpcao() {
    let opcao1 = document.getElementById("opcao1").value;
    let opcao2 = document.getElementById("opcao2").value;

    if (opcao1 === "" || opcao2 === "") {
        document.getElementById("resultado").innerHTML = "🐳 Por favor, insira duas opções!";
        return;
    }

    let opcoes = [opcao1, opcao2];
    let escolha = opcoes[Math.floor(Math.random() * opcoes.length)];

    document.getElementById("resultado").innerHTML = `🐳 A Baleia escolheu: <strong>${escolha}</strong>!`;
}
