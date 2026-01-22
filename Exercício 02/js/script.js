document.getElementById('formOrcamento').addEventListener('submit', function(event) {
    event.preventDefault();
    const nivelSatisfacao = document.getElementById('satisfacao').value;

    Swal.fire({
        title: 'A enviar a sua mensagem...',
        text: 'Estamos a preparar tudo com carinho!',
        color: '#ff8fab',
        imageUrl: 'https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-47-323_512.gif', // GIF de carta a voar
        imageWidth: 100,
        showConfirmButton: false,
        timer: 2000
    }).then(() => {
        Swal.fire({
            title: 'Enviado com Sucesso! ✨',
            text: `Enviado! Registámos o seu nível de satisfação de ${nivelSatisfacao}/20.`,
            text: 'Em breve a nossa equipa entrará em contacto para tratar do seu condomínio.',
            icon: 'success',
            confirmButtonText: 'Ótimo!',
            confirmButtonColor: '#ff8fab',
            backdrop: `
                rgba(255, 229, 236, 0.4)
            `
        });
        
        document.getElementById('formOrcamento').reset();
    });
});