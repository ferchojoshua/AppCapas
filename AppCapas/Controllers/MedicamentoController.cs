using Microsoft.AspNetCore.Mvc;
using System.Drawing;


namespace AppCapas.Controllers
{
    public class MedicamentoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public String saludos()
        {
            return "Buenos Dias";
        }

        public int numero()
        {
            return 1;
        }
    }
}
