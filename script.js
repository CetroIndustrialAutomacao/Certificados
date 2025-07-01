async function verificarCodigo() {
    const codigo = document.getElementById('codigo').value.trim().toUpperCase();
    const resultadoDiv = document.getElementById('resultado');

    if (!codigo) {
        resultadoDiv.innerHTML = '<p style="color:red">Por favor, insira um código.</p>';
        return;
    }

    try {
        const res = await fetch('data/certificados.json');
        const data = await res.json();

        if (data[codigo]) {
            const link = `certificados/${data[codigo]}`;
            resultadoDiv.innerHTML = `
                <p style="color:green">Código válido!</p>
                <a href="${link}" download>Baixar Certificado</a>
            `;
        } else {
            resultadoDiv.innerHTML = '<p style="color:red">Código inválido.</p>';
        }
    } catch (error) {
        resultadoDiv.innerHTML = '<p style="color:red">Erro ao verificar. Tente novamente.</p>';
        console.error(error);
    }
}
