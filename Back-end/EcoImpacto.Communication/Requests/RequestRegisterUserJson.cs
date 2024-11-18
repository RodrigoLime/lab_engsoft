namespace EcoImpacto.Communication.Requests
{
    public class RequestRegisterUserJson
    {
        public string Nome { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public double ConsumoEnergiaKWh { get; set; }
        public double ConsumoGasM3 { get; set; }
        public double ConsumoCombustivelLitros { get; set; }
        public double ConsumoVeiculoKmPorLitro { get; set; }
        public double TransportePublicoKm { get; set; }
        public int PraticasReciclagem { get; set; }
    }
}
