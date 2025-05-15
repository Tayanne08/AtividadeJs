function classificarHeroi() {
    const nome = document.getElementById('nome').value;
    const xp = parseInt(document.getElementById('xp').value);
    let nivel = '';
    let cor = '';

    if (!nome || isNaN(xp)) {
        document.getElementById('resultado').textContent = 'Por favor, preencha todos os campos corretamente.';
        return;
    }

    if (xp <= 1000) {
        nivel = 'Ranger Vermelho';
        cor = '#FA0A0A'; /* Vermelho */
    } else if (xp <= 2000) {
        nivel = 'Ranger Verde';
        cor = '#0F9668'; /* Verde */
    } else if (xp <= 5000) {
        nivel = 'Ranger Azul';
        cor = '#195996'; /* Azul */
    } else if (xp <= 7000) {
        nivel = 'Ranger Rosa';
        cor = '#D43CA0'; /* Rosa */
    } else if (xp <= 8000) {
        nivel = 'Ranger Amarelo';
        cor = '#F8D107'; /* Amarelo */
    } else {
        nivel = 'Ranger Preto';
        cor = '#080808'; /* Preto */
    }

    document.getElementById('resultado').textContent = `${nome}, você está no nível ${nivel}!`;
    document.getElementById('resultado').style.color = cor;
}
