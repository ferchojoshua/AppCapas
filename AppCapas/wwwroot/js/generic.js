async function fetchGet(url,typeask, callback)
    {
    try {
        var raiz = document.getElementById("hdfOculto").value;
        var urlCompleta = window.location.protocol + "//" + window.location.host + "/" + raiz + url
        var res = await fetch(urlCompleta)
        if (typeask == "Json")
            res = await res.json();
        else if (typeask == "text")
            res = await res.text();

        callback(res)
          
    } catch (e) {
        alert("Ocurrio un Error");

    }

}


var ObjConfiguracionGlobal;
function Pintar(ObjConfiguracion) {
    ObjConfiguracionGlobal = ObjConfiguracion;
    fetchGet(ObjConfiguracion.url, "Json", function (res) {

        var Contenido = "";
        Contenido += generarTable(res)

        document.getElementById("divtabla").innerHTML = Contenido;

    })
}


function generarTable(res) {

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
        Contenido += "</table>"
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
            if (obj.estate == true) {

                return Contenido();
            }
            else if (obj.estate == false) {
                return "Buenos Dias";
            }
       
        Contenido += "</tbody>";
        Contenido += "</table>";
        document.getElementById("divtabla").innerHTML = Contenido;



}