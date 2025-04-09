document.getElementById('mensagemBtn').addEventListener('click', function() {
    const mensagens = [
        "A maior prova de coragem é suportar as derrotas sem perder o ânimo - Robert Ingersoll.",
        "Força de ânimo e coragem na adversidade servem para conquistar o êxito, mais do que um exército. - John Dryden.",
        "Encontre ânimo na dor e no desafio. Nesta vida só nos são colocados à frente os obstáculos que somos capazes de ultrapassar - Augusto Branco.",
        "Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo - Jesus Cristo."
    ];
    
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    
    document.getElementById('mensagem').textContent = mensagemAleatoria;
});