document.getElementById('calcular-btn').addEventListener('click', function() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(numero)) {
        resultado.textContent = 'Por favor, insira um número válido.';
        return;
    }

    const anterior = numero - 1;
    const posterior = numero + 1;

    resultado.textContent = `Número inserido: ${numero}\n` +
                            `Número anterior: ${anterior}\n` +
                            `Número posterior: ${posterior}`;
});
