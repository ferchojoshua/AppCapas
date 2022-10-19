window.onload = function () {
    listarMedicamentos();
}

async function listarMedicamentos() {

    fetchGet("Medicamento/saludos", "text", function (res) {
        alert(res);
        
    })

    fetchGet("Medicamento/numero", "text", function (res) {
        alert(res);

    })
}
