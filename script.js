// script.js
document.getElementById('indicacaoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nomeIndicador = document.getElementById('nomeIndicador').value;
    const nomeIndicado = document.getElementById('nomeIndicado').value;
    const telefoneIndicado = document.getElementById('telefoneIndicado').value;

    const texto = `Indicação: óla estou indicando o senhor(a):\n\nNome do Indicador: ${nomeIndicador}\nNome da Pessoa Indicada: ${nomeIndicado}\nNúmero de Telefone: ${telefoneIndicado}`;

    const encodedText = encodeURIComponent(texto);
    const numeroWhatsApp = '5581982103802';
    const whatsappUrl = `https://wa.me/${numeroWhatsApp}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
});
