using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaEntidad;


namespace CapaDDatos
{
    public class TipoMedicamentoDAL
    {
        public List<TipoMedicamentoCLS> listaMedicinas()
        {
            List<TipoMedicamentoCLS> lista = new List<TipoMedicamentoCLS>();
            lista.Add(new TipoMedicamentoCLS
            {
                TipoMedicamento = 1,
                Nombre = "Analgesico",
                Estate = true,
                Descripcion = "Esta Medicina es para el dolor de Cabeza"
            });
            lista.Add(new TipoMedicamentoCLS
            {
                TipoMedicamento = 2,
                Nombre = "Antialergicos",
                Estate = true,
                Descripcion = "Esta Medicina es para la Alergia"
            });

            lista.Add(new TipoMedicamentoCLS
            {
                TipoMedicamento = 3,
                Nombre = "Preventivos",
                Estate = false,
                Descripcion = "Esta Medicina estan los sueros"
                
            });
            return lista;

        }
    }
}
