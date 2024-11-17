document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const data = {
        nomeUsuario: document.getElementById('nomeUsuario').value,
        emailUsuario: document.getElementById('emailUsuario').value,
        consumoEnergiaKWh: document.getElementById('consumoEnergiaKWh').value,
        consumoGasM3: document.getElementById('consumoGasM3').value,
        consumoCombustivelLitros: document.getElementById('consumoCombustivelLitros').value,
        consumoVeiculoKmPorLitro: document.getElementById('consumoVeiculoKmPorLitro').value,
        transportePublicoKm: document.getElementById('transportePublicoKm').value,
        praticasReciclagem: document.getElementById('praticasReciclagem').value,
    };

    fetch('http://54.162.187.188:5000/api/calculator', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Dados enviados com sucesso!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Erro ao enviar dados.');
    });
});
