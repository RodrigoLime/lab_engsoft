using EcoImpacto.Communication.Requests;
using EcoImpacto.Communication.Responses;

namespace EcoImpacto.Application.UseCases.Calculator;

public class RegisterCalculatorDataUseCase
{
    private const double AverageEnergyConsumption = 150;
    private const double AverageGasConsumption = 80;
    private const double AverageFuelConsumption = 40;
    private const int AverageRecyclingPractices = 4;

    public ResponseCalculatorResultJson Execute(RequestCalculatorResultJson request)
    {
        double energyEmission = CalculateEmission(request.ConsumoEnergiaKWh, 0.223);
        double gasEmission = CalculateEmission(request.ConsumoGasM3, 2.1);
        double fuelEmission = CalculateEmission(request.ConsumoCombustivelLitros, 2.3);
        double publicTransportEmission = CalculateEmission(request.TransportePublicoKm, 0.1);
        double totalEmission = energyEmission + gasEmission + fuelEmission + publicTransportEmission;

        double energyDifference = CalculateDifference(request.ConsumoEnergiaKWh, AverageEnergyConsumption);
        double gasDifference = CalculateDifference(request.ConsumoGasM3, AverageGasConsumption);
        double fuelDifference = CalculateDifference(request.ConsumoCombustivelLitros, AverageFuelConsumption);
        double recyclingDifference = CalculateDifference(request.PraticasReciclagem, AverageRecyclingPractices);

        string worstSector = DetermineWorstSector(energyDifference, gasDifference, fuelDifference, recyclingDifference, request);

        return new ResponseCalculatorResultJson
        {
            result = totalEmission,
            worstSector = worstSector,
            energyDifference = energyDifference,
            gasDifference = gasDifference,
            fuelDifference = fuelDifference,
            recyclingDifference = recyclingDifference
        };
    }

    private double CalculateEmission(double consumption, double emissionFactor) =>
        consumption * emissionFactor;

    private double CalculateDifference(double value, double average) =>
        (average - value) / average * 100;

    private string DetermineWorstSector(double energyDifference, double gasDifference, double fuelDifference, double recyclingDifference, RequestCalculatorResultJson request)
    {
        if (recyclingDifference > 0 && recyclingDifference >= Math.Max(Math.Max(energyDifference, gasDifference), fuelDifference))
            return "Reciclagem";

        if (request.ConsumoEnergiaKWh >= request.ConsumoGasM3 && request.ConsumoEnergiaKWh >= request.ConsumoCombustivelLitros)
            return "Energia";
        if (request.ConsumoGasM3 >= request.ConsumoEnergiaKWh && request.ConsumoGasM3 >= request.ConsumoCombustivelLitros)
            return "Gás";
        if (request.ConsumoCombustivelLitros >= request.ConsumoEnergiaKWh && request.ConsumoCombustivelLitros >= request.ConsumoGasM3)
            return "Combustível";

        double maxDifference = Math.Max(Math.Max(energyDifference, gasDifference), Math.Max(fuelDifference, recyclingDifference));
        if (maxDifference == energyDifference)
            return "Energia";
        if (maxDifference == gasDifference)
            return "Gás";
        if (maxDifference == fuelDifference)
            return "Combustível";
        return "Reciclagem";
    }
}
