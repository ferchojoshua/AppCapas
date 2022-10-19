using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaDDatos;
using CapaEntidad;

namespace CapaNegocio
{
    public class TipoMedicamentoBI
    {
        public List<TipoMedicamentoCLS> listaMedicinas()
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.listaMedicinas();
        }
    }
}
