window.onload = function () {
    listarTipoMedicamento();
}

async function listarTipoMedicamento()
Pintar({
    url: "tipomedicamento/listarTipoMedicamento",
    cabeceras: ["Id del Medicamento", "Nombre", "Estado", "Descripcion"],
    propiedades: ["tipoMedicamento", "nombre", "estate","descripcion"]
    })

{

    /*fetchGet("tipomedicamento/listarTipoMedicamento", "Json", function (res) {

        //alert(nregistros);
        //alert(Contenido);

        var Contenido = "";
        Contenido += "<table class='table'>";
        Contenido += "<thead>";
        Contenido += "<tr>";
        Contenido += "<td>Id del Medicamento</td>";
        Contenido += "<td>Nombre</td>";
         Contenido += "<td>Estado</td>";
        Contenido += "<td>Descripcion</td>";
        Contenido += "</tr>";
        Contenido += "</thead>"
       /* Contenido += "</table>"
        var nregistros = res.length;
        var obj;
        Contenido += "<tbody>";
        for (var i = 0; i < nregistros; i++) {
            obj = res[i]
            Contenido += "<tr>";
            Contenido += "<td> " + obj.tipoMedicamento + " </td>";
            Contenido += "<td>" + obj.nombre + "</td>";
            Contenido += "<td>" + obj.estate + "</td>";
            Contenido += "<td>" + obj.descripcion + "</td>";
            Contenido += "</tr>";
            }
            //if (obj.estate == true) {

            //    return Contenido();
            //}
            //else if (obj.estate == false) {
            //    return "Buenos Dias";
            //}
       
        Contenido += "</tbody>";
        Contenido += "</table>";
        document.getElementById("divtabla").innerHTML = Contenido;
     




            // alert(res);
            //alert(JSON.stringify(res));
    })
        //try {
        //    var raiz = document.getElementById("hdfOculto").value;
        //    var urlCompleta = window.location.protocol + "//" + window.location.host +"/" + raiz + "tipomedicamento/listarTipoMedicamento"
        //    var res = await fetch(urlCompleta)
        //    res = await res.json();
        //    alert(res);
        //    alert(JSON.stringify(res));

        //} catch (e) {
        //    alert("Ocurrio un Error");

        //}*/
  
}







