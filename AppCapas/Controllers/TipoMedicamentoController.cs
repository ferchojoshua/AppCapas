using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using CapaEntidad;
using CapaDDatos;
using CapaNegocio;
namespace AppCapas.Controllers
{
    public class TipoMedicamentoController : Controller
    {
        public IActionResult Index()
        {
        
            return View();
        }

        public IActionResult Inicio()
        {
            return View();
        }

        public IActionResult SinMenu()
        {
            return View();
        }

        public string Saludp()
        {
            return "Hola Amigos!";
        }
        public string saludoNombre(string nombre)
        {
            return "Bienvenido"+ " " + nombre;
        }

        public string SaludoNombreApellido(String nombre, string Apellido)

        {
            return "Bienvenido" + " " + nombre + " " + Apellido ; 
        }
        public int numeroEntero()
        {
            return 10;
        }

        public int numerodecimal()
        {
            //return 5.6;
            return (int)5.6;
        }

        
        public List<TipoMedicamentoCLS> listarTipoMedicamento()
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.listaMedicinas();
        }

    }
}
